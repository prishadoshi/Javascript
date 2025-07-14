"use strict"; //treat all JS code as newer version

//alert(3+3) //we are using nodejs, not browser. 
// (gives referenceError, alert not defined in JS)


/*number = 2 ^ 53
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness*/

//object

// console.log(typeof null);  //object
// console.log(typeof undefined); //undefined

//Symbol
const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);  //false

//bigInt
const bigNumber= 23424290409n;
console.log(typeof bigNumber);


//Array, Objects, Functions

//array
const heroes= ["abc", "xya", "asd"];
console.log(typeof heroes);  //datatype= object

//object
let obj= {
    name: "prisha",
    age: 20
}
console.log(typeof obj);

//functions
const myfunction = function(){
    console.log("hi");
}
console.log(typeof myfunction);  //datatype= object function 

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function (object function)
       Object  =>  object*/