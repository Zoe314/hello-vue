setTimeout(function () {
    console.log('timeout1');  // 10 执行完微任务,执行这个宏任务  200毫秒
}, 200)
// async直接执行，返回值是promise
async function async1() {
    console.log('async1 start')   //1 立即执行输出
    await async2()  //await先执行外部的同步代码，有阻塞函数下方代码作用
    console.log('async1 end')   // 5执行这个
}
// 2执行 输出async2
async function async2() {
    console.log('async2')   
}
// 1 执行
async1();

new Promise(function (resolve) {
    console.log('111');       // 3 立即执行
    resolve();
    new Promise(function (resolve) {
        console.log('222')   // 4.立即执行  在此，async1中await的async2外部的同步代码执行完，回去执行async2下方代码
        setTimeout(function () {  // 8 放入宏2 ，没有传第二个参数，表明无可等待时间，空闲时立即执行
            console.log('333')	
        })
        resolve()
    }).then(function () {
        console.log('444')   // 6.微1 执行完await后的代码，执行微任务
        setTimeout(function () {  //  9 宏3  同样没传第二个值，空闲时执行
            console.log('555')	  
        })
    })
}).then(function (resolve) {
    console.log('666')     //  7  微2  执行这个     
    setTimeout(function () {  // 12 放入宏 6
        console.log('777')	  
    }, 200)
});

setTimeout(function () { //10 //放入宏 4  传了值，100毫秒，
    console.log('timeout2')  
}, 100)

// async1 start
// async2
// 111
// 222
// async1 end
// 444
// 666
// 333
// 555
// timeout2
// timeout1
// 777


// 执行介绍：
/*
开始，从上到下，遇到settimeout，放入宏任务H["timeout1(200)"]，注意时间是200ms,
然后遇到两个async函数，执行async1(),主栈输出["async1 start"],继续，执行await async2,注意这里，我们要分析await,
实际上async是promise的语法糖，我们要将其转换为promise,async会返回一个隐式的promise [async function MDN的解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
将async1和async2转换如下，这样就容易理解了
 function async1(){
  console.log('async1 start')
  const p = async2()
   return new Promise(resolve=>{
   resolve()
  }).then(()=>{
  		p.then(()=>{
   		console.log('async1 end')
   	})
  })
}
 function async2(){
	console.log('async2')
	return new Promise(resolve=>{
		resolve()
	})
}
现在执行async2，主栈输出["async1 start"，"async2"],程序中多了一个嵌套的promise,

将new Promise(resolve=>{resolve()}).then(()=>{
   		console.log('async1 end')
})放入微任务栈，记住await后面的代码放入微任务。 这里用P1代替["P1"],继续，输出“111”，主栈["async1 start"，"async2","111"],然后resolve,
将 console.log('666')               
setTimeout(function(){
  	console.log('777')	
  	},200)，
  	放入微任务，用P2表示，W["P1","P2"]
我们发现在promise内部又有一个promise,继续执行，主栈["async1 start"，"async2","111"，"222"],
宏任务“333”，时间为0，放入第一位，H["333","timeout1(200)",],继续resolve,
将console.log('444')
  	setTimeout(function(){
  	console.log('555')	
  	})
放入微任务，用P3表示，因为在函数内部，先执行 W["P1","P3","P2"]，
继续,遇到宏任务timeout2,时间为100ms,所以牌第二H["333","timeout2(100)","timeout1(200)"]
OK ,主任务结束，目前，主栈["async1 start"，"async2","111"，"222"]，微任务W["P1","P3","P2"]，
宏任务H["333","timeout2(100)","timeout1(200)","777"]，接下来执行微任务P1,P1是promise,执行then,
将"async1 end",放入微任务，
目前W["P3","P2","async1 end"],执行P3,P2,"async1 end",目前微任务W["444","666","async1 end"],
宏任务H["333","555","timeout2(100)","timeout1(200)"],目前为止，所有任务队列已经理清楚，先执行微任务队列，
结束事件循环，继续宏任务的新的事件循环，注意：每一个宏任务都是一次新的事件循环
最终结果：
["async1 start"，"async2","111"，"222","444","666","async1 end","333","555","timeout2",
"timeout1","777"]


*/ 