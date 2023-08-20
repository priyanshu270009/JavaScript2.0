const user = {
    username : "Priyanshu",
    price : 999,

    welcomeMessage : function () {

        console.log(`${this.username}, welcome to website`); // this is referring to current context 
        console.log(this);
    }
}

user.welcomeMessage()
// so in the object this is referring to current context , now we will change the output and see the difference in output
user.username="Sonia"
user.welcomeMessage()


// Now, what about outer scope , what this will refer to outside this object ? that's the question 

// now here we are in node environemnt 
console.log(this);   // {} --> Empty Object


function chai (){
    let username="hitesh"
    console.log(this.username); // here we are doing same but printing this by a function & let us observe the output now 
}     //output --> Undefined

chai()


const obj5= {
     username:"hitesh",

     hellomessage : function (){
    console.log(this)
     }
     // here we are doing same but printing this by a function & let us observe the output now 
}


obj5.hellomessage()



/* Arrow Function */

const chai =() => {
    let username = "priyanshusoni.27"
    console.log(this);
}




