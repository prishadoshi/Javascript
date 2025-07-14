//for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }
//{}- block scope

//nested for loop

//break and continue

//while loop
//do-while loop
let score=11;
do {
    console.log(score);
    score++;
} while (score <=10);
//console.log(score)

//Higher order array loops
//for of loop 
const arr= [1,2,3,4,5];
for (const num of arr) {
    //console.log(num);
}

const greetings= "hello world";
for (const ch of greetings){
    //console.log(ch);
}

//Maps - Map object holds kry-value pairs and 
// remembers the orginal insertion order of the keys.
const mp = new Map()
mp.set('IN', "india");
mp.set("USA", "UNited States of America");
mp.set("FR", "France");

//console.log(mp);
// Map(3) {
//   'IN' => 'india',
//   'USA' => 'UNited States of America',
//   'FR' => 'France'
// }

for (const key of mp){
    //console.log(key);  //Array -[ 'IN', 'india' ]
}
for (const [key ,value] of mp){  //array destructuring
    //console.log(key, "-:", value);
}
for (const [key, value] of mp.entries()) {
    //console.log(key, value);
}

const myObj= {
    'game1': "NFS",
    'game2': "Spiderman"
}
for (const [key ,value] of myObj){  //TypeError: myObj is not iterable
    console.log(key, "-:", value);
}