const fname = document.querySelector("#first-name");
const lname = document.querySelector("#last-name");

fname.addEventListener("focusout",  () =>  {validateText(fname)});
lname.addEventListener("focusout",  () =>  {validateText(lname)});


function validateText(input) {
    if(input.value.length < 2) {
        input.className = "invalid";
    } else {input.className = "valid"};
}
