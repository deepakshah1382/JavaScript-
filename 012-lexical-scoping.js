// -------------------- lexical
//  lexical for  var variable

// function variblescope() {
//   var scope = "var varible scope in the the function only";
//   {
//     var scope1 = "varible declear inside the bolck of a function";
//   }
//   console.log(scope);
//   console.log(scope1);
// }
// variblescope();
// console.log(scope, "out side the bolck");
// console.log(scope1, "outside fucntion ");

//  let varible
// let varible can acceess only the inside the block only

// function variblescope() {
//   let scope = "var varible scope in the the function only";
//   {
//     let scope1 = "varible declear inside the bolck of a function";
//   }
//   console.log(scope);
//   //   console.log(scope1);
// }
// variblescope();

// console.log(scope, "out side the bolck");
// console.log(scope1, "outside fucntion ");

//  some things happen in const varible also
// const variable can access only inside the block some like the let varible

function constaccess() {
  const a = "inside the function ";
  {
    const b = "inside block of a function";
    console.log(b);
  }
  console.log(a);
}
constaccess();
