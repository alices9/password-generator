var uppercasing;
var lowercasing;
var numbers;
var specialChar; 
var temp = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Creates the password
function generatePassword() {
  var generatedPassword ="";
  var passwordLength = prompt("How many characters do you want in your password?");
  
  // Makes sure the length is within parameters
  if (passwordLength < 8){
    alert("Password must be at least 8 characters.");
    generatePassword();
  } else if (passwordLength > 128){
    alert("Password must be 128 characters or less.")
    generatePassword();
  // If desired length is within range, next questions are asked and an array containing the wanted character types is created
  }else{
    questions();
    createNewArray();
  }

  // Loop will continue obtaining random characters from the new array until the prompt length is reached
  for (var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random()*(temp.length));
    generatedPassword = generatedPassword + temp.charAt(randomNumber);
  }
  return generatedPassword;
}

// Asks the user about other password properties
function questions(){
  uppercasing = confirm("Do you want to use uppercase letters in the password?");
  lowercasing = confirm("Do you want to use lowercase letters in the password?");
  numbers = confirm("Do you want to use numbers in the password?");
  specialChar = confirm("Do you want to use special characters in the password?");
}

// Creates and returns new array based on the questions
function createNewArray(){
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var numberList = "0123456789"
  var specialList = "!@#$%^&*()[]:;\/|<>?,"

  if(uppercasing) temp += uppercaseLetters;
  if(lowercasing) temp += lowercaseLetters;
  if(numbers) temp += numberList;
  if(specialChar) temp += specialList;
  if(!uppercasing && !lowercasing && !numbers && !specialChar)
    alert("No password generated.");
  return temp;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
