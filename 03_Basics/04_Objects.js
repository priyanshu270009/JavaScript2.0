const myobject = {
   js : 'javascript',
   cpp : 'C++',
   swift: 'swift by apple'

}
// for in loop for objects 
 for (const key in myobject) {

    console.log(`${key} shortcut is for ${myobject[key]}`);
   
 }

// can we use for in loop on arrays ? let's see !
 const programming = ['js', 'rb', 'py', 'java', 'cpp']

 for (const key in programming) {
      console.log(key);  
 }
 // for in loop on map
 const map = new Map()
 map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
} 


