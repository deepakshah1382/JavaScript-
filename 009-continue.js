//  now i will  continue
//  when you want skip on itreation between the runing loop in
//  in side the loop we need to ceratin g

// for (let i = 1; i <= 500; i++) {
//   if (i === 200) {
//     continue;
//   }
// }

// const sum = (a, b) => {
//   return a * b;
// };
// console.log(sum());
// // console.log(sum(10, 20));
// let arrys = [1, 2, 3, 4, 5];
// for (let key in arrys) {
//   console.log(key);
// }
// for (let key of arrys) {
//   console.log(key);
// }
// let object = {
//   name: "deepak",
//   roll_no: 25,
// };
// for (let i = 0; i < arrys.length; i++) {
//   console.log(i);
// }

//for in using for access the
// Used for: Iterating over object properties (keys).
// Returns: The keys (property names) of an object.
// imp
//  in loop using for the access the (key, property expamle key key:values)
// in using the we acces the all the key in the object
// this can prevent form the  dulicate key
//  using in object
//  exmple
const exmple = {
  access1: 1,
  access2: 2,
  access3: 3,
};
for (let key in exmple) {
  console.log(key);
}

// of loop uisng the arrys
let arrys = [1, 2, 3, 4, 5, 6];
//  when we using the in loop in arrys they return the index of the arrys

for (let key in arrys) {
  console.log(key); // 0,1,2,3,...
}
// when we using  the of loop in the arrys they return the values of the arrys
//  of using in arrays, strings, maps, sets,
for (let key of arrys) {
  console.log(key); // 1,2,3..
}
