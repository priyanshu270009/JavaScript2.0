// array
const myArr= [0,1,2,3,4,5]
console.log(myArr);
//console.log(3); // wrong syntax to access the elements 


const myheros= ["Batman", "SpiderMan", "Hulk"]

const myarr= new Array("p","q","r","s")

// console.log(myheros + myarr);

console.log(`Superheros are ${myheros} and their code id's are ${myarr}`);


console.log(myheros[2]);

// +++++++++++++++++++++++Arrays Methods++++++++++++++++++++++++++// 
/* Push Method */
// push an element at end of the array 

myheros.push("Iron Man");
console.log(myheros);
/* pop method removes the last element from the array  */
myheros.pop();
console.log(myheros);

/* unshift method */ 

// insert element at starting of the array 
myArr.unshift(23);
console.log(myArr);

// removes the element from starting of the array 
myArr.shift();
console.log(myArr);

console.log(myArr.includes(7));
console.log(myheros.includes("SpiderMan"));


console.log(myArr.indexOf(3));
console.log(myheros.indexOf("Batman"));
console.log(myarr.indexOf("s"));


/* Slice and Splice Methods*/


const myarr2= myArr.slice(1,3);
console.log("A",myArr);
console.log(myarr2);
console.log("B",myArr);
const myarr3= myArr.splice(1,3);
console.log(myarr3);

console.log(myArr);  // Main Difference bewtween Splice & Slice




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



