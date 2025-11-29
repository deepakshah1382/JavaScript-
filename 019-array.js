// //  now i trying the error
// let myarrya = [1, 36, 9, 7, 5];
// //  other ways for crating the arrys
// let ayyy = new Array(1, 3, 5, 8);
// console.log(myarrya);
// console.log(ayyy);
// // property
// console.log(myarrya.length);
// //  array methods

const { number, i, filter, size, index, count } = require("mathjs");

//  now i  trying the level
let learningArrys = ["two", "one", "three", "four"];

//  arrys property
// lenght
// for (let i = 0; i < learningArrys.length; i++) console.log(learningArrys[i]);
// methods
learningArrys.push("five", "six");
// // pop
// learningArrys.pop();
// console.log(learningArrys);
// peek change in orinagal arrsy
learningArrys.unshift(2, 3);
// shift delect
learningArrys.shift();
console.log(learningArrys);

// now other way for creating the arrys in the javascript
// let arrys2 = new Array(1, 2, 3, 4, 4);
// arrys2.push(5);
// console.log(arrys2);
// learningArrys.pop();

//  some thingds try with  the number arrys
let numberarrya = [5, 698, 46, 46, 57879, , , 84];
// console.log(numberarrya.length, numberarrya);
// numberarrya.shift();
// console.log(numberarrya);
// for take the  jugment inside
// console.log(numberarrya.includes(5));
// console.log(numberarrya.indexOf(46));
// let newarrsy = numberarrya.join("|");
// console.log(numberarrya);
// console.log(newarrsy);

let originalarrya = [1, 2, 3, 4, 5, 6];
console.log("A", originalarrya);
let secodeslice = originalarrya.slice(1, 3);
console.log(secodeslice, "this slice");
console.log("B", originalarrya);
// now i am using the splice
let speice = originalarrya.splice(1, 3);
console.log(speice);
console.log("C", originalarrya);

// i am trying  the toString methor this method convert the arrys into string new string givieng not change the oringal arrya
let stringtesing = ["deepak", "this "];
console.log(stringtesing.toString());
//  concat join the array  not change in ornigal error give the  new arrys in the output
let a = [1, 2, 3, 4, 5, 6];
let b = ["one ", "two", "three"];
let ans = a.concat(b);
console.log(ans);
console.log(a, b);

//  now i am appling array method
let gulu = ["one", "two", "three", "four"];
console.log(gulu.join("   |    "));
//   now i  am learning the AT in the arrya method
console.log(gulu.at(1));
//  now  slice and  methid not change the oringal the prove the new
// new aaya
// slice taake input(staring index, endindex)
console.log(gulu.slice(1, 2));
// splice (stsrtdx, delCount, replace)  method change the the arrys in oringinal  arrys
// add element
// replce the element
// delete element
console.log(gulu.splice(1, 3, "five ", "six", "seven"));
console.log(gulu);
//  now we using the speraret mether in this

// let name = [
//   "deepak",
//   "suraj",
//   "gopal",
//   "syam",
//   "sanjay",
//   [10, 20, 30, 40, 5, [1, 2, 3, 4, 5, 6]],
// ];
//  falt mether
//  we can pass the argument infiltery
// console.log(name.flat(Infinity));

//  form this mether we can chaked the this array or nto
// console.log(Array.isArray[(1, 2)]);
//  Array.from convert into  the arrya in this
let b2 = ["one", "two", "four"];
// console.log(Array.from("deepak"));
// indexof
// console.log(b2.indexOf("four"));

let arrys3 = [
  13,
  62,
  220,
  10,
  894152,
  956,
  ,
  61009561,
  ,
  562030,
  956203,
  "fun",
];
function process(element, index) {
  if (typeof element === "string") {
    console.log(element, index);
  }
}
arrys3.forEach(process);

//  now i stratin to learn  the forEech
// //  now we learning the arrays method in the javascript higheorder function
// forEach does NOT stop — it goes through every item.

// It does NOT return a new array (unlike map()).

// You can't break or return early.
// // frist way
// let arr = [1, 2, 3, 5, 5, 6, 4];
// // let printfunction = function (e) {
// //   // console.log(e);cl
// // };
// // arr.forEach(printfunction);
// // secode way
// arr.forEach(function (element) {
//   // console.log(element);
// });
// //  now i trying to print the all the three argument inside the

// arr.forEach(function (element, index, array_self) {
//   console.log(index + ":" + element + ":" + array_self);
// });

// let numbers = [1, 2, 3, 4, 5, "one "];

// numbers.forEach(function (element) {
//   if (typeof element === "number") {
//     mutilpe = element * 2;
//     console.log(mutilpe);
//   }
// });

// even number
// let numbers = [10, 15, 20, 25, 30];
// numbers.forEach(function (element) {
//   if (typeof element === "number") {
//     if (element % 2 === 0) {
//       console.log(element);
//     }
//   }
// });

// let names = ["john", "sara", "peter"];
// names.forEach((element, index) => {
//   if (index[0]) {
//     console.log(element.toUpperCase());
//   }
// });
// // ..................................................................
// let students = [
//   { name: "Alice", marks: 65 },
//   { name: "Bob", marks: 45 },
//   { name: "Charlie", marks: 75 },
//   { name: "David", marks: 30 },
// ];
// students.forEach((students) => {
//   if (students.marks >= 50) {
//     console.log(students.name + " :" + "pass");
//   } else {
//     console.log(students.name + "fail");
//   }
// });
// ..............................................................
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
products.forEach((obje) => {
  let final = [];
  let percentage = (obje.price * 10) / 100;
  percentage += obje.price;
  final.push(` ${obje.name} : ${percentage}`);
  console.log(final);
});

// ......................................
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

users.forEach((element) => {
  console.log(element.name.toUpperCase());
});
// ......................................................................
const products1 = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 450 },
];
let sum = 0;
products1.forEach((element, index) => {
  sum += element.price;
});
console.log(sum);
// ...............................................................................
// const orders = [
//   { id: 1, items: ["Pen", "Notebook"] },
//   { id: 2, items: ["Pencil", "Eraser"] },
//   { id: 3, items: ["Marker", "Ruler", "Sharpener"] },
// // ];
// let arrayFormat = [];
// orders.forEach((arrayOrder) => {
//   arrayOrder.items.forEach((arrayItem) => {
//     arrayFormat.push(arrayItem);
//   });
// });
// console.log(arrayFormat);
// ..............................
const students = [
  { name: "Ava", score: 95 },
  { name: "Ben", score: 78 },
  { name: "Cara", score: 88 },
  { name: "Dan", score: 60 },
  { name: "Ella", score: 91 },
];
let topStudent = [];
students.forEach((arrayOrder) => {
  if (arrayOrder.score >= 80) {
    topStudent.push(arrayOrder.name);
  }
});
console.log(topStudent);

// .....................................................
// const employees = [
//   { name: "Alice", experience: 6, rating: 4.5 },
//   { name: "Bob", experience: 3, rating: 4.2 },
//   { name: "Charlie", experience: 7, rating: 3.9 },
//   { name: "Diana", experience: 8, rating: 4.7 },
// ];
// let promotedEmpleeys = [];
// employees.forEach((arrayOrder) => {
//   if (arrayOrder.experience > 5 && arrayOrder.rating >= 4) {
//     promotedEmpleeys.push({
//       Name: arrayOrder.name,
//       experience: arrayOrder.experience,
//       Rating: arrayOrder.rating,
//     });
//   }
// });
// console.log(promotedEmpleeys);

//  .............................................................
const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Alice", salary: 70000 },
      { name: "Bob", salary: 48000 },
    ],
  },
  {
    name: "Marketing",
    employees: [
      { name: "Cara", salary: 52000 },
      { name: "Dan", salary: 47000 },
    ],
  },
];
let higherans = [];
departments.forEach((array) => {
  array.employees.forEach((arrayItem) => {
    if (arrayItem.salary >= 50000) {
      higherans.push(arrayItem.name);
    }
  });
});
console.log(higherans);
// ...............................................................................
const employees = [
  { name: "Ava", rating: 4.2 },
  { name: "Ben", rating: 2.8 },
  { name: "Cara", rating: 3.6 },
  { name: "Dan", rating: 2.4 },
];
employees.forEach((array2) => {
  if (array2.rating >= 3) {
    employees.status = "you need improve";
  } else {
    employees.status = "good";
  }
});
console.log(employees);
//  ..........................................................................................
// implementation

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      callback(array[i], i, array);
    }
  }
}

forEach([1, 2, 3, , 4], (e) => {
  console.log(e);
});

// map
// The map() method is used to transform each element of an array using a callback function and return a new array with the results
// 🧠 Key Points
// map() does not modify the original array.

// It returns a new array.

// It is ideal for transforming data (e.g., squaring numbers, extracting properties from objects, etc.)

// element: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The full original array.

let arr = [10, 20, 30, 40, 50, 60];
let sum2 = 0;
let squer = arr.map((element, index, Arr) => {
  let squer = element * element;
  sum2 += squer;
  return `${element}+${squer}=${sum2}`;
});
console.log(squer);
// console.log(squer);

const fruits = ["apple", "banana", "cherry"];
fruits.map((element) => {
  console.log(element.toUpperCase());
});
// // ....................................................................
// const users2 = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
// ];
// let names = users2.map((element) => element.name);
// console.log(names);
// //  getting the length for each word
// let arr2 = ["one", "two", "three"];
// let ans2 = arr2.map((element) => {
//   retrun(element.length);
// });
// console.log(ans2);
//  this this getting  the massage
// let arr4 = [1, 2, 3, 5, 5];
// let ans4 = arr4.map((element, index) => {
//   retrun(element, index);
// });
// console.log(ans4);
// .............................................................
const students3 = [
  { name: "Alice", marks: 82 },
  { name: "Bob", marks: 58 },
  { name: "Charlie", marks: 91 },
];
let ans5 = [];
let map = students3.map((element) => {
  if (element.marks > 60) {
    console.log(element.name, "pass");
  } else {
    console.log(element.name, "fail");
  }
});

let map2 = students3.map((element) => (element.marks > 60 ? "pass" : "fail"));
console.log(map2);
// ........................................................
const products6 = [
  { name: "Laptop", price: 1200, discount: 0.1 },
  { name: "Phone", price: 800, discount: 0.15 },
  { name: "Tablet", price: 600, discount: 0 },
];
let map6 = products6.map((element) => {
  let final = element.price - element.price * element.discount;
  console.log(final);
});
console.log(map6);

// ..............................
const orders = [
  {
    customer: "Alice",
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 40 },
    ],
  },
  {
    customer: "Bob",
    items: [
      { name: "Phone", price: 800 },
      { name: "Charger", price: 20 },
      { name: "Case", price: 15 },
    ],
  },
];
let sum3 = 0;
let ans6 = orders.map((element) => {
  element.items.map((item) => {
    sum3 += item.price;
  });
});
console.log(sum3);

// imp
const expressions = ["2+3*2", "10/2+1", "5*5-10"];
let ans7 = expressions.map((element) => {
  return eval(element);
});
console.log(ans7);
// ..............................................................

const expressions2 = ["2+3*2", "10/2+1", "5*5-10"];
// const math = require("mathjs");
// let ans8 = expressions2.map((element) => {
//   return math.evaluate(element);
// });
// console.log(ans8);
// ..................................................................
// const words = ["abc", "dog", "zoo"];
// console.log(words.split(""));
let split = "suraj";
console.log(expressions2.reverse());
// console.log(split.split(""));
// ............................................................
const mixed = ["abc123", "a1b2c3", "xyz007"];
let ans9 = mixed.map((element) => {
  let singal = element.split("");
  let transform = singal.map((singal_chart) => {
    if (singal_chart >= "0" && singal_chart <= "9") {
      return "*";
    } else {
      return singal_chart.toUpperCase();
    }
  });
  return transform.join("");
});
console.log(ans9);
// ......................................................................
const matrix = [
  ["apple", "ball", "ice"],
  ["orange", "cat", "egg"],
  ["umbrella", "dog", "owl"],
];
let ans10 = matrix.map((element) =>
  element.map((word) =>
    "aeiou".includes(word.charAt(0).toLowerCase())
      ? word.toUpperCase()
      : word.toLowerCase()
  )
);

console.log(ans10);
// ..............................................................................
// // filter
// filter() does not modify the original array.

// It returns a new array containing only the elements for which the callback function returns true.

// If no elements pass the test, it returns an empty array
// ..........................................
// callback: A function that is called for every element in the array.

// element: The current element being processed.

// index (optional): The index of the current element.

// array (optional): The array filter() was called upon.

// thisArg (optional): Value to use as this inside the callback.

const numbers = [1, 2, 3, 4, 5, 6];
let ans11 = numbers.filter((number) => number > 10);
console.log(ans11);
// ............................................................
const names = ["Alice", "Bob", "Alex", "Charlie"];
let asn12 = names.filter((name) => name.startsWith("A"));
console.log(asn12);

function nameAccess(element) {
  console.log(element.lenght);
}

let result2 = names.filter(nameAccess);
// console.log(result2, "this for ");
// .............................................................

const users3 = [
  { name: "John", age: 17 },
  { name: "Jane", age: 21 },
  { name: "Mark", age: 18 },
];

function ageChak(obje) {
  if (obje.age >= 18) {
    return obje;
  }
}

const result = users3.filter(ageChak);
console.log(result);
// ............................................................
const products0 = [
  { name: "Laptop", price: 900 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
];
let sumPrices = 0;
let ans12 = products0.filter((item) => {
  if (item.price < 100) {
    sumPrices += item.price;
    return true;
  }
  return false;
});
console.log(ans12);
console.log(sumPrices);
// ...................................................................................

const numbers1 = [1, 2, 3, 4, 5];
let ans13 = numbers1.filter((element) => {
  if (element % 2 === 0) {
    return true;
  }
  return false;
});
console.log(ans13);
// .........................................................................................
const array5 = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 0],
  [68, 90, 60],
  [0, 1, 3],
  [7, 3, 9],
  [2, 4, 6],
  [18, 30, 40],
  [18, 30, 13],
];
let ans14 = array5.filter((item) => {
  let evenNumber = false;
  let oddNUmber = false;
  for (let i = 0; i < item.length; i++) {
    if (item[i] % 2 === 0) {
      evenNumber = true;
    } else {
      oddNUmber = true;
    }
  }
  return evenNumber && oddNUmber;
});
console.log(ans14);

// some question on the map method

const array7 = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 0],
  [68, 90, 60],
  [0, 1, 3],
  [7, 3, 9],
  [2, 4, 6],
  [18, 30, 40],
  [18, 30, 13],
];
const numbers3 = [1, 2, 3, 4, 5];
let doubleValues = numbers3
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(doubleValues);
// ...................................................................
const users2 = [
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 20, active: true },
  { name: "Charlie", age: 27, active: false },
  { name: "David", age: 40, active: true },
];

const result3 = users2.filter((obj) => {
  if (obj.active === true && obj.age > 25) {
    return true;
  }
});
console.log(result3);
// ............................................................................
const numbers4 = [
  [1, 3, 5],
  [2, 4, 6],
  [7, 9, 11],
  [1, 2, 3],
];

const result4 = numbers4.filter((arr) => {
  return arr.every((num) => num % 2 !== 0);
});
console.log(result4);
// ................................................................................
const students4 = [
  { name: "Alice", scores: [80, 90, 85] },
  { name: "Bob", scores: [75, 60, 40] },
  { name: "Charlie", scores: [90, 92, 88] },
  { name: "David", scores: [50, 40, 30] },
];

// Keep students who have all scores >= 70

let ans15 = [];

for (let i = 0; i < students4.length; i++) {
  const student = students4[i];
  const scores = student.scores;

  let sum = 0;
  let inEvery = scores.length !== 0;
  for (let j = 0; j < scores.length; j++) {
    const score = scores[j];
    sum += score;
    if (score < 70) {
      inEvery = false;
      break;
    }
  }
  if (inEvery) ans15.push(sum);
}

console.log(ans15);
// ..............................................................................
// | Feature              | `forEach()` | `map()` | `for` loop | `for...of` |
// | -------------------- | ----------- | ------- | ---------- | ---------- |
// | Executes function    | ✅           | ✅       | ✅          | ✅          |
// | Returns new array    | ❌           | ✅       | ❌          | ❌          |
// | Can break/continue   | ❌           | ❌       | ✅          | ✅          |
// | Skips empty items    | ✅           | ✅       | ❌          | ❌          |
// | Use for side effects | ✅           | ❌       | ✅          | ✅          |
// zinding aasan nahi hota bhai zinding aasan hota tho kinta accha hota bhai

let array = [1, 2, 3, 5, 852, 85, 852, , 452];
let ans16 = array.forEach((element) => {
  if (element < 852) {
    console.log(element);
  }
});
console.log(ans16);
// total the array
let array2 = [12, 12, 12, 3, 53, 4];
let total = 0;
for (let i = 0; i < array2.length; i++) {
  total += array2[i];
}
console.log(total, "total");
// some using th
//
// e expression
var expression = function (arr) {
  let total = 0;
  for (let i = 0; i < array2.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(expression(array2, "jj"));
//   function expression
var expr = function (arr) {
  let total = 0;
  for (let element of arr) {
    total += element;
  }
  return total;
};
console.log(expr(array2, "hel"));
// map
let sum4 = 0;
let ans17 = array2.map((element) => {
  sum4 += element;
  return sum4;
});
console.log(ans17, "sum");
//

/*
| Method          | Description                                                                                                                      | Return Type       | New Array? | Can Break? | Skips Empty Items | Side Effects | Example                                  | Output / Behavior | When & Why to Use This Method                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------- | ---------- | ----------------- | ------------ | ---------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| **forEach()**   | - Executes a function once per array element  <br> - Doesn't return a result <br> - Good for side effects (logging, DOM updates) | `undefined`       | ❌ No       | ❌ No       | ✅ Yes             | ✅ Yes        | `[1,2,3].forEach(v => console.log(v))`   | Logs 1, 2, 3      | When you want to **iterate** and perform **side effects** (like logging or modifying DOM). |
| **map()**       | - Creates a new array <br> - Applies a transformation to each element <br> - Same length as original                             | `Array`           | ✅ Yes      | ❌ No       | ✅ Yes             | ❌ No         | `[1,2,3].map(v => v * 2)`                | `[2, 4, 6]`       | When you want to **transform** each element without changing the original array.           |
| **filter()**    | - Returns only elements that pass a test <br> - Creates a new array <br> - Useful for removing unwanted data                     | `Array`           | ✅ Yes      | ❌ No       | ✅ Yes             | ❌ No         | `[1,2,3,4].filter(v => v % 2 === 0)`     | `[2, 4]`          | Use it when you need to **extract specific items** based on a condition.                   |
| **reduce()**    | - Reduces array to a single result <br> - Uses accumulator logic <br> - Can be used for totals, merges, etc.                     | `Any/v`            | ❌ No       | ❌ No       | ✅ Yes             | ✅ Sometimes  | `[1,2,3].reduce((acc, v) => acc + v, 0)` | `6`               | Ideal for **summarizing data** (sums, products, combining values, flattening arrays).      |
| **sort()**      | - Sorts original array in place <br> - Can sort numbers, strings, or custom logic <br> - Mutates original array                  | `Array`           | ❌ No       | ❌ No       | ❌ No              | ❌ No         | `[3,1,4].sort((a, b) => a - b)`          | `[1, 3, 4]`       | Use it to **order elements** (numbers, strings, objects by property).                      |
| **find()**      | - Returns the **first** matching item <br> - Stops after one match <br> - Returns `undefined` if not found                       | `Any`/`undefined` | ❌ No       | ✅ Yes      | ✅ Yes             | ❌ No         | `[5,10,15].find(v => v > 8)`             | `10`              | Use when you need to **locate a single item** in an array.                                 |
| **findIndex()** | - Similar to `find` but returns **index** <br> - Stops after first match <br> - Returns `-1` if not found                        | `Number`          | ❌ No       | ✅ Yes      | ✅ Yes             | ❌ No         | `[1,3,5].findIndex(v => v > 2)`          | `1`               | Similar to `find()`, but when you need the **index**, not the element.                     |
| **every()**     | - Checks if **all** items match condition <br> - Stops early on first failure <br> - Returns boolean                             | `Boolean`         | ❌ No       | ✅ Yes      | ✅ Yes             | ❌ No         | `[2,4,6].every(v => v % 2 === 0)`        | `true`            | Use to **verify all elements** follow a rule (e.g., all numbers are positive).             |
| **some()**      | - Checks if **any** item passes condition <br> - Stops early on first match <br> - Returns boolean                               | `Boolean`         | ❌ No       | ✅ Yes      | ✅ Yes             | ❌ No         | `[1,3,5,6].some(v => v % 2 === 0)`       | `true`            | Use to **check for existence** of a condition (e.g., if any item is invalid).              |
| **fill()**      | - Replaces values with a fixed value <br> - Overwrites part or whole array <br> - Useful for resetting arrays                    | `Array`           | ❌ No       | ❌ No       | ❌ No              | ❌ No         | `[1,2,3,4].fill(0,1,3)`                  | `[1, 0, 0, 4]`    | Use for **initializing** or **resetting** arrays with fixed/default values.
                |
*/

// **filter()**
//  | - Returns only elements that pass a test <br> - Creates a new array <br> - Useful for removing unwanted data
//  | `Array`           | ✅ Yes      | ❌ No       | ✅ Yes             | ❌ No         | `[1,2,3,4].filter(v => v % 2 === 0)`     | `[2, 4]`
//   | Use it when you need to **extract specific items** based on a condition.                   |
// Filter valid items from a form

// Get active users

// Remove null/undefined/empty values

// Filter even/odd numbers

// Extract matching search results
const numbers2 = [1, 2, 3, 4, 5, 6];
let ans8 = numbers2.filter((num) => num % 2 === 0);
console.log(ans8);
const mixed2 = [0, "Hello", "", null, 42, undefined, "JS"];
let ans1 = mixed2.filter((element) => element);
console.log(ans1);

const users20 = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];
let ans2 = users20.filter((element) => element.active); //(element.active ? true : false));
console.log(ans2);
// .....................................................
const words = ["hi", "hello", "sun", "world", "cat"];

let lenght = words.filter((size) => (size.length > 4 ? true : false));
console.log(lenght);
// ...................................................
const numbers0 = [1, 2, 3, 2, 4, 1, 5];
let arr2 = numbers0.filter((element) => {
  console.log(element);
});

// ❓ Use filter() to return a new array without duplicates
const users1 = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "David", age: 19, active: false },
  { name: "Eva", age: 21, active: true },
];
let ans18 = users1.filter((obje) => obje.active === true && obje.age > 18);
// console.log(ans18);
let ans19 = ans18.map((userinfo) => ` name:${userinfo.name}, ${userinfo.age}`);
ans19.forEach((info) => console.log(info));
// .................................................
const employees1 = [
  { name: "John", salary: 40000, department: "IT" },
  { name: "Jane", salary: 55000, department: "HR" },
  { name: "Tom", salary: 30000, department: "IT" },
  { name: "Lisa", salary: 60000, department: "Finance" },
];
let it_Emploees = employees1.filter((emp) => emp.department === "IT");
let bonus1 = it_Emploees.map((bionceIn) => {
  let bonus = (bionceIn.salary * 10) / 100;
  let incream = bonus + bionceIn.salary;
  return {
    ...bionceIn,
    bouncesalary: incream,
  };
});

bonus1.forEach((info) =>
  console.log(`${info.name} this you increment ${info.bouncesalary}`)
);

// ✅ Task:
// 1. Filter employees from IT department.
// 2. Map them to give a 10% bonus (add a new key `bonusSalary`).
// 3. Print: "John's new salary is 44000"
const students1 = [
  { name: "Aman", marks: 85, active: true },
  { name: "Ravi", marks: 45, active: false },
  { name: "Neha", marks: 92, active: true },
  { name: "Simran", marks: 67, active: true },
];
let result1 = students1.filter((obje) => obje.marks >= 80);
let resultacc = result1.map(
  (student) => ` name ${student.name}  marks ${student.marks}`
);
resultacc.forEach((ans) => console.log(ans));
// ✅ Task:
// 1. Filter active students with marks > 80
// 2. Map them to "Neha has 92 marks"
// 3. Print each message

const users4 = [
  { name: "john", age: 16 },
  { name: "peter", age: 21 },
  { name: "maria", age: 19 },
  { name: "sara", age: 30 },
];

let result5 = users4.filter((element) => element.age > 18 && element.age < 25);
let ans20 = result5.map((userNmae) => userNmae.name.toUpperCase());
ans20.forEach((info, index) => {
  console.log(`${info}, ${index}`);
});
// ✅ Task:=>
// 1. Filter users age between 18 and 25
// 2. Map to names in uppercase
// 3. Print each name with index (e.g., "1. PETER")
// reduce method

// let arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newData = arrData.filter((item) => item > 5);
// console.log(newData);
// for (let i = 0; i < arrData.length; i++) {
//   if (arrData[i] > 5) {
//     console.log(arrData[i]);
//   }
// }
// let newarr = [];
// arrData.forEach((num) => {
//   if (num > 5) {
//     newarr.push(num);
//   }
// });
// console.log(newarr);

const books = [
  {
    bookname: "Clean Code",
    author: "Robert C. Martin",
    publish: 2008,
    genre: "Programming",
    price: 35.99,
    rating: 4.7,
  },
  {
    bookname: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    publish: 1999,
    genre: "Software Development",
    price: 40.5,
    rating: 4.8,
  },
  {
    bookname: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    publish: 2008,
    genre: "JavaScript",
    price: 29.99,
    rating: 4.3,
  },
  {
    bookname: "You Don’t Know JS",
    author: "Kyle Simpson",
    publish: 2014,
    genre: "JavaScript",
    price: 25.0,
    rating: 4.5,
  },
  {
    bookname: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    publish: 2011,
    genre: "JavaScript",
    price: 32.0,
    rating: 4.6,
  },
];
// let newprice = [];
// for (let key of books) {
//   if (key.price > 25) {
//     newprice.push(key);
//   }
// }

// console.log(newprice);

// some this with the in loop
//

//
for (let i = 0; i < books.length; i++) {
  let key_count = Object.keys(books[i]).length;
  console.log(key_count);
}

// let mapinfo = books.map((item) => {
//   if (item.publish === 2008) {
//     return "you are very   fomouse";
//   }
// });
// console.log(mapinfo);

// now we can count only the by there keys price
let publishinfo = [];
let result6 = books.filter((item) => {
  if (item.publish === 2008) {
    return true;
  }
});
console.log(result6);
// --------------------------------------------------------------------------------------------
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans22 = arr3.reduce((privevalue, currentvalue, index, array_self) => {
  console.log(privevalue);
  console.log(currentvalue);
  console.log(index);
  console.log(array_self);
});
console.log(ans22);

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

/**
 * Calculates the area of a rectangle
 *
 * Example:
 *
 * ```
 * const area = getArea(30, 20);
 * ```
 *
 * @param {number} width - Width of the rectangle
 * @param {number} height - Height of the rectangle
 *
 * @returns {number} Resultant area
 */
function getArea(width, height) {
  return width * height;
}

const resul = getArea(20, 20);

// sort method
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.sort());
// let arr0 = [9, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr0.sort());
//..........................................................................
// in the find method the chake the frist element in the the condition this will retrun the only
// find
let arr0 = [2, 3, 4, 5, 6, 7, 8];
let ans0 = arr0.find((value) => value < 7);
console.log(ans0);
//findindex
// findindex method some as the find but findindex giving the index of that values
