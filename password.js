//set variable password with string value
//if statement
//password length
//password number && letter
//console.log success & failure

let password = "EmmettSkye12";

let needsNumbers = /[0-9]/;
let needsLowerCase = /[a-z]/;
let needsUpperCase = /[A-Z]/;
let noSpaces = /^\S*$/;

if (password.length < 10) {
	console.log("Failure: Password needs 10 or more characters.");
} else if (!needsNumbers.test(password)) {
	console.log("Failure: Password needs numbers.");
} else if (!needsLowerCase.test(password)) {
	console.log("Failure: Password needs both uppercase and lowercase letters.");
} else if (!needsUpperCase.test(password)) {
	console.log("Failure: Password needs both uppercase and lowercase letters.");
} else if (!noSpaces.test(password)) {
	console.log("Failure: Password cannot have spaces.");
} else if (password.length >= 50) {
	console.log("Failure: Password cannot be longer than 50 characters.");
} else {
	console.log("Success! What an excellent password you have.");
}

//Tests password for:
//Length is at least 10 characters
//It has numbers
//It has both Uppercase & Lowercase letters
//It has no Spaces
//It is not longer than 50 characters
