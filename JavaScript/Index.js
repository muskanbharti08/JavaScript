

let a = prompt("Guess a number between 1-100");

let x = Math.random()*100;
let y = Math.floor(x)+1;
console.log(y);



let count=0;
while(a!=y){
        if(a>y){
                
       a= prompt("The random value is less than the entered value , Enter the smaller value");

        }
        else{
                
       a= prompt("The random value is larger than the entered value , Enter the Bigger value");
        }
        count++;
}

alert(`You guessed it, The number is ${y} and you take ${count} trial`);
