/* Loops
Syntax
1. For Loop
2. do ... while loop
3. While loop
*/

//Example Multiplication table

// for (begin step; condition; next step) {}
// Unary operator i++ i-- i+=1  i-=1

for (let i = 1; i <= 10; i++) {
  const result = 2 * i;
  console.log(`2 * ${i} = ${result}`);
}

let j = 1;
do {
  const result = 2 * j;
  console.log(`2 * ${j} = ${result}`);
  j++;
} while (j <= 10);

//while loop
let k = 1;
while (k <= 10);
{
  const result = 2 * k;
  console.log(`2 * ${k} = ${result}`);
  k++;
}
