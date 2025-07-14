//array
//defined in square brackets 
 
const myArr= [0 ,1, 2, 3, 4, true, "prisha"];

//Javascript array-copy operations create 
// shallow copies. 

const arr2= new Array(0,1,2,3,4);

//Array methods
//arr2.push(6);
// console.log(arr2); /it is mutable(non-primitive)

//arr2.pop();
// console.log(arr2);

//arr2.unshift(9);  //inserted at the start
// console.log(arr2);  

// arr2.shift();  //removes the first element
// console.log(arr2);

//console.log(arr2.includes(9)); //false

//console.log(arr2.indexOf(9)); //-1 does not exist

// const newArr= arr2.join();  //converts it into a string
// console.log(newArr);
// console.log(typeof newArr); //string

//slice and splice

// console.log("A", arr2);  //[0,1,2,3,4]
// const sliceOp = arr2.slice(1,3);
// console.log(sliceOp);  //[1,2] -does not include the last index
// console.log(arr2);  //does not change the original array

// const spliceOp= arr2.splice(1,3);
// console.log(spliceOp); //[1,2,3]-includes the last index
// console.log(arr2); //[0,4]- deletes range from the original array

const marvel= ["Thor", "Ironman", "Spiderman"];
const dc= ["superman", "flash", "bathman"]

//can't merge like this
// marvel.push(dc);  
// //became nested array!
// //array takes multiple datatypes, like ["a", false, 4]
// //  so it took marvel(array)also as a datatype 
// //  as 4th element ind=3
// console.log(marvel);

//merged
const newMarvel = marvel.concat(dc);  //same problem
console.log(newMarvel);
console.log(marvel); //but not on the existing array as with push

//spread operator - preferred - can take multiple variables
const all_heroes= [...marvel, ...dc]
console.log(all_heroes);

const another= [1,2,3, [4,5,6], 7, [6,7,[4,5]] ];

const real_another= another.flat(Infinity); 
//give depth paramater
//Returns a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth.
console.log(real_another);

console.log(Array.isArray("Prisha")); //false

//convert to array -[ 'P', 'r', 'i', 's', 'h', 'a' ]
console.log(Array.from("Prisha"));

console.log(Array.from({name: "Prisha"})); //[]

let score1= 100;
let scrore2= 200;
let score3= 300;

console.log(Array.of(score1, scrore2, score3));
//[ 100, 200, 300 ]

