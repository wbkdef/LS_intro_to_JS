console.log('\n__exercise 1__');
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!
greet();              // logs: undefined, world!
                      // should log: Hello, world!

 
console.log('\n__exercise 2__');
function greet(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!


// 3


console.log('\n__exercise 4__');
function calculateBMI(height_cm, weight_kg) {
  const bmi = weight_kg / (height_cm / 100) ** 2;
  return bmi.toFixed(2);
}
console.log(calculateBMI(180, 80)); // "24.69"


// 5


console.log('\n__exercise 6__');
function removeLastChar(s) {
  return s.slice(0, -1);
}
console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'


console.log('\n__exercise 7__');
const template = 'I VERB NOUN.';

sentence = (verb, noun)  =>  template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.


console.log('\n__exercise 8__');
let initGame = ()  =>  ({level: 1, score: 0});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);