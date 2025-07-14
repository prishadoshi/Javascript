const myNums =[1,2,3];

// const myTotal= myNums.reduce( function (acc, currVal){
//     console.log(acc, currVal); //currVal - ele of array
//     return acc + currVal
// }, 0 );  //0 - initial value of accumulator (acc)

//arrow function way
// const myTotal = myNums.reduce( (acc, curr)=> acc+curr, 0)
// console.log(myTotal);

const shoppingCart= [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 8999
    }
]

const bill= shoppingCart.reduce( (acc,item)=> (acc + item.price), 0);
console.log(bill);
