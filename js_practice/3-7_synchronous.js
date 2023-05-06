//논블로킹 방식
function taskA(a, b, cb) {
    setTimeout(()=>{
        const res = a + b;
        cb(res);
    }, 3000)
}

function taskB(a, cb){
    setTimeout(()=>{
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb){
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

// taskA(3,4, (res)=>{  
//     console.log("A Task Result" ,res);});
// console.log("코드 끝");
// // 비동기처리 함수 결과를 이용하고 싶을 떄는 callback함수 이용

// taskB(7,(res)=>{
//     console.log("B Task Result", res);
// });

// taskC(14, (res)=>{
//     console.log("C Task Result", res);
// })
taskA(4,5,(a_res)=>{
    console.log("A Result : ", a_res);
    taskB(a_res, (b_res)=>{
        console.log("B Result : ", b_res);
        taskC(b_res, (c_res)=>{
           console.log("C Result : ", c_res); 
        })
    })
})
//비동기 처리 결과를 또 다른 콜백함수로 넘겨줄 때 사용

console.log("코드 끝");