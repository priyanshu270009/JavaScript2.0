// declaring objects with the help of constructor 

const Linkedinuser= new Object()   // singleton object
// console.log(Linkedinuser); // output ----> {}

// const Linkedinuser1= {} // output ------> {}         

Linkedinuser.name="Ajax"
Linkedinuser.email= "WWW@WWW.COM"

// console.log(Linkedinuser);

const github = {
      name: "Rolex",
      email : "rolex@gmail.com",
      //nesting objects
      fullname: {
        userfullname : {
            firstname : "Rolex",
            lastname :  "not known"
        }
      }

}

console.log(github.fullname.userfullname.firstname);   // output ----> Rolex


// merging the value of the objects 
const obj1= {1:"a" , 2: "b"}

const obj2= {3:"a" , 4: "b"}

const obj3= {obj1,obj2}
console.log(obj3); // it will not merge the objects but it will combine them 

const obj4= Object.assign({},obj1,obj2)  //{} --> Source  & obj1,obj2 --> Target 
console.log(obj4);

// another easy method 

const obj5= {...obj1, ...obj2}
console.log(obj5);
  
// values from database 

console.log(Linkedinuser);
console.log(Object.keys(Linkedinuser)); // output value datatype --> Arrays 

console.log(Object.entries(Linkedinuser));

console.log((Linkedinuser.hasOwnProperty("name"))); // --> True 
   

