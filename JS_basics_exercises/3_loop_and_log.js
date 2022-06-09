
// 1
console.log('\n Exercise 1')
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
  // include your code here
}


// 2
console.log('\n Exercise 2')
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}
console.log('Launch!');


// 3
console.log('\n Exercise 3')
let greeting = 'Aloha!';
for (let i = 0; i < 3; i++) {
  console.log(greeting);
}


// 4
console.log('\n Exercise 4')
for (let i = 1; i <= 100; i++) {
  // process.stdout.write(i*2);
  console.log(i*2);
}


// 5
console.log('\n Exercise 5')
let array = [1, 2, 3, 4];
let index = 0;
while (index < array.length) {
  console.log(array[index]);
  index += 1;
}


// 6
console.log('\n Exercise 6')
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (city of cities) {
  if (city === null) {
    continue;
  }
  console.log(city.length);
}


// 7
console.log('\n Exercise 7')
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}


// Just thinking through a few b/c easy
// 8
// 9
// 10

