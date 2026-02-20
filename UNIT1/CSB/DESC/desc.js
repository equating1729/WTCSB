"use strict";
const student = {
  // name: "Ishika",
  age: "21",
  address: {
    city: "Gzb",
    state: "UP",
  },
};
// const name = student.name;
// const age = student.age;
// const {
//   name: stname = "Ish",
//   age,
//   address: { city },
// } = student;
// console.log(stname, age, city);
// function displayStudent({ name = "Ish", age }) {
//   console.log(`My name is ${name} and age is ${age}`);
// }
// displayStudent(student);
let numbers = [10, 20, 30];
let a,
  b,
  c = numbers; //equal to se pehele jo variable h usme sara assign kr dega
console.log(a, b, c);
let data = [1, 2];
let [e = 10, d = 20] = data;
console.log(e, d);

let p = 20;
let q = 10;
(p, (q = q), p); //no swaping if we removed square brackets
console.log(p, q);

let colors = ["red", "green", "blue"];
let [, secondColor] = colors;
console.log(secondColor);
