//shopping cart 

// function calculatecartprice(num1){
//     return num1
     
// }

// console.log(calculatecartprice(2)); 



// passing multiple values

function calculatecartprice(val1 ,val2,...num1){
    return num1
     
}

console.log(calculatecartprice(200,400,500,2000)); 

const user = {
    username : "priyanshu",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}



handleObject(user)


// array & function 

function getsecondelement(getanyarray){
        return getanyarray[1]

}

myarray= [1,2,3,4]
console.log(getsecondelement(myarray))