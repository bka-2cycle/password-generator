// create variables to hold the character options for all 4

// create an empty array that will hold the users selected characters

// var possibleChar = []
// var passwordArray = []

// on game start prompt for users # of characters and hold in a variable
// var numChars = prompt("How many characters would you like in your password?")

// check the users input and confirm they put in a number between 8 and 128 and that it is a number

// write function that validated users input

// function validateUserInput(chars) {
  // parsInt(chars) make sure that it is an integer, if not return null
  // if (chars < 8 || chars > 128) {
  // return null }
  // }

  // after validation create variables for character selections:

  // var lcChar = confirm("Would you like Lower Case characters?")
  // var ucChar = confirm("Would you like Upper Case characters?")
  // var nums = confirm("Would you like Numbers?")
  // var specChar = confirm("Would you like Special characters?")

  // validate that at least one option was selected

//This could be a function!!!!!! (outside functions that are called)
// if (!lcChar && !ucChar && !nums && !specChar) {
  // alert("You need to select at least one type of character");
  // return generatePassword()
  // }

  // after validation is complete start pushing selected characters into possibleChar array

  //This could be a function!!!!! (outside functions that are called)
  // if (lcChar) {
    // possibleChar.concat(lcCharArray)
    // }

    // if (ucChar) {
    // possibleChar.concat(ucCharArray)
    // }

    // if (nums) {
    // possibleChar.concat(numsArray)
    // }

    // if (specChar) {
    // possibleChar.concat(specCharArray)
    // }

    // create a random number

    // loop through possibleChar and select a random character from the possibleChar array based on how many characters they entered into the prompt

    // push() the randomly generated character to a empty array called passwordArray

    // return passwordArray.join()

  







// user clicks button to generate password

// a series of prompts for password criteria

// user selects which criteria to include in the password

// prompt for length of password

// user chooses a # between 8 and 128 character length

// asked for character types to include in the password

// choices to include: lc, ul, numeric, and or special characters

// when I answer each prompt
// input should be validated and at least one character type should be selected

// when all prompts are answered

// password is generated that matches the selected criteria

//once generated the password is displayed in an alert (or written to the page)


















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function generatePassword() {
  var lcCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var ucCharArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specCharArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];
  var possibleChar = [];
  var passwordArray = [];
  //mine
  var finishedPassword = [];
  var numChars = [];

  // the value of numChars is stored where, after it is defined by the user? in numChars variable, everytime its referenced thereafter?
  // or do I create an undeclared var to store that value?  ( var numChars; )
  
  var numChars = prompt("How many characters would you like in your password?")
// validate above input ( Parameters give a name to the data to be passed into the function, in this case "chars" FUNCTION NO WORKIE)
  // function validateUserInput(chars) {
                  //parsInt(chars) make sure that it is an integer, if not return null
  // if (chars < 8 || chars > 128) {
  // return null; }
  //}
  if (numChars < 8 || numChars > 128) {
    alert("Your password needs to be between 8 and 128 characters!");
    return generatePassword()
    }

  console.log(numChars)

  var lcChar = confirm("Would you like Lower Case characters?")
  var ucChar = confirm("Would you like Upper Case characters?")
  var nums = confirm("Would you like Numbers?")
  var specChar = confirm("Would you like Special characters?")
//validate above input
  if (!lcChar && !ucChar && !nums && !specChar) {
  alert("You need to select at least one type of character");
  return generatePassword()
  }

//after validation complete
  //start pushing selected characters into possibleChar array
  //This could be a function!!!!! (an outside function that is called in)
  
          //function createUserPool() {
    if (lcChar) {
      possibleChar.concat(lcCharArray);
      //alert("lc was concated!!");
      //console.log(possibleChar);
    }

    if (ucChar) {
      possibleChar.concat(ucCharArray);
      //alert("uc was concated!!");
    }

    if (nums) {
      possibleChar.concat(numsArray);
      //alert("nums was concated!!");
    }

    if (specChar) {
      possibleChar.concat(specCharArray);
      //alert("special was concated!!");
    }
          //}

            //createUserPool();
            //var createUserPool = possibleChar;


  

            // test for VEIFY console.log(specCharArray.length)
    
            // testLoop for VERIFY for (var i = 0; i < possibleChar.length; i++) {
            //console.log("Great to see anything, " + possibleChar[i] + " anything at all");
            //}

  

  //Instructor suggest: create a random # here 
    //(why, the character count/length was chosen by user: defined as: var numChars or user input perameter "chars"
    //maybe difine the results of numChars?


    
//loop through possibleChars and select a random character from the possibleChar array based on how many characters they entered into the prompt or---
    //translated=loop through possibleChar array and select a random character x-times ( x = the # of characters they entered into the prompt for numChars )
    for (var i = 0; i < possibleChar.length; i++) {
    possibleChar = Math.floor(Math.random() * numChars.length);
      //var finishedPassword = [i];
    }


// push() the randomly generated character(s) to a empty array called passwordArray
passwordArray.push([i]);

    // return passwordArray.join()
    return passwordArray.join(finishedPassword);


  return finishedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
