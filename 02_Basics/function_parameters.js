


function saymyname(){
    console.log("h");
    console.log("i");
    console.log("t");  // function definition 
    console.log("s");
    console.log("h");
}


//saymyname   --> referennce

console.log(saymyname());// --> execution 

// function addTwoNumbers (number1, number2){

//     console.log(number1+number2);


// }


// addTwoNumbers(1,2)

// const result = addTwoNumbers(3,5)

// console.log("Result :", result);



function addTwoNumbers (number1, number2){

    let result = number1 + number2
    return result 
    console.log("hello "); // unreachable code because nothing will be done in a function after returning something 

}

const result = addTwoNumbers(3,5)
// console.log("Result :", result);

function loginUserMessage(username){
    if(username===undefined){
          // can also be written  as !username
        console.log("please enter a username");
        return
    }
    return console.log(`${username} just logged in `);
}

//loginUserMessage("priyanshu")
loginUserMessage()


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//




