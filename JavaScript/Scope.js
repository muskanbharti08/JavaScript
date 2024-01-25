// These are 4 scopes in java Script   1. Global    2.Functional   3.Lexical   4.Block


let a = 10;             // This is Global Scope it can be use anywhere in this file

function fn(){
        let a =8;       // This is Functional Scope it can use only in this function
        let b = 12;
        console.log(a);
}
       // console.log(b);  // This will throw the error because b cannot use outside the function
fn();






function fnn1(){
        console.log("Function 1");

        function fnn2(){
        console.log("Function 2");
        
        }
        fnn2();         
}

   fnn1();
// fnn2();  // This will throw error because it can only use inside the  fnn1.



function fun(){
        let c = 9;
        if(1){
               
               let d= 7;
                console.log(c);
        }
        // console.log(d);  -- > this cannot use outside the block 
}
  fun();



