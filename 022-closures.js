// A closure happens when a function "remembers" the variables from its
// lexical scope even after that outer function has finished executing.
//  closure function there lexical scope is out of the function
// after the  executing function
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// let counter = outer();
// counter();
// counter();

//  now some things appling for the
// function outer(a, b) {
//   let sum = a + b;

//   return function inner(c, p) {
//     return sum * c * p;
//   };
// }
// let ans = outer(10, 10)(10, 2);
// console.log(ans);

// function outer(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(outer(5)(5));

function arrayItems(array) {
  let currentIndex = 0;
  return () => {
    // if (array.length === 0) {
    //   throw new Error("No items in the array");
    // }
    if (currentIndex >= array.length) {
      throw new Error("Last item reached");
    }
    const currentItem = array[currentIndex];
    currentIndex++;
    return currentItem;
  };
}

// const array = [1, 2, 3, 4, 5, 6];
// const getNextItem = arrayItems(array);
// console.log(getNextItem);
// console.log(getNextItem());
// console.log(getNextItem());
// console.log(getNextItem());
// console.log(getNextItem());
// console.log(getNextItem());
// console.log(getNextItem());
// array.push(7);
// console.log(getNextItem());
// let array3 = [1, 23, , 3, 6];
// function getitem(array) {
//   for (let i = 0; i < array3.length; i++) {
//     console.log(array3[i]);
//   }
// }
// getitem();

// const arrayPagination = (array) => {
//   return {
//     index: 0,
//     current() {
//       return array[this.index];
//     },
//     next() {
//       if (this.index < array.length - 1) {
//         this.index++;
//         return this.current();
//       } else {
//         return null;
//       }
//     },
//     previous() {
//       if (this.index > 0) {
//         this.index--;
//         return this.current();
//       } else {
//         return null;
//       }
//     },
//   };
// };

// const pagination = arrayPagination([1, 2, 3, 4]);

// console.log(pagination.current());
// console.log(pagination.next());
// console.log(pagination.current());
// console.log(pagination.previous());
// console.log(pagination.next());
// console.log(pagination.next());
// console.log(pagination.next());
// console.log(pagination.next());
// console.log(pagination.current());

//  now i am appling the currey fucntion
// function main() {
//   let name = "frist_name";
//   function Display() {
//     console.log(name);
//   }
//   Display();
// }
// main();
//  now i am trying  make fucntion when fucntion call than one  element call
// let array3 = [1, 2, 3];
// function getarrayItem(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// let getNextElement = getarrayItem(array3);

//  now some things appling in this
// function firstElementGet(data) {
//   let i = 0;
//   return () => {
//     if (i >= data.length) {
//       throw new Error("no  element are present ");
//     }
//     let item = data[i];
//     i++;
//     return item;
//   };
// }

// let data = [1, 2, 3, 4, 5, 6];
// let final = firstElementGet(data);
// console.log(final);

// function firstElementGet(data) {
//   let i = 0;
//   return () => {
//     if (i >= data.length) {
//       throw new Error("no  element are present ");
//     }
//     let item = data[i];
//     i++;
//     return item;
//   };
// }

// let data = [1, 2, 3, 4, 5, 6];
// let final = firstElementGet(data);
// console.log(final);

//   }
// }
// function curryFilter(limit) {
//   return function (array) {
//     let result = [];
//     for (i = 0; i < array.length; i++) {
//       if (limit < array[i]) {
//         let result2 = array[i] * 2;
//         result.push(result2);
//         if (result2 >= 30) {
//           result.push(array[i]);
//         }
//       }
//     }
//     return result;
//   };
// }

// const greaterThan = curryFilter(10);
// console.log(greaterThan([5, 12, 8, 20])); // [12, 20]

// let obje = {
//   name: "deepak",
//   roll_no: 36,
//   address: "vapi",
// };
// function getInfromation(obje) {
//   let result = [];
//   for (let key in obje) {
//     if (typeof obje[key] === "number") {
//       result.push(obje[key]);
//     }
//   }
//   return function (array) {
//     for (let element of array) {
//       if (typeof element === "string") {
//         result.push(element);
//       }
//     }
//     return result;
//   };

//    3, "three";
// console.log(getInfromation(obje)(array));
// // for (let element of array) {
// //   console.log(element);
// // }
// const index = "one";
// array[index];

// function are created in the
let arrys3 = ["one", "two", "three", "four", "five"];
function itemACess(array) {
  currentIndex = 0;
  return () => {
    if (array.length === 0) {
      throw new Error("arrys  are emty");
    }
    if (currentIndex >= array.length) {
      throw new Error("no next element");
    }
    const currentValue = array[currentIndex];
    currentIndex++;
    return currentValue;
  };
}
let getNextElement = itemACess(arrys3);
console.log(getNextElement());
console.log(getNextElement());
