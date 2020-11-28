// generation of global variables

var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var passwordLength;
var lowerCaseChoice;
var upperCaseChoice;
var numbersChoice;
var specialCharChoice;
var concatPass;
var password;

// calls for the verification for the length of the password
// print the password to the text area

function writePassword() {
  checkLength();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// verifies if the password length is actually a number
// verifies if the password length is between 8 and 128
// calls for the prompts to be displayed

function checkLength() {

  passwordLength = prompt("How long do you want the password to be?", "Please type a number between 8 and 128.");
  if (isNaN(passwordLength)) {
    alert("Please enter a number.")
    checkLength();
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128.");
    checkLength();
  }
  else {
    prompts();
  }
}

// displays prompts that the user can select which character types will be in the password
// verifies if the user selects at least one character type
// calls for the generation of the actual password 

function prompts() {

  lowerCaseChoice = confirm("Do you want the password to contain lower case letters?");
  upperCaseChoice = confirm("Do you want the password to contain upper case letters?");
  numbersChoice = confirm("Do you want the password to contain numbers?");
  specialCharChoice = confirm("Do you want the password to contain special characters?");


  if (!lowerCaseChoice && !upperCaseChoice && !numbersChoice && !specialCharChoice) {
    alert("You must select at least one character type to create your password");
    prompts();
  }
  else {
    generatePass();
  }
}

// depending on what character types the user selects, those will be combined into a single array
// we loop through the length we set of the password, and use the length of our single array to generate
// random numbers, which are used to select random elements of the array and add them into our password

function generatePass() {

  concatPass = [];

  if (lowerCaseChoice) {
    concatPass = lowerCase.concat(concatPass);
  }

  if (upperCaseChoice) {
    concatPass = upperCase.concat(concatPass);
  }

  if (numbersChoice) {
    concatPass = numbers.concat(concatPass);
  }

  if (specialCharChoice) {
    concatPass = specialChar.concat(concatPass);
  }

  var passwordLocal = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * concatPass.length);
    passwordLocal = passwordLocal += concatPass[randomNumber];
  }

  password = passwordLocal;

}

// when the user clicks generate password button, the writePassword function begins

generateBtn.addEventListener("click", writePassword);