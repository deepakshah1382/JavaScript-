//  how to creating the objects in javascript
//  this for simple
let obje = {
  name: "deepka",
  std: 15,
  sunjet: ["eng", "hindi", "gujrati", "science"],
  class: ["fybca", "sybca", "tybca"],
};
// Accessing Object Properties
console.log(obje.class);
console.log(obje["std"]);
// Adding / Modifying / Deleting Properties
obje.class2 = ["sem-1", "sem-2", "sem-3"];
obje.std = 52;
delete obje.name;
console.log(obje);

// nesting loop objets
let obje2 = {
  unversity_name: "vnugs",
  collage: {
    collage1: "rk deasi group of collage ",
    collage2: "kbs collage",
  },
};
console.log(obje2.collage);
//  we can pass the function inside the object ans many other datatype also inside
//  arrya and there index also whole arrays can also pass and through index also
//  single keys also pass index the  the objets

// 🧠 Q1. Create an object to store a student's name and age. Then print both values.
let obje3 = {
  name: "question 1",
  age: 21,
};
obje3.color = "red";
obje3.color = "pink";
console.log(obje3.name);
console.log(obje3.age);
console.log(obje3);
// now we creating
let obje4 = {
  login: true,
};
if (obje4.login === true) {
  console.log("welcome to mywebpage");
} else {
  console.log("not prestinging ");
}

//  now i access the key and  values with the loop using the in
let obje5 = {
  name: "rahul",
  class: 9,
  roll: 25,
  subjets: ["english", "hindi", "bks"],
};
try {
  for (let key in obje5) {
    console.log(key + ":", obje5[key]);
  }
} catch (E) {
  console.log(E);
}

//  now we count the how many pair of are  there
let obje6 = {
  name: "deepak",
  roll_no: 56,
  std: 5,
  key4: 5,
  teacher: {
    t1: "sandhiya",
    t2: "Deo",
    t3: "suraj",
  },
};

const coutKey = (obj) => {
  let count = 0;
  for (let key in obj) {
    count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += coutKey(obj[key]);
    }
  }
  return count;
};

console.log(coutKey(obje6));

const jsValue = '{ "name": "My name" }';
console.log(jsValue, typeof jsValue);
const stringified = JSON.stringify(jsValue);
console.log(stringified, typeof stringified);

const firstParse = JSON.parse(stringified);
console.log(firstParse, typeof firstParse);

const secondParse = JSON.parse(firstParse);
console.log(secondParse, typeof secondParse);

// const objA = JSON.parse();
// const objB = JSON.parse(strA);

// console.log(strA);
// console.log(objA, typeof objA);
// console.log(objB, typeof objB);
// console.log(objA === objB);
// console.log(objA.name === objA.name);

// const jsValue = [undefined];
// const stringified = JSON.stringify(jsValue);
// const parsed = JSON.parse(stringified);

// console.log(jsValue);
// console.log(parsed);
// console.log(typeof jsValue[0], typeof parsed[0]);
// console.log(jsValue[0] === parsed[0]);

//  now we learing the the conveting into  the json
// let isvalue = '{ name: "stringfile" }';
// console.log(isvalue);
// let stringfile = JSON.stringify(isvalue, typeof isvalue);
// console.log(stringfile, typeof stringfile);
// let parse = JSON.parse(stringfile);
// console.log(parse, typeof parse);

//  now creating the js object
// javascript object convert into the plain
// json data type support null, boolen, number, array, string , object

//  this for objcts

// Here's how different JavaScript values are handled when you pass them to JSON.stringify():

// JSON String Input	Output JavaScript Type	Result of JSON.stringify()
// Object	Object	'{"key":"value"}'
// Array	Array	'[1,2,3]'
// String	String	'"hello"' (wraps the string in quotes)
// Number	Number	'123'
// Boolean (true or false)	Boolean	'true' or 'false'
// null	null	'null'
// undefined	undefined	'undefined' gets ignored in objects, replaced by null in arrays
// Function (inside object)	Function	'{}' (functions are ignored and removed)
// Symbol	Symbol	'{}' (symbols are ignored and removed)
// BigInt	BigInt	❌ Throws error
// Circular references	Object	❌ Throws error

// json -> stringifying
// string->'"string"'
// you can pass the  obj,string , arrys , number,null all the convert into the string output

let obj7 = {
  name: "Deepak",
  rool_no: 25,
};
let stringfile = JSON.stringify(obj7);
console.log(stringfile, typeof stringfile);
let parse1 = JSON.parse(stringfile);
console.log(parse1, typeof parse1);
let string2 = JSON.stringify(parse1);
console.log(string2, typeof string2);
// now js  arrys  convert into json
let array = [1, 2, 3, 5, 8, 9];
let strA = JSON.stringify(array);
console.log(strA, typeof strA);
let array3 = JSON.parse(strA);
console.log(array3, typeof array3);
let array4 = JSON.stringify(array3);
console.log(array4, typeof array4);
// now number
let number = 1235;
let numbersrting = JSON.stringify(number);
console.log(numbersrting, typeof numbersrting);
let parsenumber = JSON.parse(numbersrting);
console.log(parsenumber, typeof parsenumber);

// JSON.parse() works only on valid JSON strings — meaning strings that represent:

// JSON String Input	Output JavaScript Type	Example Output
// '123'	Number	123
// 'true'	Boolean	true
// 'null'	null	null
// '[1, 2, 3]'	Array	[1, 2, 3]
// '{"name":"Ali","age":22}'	Object	{name: "Ali", age: 22}
// '"Hello"'	String	"Hello" (with quotes)

// plain Json convert into javascript object
//  in the parse we can pass only the string
// JSON.parse() — Input vs. Output
// JSON String Input	Output JavaScript Type	Example Output
// '123'	Number	123
// 'true'	Boolean	true
// 'null'	null	null
// '[1, 2, 3]'	Array	[1, 2, 3]
// '{"name": "Ali"}'	Object	{ name: "Ali" }
// '"Hello"'	String	"Hello"
//  in the parse we can pass all things in the string,obj,string , arrys converto into  oringal obje,array
let obj8 = `{
 "name":"Deepak",
 "rool_no":26
 }`;
let parse = JSON.parse(obj8);
console.log(parse, typeof parse);
let string = JSON.stringify(obj8);
console.log(string, typeof string);
let parse2 = JSON.parse(string);
console.log(parse2, typeof parse2);

//  imp things
// normal key are pass in like key
// when using the special thinghs that using the this "" like underscore, $, number,alphabats
// when any expressin pass the than use the []
//  any things pass inside the object convet into the string
// order are not fix in the objects

// how to pass the function in the object
function func1() {
  return "key3";
}
func1();
let string1 = "key4";
let array2 = ["key5"];
//  we can the objects inside the objects
let obj4 = {
  a: "key6",
};

//  now we can we simple increament varible also
let i = 0;

let obj = {
  key1: 100,
  "key.b": 200,
  [func1]: 300,
  [string1]: 400,
  [array2[0]]: 500,
  [obj4.a]: 600,
  [(i += 1)]: 700,
};
//  how we add the add or remove the key or values
obj.key4 = "";
obj["key.b"] = "this";
[obj4.a];
console.log(obj);

//  question on the objects using the function
function testing(a, b) {
  return a + b;
}
let sum = console.log(testing(100, 200));

//  without function
function access(obj) {
  obj.name = "suraj";
  console.log(obj);
  for (const attr in obj) {
    const val = obj[attr];
    obj[attr];
    if (typeof val === "number") {
      console.log(`Attribute: ${attr} | Value: ${val}`);
    }
  }
}

const object = {
  name: "deepak",
  roll_no: 52,
};
access(object);
console.log(object);
// now access the the key and values
// now we can access the key and values from the function
// function ans(access) {
//   for (const attr in access) {
//     if (typeof access[attr] === "number") {
//       console.log(access[attr]);
//     }
//   }
// }

// let obj3 = {
//   name: "Kuntidevi",
//   mother: "deepak",
//   age: 56,
// };

// ans(obj3);

// let obj = {
//   name: "deepak",
// };
// if (obj.name === "deepak") {
//   obj.name = "suraj";
// }
// console.log(obj);

//  some things done through the function
// let string = JSON.stringify(obje);
// console.log(string, typeof string);
// let parse = JSON.parse(string);
// console.log(parse, typeof parse);

// function count_key(key) {
//   count = 0;
//   for (let attr in key) {
//     // count++; // this count the upper level keys
//     // if (typeof key[attr] === "object" && key[attr] !== null) {
//     //   count += count_key(key[attr]); // this  count the inside  the key
//     count++;
//     console.log(count);
//   }
// }

//  i want to count the key inside inside the nested obj

// function key_count(access) {
//   count = 0;
//   for (let key in access) {
//     count++; // this count the outside the
//     if (typeof access[key] === "object" && access[key] !== null)
//       count += key_count(access[key]); // inside the nesting objects
//   }
//   return count;
// }
// console.log(key_count(obje));

//  now i tring the the update the recode using the function this condition giving only the frist level
// function recode_update(recode) {
//   for (let key in recode) {
//     if (typeof recode[key] === "number" && recode[key] !== null) {
//       console.log(`${key} = ${recode[key]}`);
//     }
//   }
// }
// console.log(recode_update(obje));

// now tring to access the nesting

// let obje = {
//   stud_id: 12,
//   stud_name: "deepak",
//   roll_no: 25,
//   std_teach: {
//     english: "neha",
//     hindi: "suamn",
//     gujarti: "jgaruti",
//   },
//   tech_expre: {
//     neha: 1,
//     suamn: 3,
//     gujarti: 5,
//     testing: {
//       hello: 1,
//       hello2: {
//         hello3: 2,
//       },
//     },
//   },
// };

// function recode_update(recode) {
//   // console.log("Hello", recode);
//   for (const key in recode) {
//     if (typeof recode[key] === "number") {
//       console.log(`${key}=${recode[key]}`);
//     }
//     if (typeof recode[key] === "object" && recode[key] !== null) {
//       recode_update(recode[key]); // for chaking the inside the function
//     }
//   }
// }
// // callstack

// recode_update(obje);

// function callerB2() {
//   console.log("B2");
// }
// function callerB1() {
//   console.log("B1");
// }
// function callerA2() {
//   console.log("A2");
//   callerB1();
//   callerB2();
// }
// function callerA1() {
//   console.log("A1");
// }
// function main() {
//   callerA1();
//   callerA2();
// }

// main();

// let obj = {
//   name: "liya_liss",
//   age: 25,
//   address: "thailand",
//   ph_no: 3256565682,
//   obj2: {
//     name1: "pirya",
//     age1: 23686464124,
//     address1: "patan",
//     ph_no1: 3565656822,
//   },
// };

// function testing(phone_no) {
//   for (let key in phone_no) {
//     if (typeof phone_no[key] === "number") {
//       if (phone_no[key] > 999999999 && phone_no[key] < 10000000000) {
//         console.log(key);
//       }
//     }
//     if (typeof phone_no[key] === "object" && phone_no[key] !== null) {
//       testing(phone_no[key]);
//     }
//   }
// }

// testing(obj);

// Check if a property exists in an object using logic (without using hasOwnProperty()).
// now  i want chake the proprety are present or not
// function recode(values) {
//   for (let attr in values) {
//     if (values[attr] === "suraj") {
//       console.log("present the key and value");
//       console.log(attr);
//     }
//   }
// }
// recode(student);

// function recode(value) {
//   for (let key in value) {
//     if (key === "std_name") {
//       console.log("present");
//     }
//   }
// }
// recode(student);

// now i tring to learning the how copy the object in other objets
// let create the the original objcet
// let original = {
//   name: "deepak",
//   roll_no: 25,
// };
// let copy = {
//   name: "rahul ",
//   roll_no: 35,
// };
// // for (let key in copy) {
// //   copy[key] = original[key];
// //   console.log(copy[key]);
// // }
// for (let key in original) {
//   copy[key] === original[key];
// }
// console.log(copy, " this now compy");
// // now tring the update the
// // let student = {
// //   rkm: {
// //     std_id: 1001,
// //     std_name: "suraj",
// //     std_class: 9,
// //     std_fee: 18901,
// //   },
// //   kbc: {
// //     std_id: 1002,

// //     std_name: "suraj",
// //     std_class: 9,
// //     std_fee: 18902,
// //   },
// //   rkdesai: {
// //     std_id: 1003,
// //     std_name: "mohit",
// //     std_class: 9,
// //     std_fee: 18903,
// //   },
// // };

// // function update_recode(student_access) {
// //   for (let key in student_access) {
// //     if (student_access[key] === "suraj") {
// //       console.log("present in values");
// //       break;
// //     }
// //     console.log(`${key} = ${student_access[key]}`);
// //     if (typeof student_access[key] === "object" && student_access !== null) {
// //       update_recode(student_access[key]);
// //     }
// //   }
// // }
// // update_recode(student);

// //  now  copy the object in other object
// // let copy1 = {};

// let student = {
//   rkm: {
//     std_id: 1001,
//     std_name: "suraj",
//     std_class1: 9,
//     std_fee: 18901,
//   },
//   kbc: {
//     std_id: 1002,
//     std_name: "suraj",
//     std_class: 9,
//     std_fee: 18902,
//   },
//   rkdesai: {
//     std_id: 1003,
//     std_name: "mohit",
//     std_class: 9,
//     std_fee: 18903,
//   },
// };
// function fun2(obje1) {
//   for (const key in obje1) {
//     if (typeof obje1[key] === "string") {
//       console.log(key, ":", obje1[key]);
//     }
//     if (typeof obje1[key] === "object" && obje1[key] !== null) {
//       fun2(obje1[key]); //recursion
//     }
//   }
// }
// fun2(student);

// //  i want count the total fees
// // let total = 0;
// // for (let key in student) {
// //   total += student[key].std_fee;
// // }
// // // console.log(total);
// //  now i want to total the roll_no
// let total_tollno = 0;
// for (let key in student) {
//   total_tollno = total_tollno + student[key].std_id;
// }
// // console.log(total_tollno);
// // some thing uisng the loop

// function total(total_amount) {
//   totalresult = 0;
//   for (let key in total_amount) {
//     console.log(`${totalresult}+${total_amount[key].std_fee}=${totalresult}`);
//     totalresult = totalresult + total_amount[key].std_fee;
//     // totalresult = totalresult + total_amount[key].std_id;
//   }
//   return totalresult;
// }
// console.log(total(student));

// //  i want to add the new keys in the exting objects
// //  without using the function
// let total_key = 0;
// for (let key in student) {
//   // student[key].add = "i add new propety";
//   total_key++;
// }
// console.log(student, total_key);
// let count = 0;
// for (let key in student) {
//   count++;
// }
// console.log("Total students:", count);

// // now learing the methos of objects

// let experiment = {
//   rkm: {
//     std_id: 1001,
//     std_name: "suraj",
//     std_class1: 9,
//     std_fee: 18901,
//   },
//   kbc: {
//     std_id: 1002,
//     std_name: "suraj",
//     std_class: 9,
//     std_fee: 18902,
//   },
//   rkdesai: {
//     std_id: 1003,
//     std_name: "mohit",
//     std_class: 9,
//     std_fee: 18903,
//     experment: {
//       exp1: 1,
//       exp2: 2,
//       exp3: {
//         sec_level2: 1,
//         sec_level2: 2,
//       },
//     },
//   },
// };
// const trying = (data, values) => {
//   for (let key in data) {
//     console.log(key);
//     if (typeof data[key] === "object" && data[key] !== null) {
//       trying(data[key]);
//     }
//   }
// };
// trying(experiment);
// //  this for
// // this method give the key from the objects

// // keys
// let result = Object.keys(experiment2);
// for (let key in Object) {
//   console.log(key);
// }

// // objects.values give the only we take the form the object
// // entries
// let result2 = Object.entries(experiment2);
// console.log(result2);
// Filter values
//  now i am tring the help the
// let obje = {
//   expe1: 31,
//   exper2: 36,
//   exper3: 25,
//   exper4: {
//     inside: 36,
//     roll: 69,
//   },
// };
// function condition(obje) {
//   for (let key in obje) {
//     if (typeof obje[key] === "number" && obje[key] >= 25) {
//       console.log(obje[key]);
//     }

//     if (typeof obje[key] === "object" && obje[key] !== null) {
//       condition(obje[key]);
//     }
//   }
// }
// condition(obje);

// Copies properties from one or more source objects to a target object. It performs a shallow copy
//  copy the information from the other objects
// and making the objects
// // assign
// let student = {
//   name: "DD",
//   roll_no: 25,
// };

// let subjets = {
//   subjets: ["english", "himdi", "gujatri"],
// };
// let result3 = Object.assign(subjets, student);
// console.log(result3);
// let testing2 = Object.assign(student, subjets);
// console.log(testing2, "sub copy in students");

// when you want copy in side the empty objects {}
// //  shallow copy
// let obj4 = {
//   name: "deepak",
//   name2: "suraj",
//   roll_no: 52,
// };
// let clone = Object.assign({}, obj4);
// console.log(clone, " i am clone");

// //

// // this method give the key from the objects

// // keys
// let result = Object.keys(experiment2);
// for (let key in Object) {
//   console.log(key);
// }

// // objects.values give the only we take the form the object
// // entries
// let result2 = Object.entries(experiment2);
// console.log(result2);
// Filter values
// //  now i am tring the help the
// let obje = {
//   expe1: 31,
//   exper2: 36,
//   exper3: 25,
//   exper4: {
//     inside: 36,
//     roll: 69,
//   },
// };
// function condition(obje) {
//   for (let key in obje) {
//     if (typeof obje[key] === "number" && obje[key] >= 25) {
//       console.log(obje[key]);
//     }

//     if (typeof obje[key] === "object" && obje[key] !== null) {
//       condition(obje[key]);
//     }
//   }
// }
// condition(obje);

// Copies properties from one or more source objects to a target object. It performs a shallow copy
//  copy the information from the other objects
// and making the objects
// // assign
// let student = {
//   name: "DD",
//   roll_no: 25,
// };

// let subjets = {
//   subjets: ["english", "himdi", "gujatri"],
// };
// let result3 = Object.assign(subjets, student);
// console.log(result3);
// let testing2 = Object.assign(student, subjets);
// console.log(testing2, "sub copy in students");

// // when you want copy in side the empty objects {}
// //  shallow copy
// let obj4 = {
//   name: "deepak",
//   name2: "suraj",
//   roll_no: 52,
// };
// let clone = Object.assign({}, obj4);
// console.log(clone, " i am clone");

// Object.freeze()
// Makes an object immutable

// // hasOwn
// let obj6 = {
//   name: "deepak",
//   name2: "suraj",
//   roll_no: 52,
// };
// console.log(Object.hasOwn(obj6, "name"));

// should still be 3
let original3 = {
  name: "deepak",
  roll_n0: 36,
  std: {
    callage: "rkm collage",
    name: ["one", "two", "three"],
  },
};
function access(obje) {
  for (let key in obje) {
    if (typeof obje[key] === "string") {
      console.log(obje[key]);
    }
    if (typeof obje[key] === "object" && obje !== null) {
      access(obje[key]);
    }
  }
}
access(original3);
