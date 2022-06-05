const readlineSync = require('readline-sync');

const n1 = parseFloat(readlineSync.question('Enter a number: '));
const n2 = parseFloat(readlineSync.question('Enter another number: '));

console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

function multiply(a, b) {
  return a * b;
}
