/*
8 types
*/

//String
const name = "Sunil";
console.log(name);

//Number

const pi = 3.1415;
console.log(pi);

//BigInt
const int = BigInt("");
console.log(int);

//Undefined
let ex;
console.log(ex);

//Null
const x = null;
console.log(x);

//Boolean
const isMale = true;
const isFemale = false;
console.log(isMale, isFemale);

//Symbol
const person = Symbol("Sunil");
console.log(person);

//Object
const sunil = { name: "Sunil", age: 24, dob: "January 23 2000" };
console.log(sunil);

//Type Conversion / Type Coercion

// String => Number
const num = "8";
console.log(num);
const actualNum = Number(num); //Type Conversion
console.log(actualNum);
console.log(actualNum + 2);

// Number => String
const num2 = 8;
const stringNum = String(num2); //Type Conversion
console.log(stringNum + "2"); //string "8" + "2"
