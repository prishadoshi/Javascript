//this -refers current context
const user= {
    username: "prisha",
    price:99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

console.log(this); //{} //in node env. current context is empty(no context in global )
//but if u do this in browser console,
//  it shows global object which is Window object

//this in functions
//does not work, shows undefined
function hi(){
    //console.log(this) //shows a object with a lot of stuff
    let username = "prisha";
    console.log(this.username); //undefined
}
hi()

const chai= function(){
    let username= "prisha";
    // console.log(this) //shows a object with a lot of stuff
    console.log(this.username);//undefined
}
chai();

//now try with arrow function
const cha =()=>{
    //console.log(this) //{}
    let username= "prisha";
    console.log(this.username); //undefined
}
cha();
//Arrow functions do not have their own this.
// They inherit this from their surrounding (lexical) scope.

//normal arrow function
// const addTwo= (num1, num2) =>{
//     return num1+num2
// }

//implicit return  
//  -when the function is 1 line
//  -remove {} & no need of return statement 
//const addTwo =(num1, num2) => num1 + num2 

//no {} curly braces so remove return keyword
const addTwo =(num1, num2) => (num1 + num2)
console.log(addTwo(3,4));

//eg: return a object
//const returnObj= (obj)=> {username: "prisha"} //undefined
//need to use () parenthsis to return the obj
const returnObj= (obj)=> ({username: "prisha"}) //undefined
console.log(returnObj());

const myArr= [2,,3,7,8];

//myArr.forEach()