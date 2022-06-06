
function get_factorial(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial
}

console.log(`5! = ${get_factorial(5)}`);