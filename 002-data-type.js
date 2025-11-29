// in javascript data-type are two type
// 1)primitive data

// string
// Represents text data.
// Enclosed in single ('), double ("), or backticks (`) quotes.
// EX
let testing = "this for testing the in his";
console.log(testing);
let testing2 = "it's will ";
console.log(testing2);

let testing3 = "this for you i love you";
console.log(testing3);
const you = ' i love you" this ldfajksgnkm';
console.log(you);
// Number;

// number are use for interger values and decimal number  also

let number = 0.212101;
let number2 = 323051;
console.log(number, number2);
// Boolean;
// this datatype can stroe only two values in this ture or false
let test = 23311;
if (typeof test === "number") console.log(typeof test);

// null;
// Represents an intentional absence of value
let null2 = 2323;
if (null2 === null) {
  console.log("data is not present in this ");
} else {
  console.log("data are present ");
}

// undefined;
// A variable declared but not assigned a value.
let yuocan;
console.log(yuocan);

// BigInt;
// Used for very large integers. Defined with n at the end.
let size = 65984354410413841310653n;
console.log(size);

// Symbol;
// A unique and immutable value used for object property key
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // Output: false (Even with the same description, they are unique)
