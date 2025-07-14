//higher order loops

//for-of loop
   //--remember could not use for objects- not iterable error
   // works for arrays, strings, maps

//for in loop
//object
const myObj= {
    'game1': "NFS",
    'game2': "Spiderman"
}
//to get keys and values
for (const key in myObj){ 
    console.log(key); //to get key
    console.log(myObj[key]); //to get corresponding value
} 

//array
const progg= ["js", "rb", "py", "java"];
for (const key in progg){
    console.log(key); //gives index - 0, 1, ..
    console.log(progg[key])  
}

//for -in loop does not work for map
const mp = new Map()
mp.set('IN', "india");
mp.set("USA", "UNited States of America");
mp.set("FR", "France");

for (const key in mp){  //does not give any output
    console.log(key);  
} 