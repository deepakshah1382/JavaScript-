//  now  i am  learning the loostype or strict type
// let a = "5";
// let b = 5;
// //  loos type
// console.log(a == b);
// // Strict chaking
// console.log(a === b);

//  compare with  0 and falsy
// let c = 0;
// let d = false;
// console.log(c == d);
// console.log(c === d);

// let ans1 = null;
// const ans2 = undefined;
// console.log(ans1 == ans2);
// console.log(ans1 === ans2);

// console.log("2" == 2); // => true | loosely type
// console.log(null == undefined); // => true | loosely type
// console.log({} == {}); // => false | references are compared for objecta

//  now chaking the simle varible vs arrays
// let normal = " this";
// let arrys = [];
// console.log(normal === arrys);

//  now i chiking the arrys memry
let arr2 = [];
let arr1 = [];
console.log(arr1 == arr2);
console.log(arr2 === arr1);

//  now objects
let obj1 = [];
let obj2 = [];
console.log(obj1 == obj2, " this for objets");
console.log(obj1 === obj2);
