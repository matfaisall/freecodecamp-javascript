// ! TASK
// Split a string into an array using the split method

/**
  Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
*/

const str = 'Muhammad Faisal'
const bySpace = str.split(' ');

const otherStr = "How9are7you2today";
const byDigits = otherStr.split(/\d/);


console.log(bySpace)
console.log(byDigits)

function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);

  // Only change code above this line
}

const i = splitify("Hello World,I-am code");
console.log(i)