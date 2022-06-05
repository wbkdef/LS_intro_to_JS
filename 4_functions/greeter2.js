// const readlineSync = require('readline-sync');

// const name = readlineSync.question("Please enter your name: ");
// console.log(`Hello, ${name}!`)


const readlineSync = require('readline-sync');

function getName(prompt) {
  return readlineSync.question(prompt);
}


const firstName = getName("Please enter your first name: ");
const lastName = getName("Please enter your last name: ");
console.log(`Hello, ${firstName} ${lastName}!`)