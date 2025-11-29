// // now learning the switch
// //  now plep
// let a = 100;
// let b = 0;
// let operator = "/";
// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(b !== 0 ? a / b : "invilde number");
//     break;
//   default:
//     console.log("invalid option");
// }

// //  some question using the function
// function calculater(a, b, operator) {
//   switch (operator) {
//     case "+":
//       console.log(a + b);
//       break;
//     case "-":
//       console.log(a - b);
//       break;
//     case "*":
//       console.log(a * b);
//       break;
//     case "/":
//       console.log(b !== 0 ? a / b : "invilde number");
//       break;
//     default:
//       console.log("invalid option");
//   }
// }
// console.log(calculater(10, 20, "+"));

// // Temperature Advice System
// //accoding to seasean wear cloth
// let temp = "clod";
// switch (temp) {
//   case "clod":
//     console.log("wearing the ballon cloth");
//     break;
//   case "wram":
//     console.log("wearing the lite cloth");
//     break;
//   case "monsoon":
//     console.log(" any things");
//     break;
//   default:
//     console.log("not to be wearing the cloth");
// }

// //  odd or even number

// let number = 5;
// switch (number) {
//   case number % 2 === 0:
//     console.log("Even Number");
//   case number % 2 === 0:
//     console.log("Odd number");
// }

// // now  creating a fare system in this qestion using sswitch statement
// let fare = 50;
// switch (fare) {
//   case 10:
//     console.log(`you fare amount is this:${fare}`);
//     break;
//   case 20:
//     console.log(`you fare amount is this:${fare}`);
//     break;

//   case 30:
//     if (fare <= 25 || fare >= 16) {
//       console.log(`you fare amount is this:${fare}`);
//     } else break;
// }

//  some question for with optimation solution

// let Distance = 10;
// switch (true) {
//   case Distance >= 0 && Distance <= 5:
//     console.log(`fare price:25`);
//     break;

//   case Distance >= 6 && Distance <= 15:
//     console.log(`fare price :30`);
//     break;
//   default:
//     console.log("accoding to the meter");
// }
//  creating a bank system for the transaction,deposit,withdraw

// let transaction = prompt(
//   "Enter the  type of transcation (deposit,withdraw, Balance):"
// ).toLowerCase();
// let Amount = parseInt(prompt("enter the Amount"));
// let Balance = 2000;
// switch (transaction) {
//   case "deposit":
//     Balance += Amount;
//     document.writeln("Deposit is successfuly    new balance :", Balance);
//     break;
//   case "withdraw":
//     if (Balance >= Amount) {
//       Balance += Amount;
//       document.writeln("withdraw is successfuly NEW balance ", Balance);
//     } else {
//       document.writeln("balance is insufficent");
//     }
//     break;
//   case "Balance":
//     document.writeln("current Balnace", Balance);
//     break;
//   default:
//     document.writeln("Not a valid transaction");
// }

//  now we crating the elecrcity

// let usertype = prompt(
//   "enter the type of Bill(commercial,industrial,residential)"
// ).toLocaleLowerCase();
// let unit = parseFloat(prompt("enter the unit comsumed"));
// let latepay = parseInt(
//   prompt("enter the date or day for let (if you payed on the time enter 0)")
// );
// let billAmount;
// switch (true) {
//   case unit >= 0 && unit <= 100:
//     billAmount = unit * 3;

//     document.writeln(" payable Amount ", billAmount);
//     break;
//   case unit >= 101 && unit <= 300:
//     billAmount = unit * 5;
//     document.writeln(" payable Amount ", billAmount);
//     break;
//   case unit >= 301 && unit <= 500:
//     billAmount = unit * 8;
//     document.writeln(" payable Amount ", billAmount);
//     break;
//   case unti > 500:
//     billAmount = unit * 10;
//     document.writeln(" payable Amount ", billAmount);
//     break;
//   default:
//     document.writeln("invalid unit  `more than zero`");

// //  this wiil chack the type of bill
// let extercharge = 0;
// switch (usertype) {
//   case "residential":
//     extercharge = 0;
//     break;
//   case "commercial":
//     extercharge = 0.1;
//     break;
//   case "industrial":
//     extercharge = 0.2;
//     break;
//   default:
//     document.writeln("please enter the type");
// }
// billAmount += billAmount * extercharge;
// if (latepay > 15) {
//   billAmount *= 0.5;
//   document.writeln("bill shuld pay on the time");

//  now we creating the exprinece in the job

// function chakingexprine(exprinece, role) {
//   if (exprinece < 0) {
//     document.writeln("invalid exprience ");
//   }
//   if (role === "manager") {
//     return "team leader";
//   }

//   let category;
//   switch (true) {
//     case exprinece === 0:
//       category=("inter");
//       break;
//     case exprinece > 1 && exprinece <= 3:
//       console.log("junior devepoler");
//       break;
//     case exprinece > 3 && exprinece <= 6:
//       console.log("mid-level devepoler");
//       break;

//     case exprinece > 6 && exprinece < 10:
//       console.log("senior");
//       break;
//     default:
//       console.log("not egliable");
//   }
//   return role === "hr" ? "hr excetive" : category;
// }
// console.log(chakingexprine(0, "hr"));

// now creating a system for season

function getseasean(number) {
  let seasean;
  switch (number) {
    case 1:
      seasean = "summer";
      break;
    case 2:
      seasean = "winter";
      break;
    case 3:
      seasean = "monsoon";
      break;
    case 4:
      seasean = "fali";
      break;
    default:
      seasean = null;
  }
  return (number > 0 && number <= 4) || seasean === null ? seasean : "invalid";
  // if (seasean) {
  //   return seasean;
  // } else {
  //   console.log("invaild season");
  // }

  // return seasean ? seasean : "invilad";
}
console.log(getseasean(2));

//  now we creating the holiday system
function holidaysystem(daynumber, isholiday) {
  if (isholiday) {
    return " it is holiday ";
  }
  if (daynumber > 1 || daynumber <= 7) {
    return "not a holidya";
  }
  if (daynumber === 6 || daynumber === 7) {
    return "weeked ' relax mode' ";
  }
  let massage;
  switch (daynumber) {
    case 1:
      massage = " now week are start ";
      break;
    case 5:
      massage = "now  week or near to come";
      break;
    default:
      massage = "wrokday ";
  }
  return massage;
}
console.log(holidaysystem(5, false));
console.log(holidaysystem(4, true));
console.log(holidaysystem(7, false));

//  now creating  system for calcuting the fare of bike , car , bus;

function calculaterfare(Distance, vehicaletype, ispeakhour) {
  if (Distance < 0) {
    return "invalid distance";
  }
  // using the the switch case using cheaking the vehicaletype
  let basefare;
  switch (vehicaletype) {
    case "bike":
      basefare = 10;
      break;
    case "car":
      basefare = 5;
      break;
    case "bus":
      basefare = 3;
      break;
    default: {
      return "invalid type of vehicale";
    }
  }
  let toatlfare = Distance * basefare;
  if (ispeakhour) {
    toatlfare = toatlfare * 1.2;
  }
  //  this for fix price for the bike and car minmum  fare be apply
  if (vehicaletype !== "bus" && toatlfare < 20) {
    toatlfare = 20;
  }
  return toatlfare;
}
console.log(calculaterfare(1, "bike", 20));

//  now we creating the the hotal managent system
function commandhandle(command, logined, hasbook) {
  let cmd = command.toLowercase();
  switch (true) {
    case (cmd = "book" && logined):
      console.log("book  your for you");
      break;
    case (cmd = "book" && !logined):
      console.log("book  your for you");
      break;
  }
}
