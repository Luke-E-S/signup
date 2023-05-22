const fname = document.querySelector("#first-name");

fname.addEventListener("focusout",  () => validate());

function validate() {
    if(fname.value.length < 2) {
        fname.className = "invalid";
    } else {fname.className = "valid"};
}
