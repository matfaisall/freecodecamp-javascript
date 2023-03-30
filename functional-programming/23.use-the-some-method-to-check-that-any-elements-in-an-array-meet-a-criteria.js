// Use the some mothod to check that any elements in an array meet a criteria

// ! TASK
/* 
  Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
*/
// use function build in javascript, 'SOME'


function checkPositive(arr) {
  return arr.some( currentValue => currentValue > 0 )
}

console.log(checkPositive([1,2,3,-4,5])) // true
console.log(checkPositive([1, 2, 3, 4, 5])) // true
console.log(checkPositive([-1,-2,-3])) // false
