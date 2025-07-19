//promise
//is an OBJECT resprestnting eventual completion or failure of an asynchronous operation
//3 states: pending, 
//promise helps from callback hell
const promiseOne= new Promise(function(resolve, reject){
    //Do an async task
    //db calls, cryptography, network
    setTimeout( function(){
        console.log('Async task is complete');
        resolve();  //only on adding this, .then() 
    } ,1000)
});

promiseOne.then(function(){  //resolve as connection to .then
    console.log("promise consumed");
})

new Promise( function(resolve, reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("async task 2 resolved");
})

const promiseThree= new Promise( function(resolve, reject){
    setTimeout( function(){
        resolve({username: "Prisha", email:"prisha@gmail.com"});
    }, 1000)
})

//consume the promise
promiseThree.then( function(user){
    console.log(user);
})

const promiseFour = new Promise( function( resolve, reject){
    setTimeout(()=>{
        let error= false
        if (!error){
            resolve({username: "prisha" ,password: "123"})
        }else{
            reject('ERROR')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then( (username)=>{  //chaining - gets returned value from previous then
    console.log(username);
    
}).catch( function(err){
    console.log(err);
}).finally( function(){  //always executes whether promise is rejected or resolved
    console.log("the promise is either resolved or rejected");
})

const promiseFive= new Promise( (resolve, reject)=>{
    setTimeout( ()=>{
        let error =true;
        if (!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject("error: JS")
        }
    }, 1000)
})

//not neccessary to handle promise using .then and .catch
// can be handled using async and await
// but does not directly handle errors,so needs to be handled 
// using a try-catch block (if promise rejects with an error)
async function consumePromiseFive(){
    try {
        const response= await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    } 
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users'); 
//         //fetch returns a promise
//         // const data= response.json() //takes time too.. not only db calls, network,etc
//         const data= await response.json()  //add await
//         console.log(data);
//     } catch (error) {
//         console.log("E: Error");
//     }
// }
// getAllUsers()

//the above same using .then()
fetch('https://jsonplaceholder.typicode.com/users') //fetch returns a promise
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E: Error");
})