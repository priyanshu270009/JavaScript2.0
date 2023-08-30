const myNumbers = [1,2,3,4,5,6,7,8,9,10]


//console.log(myNumbers.map((num)=> num+10));

// const newNums = myNumbers.map((num)=> num+10)
// console.log(newNums);

// Chaining 

// const newNums =  myNumbers.map((num)=> num*10).map((num) => num +1)

// console.log(newNums);

const newNums =  myNumbers.map((num)=> num*10).map((num) => num +1).filter((num)=>num>=40)

console.log(newNums);


// ********REDUCE JS *********************//

  const mynums = [1,2,3]

// const mytotal =   mynums.reduce(function (acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc+curval},0)



const mytotal = mynums.reduce((acc,curr)=> acc+curr,0)

console.log(mytotal);


const shoppingCart = [
     {
     itemName : "JS Course",
     price : 5999 },

   {  itemName : "py Course",
     price : 1000 },

     {itemName : "cpp Course",
     price : 1200 },

   { itemName : "ML Course",
     price : 6999},


]


const pricetopay =shoppingCart.reduce((acc,item)=> (acc+ item.price),0)



    console.log(pricetopay);
