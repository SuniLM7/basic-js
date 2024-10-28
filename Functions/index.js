console.log("functions");
//Main building block of a program

//write a fybctuib to calculate the sum of 2 numbers

//BASIC JS
// const a = 1;
// const b = 3;
// const sum = a + b;
// console.log(sum);

// // ES5
// //FUNCTION DECLARATION
// function add(a, b) {
//   const sum = a + b;
//   return sum;
// }

// //function call/execution

// const result = add(1, 3);
// console.log(result);

//Write a function to calcultate the area of rectangle (l * b)

// const l = 3;
// const w = 2;

// function area(l, b) {
//   const sum = l * b;
//   return sum;
// }

// const result = area(2, 3);
// console.log(result);

// ES6

// const addES6 => (a, b) {
//     const sum = a + b;
//     return sum;
//   };

// //function call/execution

//   const resultES6 = add(1, 3);
//   console.log(result);

/* Multiple type of functions
  1. parameterized Function
  2. Arrow function
  3. Default function
  4. Closure
  5. IIfes
  6. Callback function
  7. pure function
  8. anonymous function 
  9. explicit function
  10. implicit function*/

//parametrized function
// const sumP = ({ a, b, c }) => {
//   const sum = a + b + c;
//   return sum;
// };

// const resultP = sumP({ a: 1, b: 0, c: 3 });
// console.log(resultP);

// const sumP = ({ a, b, c }) => {
//   const sum = a + b + c;
//   return sum;
// };

// const resultP = sumP({ a: 2, b: 3, c: 4 });
// console.log(resultP);

// const sumP = ({ a, b, c }) => {
//   const sum = a + b + c;
//   return sum;
// };

// const resultP = sumP({ a: 3, b: 4, c: 5 });
// console.log(resultP);

//volume of cuboid
// const volume = ({ l, b, h }) => {
//   const result = l * b * h;
//   return result;
// };
// const resultVol = volume({ l: 3, b: 2, h: 2 });
// console.log(resultVol);

// const volumeC = ({ l, b, h }) => {
//   const volume = l * b * h;
//   return volume;
// };

// const resultV = volumeC({ l: 3, b: 2, h: 4 });
// console.log(resultV);

// //Arrow Function
// const FnName = (l, b) => {
//   const result = l * b;
//   return result;
// };

// const volumeArrow = ({ l, b, h }) => {
//   const result = l * b * h;
//   return result;
// };

//Default function
// If the value of the parameter has to be defined in the beginning, then we use default function

//Real world use case: Page List, Language Defaul set,...
// const welcomeUser = (userName = "user") => {
//   return `Welcome ${userName}`;
// };

// console.log(welcomeUser("Sunil"));
// console.log(welcomeUser("Bishal"));
// console.log(welcomeUser());

//write a default function to handle the language change
// const myLanguage = (languageName = "English") => {
//   return `This is your ${languageName}`;
// };

// console.log(myLanguage("English"));
// console.log(myLanguage("French"));
// console.log(myLanguage("Chinese"));
// console.log(myLanguage());

// const myCitizenship = (Citizenship = "Nepalese") => {
//   return `You are ${Citizenship}`;
// };

// console.log(myCitizenship("Nepalese"));
// console.log(myCitizenship("Indian"));
// console.log(myCitizenship("Australian"));
// console.log(myCitizenship());

//CLOSURE
//closure are the functions that retain access to the variables from their containing scope even after the parent functin has finished executing

// let val = 1;
// const counter = () => {
//   const result = val++;
//   console.log(result);
// };

// counter();
// counter();
// counter();
// counter();

// const counterModule = () => {
//   let count = 0;
//   return () => {
//     const result = count++;
//     return result;
//   };
// };
// const dashainCounter = counterModule();
// console.log(dashainCounter());
// console.log(dashainCounter());
// console.log(dashainCounter());
// console.log(dashainCounter());
// console.log(dashainCounter());

//3 USE CASES OF CLOSURES
//1. PARTIAL APPLICATION AND CURRYINH
//2. PRIVATE VARIABLES IN MODULES;setup privat varible inside the function like userPassword, env variables
// 3. EVENT HANDLING Eg Tracks button click (mouse)

//5. IIFEs (Immediately Invoked Functional Expressions)
// Function define
// const sum = ()=>{}
// Fn Call
// sum();
(() => {
  console.log("I am IIFEs");
})();

//Use Case: Run a script first in the website
//Use Case: DevOps: DevOps Engineer, Load the dummy data in the site

//6. Callback Function
// If a function is passed as a parameter, its called callback function

const printFn = (result) => {
  console.log(`callback multiplication result is ${result}`);
};

const multiply = ({ a, b, fn }) => {
  const res = a * b;
  fn(res); //printFn(res)
};
multiply({ a: 3, b: 4, fn: printFn });

//7. Pure function
//If the result doesnot change or the input, the function is called pure function
//Utilities Function (comma separator, Name Splitter, Date converter, km to m conveter)

//8. Anonymous Function

//If there is no name in the functin, its called Anonymous function

const hi = function () {
  console.log("hi");
};
hi();

const hello = () => {
  console.log("hello");
};

hello();

//9. Explicit Function
// const subtract = (a, b) => {
//   const result = a - b;
//   return result;
// };

const subtract = (a, b) => {
  return a - b;
};

//10. Implicit Functin
const sub = (a, b) => a - b;
const area = (l, b) => l * b;
const add = (a, b) => a + b;
console.log(area(3, 3));
