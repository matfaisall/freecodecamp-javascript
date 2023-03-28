// Combine an Array into a String Using the join Method
// ! TASK

/**
  Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.
*/

function sentensify(str) {

  const gabung = str.split(/\W/).join(' ');

  return gabung;
}

console.log(sentensify("May-the-force-be-with-you"))