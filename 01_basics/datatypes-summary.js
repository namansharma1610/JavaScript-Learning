//Primitive data type => call by value (copy of original value)
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// Js is Dynamically Typed Language =>no need to declare the type of variable
const score=100 //number type
const scoreValue=100.3 //number type
const isloggedIn=false //boolean type
const outsideTemp=null // null type
let userEmail;  //undefined
const id = Symbol('123') //symbol
const anotherid=Symbol('123') //symbol
console.log(id === anotherid); //false output
const bigNumber= 12589658763225558595n //BigInt type
console.log(typeof bigNumber); //BigInt type



// Non-Primitive data type => call by reference (reference of original value )
// Array, Objects, Functions
const hero = ["shaktiman","doga", "naagraj"] // Array type

let myObj={   // Object type
  name:"Naman",
  age:22,
}

const myFunction=function(){  // function type
    console.log("Hello World");
}

console.log(typeof outsideTemp); //object