const readlineSync = require('readline-sync');

const age = Number(readlineSync.question('What is your age? '));

console.log(`You are ${age} years old.`)

for (n of [10, 20, 30, 40]) {
  console.log(`In ${n} years, you will be ${n + age} years old.`);
}