//singleton
//Object.create

const mySym = Symbol("key1");

//object literals
const JsUser= {
    name: "Prisha", //by default, it takes key as "name" 
    "full name": "Prisha Doshi",
    [mySym]: 'mykey1', //[] correct syntax to rcognise as symbol
    //mySym : "mykey1", //wrong syntax- gives the same o/p 
    age: 20,
    location: "doha",
    email: "prisha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Tuesday"]
}

console.log(JsUser.email);  //not the most correct way(not wrong tho)
console.log(JsUser["email"]); //correct way

console.log(JsUser["full name"]); 
//can only access full name with []
//and not using . operator
//because of space in key 

console.log(JsUser.mySym); //undefined
console.log(JsUser[mySym]);  //mykey1
//console.log(JsUser); //will show mySym as Symbol

//overwrite
JsUser.email= "prisha@yahoo.com";

//freeze
// Object.freeze(JsUser);
// JsUser.email= "prisha@yahoo.com";
// console.log(JsUser); //no changes


JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
