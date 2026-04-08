const title = document.getElementById('title');
const namefield = document.getElementById('namefield');
const Signinbtn = document.getElementById('Signinbtn');
const Signupbtn = document.getElementById('Signupbtn');

Signupbtn.onclick = function (){
    title.innerHTML = "Sign Up";
    namefield.style.display = "block";
}

Signinbtn.onclick = function (){
    title.innerHTML = "Login";
    namefield.style.display = "none";
}