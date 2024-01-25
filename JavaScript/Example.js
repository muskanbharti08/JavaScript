


let greet = "Hellow";

function changeGreet(){

        let greet = "Namste";
        console.log(greet);

        function innerGreet(){
                console.log(greet);
        }
        innerGreet();

}


console.log(greet);
changeGreet();