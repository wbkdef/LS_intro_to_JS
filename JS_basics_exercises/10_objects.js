console.log('\n__exercise 1__');
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);


console.log('\n__exercise 2__');
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};
console.log(jane.location.country);


console.log('\n__exercise 3__');
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// 'age' and 'favorite food'
fido.age = 4;  // Add property 'age'.
fido['favorite food'] = 'meat';  // Add property 'favorite food'.
console.log(fido);


console.log('\n__exercise 4__');
jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hej, ${name}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!


// 5
// 6


console.log('\n__exercise 7__');
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
const keys = Object.keys(vehicle);
console.log(keys);


console.log('\n__exercise 8__');
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
const nestedPerson = [];
for (let [key, val] of Object.entries(person)) {
  nestedPerson.push([key, val]);
}
console.log(nestedPerson);

console.log(Object.entries(person));


console.log('\n__exercise 9__');
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
person = {};
for (let [key, val] of nestedArray) {
  person[key] = val;
}
console.log(person);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
console.log(Object.fromEntries(nestedArray));


console.log('\n__exercise 10__');
function clone(obj) {
  return Object.assign({}, obj);
}

person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

