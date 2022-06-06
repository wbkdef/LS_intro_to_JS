// https://launchschool.com/books/javascript/read/objects

// 3
console.log('\nExercise 3');
let myArray = {0: 1, 1: 2, 2: 3, 3: 5, 'length': 4};
console.log(myArray);
console.log(myArray.length);


for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


// 4
console.log('\nExercise 4');
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
keysUpper = Object.keys(obj).map(k  =>  k.toUpperCase());
console.log(keysUpper);


// 5
console.log('\nExercise 5');
let myProtoObj = {
  foo: 1,
  bar: 2,
};
const myObj = Object.create(myProtoObj);
Object.assign(myObj, {'baz': 3, 'buzz': 'great'});
console.log(myObj);
console.log(myObj.foo);
for (let val of Object.values(myObj)) {
  console.log(`val is ${val}`);
}


// 8
console.log('\nExercise 8');
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj(objToCopy, keysToCopy = null) {
  if (keysToCopy === null) {
    keysToCopy = Object.keys(objToCopy);
  }
  copy = {}
  for (key of keysToCopy) {
    copy[key] = objToCopy[key];
  }
  return copy;
}


// 11
console.log('\nExercise 11');
obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj.bar[3].xyz = 606;
console.log(obj);