const userEmail=  []//"p@open.ai"// "" 

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

/* FALSY VALUES */


/*
--> false
--> 0 , -0
--> BigInt 0n
--> "", Null, undefined Nan

*/

/* TRUTHY VALUES */

/* --> "0", "false", " " , [],{},functin(){}  */

if (userEmail.length===0) {
    console.log("Array is Empty");
}

const emptyobj= {}

if(Object.keys(emptyobj).length===0){
  console.log("Object is Empty");
}


// Nullish Coalescing operator (??)

let val1;
val1= 5 ?? 10
console.log(val1);
val1= null ?? 10

console.log(val1);

val3= undefined ?? 15
console.log(val3);

val4 = null ?? 9 ?? 27
console.log(val4);

// ?? ternary operator 

// condition ? true : false 

const iceteaprice = 100
iceteaprice<=80 ? console.log("true") : console.log("No, its greater than 80");