const marvel_heros = ["IronMan", "Hulk", "Spiderman "]
const marvel_villians= ["Thanos", "Ultron", "Loki"]

// marvel_heros.push(marvel_villians)
// console.log(marvel_heros); // elements a not merged toghether but whole array is shifted into that array 
// console.log(marvel_heros[3][0]);// not a good practice 


// let newarr= marvel_heros.concat(marvel_villians) // concat returns new array , butpush performs opearaton on existing array only.
// console.log(newarr);

// Spread Operatin 

const allcharacters= [...marvel_heros,...marvel_villians]
console.log(allcharacters);

const real_array = [1,2,3,4,5,[3,5,6[2,5,6,[3,4,3,4],4,4]]]
console.log(real_array.flat(Infinity));

console.log(Array.isArray("Priyanshu"));
console.log(Array.from("Priyanshu"));

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1,score2,score3));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//