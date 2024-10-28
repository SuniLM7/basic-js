// Operators are used for handling multiple conditions at once
//Syntax: AND, OR, NOT
//Symbols: &&, ||, !
//es5

// const hasNagarita = confirm("Do you have a nagarita?"); //true / false
// const hasNID = confirm("Do you have a National ID?");
// const age = confirm("Are you above 18 years old?"); //true / false

// if (hasNagarita && age) {
//   alert("You are eligible to own a driving license");
// } else {
//   alert("You are still underage.");
// }

// (hasNagarita || hasNID) && age
//   ? alert("You are eligible")
//   : alert("You are underage");

const user = prompt("What is your username?");

// if (user != "Sunil") {
//   //   alert("Welcome" + user);  //String literals is used to dynamic variable print //welcom King
//   alert(`Welcome ${user}`);
// } else {
//   alert("Welcome admin");
// }
user != "Sunil" ? alert(`Welcome Sunil`) : alert(`Welcome  ${user}`);
