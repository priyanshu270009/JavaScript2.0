// objects in javascript 

// Singleton 

// Object.Create 
// Object Literals 

// Declaring sysmbols

const mysym= Symbol("key1")

const Jsuser= {
    name : "Priyanshu",  // by deafault system process this("name") as a string 
    "full name": "Priyanshu Soni",   // can not be accessed by .(dot) now 
    location: "Jaipur",
   [ mysym]: "mykey1", //[ ] is used to use it as symbol , refer to line no. 32
    age: 19,
    email: "priyanshusoni@google.com",
    isLoggedIn : false,
    lastworkingdays: ["Monday", "Saturday"]
}

// Accessing objects 

console.log(Jsuser.email);
console.log(Jsuser["email"]);// because email is bydeault a string

console.log(Jsuser["full name"]);

console.log(Jsuser.mysym);
//but
//console.log(typeof(Jsuser.mysym)); // data type is string but not Symbol 

console.log((Jsuser[mysym]));

console.log(Jsuser.email="priyanshu@chatgpt.com");

// freezing an object 
// Object.freeze(Jsuser)
// Jsuser.email="priyanshu@microsoft.com"
// console.log(Jsuser);

Jsuser.greetings= function(){
      console.log("Hello JS User");
}

console.log(Jsuser.greetings); // retruns function type

console.log(Jsuser.greetings()); //return output

Jsuser.greetingstwo= function(){
    console.log(`hello Js User, ${this.name}`); // this is used to access name of the object
}

console.log(Jsuser.greetingstwo());



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//