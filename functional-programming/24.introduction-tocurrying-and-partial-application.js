// Introduction to Currying and Portal Application

// !TASK

/*  
  Fill in the body of the add function so it uses currying to add parameters x, y, and z.
*/

function add(x) {
  // only on here
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
  // only on here
}

const result = add(10)(20)(30)
console.log(result)

console.log(add(1)(2)(3))