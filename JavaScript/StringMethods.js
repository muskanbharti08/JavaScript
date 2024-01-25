// String --> Strings are immutable in java script..

// Trim --> it helps tp reduce the white space of the word..
//          but it can only reduce the white spaces from last and first..

let str1 = "   java Script    is      a progrraming     language   ";

let m1 = str1.trim(); // trim method only reduce the spaces from first  and last it is not able to reduce the middle spaces
console.log(m1);






// slice --> it is used to sperate some chareter from a word

let str2 = "JavaScript";
let m2 = str2.slice(2,3);   // -->  slice method takes 2 parameter one is index of word and second is position
console.log(m2);


// toUpperCase

let str3 = "programming";
let m3 = str3.toUpperCase();
console.log(m3);




// toLowerCase
let str4 = "LANGUAGE";
let m4 = str4.toLowerCase();
console.log(m4);



// indexOf --> This is a method of String which return the index of charecter 

let str5 = "JavaScript";
console.log(str5.indexOf('t'));    //  Output: 9
console.log(str5.indexOf('j'));    // Output: -1



// Chaining Method
let str6 = "I like Coding  ";
let m6 = str6.trim().toUpperCase();
console.log(m6);
console.log(typeof m6);
