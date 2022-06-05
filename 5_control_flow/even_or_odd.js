evenOrOdd(5);
evenOrOdd(2);
evenOrOdd(18);
evenOrOdd(18.5);
evenOrOdd("18");
evenOrOdd(25);

function evenOrOdd(num) {
  
  if (!Number.isInteger(num)) {
    console.log(`Invalid argument.  ${num} is not an integer.`);
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// return foo() ? 'bar' : qux();
// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }
