// function a() {}

// var a = function b(x) {};

// const b = (x) => _ + 1;

// [{ name: "A" }].map((v) => v.name);

// console.log(update());

// var x = 1;
// function update() {
//   return ++x;
// }

const funcA = (a) => (b) => (c) => (d) => a + b + c + d; // function insside the function
const funcB = (a, b, c, d) => a + b + c + d; //multiple argument inside the singal function

const resA = funcA(1)(2)(3)(4);
const resB = funcB(1, 2, 3, 4);

// data fetch result: 1
const func1 = funcA(1);
// data fetch result: 2
const func2 = func1(2);
// data fetch result: 3
const func3 = func2(3);
// data fetch result: 4
const res = func3(4);

// higher order function
// function funcX(a) {
//   let y = 1;
//   let x = a * y;
//   setInterval(() => {
//     y++;
//     x = a * y;
//   }, 200);

//   return function (b) {
//     return b + x;
//   };
// }

// const resX = funcX(2);

// setInterval(() => {
//   console.log(resX(3));
// }, 300);
//
// const table = (number) => {
//   let last = 0;

//   return () => {
//     last++;
//     return number * last;
//   };
// };

// const tableOf2Function = table(2);

// for (let i = 0; i < 10; i++) {
//   console.log(tableOf2Function());
// }

// //   now   i will  tring to callback fucntion
// function tychaking(key, value) {
//   return typeof value === "number";
// }

// let chaked = filter(
//   {
//     name: "deepak",
//     roll_no: 35,
//     team: 2,
//   },
//   tychaking
// );
// function filter(obje, condition) {
//   let arrys = [];
//   for (let key in obje) {
//     const result = condition(key, obje[key]);
//     if (result) {
//       arrys.push(key, obje[key]);
//     }
//   }
//   return arrys;
// }
// console.log(chaked);
// //
// function filter2(obj, chaking2) {
//   let array = [];
//   for(let key in obj){
//     const result=

//   }
// }

// let obje = {
//   name: "aas",
//   roll: 54,
// };

// filter2(obje, (Value)=> {
//   return typeof value === "string";
// });

// // main function
// // Object.freeze() this make the object immutable

// let obje2 = {
//   name: "aas",
//   roll: 54,
// }
// delete obje2.name
// console.log(obje2)

// basic  synax

function greetUser(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Alice", sayHello);

//  some this with the own
//  creatin  the two function  1 function give the hello and  secode  giving the name
function main(std, func1) {
  console.log(std, func1);
}

function kam(name) {
  console.log("other function");
}
main(9, kam);

//  now i will creating the
//  one give the name and roll_no
function printname(name) {
  console.log(name);
}
function printrollno(roll_no) {
  console.log(roll_no);
}
function infromatin(func1, func2) {
  let name = "deepak";
  let roll_no = 6;
  func1(name);
  func2(roll_no);
}

infromatin(printname, printrollno);
// --------------------------------------------------
// let object = {
//   name: "first call",
//   roll: 25,
//   roll2: 53,
// };
// function chake(copy) {
//   for (let key in copy) {
//     if (typeof copy[key] === "number") {
//       // console.log(key, copy[key]);
//     }
//   }
// }

// function final(obje, callbackfun) {
//   let result = [];
//   for (let key in obje) {
//     console.log(key);
//     // let callbackresult = callbackfun(key, obje[key]);
//     // if (callbackresult) {
//     //   result.push(key);
//     // }
//   }
//   // return result;
// }
// let ans = final(
//   {
//     object,
//   },
//   chake
// );

// console.log(ans);

// phire se try krte hai jab  tak hai jaan tb thak krte rehege koshi

// function final(obje, func3) {
//   let result = [];
//   for (let key in obje) {
//     let callbackresult = func3(key, obje[key]);
//     if (callbackresult) {
//       result.push(key);
//     }
//   }
//   return result;
// }
// let ans = final(
//   {
//     NAME: "deepak",
//     roll: 25,
//     age: 36,
//     tring: " callback function are trying ",
//   },
//   (key, value) => {
//     return typeof value === "number";
//   }
// );
// console.log(ans);

//  now i am tring ot printing the hello deepak

// function sayhello(name, roll) {
//   console.log("hello," + name + roll);
// }
// function user(func1) {
//   func1("deepak", 35);
// }
// user(sayhello);
//  now my nameis printing
// function sayHello(name, std) {
//   console.log("hello" + name + std);
// }
// function timing(callback) {
//   console.log("after 3 sec name and roll printing");
//   setTimeout(() => {
//     callback("deepak", 36);
//   }, 3000);
// }
// timing(sayHello);

// //  now i am tring to make a calcuter
// function add(a, b) {
//   console.log("sum is this ", a + b);
// }
// function sub(a, b) {
//   console.log("sub is this ", a - b);
// }
// function multiple(a, b) {
//   console.log("multiple is this ", a * b);
// }
// function calculater(a, b, operation) {
//   operation(a, b);
// }
// calculater(10, 20, add);
// calculater(3, 36, multiple);
// //  i

// function domat(a, b, callfunction) {
//   return callfunction(a, b);
// }

// let result = domat(5, 3, function (ax, bx) {
//   return ax * bx;
// });

// console.log(result, "multiply");

// //  now we tring

// function sum(a, b, callbackresult, callback) {
//   let result = callbackresult(a, b);

//   if (result > 50) {
//     return result;
//   } else {
//     return callback(a, b);
//   }
// }

// let result2 = sum(
//   3,
//   50,
//   function (x, y) {
//     if (x > 10 && y > 10) {
//       return (sum = x + y);
//     }
//   },
//   function (i, j) {
//     return i * j;
//   }
// );
// console.log(result2, "trying");

// //  this will give the multiply and add
// function condtionprocess(a, b, p1, p2, p3, callback) {
//   let step = p1(a, b);
//   let step2 = p2(step);
//   let step3 = p3(step2);
//   console.log(`${a}, ${b}=${step}`);

//   console.log(`${a}, ${b}=${step2}`);
//   console.log(`${a}, ${b}=${step3}`);
// }

// let finalresult = condtionprocess(
//   (3, 3),
//   (x, y) => x + y,
//   (sum) => sum * 2,
//   (mutilp) => mutilp * 3,
//   (final) => ` fianl resul:${final}`
// );
// console.log(finalresult, "ready for run");

// //  now i am trying to settimeout
// console.log("start");
// setTimeout(() => {
//   console.log("ready for this settimeout");
// }, 1000);
// console.log("end");
// // now tryiny the setinterval
// let count = 0;
// let setintraval = setInterval(() => {
//   count++;
//   console.log("tick", count);

//   if (count === 5) {
//     clearInterval(setintraval);
//     console.log("step");
//   }
// }, 1000);
//  how any massage printing

// write a function which accepts a callback function as its first argument
// The function should call the callback function after every seconds passing it
// the nth call to callback and should stop calling once it reaches 50 calls
// The callback function should print: `Current call: ${n}`
function timer(callback, maxcount) {
  if (maxcount <= 0) {
    throw new Error("invalid max count");
  }
  let count = maxcount;
  const intervalId = setInterval(() => {
    callback(count);
    if (count <= 1) {
      clearInterval(intervalId);
    } else {
      count--;
    }
  }, 1000);
}

// timer((n) => {
//   console.log("current call:", n);
// }, 0);
// console.log(result);

//
// function printArrayItemsDelay(array, delay, checkCallback, itemCallback) {
//   if (array.length !== 0) {
//     let currentIndex = 0;
//     const id = setInterval(() => {
//       const checkResult = checkCallback(array[currentIndex], currentIndex);
//       if (checkResult) {
//         itemCallback(array[currentIndex], currentIndex);
//       }
//       if (currentIndex >= array.length - 1) {
//         clearInterval(id);
//       } else {
//         currentIndex++;
//       }
//     }, delay);
//   }
// }
// printArrayItemsDelay(
//   [0, 1, 2, 3, 79],
//   1000,
//   (value) => value >= 10,
//   (value, index) => {
//     console.log(value, "index hhvh", index);
//   }
// );

//
// function loopObje(object, checkCallback, callback) {
//   for (let key in object) {
//     let result = checkCallback(key, object[key]);

//     if (result) {
//       callback(key, object[key]);
//     }
//   }
// }

// loopObje(
//   {
//     name: "kalu",
//     roll: 36,
//     address: "vapi",
//   },
//   (attr, value) => typeof value === "number",
//   (attr, value) => {
//     console.log(attr, value);
//   }
// );

function loopObjectValue(obje, callback1, callback2) {
  for (let key in obje) {
    // let number = callback1(key, obje[key]);
    if (typeof obje[key] === "number") {
      callback1(key, obje[key]);
    }
    // let string = callback2(key, obje[key]);
    else typeof obje[key] === "string";
    callback2(key, obje[key]);
  }
}

loopObjectValue(
  {
    std_id: 25,
    std_name: "suraj",
    std_add: "vapi",
  },
  (Attr, value) => {
    console.log(Attr, value);
  },
  (Attr, value) => {
    console.log(Attr, value);
  }
);

//  now i trying to take the

function accessItem(array) {
  for (i = 0; i < array; i++) {
    console.log(array[i]);
  }
}
let result = accessItem([1, 2, 6, 6, 9]);
