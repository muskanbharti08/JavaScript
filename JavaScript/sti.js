// // / setTimeOut is a highOrder function  ye do cheeze  argument leta haii 
// //  1. Arrow funtion
// // 2. Time in milisecond     (1sec=1000 milisec.)






//  function fc(){
//         console.log("Good Evening");
// }

// setTimeout(fc,4000);




// setInterval(() => {
//         console.log("Hellow World")
        
// }, 2000);



// setTimeout(
//         ()=>{
//                console.log("Hellow Good Morning");
//        },3000);




// let id = setInterval(()=>{
//         console.log("Good Morning");
// },2000);



// setTimeout(() => {
//         clearInterval(id);
//         console.log("Time Over");
        
// }, 10000);







let id = setInterval(() => {
       console.log("Hellow") ;
}, 2000);



setTimeout(() => {
     clearInterval(id);
}, 10000);