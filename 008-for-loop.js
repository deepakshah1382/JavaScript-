// loop are use for the when you want some wrok repeted many time that time using the loop
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//let n = 2;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
//   let row = "";
//   let num = 0;
//   console.log("third loop giong to satrt");
//   for (let j = 1; j <= n; j++) {
//     row = row + "*";
//     for (let k = 0; k <= n; k++) {
//       console.log(` ${num}+${k}`);
//       num = num + k;
//       console.log(`  ${num}= ${num}+${k}`);
//     }
//   }
//   console.log(num);
//   console.log(row);
// }   sum = sum + i;
// }
// console.log(sum);

//  now we learing the reverse the the loop
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

// printing the suquer start

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     document.write(j, "#");
//   }
// }

//  now we pritning the table of using the for loop
// let table = 5;
// for (let i = 1; i <= 10; i++) {
//   document.writeln(i * table);
// }

// let table = prompt("enter the table which you want to print the ");
// for (let i = 1; i <= 10; i++) {
//   let Ans = i * table;
//   document.writeln(`${i}*${table}=${Ans}`);
// }

// now priting the the squer triangle

//

//  now we tring to  triangle
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   let row = "        ";
//   console.log(i);
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//     // console.log(j);
//   }
//   console.log(row);
// }

// now we we printing the table using the for loop in the console windon

// let n = 0;
// for (let i = 10; i > n; i--) {
//   console.log(i);
// }

// now i tring all the condtiion

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     cons
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// }

//  we want to print the  star piramite in  in this question

// for (let i = 0; i <= 10; i++) {
//   console.log("  ");
//   for (let j = 0; j <= i; i++) {
//     console.log("*");
//   }
// }
//  now learing the  condition
// for (let i = 0; i <= 10; i++) {
//   console.log(i, "thiss the frist loop");
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("this for the i itration", i);
//   for (let j = 0; j <= i; j++) {
//     console.log(j);
//   }
//   console.log("loop itration finshion");
// }

//  now i want to print this in resver of this

// for (let i = 0; i <= 10; i++) {
//   console.log(i, "testing the");
//   for (let j = 10; j > 1; j--) {
//     console.log(j, "second this ");
//   }
// }

// //  let interive
// var a = 200;
// {
//   var a = 400;
// }

// let b = a;
// {
//   let b = -400;
// }
// console.log(a);

//  factorial of this
// let n = 5;
// factorial = 1;
// for (let i = 1; i <= 5; i++) {
//   factorial *= i;
// }
// console.log(factorial);
//  this will proving the the sum of odd or even number
// let n = 5;
// evennumbersum = 0;
// oddnumbersum = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 === 0) {
//     evennumbersum += i;
//   } else if (i % 2 !== 0) {
//     oddnumbersum += i;
//   }
// }
// console.log(evennumbersum, "sum of evennumber");
// console.log(oddnumbersum, "sum of oddnumber");

//how to count the number digit number in the javascript
// let n = 100;
// let digitcount = 0;
// for (i = 0; i <= n; i++) {
//   if (typeof [i] === "number" && typeof [i] === "undefined") {
//     digitcount += i;
//   }
//   digitcount++;
// }
// console.log(digitcount);

//  now count the number

// function countnumber(Array) {
//   let count1 = 0;
//   for (let i = 0; i < Array.lenght; i++) {
//     if (typeof Array[i] === "number") {
//       count1++;
//     }
//   }
//   return count1;
// }
// console.log(countnumber([1, 2, "deepak", "let", "hello"]));

// function countNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countNumbers([1, "hello", 3, true, 5])); // Output: 3
// console.log(countNumbers([10, 20, 30, 40])); // Output: 4

//  count the number form the arrys
// function countnumber(arr) {
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countnumber([1, 2, 3, "friend "]));
//  some things with other throught

// function countuptoN(n) {
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     if (typeof i === "number" && i > 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countuptoN(10));

//  now   greates number in this

// function greaterNumber(n) {
//   maxdigit = 0;
//   while (n > 0) {
//     digit = n % 10;
//     if (digit < maxdigit) {
//       maxdigit = digit;
//     }
//     n = Math.floor(n / 10);
//   }
//   return maxdigit;
// }
// console.log(greaterNumber(1254897));

//  lowest number

// function lowestnumber(n) {
//   lowestno = 0;
//   while (n > 0) {
//     digit = n % 10;
//     if (lowestno > digit) {
//       lowestno = digit;
//     }
//     n = Math.floor(n / 10);
//   }
//   return lowestno;
// }

// console.log(lowestnumber(1254320));
// function smallestno(number) {
//   if (number.length === 0) {
//     return undefined;
//   }
//   let smallno = number[0];
//   for (let i = 1; i < number.length; i++) {
//     if (number[i] < smallno) {
//       smallno = number[i];
//     }
//   }
//   return smallno;
// }
// let numberarrys = [1, 35, 8, 0, 76];
// console.log(smallestno(numberarrys));

//  now we creating for chaking the prime number
// for (i = 1; i <= 10; i++) {
//   if (i > 2)
//     for (let j = 1; j <= 10; j++) {
//       if (i % j !== 0) {
//       } else console.log("not a prime ");
//       console.log(`${i} ${j}=&{prime number}`);
//     }
// }

// function primenumber(number) {
//   let ans = [];
//   for (let i = 0; i < number.length; i++) {
//     if (number > 2) {
//       if (number[i] % i == !0) {
//         ans.push = number[i];
//       }
//     }
//     // console.log(number[i]);
//   }
// }

// let dataset = [2, 8, 9, 12, 7, 9, 11];
// console.log(primenumber(dataset));

//  there total four condtion are there 1
// const isPrime = (num) => {
//   if (num === 1 || num < 1) {
//     return false;
//   } else if (num <= 3) {
//     return true;
//   } else if (num % 2 === 0) {
//     return false;
//   }
//   const sqrt = Math.sqrt(num);
//   for (let i = 3; i <= sqrt; i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// console.log(
//   [49, 7, 13, 45, 67, 90, 71, 73, 79, 24, 78, 45].filter((v) => isPrime(v)),
//   isPrime(50)
// );

// let number = 45;
// if (number === 1) {
//   console.log(`${number} number is not a prime or not a composite`);
// } else if (number < 1) {
//   console.log(`${number} " this for nag"`);
// } else {
//   let isPrime = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`this is prime number ${number}`);
//   } else {
//     console.log(`${number},not a not a prime number`);
//   }
// }

// function primeno(number) {
//   if (number === 1 || number < 1) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// }
// console.log(primeno(25));
// console.log(primeno(7));

// function primeno(number) {
//   if (number === 1 && number < 1) return flase;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       console.log();
//     }
//   }
// }

// const getPrimes = (fromNum, toNum) => {
//   const res = [];
//   for (let i = fromNum < 0 ? 0 : fromNum; i <= (toNum < 0 ? 0 : toNum); i++) {
//     if (isPrime(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// };

// for (const n of getPrimes(0, 100)) {
//   console.log(n);
// } armstrong number
//

// const getDigitNumber = (number) => {
// 160
// let n = 0;
// let l = number;
// while (l > 0) {
//   l = Math.floor(l / 10);
//   console.log(l);

//   n++;
// }

//   return String(number).length;
// };

// const getArmstrongNumber = (number) => {
//   const str = String(number);
//   let sum = 0;
//   console.log(str);
//   for (let i = 0; i < str.length; i++) {
//     sum += Math.pow(+str[i], str.length);
//   }
//   return sum;
// };

// console.log(getArmstrongNumber(4));

// random
// const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr[Math.floor(Math.random() * arr.length)]);

// for (let i = 0; i < 100; i++) {
//   const rand = Math.floor(Math.random() * 6) + 1;
//   if (rand === 6) {
//     console.log("Got 6");
//   } else {
//     // console.log(rand);
//   }
// }
//make the ludo gamaing the take conut the number
// const number = [1, 2, 3, 4, 5, 6];
// console.log(number[Math.floor(Math.random() * number.length)]);
// console.log(number.length, "this length");

// for (let i = 0; i <= 10; i++) {
//   const ans = Math.floor(Math.random() * 5);
//   if (ans % 2 === 0) {
//     console.log("all this number ", ans);
//   } else {
//     console.log("odd number", ans);
//   }
// }

//  NOW WE TRING TO printing the random number from the from the min and max

// function randomno(min, max) {
//   for (let i = 10; i < 100; i++) {
//     console.log(Math.floor(Math.random() * (max - min) + 1) + min);
//   }
// }
// console.log(randomno(10, 100));

//

// i am to priting the number
// function primeno(num) {
//   if (num === 0 || i < 1) {
//     return flase;
//   }
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       return flase;
//     }
//     return ture;
//   }
// }
// console.log(primeno(25));

function forprime(number) {
  if (number === 0 || number < 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(forprime(21));

function arryaIteam() {}

let arrys = [1, 2, 34, 5, 6];
// console.log(Math.random(arrys.length));
const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr[Math.floor(Math.random() * arr.length, "this")]);
// console.log(Math.floor[Math.random() * arrys.length]);

console.log(arrys[Math.floor(Math.random() * arrys.length)]);
