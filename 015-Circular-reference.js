//  this for the circular reference in this
//  simple explaine of cricular reference

const obj = {
  name: "deepak",
  rollno: 62,
};

// const testing = JSON.stringify(obj);
// console.log(testing);
//    now creating the  circular
const obj1 = {};
obj1.name = obj1;
console.log(obj1.name);

const arr1 = [];
arr1[0] = arr1;

console.log(arr1[0][0][0]);
