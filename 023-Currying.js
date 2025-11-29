// Currying is a technique in JavaScript (and other languages) where a function doesn’t take all arguments at once.
// Instead, it takes one argument at a time, and returns a new function that takes the next argument, and so on.

//  now i  creating addtion
function proceess(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return a + b + c + d;
      };
    };
  };
}
console.log(proceess(2)(2)(3)(2));

// qestion 2
function hello(sayHello) {
  return (name) => {
    return function (massage) {
      return sayHello + name + massage;
    };
  };
}
console.log(hello("hii")("deo")("now life like"));
// now i  creating the curry fucntin that proving the discoutn
function process(totalAmount) {
  return (discontAmount) => {
    let Discount = (totalAmount / 100) * discontAmount;
    let result = totalAmount - Discount;
    return result;
  };
}
console.log(process(1000)(20));

//  now we calcultel the GST
function textcalcuter(Amount) {
  return (TaxAmount) => {
    let textAmount = (Amount / 100) * TaxAmount;
    let totalAmount = Amount + textAmount;
    return totalAmount;
  };
}
console.log(textcalcuter(1000)(18));

//  now some calcuter creating for  calcutered type of Gst  in that have three type 1)  normal-good,less-expensive, more-expensive
function taxcalcuter(Amount) {
  return (Taxtype) => {
    if(Taxtype===){

    }
    return (TaxAmount) => {};
  };
}
