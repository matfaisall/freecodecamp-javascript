/*  
Define the constructor property on the Dog prototype.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  
  numLegs : 4,
  eat: function() {
    console.log("eat eat eat");
  },
  describe: function() {
    console.log("ANJING LOOO!!!")
  }
};