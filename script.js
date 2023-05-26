const fname = document.querySelector("#first-name");
const lname = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm");
const confirmWarning = document.createElement("p");
const phoneWarning = document.createElement("p");
const passWarning = document.createElement("p");

const regex = new RegExp("([@\.])", "g")

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
    if(!regex.test(input.value)) {
        input.className = "invalid";
    } else {input.className = "valid"};
}

function validatePhone(input) {
    if(input.value.length < 10 || /([A-Z, a-z])/g.test(input.value)) {
        input.className = "invalid";
        phoneWarning.textContent = "INVALID PHONE NUMBER";
        phoneWarning.className = "warning";
        document.querySelector(".phone").appendChild(phoneWarning);
    } else {
        input.className = "valid";
        if(document.querySelector(".phone").lastChild === phoneWarning) {
            document.querySelector(".phone").removeChild(phoneWarning);
        }
    }
}

function validatePassword(input) {
    if(input.value.length < 10) {
        input.className = "invalid";
        passWarning.textContent = "MUST BE AT LEAST 10 CHARACTERS"
        passWarning.className = "warning";
        document.querySelector(".password").appendChild(passWarning)
    } else {
        input.className = "valid";
        if(document.querySelector(".password").lastChild === passWarning) {
            document.querySelector(".password").removeChild(passWarning);
        }
    }
    validateConfirm(confirmPass);
}

function validateConfirm(input) {
    if(!(input.value === password.value)) {
        input.className = "invalid";
        confirmWarning.textContent = "THE PASSWORDS DO NOT MATCH";
        confirmWarning.className = "warning";
        document.querySelector(".confirm").appendChild(confirmWarning);
    } else {
        input.className = "valid";
        if(document.querySelector(".confirm").lastChild === confirmWarning) {
            document.querySelector(".confirm").removeChild(confirmWarning);
        }
    }
}
