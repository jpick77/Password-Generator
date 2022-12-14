// Assignment Code
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
var generateBtn = document.querySelector("#generate");


function userInput() {
  userArray = [];
  passwordLength = parseInt (prompt('Pick a number between 8 and 128'));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('You must pick a number between 8 and 128');
    return false;
  }
  if (confirm('Would you like to include lower case?')) {
    userArray = userArray.concat(lowerCase);
    console.log(userArray)
  }
  if (confirm('Would you like to include upper case?')) {
    userArray = userArray.concat(upperCase);
    console.log(userArray)
  }
  if (confirm('Would you like to include numbers?')) {
    userArray = userArray.concat(numbers);
    console.log(userArray)
  }
  if (confirm('Would you like to include special characters?')) {
    userArray = userArray.concat(special);
    console.log(userArray)
  }
  return true;


}

function generatePassword() {
  var generatedPassword = "";
  for(var i = 0; i < passwordLength; i ++) {
    var randomCharacters = Math.floor(Math.random() * userArray.length);
    generatedPassword = generatedPassword + userArray[randomCharacters];
  }
  return generatedPassword;
  console.log(generatedPassword)
}


// Write password to the #password input
function writePassword() {
  var userPromt = userInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
