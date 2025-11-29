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
let original = {
  name: "deepak",
  roll_no: 25,
};
let copy = {
  name: "rahul ",
  roll_no: 35,
};
// for (let key in copy) {
//   copy[key] = original[key];
//   console.log(copy[key]);
// }
for (let key in original) {
  copy[key] === original[key];
}
console.log(copy, " this now compy");
// now tring the update the
// let student = {
//   rkm: {
//     std_id: 1001,
//     std_name: "suraj",
//     std_class: 9,
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

// function update_recode(student_access) {
//   for (let key in student_access) {
//     if (student_access[key] === "suraj") {
//       console.log("present in values");
//       break;
//     }
//     console.log(`${key} = ${student_access[key]}`);
//     if (typeof student_access[key] === "object" && student_access !== null) {
//       update_recode(student_access[key]);
//     }
//   }
// }
// update_recode(student);

//  now  copy the object in other object
// let copy1 = {};

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

// ......................................................................................................................
// object  method

let experiment2 = {
  rkm: {
    std_id: 1001,
    std_name: "suraj",
    std_class1: 9,
    std_fee: 18901,
  },
  kbc: {
    std_id: 1002,
    std_name: "suraj",
    std_class: 9,
    std_fee: 18902,
  },
  rkdesai: {
    std_id: 1003,
    std_name: "mohit",
    std_class: 9,
    std_fee: 18903,
    experment: {
      exp1: 1,
      exp2: 2,
      exp3: {
        sec_level2: 1,
        sec_level2: 2,
      },
    },
  },
};

// this method give the key from the objects

// keys
let result = Object.keys(experiment2);
for (let key in Object) {
  console.log(key);
}

// objects.values give the only we take the form the object
// entries
let result2 = Object.entries(experiment2);
console.log(result2);
// Filter values
//  now i am tring the help the
let obje = {
  expe1: 31,
  exper2: 36,
  exper3: 25,
  exper4: {
    inside: 36,
    roll: 69,
  },
};
function condition(obje) {
  for (let key in obje) {
    if (typeof obje[key] === "number" && obje[key] >= 25) {
      console.log(obje[key]);
    }

    if (typeof obje[key] === "object" && obje[key] !== null) {
      condition(obje[key]);
    }
  }
}
condition(obje);

// Copies properties from one or more source objects to a target object. It performs a shallow copy
//  copy the information from the other objects
// and making the objects
// assign
let student = {
  name: "DD",
  roll_no: 25,
};

let subjets = {
  subjets: ["english", "himdi", "gujatri"],
};
let result3 = Object.assign(subjets, student);
console.log(result3);
let testing2 = Object.assign(student, subjets);
console.log(testing2, "sub copy in students");

// when you want copy in side the empty objects {}
//  shallow copy
let obj4 = {
  name: "deepak",
  name2: "suraj",
  roll_no: 52,
};
let clone = Object.assign({}, obj4);
console.log(clone, " i am clone");

// Object.freeze()
// Makes an object immutable

// hasOwn
let obj6 = {
  name: "deepak",
  name2: "suraj",
  roll_no: 52,
};
console.log(Object.hasOwn(obj6, "name"));

const searchInArray = (items, key, value) => {
  if (typeof items !== "object" || items === null) {
    throw new Error("Argument 1 is not a valid type");
  }
  if (typeof key !== "string") {
    throw new Error("Argument 2 must be of type string");
  }
  if (typeof value === "undefined") {
    throw new Error("Argument 3 cannot be undefined");
  }
  const res = [];
  for (let i = 0; i < items.length; i++) {
    const obj = items[i];
    if (obj[key] === value) {
      res.push(obj);
    }
  }
  return res;
};

const items = [
  {
    name: "Deepak",
    age: 19,
    state: "Gujarat",
    country: "IN",
  },
  {
    name: "Anmol",
    age: 20,
    state: "NYC",
    country: "US",
  },
  {
    name: "Anmol",
    age: 22,
    state: "Bihar",
    country: "IN",
  },
];

try {
  const matchesItems = searchInArray(items, "state", "NYC");
  console.log(matchesItems);
} catch (e) {
  console.log("An error thrown:-", e);
}

//  now we calculted the gst in on the basic on amunt

function gatRate(amoount)