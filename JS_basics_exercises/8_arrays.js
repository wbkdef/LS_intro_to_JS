// 1
// 2

console.log('\n__exercise 3__');
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal');
console.log(energy);


console.log('\n__exercise 4__');
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split(''));


// 5
// 6
// 7


console.log('\n__exercise 8__');
function filter(input) {
  // Is input an array?
  console.log(Array.isArray(input));
}
filter({1:2});
filter('hello');
filter(5);
filter([5, 3]);


console.log('\n__exercise 9__');
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
function contains(s, strings) {
  for (const s2 of strings) {
    if (s === s2) {
      return true;
    }
  }
  return false;
}
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false


// 10
// 11