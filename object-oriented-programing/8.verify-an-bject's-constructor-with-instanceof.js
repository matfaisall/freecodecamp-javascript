/*  
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(29);

console.log(myHouse instanceof House);