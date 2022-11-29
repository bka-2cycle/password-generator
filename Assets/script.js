// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var lcCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ucCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specCharArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];
  var possibleChar = [];
  var passwordArray = "";

  // user establishes password length (numChars) 
  var numChars = prompt("How many characters would you like in your password?");
  numChars = parseInt(numChars);

  // validate above input
  if (numChars < 8 || numChars > 128) {
    alert("Your password needs to be between 8 and 128 characters!");
    return generatePassword();
  }

  // user chooses from 4 arrays to be included in selection pool (possibleChar)
  var lcChar = confirm("Would you like Lower Case characters?")
  var ucChar = confirm("Would you like Upper Case characters?")
  var nums = confirm("Would you like Numbers?")
  var specChar = confirm("Would you like Special characters?")
  // validate above input
  if (!lcChar && !ucChar && !nums && !specChar) {
    alert("You need to select at least one type of character");
    return generatePassword()
  }

  // after validation complete add selected characters into possibleChar array
  if (lcChar) {
    possibleChar = possibleChar.concat(lcCharArray);
  }

  if (ucChar) {
    possibleChar = possibleChar.concat(ucCharArray);
  }

  if (nums) {
    possibleChar = possibleChar.concat(numsArray);
  }

  if (specChar) {
    possibleChar = possibleChar.concat(specCharArray);
  }

  // loop through possibleChar array and select random characters x(numChars)-times
  for (var i = 0; i < numChars; i++) {
    index = Math.floor(Math.random() * possibleChar.length);
    passwordArray += possibleChar[index];
  }

  // return finished password
  return passwordArray;
}

// display password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
