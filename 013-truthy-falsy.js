// if (-2) {
//   console.log("true");
// } else {
//   console.log("flase");
// }

// if (0) {
//   console.log("ture");
// } else console.log("falsy");

// let cond = -2; // 0 => falsy | otherwise => truthy (including negatives)
//  all the number giving the truthy
//  expect the 0 only giving the falsy in this

//  now chaking for the string
//  in this empty srting giving the falsy
//  all string giving the ture including the spece
// cond = " "; // empty string => falsy | otherwise => truthy
// if ("") {
//   console.log("ture");
// } else console.log("false");

// if (" ") {
//   console.log("ture");
// } else console.log("false");

// function print(i) {
//   setTimeout(() => console.log(i), 0);
// }
// for (var i = 0; i < 5; i++) {
//   print(i);
// }
//   null  truthy and falsy

// cond = null; // null => falsy
// null always giving the flase

// if (null) {
//   console.log("ture");
// } else console.log("flase");

// let makes = 62;
// const result = makes > 50 ? "pass" : "fail";
// console.log(result);

// cond = undefined; // undefined => falsy
//  undefined always giving the falsy

// if (undefined) {
//   console.log("ture");
// } else console.log("falsy");

// cond = false; // true => truthy | false => falsy
//  ture  always give the ture
//  false always give the false values
// if (true) {
//   console.log("testing the the ture ");
// } else {
//   console.log("fasly");
// }
// if (false) {
//   console.log("this is falsenvalue");
// } else {
//   console.log("ture");
// }
// cond = -1n; // 0n => falsy | otherwise => truthy (including negatives)
//  this for begint datatype
// cond = -1n; // 0n => falsy | otherwise => truthy (including negatives)
//  in this -1n give the false
// in this 0n also give the false
// -2n give the ture 1n , 2n , 3n all tis number give the ture
// -3,-4,-5,-6 all give the ture values
//  including the nagative number also
// if (-1n) {
//   console.log("flase");
// } else console.log("ture -1n");
// if (0n) {
//   console.log("ture");
// } else console.log("flase");
// if (-2n) {
//   console.log("-2 ture ");
// } else {
//   console.log("flase");
// }
// cond = -1n; // 0n => falsy | otherwise => truthy (including negatives)
//  symbol is imutable datatype
// cond = Symbol.for("---[d]---"); // always truthy

// brife introduction about the symbol datatype

// const x = Symbol("i am  symbol datatype ");
// console.log(typeof x);
// console.log(x);
// // access symbol descrription
// console.log(x.description);

// //  how to add  in symbol in the obj
// let obj = {
//   nmae: "deepak",
//   year: "sybca",
// };
// obj[x] = "symbol are access inside the  the objects ";
// console.log(obj.nmae);
// console.log(obj[x]);
//  unique  every symbol have unique  in stroe in
// let c = 200;
// let b = 200;
// console.log(b === c);
// const s1 = Symbol(200);
// const s2 = Symbol(200);
// console.log(s1 === s2);

//  now truthy and flasy in non-primitive
//  this for ARRAYS
const chacke = [];
if (chacke) {
  console.log("ture");
} else {
  console.log("flase");
}
//   now for chacking the for objets
const chaking2 = {};
if (chaking2) {
  console.log("ture");
} else console.log("flase");

// //  now chaking the some memry are are proving
// let a = {};
// let b = {};
// let result = a === b ? "ture" : "false";
// console.log(result);
//  some for the arrys innthe javascript
let arr1 = [];
let arr2 = [];
console.log(arr1 === arr2 ? "t" : "f");

//  nows we chaking for the

const a = !!0;
console.log(a);
