const passwordb = document.getElementById("pass");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_=+/{}[]";

const allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    
    passwordb.value = password;
}

function copPss(){
    passwordb.select();
    document.execCommand("copy");
}