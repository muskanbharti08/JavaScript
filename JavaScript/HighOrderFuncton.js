




let greet = function(){
        console.log("Namste");
}

let multipleGreet = function(greet,count){
        for(let i =0; i<=count; i++){
                greet();
        }
}

multipleGreet(greet,6);


let a =function(){
        console.log("Good Morning");
}




let b = function(a,count){
        for(let i =1;i<=count; i++){
                a();
        }
}

b(a,2);