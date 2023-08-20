// let a =10 
// var b= 20
// const c=30

// console.log(a,b,c);

/* {} --> SCOPE */

if (true) {

    let a  =10 ; // throgh error it is clear that scope of a is limited so the scope of c
    
    var b  = 20; 

}

//console.log(a);
console.log(b);
//console.log(c);


// block scope & global scope 

// nested scope 

function one(){
    const username = "Priyanshu"

    function two (){

        const website = "Youtube"
        console.log(username);

    }
    //console.log(website);

   two()
}

one()


// scope in if-else statements 

if(true){
    const username ="hitesh"
    if (username==="hitesh") {

        const website = "youtube"
        console.log(username + website);
        
    }
   // console.log(website);
}

//console.log(username);



//+++++++++++++interesting+++++++++++++++++++++++++++++++++//


addone(5) // in this method addone() can be called first before declaring there won't be any error
console.log(addone(5));

function addone(num) {

    return num+1;
    
}





const addtwo = function(num){ // in this method it should always be declared first before calling .
    return num+2 
}

addtwo(5)








