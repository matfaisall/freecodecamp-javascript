/*  
While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.
*/

let dog = {
  name : 'Spot',
  numLegs : 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
}

console.log(dog.sayLegs());