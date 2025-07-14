//if
// if(condition){  //condition should be true
//     //true tehn execute
// }

// <, >, <=, >=, ==, !=, ===
//== ignores type //2=="2"- true
//=== -strict type checking


// const userLoggedIN= true;
// const debitCard= true;
// if (userLoggedIN && debitCard && 2==3){  //both variables should be true
//     console.log("allow");
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//"0", 'false', " ", [], {}, function(){}, 

//to check if array is empty
const userEmail= ["prisha@gmail.com"];
if (userEmail.length===0){
    console.log("array is empty");
}
//to check if object is empty
const obj= {name: "prisha"};
if (Object.keys(obj).length===0){  //Object.keys(obj) gives an array
    console.log("object is empty");
}

//Switch-case

//Nullish Coalescing Operating(??) : null undefined
let val1;
val1= 5 ?? 10; //5
val1= null ?? 10; //10
val1= undefined ?? 15; //15
val1= null ?? 10 ?? 10  //10
console.log(val1) 

//Ternary operator
// condition ? true: false

