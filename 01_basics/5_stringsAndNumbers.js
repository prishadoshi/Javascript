const getName= new String('Prisha') 

console.log(getName.slice(-4,4));

//string interpolation

const newString= "    prisha     ";
console.log(newString.trim())

const url ='https://ggogle.com' ;
console.log(url.replace('gg', 'go'));

console.log(url.includes('google'))


//Numbers

const score= 400;
console.log(score);  //400

const balance= new Number(100);
console.log(balance);   //[Number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const other = 123.53434;
// console.log(other.toPrecision(3)); 

const hundreds= 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
//10,00,000

//Maths

// console.log(Math);
// console.log(Math.abs(-3));

// round
console.log(Math.round(4.5));
console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.2));  //5

//min and max functions
console.log(Math.min(4,3,5,1)); //1

//.random - btw 0 and 1
console.log(Math.random());
//random number between 1 to 10
console.log((Math.random()*10) + 1);
//numeric integer number btw 1 to 10
console.log(Math.floor(Math.random()*10) + 1); 

//number between a given Range(min, max);
const min=10;
const max= 20;
console.log(Math.floor(Math.random()+ (max-min +1)) + min);



