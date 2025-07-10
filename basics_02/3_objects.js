//singleton object
const tinderUser= new Object();

//non-singleton object
//const tinderUser= {} // same ans

console.log(tinderUser);


tinderUser.id= "123abc";
tinderUser.name= "Sam";
tinderUser.isLoggedIn= false;

//console.log(tinderUser);

const regularUser= {
    email : "some@gmail.com",
    fullname:{
        userfullname: "prisha",
        lastname :"doshi",
    }
}
console.log(regularUser);

const obj1= {1: 'a', 2:'b'};
const obj2= {3: 'c', 4:'d'};

//const obj3= {obj1, obj2};
//console.log(obj3);  //same prob as with arrays
//takes 'obj1' and 'obj2' as keys and their key:val pairs as values

//syntax .assign(target, source)
const returnedTarget= Object.assign(obj1, obj2); //target= obj1
console.log(returnedTarget);
//console.log(returnedTarget); //obj1===returnedTarget

const obj4= {5: "e", 6:'f'};
//const obj3= Object.assign({}, obj1, obj2, obj4);
//console.log(obj3);
//target= empty object-{} , source= obj 1,2,4

const obj3= {...obj1, ...obj2, ...obj4};
//console.log(obj3);

const users= [  //array
    {
        id: 1,
        email: '123@gmail.com',
    },
    {
        id: 2,
        email: '2@gmail.com',
    }
]
users[1].email; //array


console.log(tinderUser);

console.log(Object.keys(tinderUser)); //array
console.log(Object.values(tinderUser));;
console.log(Object.entries(tinderUser)); //2D array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
console.log(tinderUser.hasOwnProperty('isLogged')); 


//object destructuring 
const course= {
    coursename: "js",
    price: "999",
    courseInstructor: "prisha",
}

//course.courseInstructor

const {courseInstructor: instructor}= course
//console.log(courseInstructor);
console.log(instructor);

//destructuring
// const navbar = ({company})=>{  //{} //instead of props.company

// }
// navbar(company= "prisha")

//APIs
//in json structure }- Javascript Object Notation
// {
//     "name": "prisha",  //"string" : anyDataype
//     "coursename" : "js",
//     "price": "free",
// }

//can be in array format too
[
    {},
    {},
    {}
]