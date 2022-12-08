let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")
let button = document.getElementById("btnLogin")

let emailIsValid = false;
let passwordIsValid = false;
let passwordValidation = 3;
let emailValidation = 8;

button.style.backgroundColor = "#979292A1"
button.innerText = "Bloqueado";

function normalize(emailInput) {
    return emailInput.trim();
}

function validLogin() {
    if (email.value.length > 0 && password.value.length > 0) {
        button.style.backgroundColor = "#7898FF"
        button.innerText = "Acessar";
        button.removeAttribute("disabled");
        return true;
    } else {
        button.style.backgroundColor = "#979292A1"
        button.innerText = "Bloqueado";
        button.setAttribute("disabled", true);
        return false;
    }
}

let smallEmailValid = document.getElementById("emailIsValid")
smallEmailValid.innerText = `Preencha este campo`;
email.style.border = "2px solid #E9554EBB"

email.addEventListener("keyup", () => {
    email = document.querySelector("#inputEmail");

    if (email.value === '') {
        smallEmailValid.innerText = `Preencha este campo`;
        email.style.border = "2px solid #E9554EBB"

        emailIsValid = false;
    } else {
        smallEmailValid.innerText = "";
        email.style.border = "2px solid transparent"
        emailIsValid = true;
    }
    validLogin();
});


let smallPwdValid = document.getElementById("passwordIsValid");
password.style.border = "2px solid #E9554EBB"
smallPwdValid.innerText = "Preencha este campo"

password.addEventListener("keyup", () => {
    password = document.querySelector("#inputPassword");

    
    if (password.value === '') {
        password.style.border = "2px solid #E9554EBB"
        smallPwdValid.innerText = "Preencha este campo"
    } else {
        smallPwdValid.innerText = "";
        password.style.border = "2px solid transparent"
    }
    validLogin();
});
