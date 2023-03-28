// cara pertama
// Array.prototype.myFilter = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     if (Boolean(callback(this[i], i, this)) == true) {
//       newArray.push(this[i]);
//     }

//   }

//   return newArray;
// };

// cara kedua

Array.prototype.myFilter = function (callback) {
  const newArray = [];

  for (const [index, elem] of this.entries()) {
    if (callback(index, elem, this)) {
      newArray.push(elem);
    }
  }
  return newArray;
}