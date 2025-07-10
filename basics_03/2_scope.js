// let a= 10;
// const b= 20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);
//why do we need three ways of defining a variable

//porblem comes when we use scope
// {} curly braces- are called scope

var c=300;  //global scope
let d=50;
if (true){
    let a= 10;   //block scope- variables declared here should not be leaked outside
    const b= 20;
    var c=30;
    let d=1;
}
//console.log(a); //ReferenceError: a is not defined
//console.log(b); //ReferenceError: a is not defined
console.log(c);  //30
//does not print the previous defined value 
//problem with var: when multiple programmers working on the same file
//so use let 
console.log(d);  //50

//scope different in console(in windows browser) 
//and in code env in node

function one(){
    const username= "prisha";

    function two(){
        const website= "yt";
        console.log(username);
    }
    //console.log(website); //ReferenceError: website is not defined
    two();
}
one();

//same for if-else
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error
}

// console.log(username); //error


//**********INTERESTING********
console.log( addOne(5)); //not give error
function addOne(value){  //hoisting
    return value+1
}

//addTwo(5); //will give error because of the declaration way
//Cannot access 'addTwo' before initialization
//Function Expression 
const addTwo = function(num){    //Function Expression //variable can hold functions too
    return num+2;
}
addTwo(5);

/*console.log(a); // undefined ✅ due to hoisting
var a = 5;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;
Only var is hoisted with initialization (undefined).
let and const are hoisted without initialization, causing the error.
*/