let slider = document.getElementById("slider");
let value = document.getElementById("value");
let pass = document.getElementById("pass");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let btn = document.getElementById("btn");
let icon = document.getElementById("icon");


// showing input slider value
value.textContent =slider.value;
slider.addEventListener('input', () =>{
    value.textContent =slider.value;
});

btn.addEventListener('click', () =>{
    pass.value = generatePassword();
});

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// Function to generate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerchars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let a = 1;
    while (a <= slider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        a++;
    }
    
    return genPassword;
}

icon.addEventListener('click', () =>{
    if(pass.value != "" || pass.value.length >= 1){
        navigator.clipboard.writeText(pass.value);
        // icon.innerText = "check";
        icon.title = "Password Copied";
    }
});