//basic comparisons (+, -, / , *, %, **)

//comparing different datatypes- not good practice -gives inconsistent o/p
console.log("2">1);
console.log("02">1);
//typescript does not allow comparsions of diff datatypes

// gives inconsistent o/p
console.log(null > 0);
console.log(null == 0);
console.log(null >=0 );

// === (strict check)
console.log("2"==2);  //true - does int conversion and checks
console.log("2"===2); //false- does type checking also

const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)  //false


