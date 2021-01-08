setTimeout(function () {
    console.log('timeout1');  // 10 执行完微任务,执行这个宏5 ，
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