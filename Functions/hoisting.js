console.log("Hoisitng");
//Hoisting is JavaScript's default behaviour to pull the variables/functions declaration to the top of the page during code compilation
//functions/Variables
//Variable define
// ES6
const a = "Sunil";
const b = "Shah";

//Variable call
console.log(a + b);

//ES5
e = "broad";
f = "way";
console.log(`${e}${f}`);
var e; //initialiation (e = undefined)
var f;

const result = sum(1, 2);
console.log(result);

function sum(a, b) {
  return a + b;
}
