// 编程范式： =>通过给计算机指令的方式划分为：命令式编程（拿dom元素-》从服务器取数据-》把数据放入dom）与声明式编程（拿到数据，在html中进行生声明，如v-for，不管数据多少，都会自动执行,react/vue）
// 编程范式：面向对象编程（把很多东西抽象成一个对象，面向对象，继承多态封装【第一公民是对象】）与函数式编程（【第一公民是函数】可以进行列式编程）
const arr = [10,444,23,545,666,45,23,76,99,13];

// 使用高阶函数直接输出total  ---无需下方的一堆代码，一次解决问题
// let total = arr.filter(function(n){
//     return n <100
// }).map(function(n){
//     return n *2
// }).reduce(function(preValue,n){
//     return preValue + n
// },0)
// 如果觉得不够简洁，可以直接：
let total = arr.filter(n => n<100 ).map(n => n*2).reduce((pre,n)=>pre+n)
console.log(total)  //578


// // 需求1、找出这个数组中的小于100的数
// let newArr = []
// for(let n of arr){
//     if( n < 100){
//         newArr.push(n)
//     }
// }
// // console.log(newArr);
// // 需求2、将所有小于100的值进行转化，乘以2
// let new2Arr = [];
// for(let n of newArr){
//     new2Arr.push(n*2);
// }
// // console.log(new2Arr)

// // 需求3、将new2Arr中的所有值相加得到最终结果
// let totalNum = 0
// for(let n of new2Arr){
//     totalNum += n
// }
// console.log(totalNum);  //这是最终结果

// 上面的是以前的写法，没有使用高阶函数
// 数组中的高阶函数
// filter/map/reduce
// 1、filter函数的使用
// filter的参数是一个回调函数函数，回调函数有个要求，必须返回一个布尔值
// =>true:返回值为true，函数内部会自动将这次回调的n加入到新的数组中,直接用newA接收就行
// =>false:返回值为false，函数内部会过滤到这次的n
let newArr = arr.filter(function(n){  //方法会执行arr的长度的次数，每一次是一个n，与100对比，小于100就加入到新数组
    return n < 100
})
// console.log(newArr); //[10, 23, 45, 23, 76, 99, 13]

// 2、map函数  所以的数据都统一操作可以使用map
// 20,46,90,46,152,198,26
let new2Num = newArr.map(function(n){  //执行7次，每次是一个数
    return n*2
})
// console.log(new2Num);  //[20, 46, 90, 46, 152, 198, 26]

// 3、reduce函数的使用
// 高阶函数reduce有两个参数，一个是function，一个是初始值，初始值写0
// 需要两个值，previousValue上一个返回值，value现在传入的值
// reduce作用：对数组中所有的内容进行汇总 （全部相乘，或者相加）
let res = new2Num.reduce(function(preValue,n){
    // return 100
    return preValue + n
},0)
// console.log(res); 
// 如果 return 100 
// 第一次：preValue 0 , n  20
// 第二次：preValue 100 , n  46
// 第三次：preValue 100 , n  90 ...

// return preValue+n
// preValue 0 , n 20
// preValue 20 , n 46
// preValue 66 , n 90
// preValue 156 , n 46
// preValue 202 , n 152
// preValue 354 , n 198
// preValue 552 , n 26  
  // => 578