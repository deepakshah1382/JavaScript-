// in the javascript three type variable are there in this
// var (Old way — Avoid using in modern code)
// let (Modern and recommended for mutable values)
// const (Recommended for constant or immutable values)

// var
// Variables declared with var are hoisted (moved to the top of their scope).
// now we living
//  var  variable can access anywhere in the program
var name1 = "this for you ";
console.log(name1);
//  now we learing about the let variable
// It has block scope
//  let can access in the block only and this
//  we can not create same variable in that block
// It can be updated but cannot be re-declared in the same scope.
let can = "this for the let keyword";
console.log(can);

//  now we learing about  the the const variable in the
// Block-scoped & Immutable
//  in this we can not creating the  variable with same name
// we  can't change the values of that variable in this
const testing = "this for testing the ";
console.log(testing);
