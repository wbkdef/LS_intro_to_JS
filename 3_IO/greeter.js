// const readlineSync = require('readline-sync');

// const name = readlineSync.question("Please enter your name: ");
// console.log(`Hello, ${name}!`)


const readlineSync = require('readline-sync');

const firstName = readlineSync.question("Please enter your first name: ");
const lastName = readlineSync.question("Please enter your last name: ");
console.log(`Hello, ${firstName} ${lastName}!`)