function sayName(){  //function keyword
    console.log("P")  //defination
}
//sayName // reference of the function
//console.log(sayName); //[Function: sayName]

//sayName(); //paraenthsis for execution

function addNum(num1, num2){ //parameters in function defination
    console.log(num1+num2);   
}

//addNum(2,4);  //arguments in function call
//addNum(2,"4");

//const result = addNum(3,5);
//console.log(result);  //undefined
//No value stored in result why?

function correctAdd (num1, num2){
    let result = num1 + num2;
    return result; //return num1+num2
}
const result = correctAdd(2,3);
//console.log(res);

function loginUserMesssage(username){
    return `${username} just logged in`
}
//loginUserMesssage("prisha"); //not print anything
//console.log(loginUserMesssage()); //undefined just logged in
//console.log(loginUserMesssage("prisha"));

function loginUserMesssage1(username){
    if (!username){ //if not undefined, it will go into the block
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// '!' operator converts true to false and vice-versa
//if username is undefined, it will not go into the if block(false if condition)
//so use !username
//equivalent to username===undefined

//or use a default parameter 
//now username will never be undefined
//will atleast hold the default value



function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,900)); //200- before using rest operator
//after rest operator -[ 200, 400, 900 ]

//rest or spread operator according to functionality

const user= {
    username: "prisha",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({  //directly pass a object
    username: "sam",
    price: 399
})

const myNewArray= [200 ,400 ,299, 330];
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(myNewArray));
