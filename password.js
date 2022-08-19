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

//Assessment Review Answer
let password2 = "abc123";

//checks variable to make sure requirements are met
let minChars = false;
let upperCheck = false;
let numCheck = false;
let letterCheck = false;

for (let i = 0; i < password2.length; i++) {
	//console.log(password[i] * 2);
	console.log(typeof (+password2[i] * 2));
	if (password2[i] !== NaN) {
		numCheck = true;
	}
	if (password2[i] === password[i].toUpperCase()) {
		upperCheck = true;
	}
}

//check that the password has a letter
if (/[a-zA-Z].test(password2)/) {
	letterCheck = true;
}
//check that password meets minimum characters
if (password.length >= 10) {
	minChars = true;
}

console.log(minChars);

//password[i] * 2 will help you determine if a string has a number in it
