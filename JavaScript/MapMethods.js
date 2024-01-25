
// MapMethod As argument function leta haii

let array =[1,2,3,4];

// let array2 = array.map((ele)=>(
//          ele*ele*ele
// ));

// console.log(array2);



// let array2 = array.map(function fc(ele){
//                 return ele*ele
//         }
// );


// console.log(array2);




let f = function(ele){
        return ele*ele;
}


let c = array.map(f);

console.log(c);