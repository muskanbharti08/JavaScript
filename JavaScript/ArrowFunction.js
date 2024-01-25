

// // // general function
// // function f1(){
// // console.log("Hm ek sadharn function haii");
// // }


// // // modified function
// // let a = function(){
// // console.log("Hm modified function haii");
// // }


// // // arrow function
// // let f3 = (a,b)=>{console.log(a+b);}

// // f3(4,8);






// // //ek ()  me   parameters rhenge aur uske bad arrow rhega uske bad {} me body rhwegi 



// // let g = ()=>{
// //         console.log("Hellow");
// // }

// // g();



// // let sum = (a,b,c)=>{
// //         return a+b+c;
// // }

// // let f = sum(7,3,4);
// // console.log(f);






// // let mul = (a,b)=>{
// //         return a*b;

// // }

// // let ab = mul(2,7);
// // console.log(ab);




// // agr ek hi parameter  ho to () nhi deskte hai 
// let sqr = a =>{
//         return (a*a);
// }



// //  Agr ek hi cheeez return krani ho to aap return mt likkhe aap {} ki jgh pe () bna dijie hm smjh jayenge ki return krna hai
// let multiply = (a,b,c)=>(
//        a*b*c        
// );

// let cf= multiply(6,1,1);
// console.log(cf);









// console.log(sqr(4));




// let cube = (b)=>{
//         console.log(b*b*b);
//         console.log("Ram");
//         console.log("Shyam");
// }

// cube(7);



//  write a function to add three numbers

// 1st way
function add(a,b,c){
        console.log(a+b+c);
}

add(2,3,2);


// 2nd way

let sum = function(a,b,c){
        console.log(a+b+c);
}

sum(4,6,6);

// 3rd way

let sm = (a,b,c)=>{
        return a+b+c;
}

let c = sm(3,5,6);
console.log(c);

// 4th way  --> it is called implicit return in arrow function 

let sum2 = (a,b,c)=>(a+b+c);

let a = sum2(2,3,2);
console.log(a);

