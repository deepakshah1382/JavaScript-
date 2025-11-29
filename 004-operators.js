// Arithmetic Operators
let a = 10;
let b = 10;
const addtion = a + b;
const sub = a - b;
const multiply = a * b;
const division = a / b;
const modules = a * b;
console.log(addtion, sub, multiply, division, modules);

// Assignment Operators
// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)

// this for == equal this chack the containt  in this

function isequeal(a, b) {
  return a == b;
}
// === this chack contant and datatype also in this
function isstrickequeal(a, b) {
  return a === b;
}
console.log(isequeal(10, "10"));
console.log(isstrickequeal(10, "10"));

// equal or not equal in this
let age = 10;
let umar = "10";
if (age !== umar) {
  console.log("it is ture");
} else {
  console.log("it is wrong");
}

if (age != umar) {
  console.log("ture");
} else {
  console.log("flase");
}

// >, <, now we laering the operators in javascript
function numnerpostive(temp1) {
  return temp1 > 0;
}
console.log(numnerpostive(20));

// using both
function under100(number) {
  return number > 50 && number < 100;
}
console.log(under100(60));
console.log(under100(10));
console.log(under100(1000));

// now <=  less equal, >= great and equal

function chacknumber(integers) {
  return integers >= 0 && integers <= 100;
}
console.log(chacknumber(20));

console.log(chacknumber(-1));

// Logical Operators
// i this only three type oprators are three &&, ||, !

function allcondition(positve, even, unber300) {
  if (positve >= 0 && even % 2 === 0 && unber300 <= 300) {
    console.log("all condtion are fullful");
  } else {
    console.log("not data giving");
  }
}
console.log(allcondition(10, 10, 200));
//  some question for the

function allcondition(positve, even, unber300) {
  if (positve >= 0 || even % 2 === 0 || unber300 <= 300) {
    console.log("all condtion are fullful");
  } else {
    console.log("not data giving");
  }
}
console.log(allcondition(10, 10, 200));

// Assignment Operators (=, +=, -=, etc.)
// now we learing the assignment in this

let ab = 10;
let bc = 10;
// 10+10=10
// ab=ab+bc
ab += bc;
console.log(ab);

ab -= bc;
console.log(ab);

ab *= bc;
console.log(ab);

ab /= bc;
console.log(ab);

ab %= bc;
console.log(ab);
