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
    alert("Password must be less than 128 characters.")
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

var uppercasing;
var lowercasing;
var numbers;
var specialChar; 

// Asks the user about other password properties
function questions(){
  uppercasing = confirm("Do you want to use uppercase letters in the password?");
  lowercasing = confirm("Do you want to use lowercase letters in the password?");
  numbers = confirm("Do you want to use numbers in the password?");
  specialChar = confirm("Do you want to use special characters in the password?");
}

// Creates new array based on the questions
function createNewArray(){
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  var numberList = "0123456789"
  var specialList = "!@#$%^&*()[]:;\/|<>?,"

  //1234
  if(uppercasing && lowercasing && numbers && specialChar){
    temp = uppercaseLetters + lowercaseLetters + numberList + specialList;
  //123
  }else if(uppercasing && lowercasing && numbers && !specialChar){
    temp = uppercaseLetters + lowercaseLetters + numberList;
  //12
  }else if(uppercasing && lowercasing && !numbers && !specialChar){
    temp = uppercaseLetters + lowercaseLetters;
  //1
  }else if(uppercasing && !lowercasing && !numbers && !specialChar){
    temp = uppercaseLetters;
  //124
  }else if(uppercasing && lowercasing && !numbers && specialChar){
    temp = uppercaseLetters + lowercaseLetters + specialList;
  //14
  }else if(uppercasing && !lowercasing && !numbers && specialChar){
    temp = uppercaseLetters + specialList;
  //4
  }else if(!uppercasing && !lowercasing && !numbers && specialChar){
    temp = specialList;
  //134
  }else if(uppercasing && !lowercasing && numbers && specialChar){
    temp = uppercaseLetters + numberList + specialList;
  //34
  }else if(!uppercasing && !lowercasing && numbers && specialChar){
    temp = numberList + specialList;
  //13
  }else if(uppercasing && !lowercasing && numbers && !specialChar){
    temp = uppercaseLetters + numberList;
  //234
  }else if(!uppercasing && lowercasing && numbers && specialChar){
    temp = lowercaseLetters + numberList + specialList;
  //23
  }else if(!uppercasing && lowercasing && numbers && !specialChar){
    temp = lowercaseLetters + numberList;
  //24
  }else if(!uppercasing && lowercasing && !numbers && specialChar){
    temp = lowercaseLetters + specialList;
  //2
  }else if(!uppercasing && lowercasing && !numbers && !specialChar){
    temp = lowercaseLetters;
  //3
  }else if(!uppercasing && !lowercasing && numbers && !specialChar){
    temp = numberList
  }else{
    alert("No password generated.")
  }
  return temp;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
