// for of loops are basically array sepecific loops --> ["", "", ""] , [{},{},{}....]

const arr = [1,2,3,4,5]

// for of loop 
// for (const iterator of object) {
      // iterator = any variable , object = on which loop is to be applied
// }

for (const num of arr) {  
    
    console.log(num); 
}


// for of loop on strings , to print each letter of a string 


// The key advantages of using the for...of loop when iterating through strings are:

// Simplicity: You don't need to manage an index variable, which makes the code cleaner and less error-prone.

// Readability: The loop clearly states its purpose: to iterate over the elements of the iterable, in this case, the characters of the string.

// Compatibility: The for...of loop works seamlessly with any iterable object, not just strings. So, you can use the same loop structure for arrays, maps, sets, and more.


const greetings = "Hello World !"
for (const greet of greetings) {

    console.log(`each char is ${greet}`);
    
}


//MAP  --> object

const map = new Map()
map.set('IN', "INDIA") //(key,value)
map.set('USA', "United States Of America")
map.set('Fr', "France")

console.log(map);

// for (const key of map) {
//     console.log(key);
//}
for (const [key,value] of map) { // we can alao use only key but it will return array of that particular key 
    console.log(key, ":-",value); 
}


// const myobject = {

//     "game1" : 'NFS'  ,
//    " game2 ": 'Spiderman'

// }

// for (const [key,value] of myobject) {
//     console.log(key, ":-",value); // not iteratable 
// }



// Array= [1,2,3,4,5]

// for (let index = 0; index < Array.length; index++) {
//     const element = Array[index];
//     console.log(Array);
    
// }   Output of this  is the reason behind why we use for of loops 


// let a= "priyanshu"
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }
// console.log(typeof(element));