const fname = document.querySelector("#first-name");

fname.addEventListener("focusout",  () =>  {validateText(fname)});

function validateText(input) {
    if(input.value.length < 2) {
        input.className = "invalid";
    } else {input.className = "valid"};
}
