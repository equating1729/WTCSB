// "use strict";
// console.log("Harshit is mad");
// const ans = prompt("is harshit mad?");
// if (ans === "yes") console.log("Yes YOU ARE RIGHT");
// else console.log("open your eyes!!!!!!!");
// document.write("from js");
// a=9;//sloppy mode
// function print() {
//   if (true) {
//     let x = 10;
//     console.log(x);
//   }
//   // console.log(x);
// }
// print();
// var user = "Admin";
// function showUser() {
//   console.log("user from file1", user);
// }
// showUser();
const user = {
  name: "aj",
  age: 22,
  welcome() {
    console.log(`${this.name} is the username`);
    console.log(this);
  },
};
const f = user.welcome;
console.log(f());
// user.name = "Ajay";
// user.welcome();
