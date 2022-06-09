// const readLineSync = require('readline-sync');
// const ans = readLineSync.question("What's your name?");
// console.log(`Hello ${ans}`);


Array.isArray
Object.freeze()


// How to iterate through own keys
console.log("How to iterate through own keys");
let bob = {A: 1, B: 3};
let bobStudent = Object.create(bob);
bobStudent.C = 7;
bobStudent.D = "hi";
for (const key of Object.keys(bobStudent)) {
  console.log(key);
  if (bobStudent.hasOwnProperty()) {
    
  }
}



console.log("searches an array of strings for every element that matches the regular expression");
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
console.log(words.filter(w  =>  /lab/.test(w))); // => ['laboratory', 'flab', 'elaborate']


for (char of "hell") {
  console.log(char);
}


console.log("hell".match(/l/));



// console.log("\n Use 'readline-sync'");
// const readLineSync = require('readline-sync');
// readLineSync.question('name?');


console.log("\n Iterating properties of object with/without prototype's");
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}         // => 3
          //    4
          //    1
          //    2

console.log("\n");
for (let prop of Object.keys(obj2)) {
  console.log(obj2[prop]);
}

console.log("\n");
for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)){
    console.log(obj2[prop]);
  }
}


// console.log(Object.assign({}, obj1, obj2));;

