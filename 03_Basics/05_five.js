// for each loop

const coding = ["js", "ruby", "java", "python","cpp"]

// coding.forEach( function  (item) {
//     console.log(item); }
//     )



// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item) {  
//     console.log(item);
// }

// coding.forEach(printme) // giving function as reference 




coding.forEach((item,index,arr )=> {
    console.log(item,index,arr);
})


// array of objects (important)
const mycoding = [
{
    languageName : 'JAVASCRIPT',
    languagefileName : 'js'
},
{
    languageName : 'JAVA',
    languagefileName : 'java'
},
{
    languageName : 'ruby',
    languagefileName : 'rb'
},

]

mycoding.forEach((item)=> {
    console.log(item.languageName);
})


