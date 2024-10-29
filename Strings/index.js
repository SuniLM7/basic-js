//Write a js function to join two words

//write a javascriptimplicit function to convert temparatures to and from Celsius, Fahrenheit. [Formula: c/5 = (f-32)/9 (where c= temperature in celsius and f = temperature in fahrenehit)
// expected output: 60 degreC is 140 degreeF
//45degreeF is 7.2222222 degree c]

// const tempConverter = (deg, type = "C") =>
//   type === "C" ? `${(9 / 5) * deg + 32}F` : `${(5 * deg - 32 * 5) / 9}C`;
// console.log(tempConverter(45, "f"));

// const convertTemperature = (temp, unit) => {
//   return unit === "C"
//     ? `${temp} degrees C is ${(temp * 9) / 5 + 32} degrees F`
//     : `${temp} degrees F is ${(((temp - 32) * 5) / 9).toFixed(7)} degrees C`;
// };

// console.log(convertTemperature(60, "C")); // Output: 60 degrees C is 140 degrees F
// console.log(convertTemperature(45, "F")); // Output: 45 degrees F is 7.2222222 degrees C

//Write a js function that hides phone to prevent data leakage, convert 9845160080 to 984.....80

// const hidePhoneNumber = (phoneNumber) => {
//   const phoneStr = String(phoneNumber);

//   const firstPart = phoneStr.slice(0, 3);
//   const lastPart = phoneStr.slice(-2);

//   return `${firstPart}.....${lastPart}`;
//   const hiddenNumber = hidePhoneNumber(9845160080);
//   console.log(hiddenNumber);
// };

//write a js function that generates slug using title
//"Sunil Shah" => "sunil-shah"

// const slugify = (str) => {
//   const lowerResult = str.toLowerCase();
//   const replaceTex = lowerResult.replaceAll(" ", "-");
//   console.log(replaceTex); // Log the result
//   return replaceTex; // Return the slugified string
// };

// // Example usage
// console.log(slugify("Sunil Prasad Shah")); // Output: sunil-prasad-shah

// const slugify = (str) => {
//   const lowerResult = str.toLowerCase();
//   console.log(lowerResult);
//   const replaceTex = lowerResult.replaceAll(" ", "-");
//   console.log(replaceTex);
// };
// slugify("Sunil Prasad Shah");

//Write a js function to generate the proper case for the given name
//sunil prasad shah => Sunil Prasad Shah

// const toProperCase = (str) => {
//   const lowerResult = str.toLowerCase();
//   console.log(lowerResult);
//   const properCaseResult = lowerResult.replace(/(?:^|\s)\S/g, (match) =>
//     match.toUpperCase()
//   );
//   console.log(properCaseResult);
// };

// toProperCase("sunil prasad shah");

// write a implicit js function that formats the number in following format
// 10000  => 10,000
//check locale format your country name developer,mozilla.org

const numberFormatter = (text, format = "en-IN") =>
  Number(text).toLocaleString(format);

console.log(numberFormatter(1000000));
