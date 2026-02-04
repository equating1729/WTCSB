"use strict";
//user input from terminal-creating setup for input
//require- used to import files/ package
//Interface- ek interface create krenge
// const r1 = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// //qustion(query, callbackfunction ki kya krnah query par)
// r1.question("Enter something: ", (answer) => {
//   console.log("You entered: ", answer);
//   r1.close(); //async
// });
// r1.close();

//Q1:-
// function calculator(a, b) {
//   const add = (a, b) => a + b;
//   const subtract = (a, b) => a - b;
//   const multiply = (a, b) => a * b;
//   const division = (a, b) => a / b;

// }
// const calculator = () => ({
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   mul: (a, b) => a * b,
//   div: (a, b) => (b == 0 ? "Error" : a / b),
// });
// console.log(calculator().add(4, 5));
// console.log(calculator().subtract(4, 5));
// console.log(calculator().mul(4, 5));
// console.log(calculator().div(4, 5));
//Q2:-
function calculator(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return b == 0 ? "Error" : a / b;
  }
}
calculator(add);
