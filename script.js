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
  var passwordLength = prompt("How many characters do you want in your password?");

  if (passwordLength < 8){
    alert("Password must be at least 8 characters.");
    generatePassword();
  } else if (passwordLength > 128){
    alert("Password must be less than 128 characters.")
    generatePassword();
  }else{
    questions();
  }

  var generatedPassword = "";
  return generatedPassword;
}

// Asks the user about other password properties 
function questions(){
  var uppercasing = confirm("Do you want to use uppercase letters in the password?");
  var lowercasing = confirm("Do you want to use lowercase letters in the password?");
  var numbers = confirm("Do you want to use numbers in the password?");
  var specialChar = confirm("Do you want to use special characters in the password?")
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







