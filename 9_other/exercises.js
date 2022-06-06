
console.log("Exercise 4");
console.log(Math.max(2, 6));
console.log(Math.max(...[1, 6, 3, 2, 6]));
console.log(Math.max(...[-1, -6, -3, -2, -1]));
console.log(Math.max(...[2, 2, 2]));


console.log("\nExercise 6");
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
console.log(allMatches(words, /lab/i)); // => ['laboratory', 'flab', 'elaborate']

console.log(/lab/);
console.log(/lab/ + /rin/);

function allMatches(words, regex) {
  matches = words.filter(w  =>  regex.test(w));
  return matches;
}


console.log("\nExercise 8");
function isNotANumber(arg) {
  return arg !== arg;
}

console.log(isNotANumber("hello"));
console.log(isNotANumber(Number.NaN));
console.log(isNotANumber(5));
console.log(isNotANumber(0));