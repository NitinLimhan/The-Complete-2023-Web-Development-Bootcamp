// var generateName = require("sillyname");
import generateName from "sillyname";
var sillyName = generateName();

// ES5 supported
console.log('My name is ' + sillyName + '.');

// ES6 supported
// console.log(`My name is ${sillyName}.`);

// To check the version of Javascript
// if (typeof let === "undefined") {
//     console.log("Using ES5 or earlier version of JavaScript");
//   } else {
//     console.log("Using ES6 or later version of JavaScript");
//   }

import generateSuperName from "superheroes";
const superName = generateSuperName.random();

console.log('I am ' + superName + '.');