
//之前的想法是，是错误的输出 1,7,6,8,2,4,9,11,3,5,10,12 
//在两个setTimeout宏任务中，process.nextTick位置优先于promist.then，它相当于node.js中的then事件(在js事件中不能执行，可以把js代码单独保存为js,用命令行，直接执行node 该js代码)。
// 并且一个宏任务结束后才会进行下个宏任务。即第一个setTimeout执行完，才会执行下个setTimeout宏任务。
// 正确结果，1，7，6，8，2，4，3，5，9，11，10，12

//整体script作为一个宏任务。
console.log('1');  //直接执行 1

// 整体script作为宏任务，结束后，进入到这个宏任务中，
//放到宏任务1 event Queue
setTimeout(function () {  
    console.log('2');  //会先输出2
    process.nextTick(function () {   //  放入微任务Queue1下的--记为Q1-then1
        console.log('3');
    })
    new Promise(function (resolve) {
        console.log('4');   //直接执行  输出4
        resolve();
    }).then(function () {   //  放入微任务Queue1下的--记为Q1-then2
        console.log('5')
    })
})
//  作为node.js中的then，与promise.then相同。
// 属于微任务， 记为then1
process.nextTick(function () {  
    console.log('6');   
})
// promise 和 new Promise,直接执行 7
new Promise(function (resolve) {   
    // 直接执行
    console.log('7');
    resolve();
}).then(function () {   // 微任务。 记为then2
    console.log('8')
})
//执行完上面的 宏任务1，会执行这个宏任务，
// 宏任务2  记入Event Queue2 
setTimeout(function () {  
    console.log('9');  //直接输出 9
    process.nextTick(function () {  // 微任务 //  放入微任务Queue2下的--记为Q2-then1
        console.log('10');
    })
    new Promise(function (resolve) {
        console.log('11');  //直接输出 11
        resolve();
    }).then(function () {  // 微任务 //  放入微任务Queue2下的--记为Q2-then2
        console.log('12')
    })
})