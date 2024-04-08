let score=36
let score1=undefined
// console.log(typeof score); // number
// console.log(typeof score1); // string

 let valueNumber= Number(score1); // it converts integer to string 
// console.log(typeof valueNumber );// number 
// console.log(valueNumber); // NaN = not a number

/* Notes 
"33" => 33 --> string is easily converted to number
"33abc" => NaN --> type is number but value is not number ,NaN = Not a number
true => 1 , false =>0 --> conversion 
*/


let isloggedIn= 1
let booleanisloggedIn = Boolean(isloggedIn)
// console.log(booleanisloggedIn);


/* In Boolean conversion
0 =>false , 1=>true 
"" =>false
"Naman" =>true
*/

let num=33
let stringNumber=String(num);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string