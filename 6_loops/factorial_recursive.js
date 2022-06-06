
function get_factorial(n) {
  if ([0, 1].includes(n)) {
    return 1;
  } else {
    return n * get_factorial(n-1);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(`${i}! = ${get_factorial(i)}`);
}
