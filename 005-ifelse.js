//  if, else, else if
// control the flow of your program
// there are if total three

// Write a program to check if a number is even or odd
let age = 18;
if (age >= 18) {
  console.log("are you egliable");
} else {
  console.log("you can't ");
}

// Write a program to check if a given number is positive, negative, or zero

let number = -320;
if (number > 0) {
  console.log("postive   nnumber");
} else if (number === 0) {
  console.log("number is ZERO");
} else {
  console.log("number is nagative");
}

// Write a program to check if a number is even or odd.

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Write a program that accepts three numbers as input and prints:

// "All numbers are equal" if all three are the same.
// "All numbers are different" if all three are unique.
// "Two numbers are equal" if only two numbers are the same.
function element(a, b, c) {
  if (a === b && b === c) {
    console.log("all the number are equal in this ");
  } else if (a !== b && b !== c && c !== a) {
    console.log("all number are equal");
  } else {
    console.log("two number are equal ");
  }
}

console.log(element(12, 12, 10));

// Create a grading system where the score determines both the grade and performance remarks
let marks = 90;
if (marks >= 90) {
  console.log("grade A-excellent");
} else if (marks >= 75) {
  console.log("grade B-verygood");
} else if (marks >= 60) {
  console.log("grade C-Good");
} else if (marks >= 40) {
  console.log("grade-D ");
} else {
  console.log("Fail");
}

// ATM Cash Withdrawal System
function atswithdrwa(amount, balance) {
  if (amount % 100 !== 0) {
    console.log("enter the invilde amount for ");
  } else if (amount > balance) {
    console.log("insufficent balance in  your account");
  } else {
    console.log("transtion is successful");
  }
}
console.log(atswithdrwa(1000000, 230000000));
console.log(atswithdrwa(150, 150));
console.log(atswithdrwa(3250, 500));

// Write a program that checks if three sides can form a valid triangle.
function trianglecondition(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    console.log("this valid triangle");
  } else if (a + b === c || b + c === a || a + c || b) {
    console.log("equal valid triangle");
  } else {
    console.log("not valid triangle");
  }
}
console.log(trianglecondition(10, 30, 40));

// Write a program that calculates the total price based on

function discountrate(price) {
  let discount;
  if (price >= 5000) {
    discount = price * 0.2;
  } else if (price >= 3000) {
    discount = price * 0.1;
  } else {
    discount = 0;
  }
  let totalprice = price - discount;
  {
    console.log(`totalprice:${totalprice}`);
  }
}
console.log(discountrate(50000));
console.log(discountrate(3500));

//  now we creating  find the greater number from the three number
let a = 30;
let b = 13;
let c = 12;

if (a > b && b > c && a > c) {
  console.log("A is grater number", a);
} else if (b > a && b > c) {
  console.log("B is grater number", b);
} else {
  console.log("c ", c);
}
