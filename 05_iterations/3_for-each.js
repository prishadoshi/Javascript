const coding= ["js", "ruby","java","python"];

//arr.forEach( function () {} //callback function
    // ()=>{} //callback function(arrowfunction) 
//)

//A callback in JavaScript is simply a function passed
//  as an argument to another function, 
// and it’s usually called (invoked) later inside that function.

// coding.forEach( function (item) {   //callback function- remove function name
//     console.log(item);
// } )

// coding.forEach( (item)=> {  //arrow-function
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //only give the reference,dont want to execute the function

coding.forEach( (item, index, arr)=>{
    //console.log(item, index, arr);
} )

//array of objects
const myCoding = [
    {
        languageName: "javascript",
        langaugeFileNmae: "js"
    },
    {
        languageName: "java",
        langaugeFileNmae: "java"
    },
    {
        languageName: "python",
        langaugeFileNmae: "python"
    }
]

myCoding.forEach( (item)=>{
    //console.log(item.languageName);
})

const values= myCoding.forEach( (item)=>{
    //console.log(item.languageName);
    //return item;
})
//console.log(values); 
// //for-each does not return any values;
//even after the return statement


//.filter() method
const myNums= [1,2,3,4,5,6,7,8,9,10];

//const newNums = myNums.filter( (num) => num>4 )
//console.log(newNums);

//Filters elements based on a condition
//returns a new array with only the elements that pass the condition.

const newNums = myNums.filter( (num) => {
    //num>4;  //doesn't return, use return keyword in scope
    return num>4; //now returns
} )
console.log(newNums);

//want to use for-each 
const nums= [];
newNums.forEach( (num)=>{
    if (num>4){
        nums.push(num);
    }
});
console.log(nums);

