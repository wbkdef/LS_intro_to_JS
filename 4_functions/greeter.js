function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}

console.log(makeGreeter('yoyo'));
console.log(makeGreeter('yoyo')());

