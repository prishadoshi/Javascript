//Object literal - literally a object
//basic unit
const user = {
    username: "prisha",
    loginCount: 8,
    signedIn : true, //properties

    getUserDetails: function(){   //methods
        console.log("Got user details from db");
        // console.log(`Username: ${username}`);  //undefined error
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

// console.log(this); {}- empty global context
//changes in browser //gives windows object

//want to create a new user wiht same properties
//need constructor function

// const promise = new Promise();
// const date= new Date();
//new- constructor function
//new is a keyword in JavaScript used to create an instance of 
// an object that comes from a constructor function or class.

//User is a constructor function- just a normal function but
//  when called using new javascript treates it as a constructor
function User(username, loginCount, isLoggedIn){
    this.username= username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this; //optional //returns by default
}
// const user1= User("prisha", 1, true);
// const user2= User("hey", 2, false)
// console.log(user1);  //overwrites the user1 values
const user1= new User("prisha", 1, true); //importance of new keyword
const user2= new User("hey", 2, false) //creates a new object of type User
console.log(user1); //gives 2 different users now
console.log(user2);
// 1) creates an empty object or instance 
// 2)Binds this to that new object
// 3)Returns the object
console.log(user1.constructor); //reference to User 

//instanceof 
console.log(user2 instanceof User); //true
