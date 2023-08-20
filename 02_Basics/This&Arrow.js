/*******  ARROW FUNCTIONS & THIS KEYWORD ********/

const user = {
    username: "Priyanshu",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);;
        console.log(this);  
    } // here this refers the current context 
}

// user.welcomeMessage()
// user.username="Leo"
// user.welcomeMessage()


console.log(this); // {} --> Empty Object


// function chai(){
//     let username= "Hitesh"
//     console.log(this.username); // output will be undefined on this.username , but  why ?
// }

// chai()


// const chai = function (){
//     let username = "Priyanshu"
//     console.log(this.username);
// }

const chai =  ()=> {  //Arrow Function 
    let username = "Priyanshu"
    console.log(this.username);
}

chai()



// Arrow function declare --> () => {}

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3,4));


/* Implicit Return */

const addtwo = (num1,num2) =>  (num1 + num2)
console.log(addtwo(3,4));   // Dont need to use return with ()

const addthree= (num1,num2) => ({username: "priyanshu"})

console.log(addthree());


    
//  Description
// The value of this depends on in which context it appears: function, class, or global.

/* inside a function, the value of this depends on how the function is called. Think about this as a hidden parameter of a function — just like the parameters declared in the function definition, this is a binding that the language creates for you when the function body is evaluated.

For a typical function, the value of this is the object that the function is accessed on. In other words, if the function call is in the form obj.f(), then this refers to obj. For example:
*/
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
