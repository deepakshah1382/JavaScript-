// Hoisting in javascript tells interpeater to move
// all the variables declaration, function declaration,
// class decalaration to their respective scopes
// Hoisting generally means we can reference an identifier before it is declared in actual code

// scope of var is function block if defined in a function or
// global block if defined globally

// function declatation is fully hoisted

// var is decalareed and initalized at the same time but with undefined value
// while let, const and class are hoisted with declaration

// function hoisting() {
//   var b = 10;
// }
// console.log(b);
// var a = 11;
// {
//   var a = 10;
//   //   console.log(a);
// }
// console.log(a);

// var experiment inside the function and scope ,golbal
// inside the function
var a = 11;
function hosting() {
  var a = 10;
}
console.log(a);
//  now inside the block var Declaration in the the  block how behave inside the block or blobally
var b = 12;
{
  var b = 13;
}
console.log(b);
// var is decalareed and initalized at the same time but with undefined value
console.log(c);
var c = "experiment";
console.log(c);
// while let, const and class are hoisted with declaration
// console.log(d);

let d = "let varible experiment";
console.log(d);

// some thing happen in the const before intalization we can not access
// console.log(E);
// const E = "const varible can not ";
// console.log(E);
//now some things in the function

// decalration / initialization
// ------------------------- temporal dead zone
//  from the here TDZ start
// console.log(f); //
function experiment() {
  console.log(f, x);
}
// experiment();
//  here tdz end the FOR BOTH THE VARIBALE INSETHE  FUNCTION

let f = "i want to access in  the function ";
let x = 36;
experiment();

//  SOME THINGS HAPPEN IN THE CONST VARIBLE ALSO
// console.log(access);
function varibleacc() {
  console.log(access);
}
const access = 25;
varibleacc();
// console.log(access);
