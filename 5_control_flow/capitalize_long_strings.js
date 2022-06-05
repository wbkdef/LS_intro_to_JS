console.log(capitalizeLongStrings('hello world'));
console.log(capitalizeLongStrings('goodbye'));

function capitalizeLongStrings(str) {
  if (str.length > 10) {
    return str.toUpperCase()
  }
  return str
}