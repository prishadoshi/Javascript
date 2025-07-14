//eg: database
const books= [
    {
        name: "book1", genre:"Fiction", publish: 1998,
    },{
        name: "book2", genre:"Fiction", publish: 2001,
    },
    {
        name: "book3", genre:"History", publish: 2003,
    }
]

const userBooks= books.filter( (bk)=> bk.genre=== 'History' );
// console.log(userBooks);

const newBooks= books.filter( (bk)=> {return bk.publish >= 2000} );
// console.log(newBooks);

const typeBook = books.filter( (bk)=> {
    return bk.publish >= 2000 && bk.genre==='Fiction'
})
// console.log(typeBook);


const myNums= [1,2,3,4,5,6,7,8,9,10];

const newnums = myNums.map( (num)=> num+10);
// console.log(newnums);

//do this using forEach
// const newNums= [];
// myNums.forEach( (item)=>{
//     newNums.push(item);
// })
//console.log(newNums);

// *************Interesting*************

//CHAINING
const newNums= myNums
                .map( (num)=> num*10)
                .map( (num) => num+1 )
                .filter( (num)=> num >=40 )
console.log(newNums);
