// 1


console.log('\n Exercise 2');
console.log('confetti floating everywhere'.toUpperCase());


console.log('\n Exercise 3');
console.log(repeat(3, 'ha')); // 'hahaha'
function repeat(n_repeats, s) {
  arr = Array(n_repeats).fill(s);
  return arr.join('');
}


console.log('\n Exercise 4');
poem = `A pirate I was meant to be!
Trim the sails and roam the sea!`;
console.log(poem);


console.log('\n Exercise 5');
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';
console.log(string1.toLowerCase() === string2.toLowerCase());
console.log(string1.toLowerCase() === string3.toLowerCase());
console.log(string3.toLowerCase() === string2.toLowerCase());


console.log('\n Exercise 6');
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(byteSequence.includes('x'));


console.log('\n Exercise 8');
function isBlank(s) {
  return s.trim().length === 0;
}
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true


console.log('\n Exercise 9');
function capitalizeFirstLetter(word){
  return word[0].toUpperCase() + word.slice(1);
}
function toTitleCase(s) {
  return s.split(' ').map(capitalizeFirstLetter).join(' ');
}
console.log(toTitleCase('launch school tech & talk'));