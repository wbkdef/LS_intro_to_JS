
n = 4936;
digits = [];
while (n) {
  digits.push(n % 10);
  n = Math.floor(n / 10);
}
console.log("The digits are: " + digits.reverse())


console.log(Number('5') + 10);

console.log(`The value of 5 + 10 is ${Number('5') + 10}`)

const names = [
  "asta",
  "butterscotch",
  "pudding",
  "neptune",
  "darwin",
];
console.log(names);

const pets = {
  asta:	"dog", 
  butterscotch:	"cat", 
  pudding:	"cat", 
  neptune:	"fish", 
  darwin:	"lizard", 
};

console.log(pets);