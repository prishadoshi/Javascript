//Date

//JavaScript Date objects represent a single moment in time
//  in a platform-independent format. 
// Date objects encapsulate an integral number
//  that represents milliseconds since the midnight 
//  at the beginning of January 1, 1970, UTC (the epoch).

// Any attempt to represent a time outside this range results 
// in the Date object holding a timestamp value of NaN, 
// which is an "Invalid Date".

let myDate= new Date();
// console.log(myDate); //2025-07-09T18:38:08.740Z

// console.log(typeof myDate);  //object

// console.log(myDate.toString()); //Wed Jul 09 2025 18:38:08 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Wed Jul 09 2025
// console.log(myDate.toISOString());   //2025-07-09T18:40:45.098Z
// console.log(myDate.toJSON());        //2025-07-09T18:40:45.098Z
// console.log(myDate.toLocaleString());  //7/9/2025, 6:37:31 PM
// console.log(myDate.toLocaleDateString());  //7/9/2025

let createdDate= new Date(2023, 0 ,23);
// console.log(createdDate.toDateString()); //Mon Jan 23 2023

//months start with 0

let againDate= new Date("2023-00-14"); //invalid - 'mm' starts with 1 in this "yy-mm-dd" syntax
// console.log(againDate.toLocaleString());

againDate= new Date("01-14-2023");  //usually followed syntax

let myTimeStamp = Date.now();  //in millisecs
// console.log(myTimeStamp); //in ms calculated from the midnight of Jan 1, 1970 to now.

// console.log(againDate.getTime());  // in ms, can be used to compare dates

// console.log(Math.floor(Date.now()/1000));  //to convert ms to seconds- floor for numeric value

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);  //starts from 0
console.log(newDate.getDay());

newDate.toLocaleString('default', {    //can customise, 
    weekday: "long",
})

console.log(typeof newDate.toLocaleString());  //string

