// //Statement (conditon check)

// //ES5
// //1. If else, 2. switch case

// // 1. If Else Statement

// //Syntax
// // if (condtion) {
// //   //do this
// // } else {
// //   //do that
// // }

// //write a program to check if user is male or female and alert on the basis of their gender

// const gender = confirm("Are you male?");
// console.log(gender);
// if (gender) {
//   alert("You are male");
// } else {
//   alert("you are female");
// }

// //Switch case (to check multiple conditons)
// const day = prompt("What day is today");
// switch (day) {
//   case "sunday":
//     alert("Today is Sunday");
//     break;
//   case "Monday":
//     alert("Today is Monday");
//     break;
//   case "Tuesday":
//     alert("Today is Tuesday");
//     break;
//   case "Saturday":
//     alert("Today is Saturday");
//     break;
//   default:
//     alert("Invalid day");
// }

//write a js program to check the user grade
// >80 => Your grade is distinction
//70-80=> Your grade is A
//<70 => You failed

// const userScore = Number(prompt("What percentage did you get?"));

// switch (true) {
//   case userScore > 80:
//     alert("Your grade is Distinction");
//     break;
//   case userScore >= 70:
//     alert("Your grade is A");
//     break;
//   default:
//     alert("You failed");
// }
//
//         break;
//     case (score>= 70);
//         console.log ("Your grade is A");
//         break;
//     default:
//             console.log ("You failed");
//             break;
// }

//ES6
//Ternary Operator
//Write a ternary operator to alert gender

// const myGender = prompt("What is your gender (m/f?");
// // if (myGender) {
// //   alert("You are male");
// // } else {
// //   alert("you are female");
// // }

// //myGender === "m" ? alert("You are male") : alert("you are female");

// //switch case using ternary operator

// // g = m
// // g= f
// //g = o
// //g = random value

// myGender === "m"
//   ? alert("You are male")
//   : myGender === "f"
//   ? alert("You are female")
//   : myGender === "o"
//   ? alert("You are Other")
//   : alert("Wrong Gender");

//write a js program to tell the part of the day using the time provided by user
//Good Morning => 5-12
// Good Afternoon => 12-3
// Good Evening = 3 - 6
// Good night = 6 - 11

//Using ES5

// const time = Number(prompt("Enter the time in hours (0-23)"));
// switch (true) {
//   case time >= 5 && time < 12:
//     alert("Good Morning");
//     break;
//   case time >= 12 && time < 15:
//     alert("Good afternoon");
//     break;
//   case time >= 15 && time < 18:
//     alert("Good evening");
//   case time >= 15 && time < 18:
//     alert("Good evening");
//     break;
//   default:
//     alert("Enter correct time");
// }

// Ternary operator
const time = Number(prompt("Enter the time in hours (0-23)"));
const partOfDay =
  time >= 5 && time < 12
    ? alert("Good morning")
    : time >= 12 && time < 15
    ? alert("Good afternoon")
    : time >= 15 && time < 18
    ? alert("Good evening")
    : time >= 18 && time < 23
    ? alert("Good night")
    : alert("Please enter a valid time");
