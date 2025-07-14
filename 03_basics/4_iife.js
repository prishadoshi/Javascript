//Immediatedly Invoked Function Expression(IIFE)

//IIFEs helped prevent variable leakage into the global scope.
(function hi(){
    //named IIFE
    console.log("hi");
})();

//const addTwo =(num1, num2) => (num1 + num2) //return using ()

//for 2 IIFEs together
//error occurs, IIFE invokes immediatedly, but does not know 
//where to end the context,so need to end the line using ;(semicolon)
( (name)=>{  //TypeError: (intermediate value)(...) is not a function
    console.log(`hi this is ${name}`);
} )('prisha')


