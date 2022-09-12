function isPalindrome(word) {
  // Write your algorithm here
  // itertae from the beginning to the middle
  for (let startChar = 0; startChar< word.length / 2; startChar++){
    // check each letter to the corresponding letter from the end
    const endChar = word.length - 1 - startChar;
    // if any letters dont match, return false;
    if(word[startChar] !== word[endChar]) {
      return false
  }
}
  return true;
}

/* 
  Add your pseudocode here
  iterate from the begiining of the word to the middle
  compare the letter we're iterating to the corresponding letter at the end of the word
  if the letters don't match return false
  if we reach the middle and all letters match return true
*/

/*
  Add written explanation of your solution here
  a function isPalindrom takes a word as an argument and returns true if 
  the first letter and the corresponding letter match untill the middle. 
  otherwise it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");
}

module.exports = isPalindrome;
