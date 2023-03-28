// Use the every Methode to Chcek that Every Element in an Array Meets a Criteria

// ! TASK

/* 
  Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr) {
  return arr.every(function(currentValue) {
    return currentValue >= 0;
  })

}

const result = checkPositive([1,2,3,-4,5]);
console.log(result);

console.log(checkPositive([1, 2, 3, 4, 5]))