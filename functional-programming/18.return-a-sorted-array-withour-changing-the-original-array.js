// ! TASK
/**
  Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
*/

const globalArray = [5,6,3,2,9];

function nonMutatingSort(arr){
  // code bellow
  return [].concat(arr).sort((a, b) => {
    return a - b;
  })
}

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort([1,30,4,21,100000]));