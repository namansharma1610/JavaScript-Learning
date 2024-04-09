/////////////////Stack and Heap Memory in Js //////////////////////
//Stack(Premtive => copy of Value) , Heap(Non-Premitive => Reference of Value)

let myYtname="Naman Vlog"
let anotherYtname=myYtname //copy by value

anotherYtname="Jack travel"

console.log(anotherYtname); // Jack travel
console.log(myYtname); // Naman Vlog

//call by reference
let userOne={
    name:"Naman",
    age:22,
}

let userTwo = userOne; //Call by referencer
userTwo.name="Jack"
userTwo.age=24

console.log(userOne.name,userOne.age);
console.log(userTwo.name,userTwo.age);


