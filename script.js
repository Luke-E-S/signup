const fname = document.querySelector("#first-name");
const lname = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm");

fname.addEventListener("focusout",  () =>  {validateText(fname)});
lname.addEventListener("focusout",  () =>  {validateText(lname)});
email.addEventListener("focusout",  () =>  {validateEmail(email)});
phone.addEventListener("focusout",  () =>  {validatePhone(phone)});
password.addEventListener("focusout",  () =>  {validatePassword(password)});
confirmPass.addEventListener("focusout",  () =>  {validateConfirm(confirmPass)});




function validateText(input) {
    if(input.value.length < 2) {
        input.className = "invalid";
    } else {input.className = "valid"};
}

function validateEmail(input) {

}

function validatePhone(input) {

}

function validatePassword(input) {

}

function validateConfirm(input) {
    
}
