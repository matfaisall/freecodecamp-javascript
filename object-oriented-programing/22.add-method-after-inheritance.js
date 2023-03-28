/*  
A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
*/

/*  
! Challenge :
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
*/

function Animal() { }
  Animal.prototype.eat = function () { 
    console.log("nom nom nom"); 
  };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woff!");
}


// Only change code above this line

let beagle = new Dog();

beagle.eat();
beagle.bark();