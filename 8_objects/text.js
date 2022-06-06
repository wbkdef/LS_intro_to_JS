let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}                             // => Bob
                              //    30
                              //    6 ft



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

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)){
    console.log(obj2[prop]);
  }
}         // => 3

console.log(Object.keys(obj2));

for (let prop of Object.keys(obj2)) {
  console.log(obj2[prop]);
}

console.log(Object.values(obj2));

for (let val of Object.values(obj2)) {
  console.log(val);
}

for (let [k, v] of Object.entries(obj2)) {
  console.log(k, v);
}