let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (v of myArray) {
  if (v % 2 === 0) {
    console.log(v)
  }
}

myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
for (a of myArray) {
  console.log(a.filter(n  =>  n % 2 === 0));
}

myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
console.log(myArray.map(n => n % 2 === 0 ? 'even' : 'odd'))


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function findIntegers(arr) {
  return arr.filter(e  =>  Number.isInteger(e))
}
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(arr) {
  return arr.map(s  =>  s.length).filter(n  =>  n % 2)
}
console.log(oddLengths(arr)); // => [1, 5, 3]


let array = [3, 5, 7];
function sumOfSquares(arr) {
  return arr.reduce((pv, cv)  =>  pv + cv**2, 0);
}
console.log(sumOfSquares(array)); // => 83


arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths2(arr) {
return arr.reduce(function(a, s) {+
    if (s.length % 2 === 1) {
      a.push(s.length);
    }
    return a
  }, []);
}
console.log(oddLengths2(arr)); // => [1, 5, 3]


let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
console.log(`3 is ${numbers1.includes(3) ? '' : 'not '}in [${numbers1}]`);
console.log(`3 is ${numbers2.includes(3) ? '' : 'not '}in [${numbers2}]`);
console.log(`3 is ${numbers3.includes(3) ? '' : 'not '}in [${numbers3}]`);

arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606;
console.log(arr);