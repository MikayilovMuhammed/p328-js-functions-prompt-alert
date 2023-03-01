// // String
// // Number
// // Boolean
// // Object
// // Null
// // Undefined
// // Symbol

// // var a = 5;

// // a = "salam";

// let b = "Salam P328";
// console.log("String value", b);

// b = 5.5;
// console.log("Number value", b);

// const c = 10;

// // c = "20";

// let isStudent = false;

// const arr = [5, 10, 1.1, "Salam", false, "salam"];

// const obj = {
//   name: "Muha",
//   surname: "Mikayilov",
//   isMarried: false,
// };

// console.log("Objects:", obj["isMarried"]);
// console.log("Objects:", obj.isMarried);

// obj.name = "Muhammed";
// obj.age = 23;

// // obj = { name: "s" };

// console.log(obj);

// console.log("Array:", arr);

// // let
// let d;

// console.log("Constant key", d);
// d = 5;
// console.log("Constant key - 2", d);

// var test;
// console.log(test);

// let test = "salam";

// if (true) {
//   let a = "Salam";
//   // console.log("salam");

//   console.log("", a);
// }

// if (true) {
//   let a = "salam";
//   console.log(a);
// }
// console.log("In condition", a);

// let b = "salam";
// console.log(b);

// let a = "Salam";
// // console.log("a", a);
// let a = 5;
// console.log("a-2", a);

// console.log(test);

// var test = "salam";
// console.log(test);
// var test = "Sagol";

// if (test == "salam") {
//   console.log("test");
// }

// console.log(test);

// var test;
// console.log(test);
// var test = "test";
// console.log(test);
// var test = "salam";
// console.log(test);

// const test = "5";

// if (test === "5") {
//   console.log("True - 1");
// }

// if (test === 5) {
//   console.log("True - 2");
// }

// function firstFunction() {
//   console.log("salam");
// }
// firstFunction();

// function secondFunction(a, b) {
//   console.log(a, b);
// }

// secondFunction(5 + 10, 5);

// console.log(a);
// const testArr = ["Salam", 5, 3];

// for (let i = 0; i < testArr.length; i++) {
//   console.log("i:", i);
// }

// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(5, 10));
// // console.log(sum(25, 10));
// // console.log(sum(25, 15));
// total();
// function total() {
//   console.log(sum(10, 5));
// }

// const anonimFunc = function () {
//   console.log("salam");
// };
// anonimFunc();

const arrowFunc = (a, b) => {
  console.log(a + b);
};

function outFunc() {
  function intoFunc() {
    console.log("salam");
  }
  // intoFunc();
}
// intoFunc();
outFunc();

// const a = "Salam";

// alert();
// const prompTest = prompt("Salam");

// function showPrompt() {
//   console.log(prompTest);
// }

// showPrompt();

const firstValue = Number(prompt("Birinci ededi daxil edin"));
const secondValue = Number(prompt("Ikinci ededi daxil edin"));
const operatorValue = prompt(" Operatoru daxil edin");

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

function result(a, b, operator) {
  switch (operator) {
    case "+":
      alert(sum(a, b));
      break;
    case "-":
      alert(sub(a, b));
      break;
    case "*":
      alert(mult(a, b));
      break;
    case "/":
      alert(devide(a, b));
      break;
    default:
      alert("Duzgun operator daxil edin");
      break;
  }
}

// console.log(typeof Number(firstValue));

// if (typeof firstValue === 'number' && typeof secondValue === 'number') {

// }

if (!isNaN(firstValue) && !isNaN(secondValue)) {
  console.log("Ssfds", result(firstValue, secondValue, operatorValue));
}

// console.log();

// arrowFunc(5, 5);
