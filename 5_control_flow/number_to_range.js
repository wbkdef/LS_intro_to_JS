
numberToRange(25);
numberToRange(75);
numberToRange(125);
numberToRange(-25);

function numberToRange(num) {
  if (0 <= num && num <=50) {console.log(`${num} is between 0 and 50`)}
  else if (51 <= num && num <=100) {console.log(`${num} is between 51 and 100`)}
  else if (100 < num) {console.log(`${num} is greater than 100`)}
  else if (0 > num) {console.log(`${num} is less than 0`)}
  else {console.log(`${num} this possibility wasn't considered`)}
}