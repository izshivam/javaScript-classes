// premitive*****

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


//const bigNumber = 3265023626262n


// reference type (non-premituve)*****

// Array, objects, functions

 const heros = [ "shaktiman", "spiderman"];
 let myOb = {
     name: "shivam",
     age: 25,
}

 const myFunction = function(){
    console.log("hello world");
 }
    
//  console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);
console.log(typeof anotherId);