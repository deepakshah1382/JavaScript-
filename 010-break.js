//
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0 && i > 1) {
//     console.log(i);
//     break;
//   }
//   console.log(i);
// }
// console.log("loop end");

//  using the while loop
let i = 0;
while (i <= 50) {
  console.log(i, "before the division");
  if (i % 2 !== 0 && i > 1) {
    console.log(i);
    break;
  }
  i++;
}
