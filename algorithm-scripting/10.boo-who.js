/** 
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null))
console.log(booWho(true))
console.log(booWho({"a": 1}));
console.log(booWho(1));
