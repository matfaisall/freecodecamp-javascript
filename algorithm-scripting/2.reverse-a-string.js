/*
Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".
*/

function reverseString(str) {
  // first ways
  let reversedStr = "";
  for(let i = str.lenght - 1; i >= 0; i--){
    reversedStr += str[i];
  }
  return reversedStr;


  // second ways
  // return str.split("").reverse().join();
}

console.log(reverseString("hello"));