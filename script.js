const passwordInput = document.getElementById("password");
const passwordValidationBox = document.getElementById("password-validation-box");
const lowercaseRequirement = document.getElementById("lowercase");
const uppercaseRequirement = document.getElementById("capital-letter");
const numberRequirement = document.getElementById("number");
const lengthRequirement = document.getElementById("length");
const delay = 2000;
const loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    setTimeout(function () {
        loader.classList.add("hide-preloader");
    }, delay);
})
passwordInput.addEventListener("focus", () => {
    passwordValidationBox.style.display = "initial";
});

passwordInput.addEventListener("blur", () => {
    passwordValidationBox.style.display = "none";
});
passwordValidationBox.style.display = "none";

passwordInput.onkeyup = function () {

    const lowerCaseLetters = /[a-z]/;
    if (passwordInput.value.match(lowerCaseLetters)) {
        lowercaseRequirement.classList.remove("invalid");
        lowercaseRequirement.classList.add("valid");
    } else {
        lowercaseRequirement.classList.remove("valid");
        lowercaseRequirement.classList.add("invalid");
    }

    const upperCaseLetters = /[A-Z]/;
    if (passwordInput.value.match(upperCaseLetters)) {
        uppercaseRequirement.classList.remove("invalid");
        uppercaseRequirement.classList.add("valid");
    } else {
        uppercaseRequirement.classList.remove("valid");
        uppercaseRequirement.classList.add("invalid");
    }

    const numbers = /[0-9]/;
    if (passwordInput.value.match(numbers)) {
        numberRequirement.classList.remove("invalid");
        numberRequirement.classList.add("valid");
    } else {
        numberRequirement.classList.remove("valid");
        numberRequirement.classList.add("invalid");
    }
    if (passwordInput.value.length >= 8) {
        lengthRequirement.classList.remove("invalid");
        lengthRequirement.classList.add("valid");
    } else {
        lengthRequirement.classList.remove("valid");
        lengthRequirement.classList.add("invalid");
    }
}