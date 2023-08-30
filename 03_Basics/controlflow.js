//if-else statements 
//const isUserLoggedIn= true  
if (2==="2") {
    console.log("executed");
    
}

console.log("Datatype isn't equal");

if (2!=3) {
    console.log("true");
}

//<,>,<=.>=,==,!=, ===(check type also)

const temparature = 41
if (temparature <50) {
    console.log("Temparature is less than 50");
    
}
else {console.log("temparature is greater than 50 ");
}

const score = 200;
if (score>100) {
    const power = "fly"; // if var will ber used there won't be scope defined
    // console.log(`user power: ${power}`);
    
}

//  console.log(`user power: ${power}`); // scope error 


const balance =1000

if (balance > 500) console.log("test"); // implicit scope


// dont write like that --> if(balance>500) console.log("test"),console.log("test2");
    

if (balance < 500) {
    console.log("less than");
    
}
else if (balance < 750) {
    console.log("less than 750");
    
}else {
    console.log("less than 1200");
}


const isUserLoggedIn= true
const debitcard = true  
const loggedInFromGoogle= false
const loggedInFromEmail=true
if (isUserLoggedIn && debitcard ) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user loggged in");
    
}






















