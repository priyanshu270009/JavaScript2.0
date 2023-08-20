// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log("DB Connected");
})() ; // iife --> function those get immediately execute & to prevent from pollution of GLOBAL SCOPE 
 // ; is used to stop the function scope
//chai()


// ( () => {

//     console.log("DB didn't connect");
// }      
//  ) ()


 ( (name) => {

    console.log(`DB didn't connect ${name}`);
} ) ('User');

 