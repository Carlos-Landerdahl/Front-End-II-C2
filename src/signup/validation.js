let inputName = document.getElementById('inputName');
let inputSurname = document.getElementById('inputSurname');
let inputEmail = document.getElementById('inputEmail');
let inputPwd = document.getElementById('inputPwd');
let inputPwd2 = document.getElementById('inputPwd2');
let btnCreateAccount = document.getElementById('btnCreateAccount');

let nameIsValid = 3;
let surnameIsValid = 3;
let emailIsValid = false;
let pwdIsValid = 5;
let pwdIstrue = false;

function validRegister() {
  if (
    inputName.value.length >= nameIsValid && 
    inputSurname.value.length >= surnameIsValid &&
    emailIsValid === true &&
    pwdIstrue === true && 
    inputPwd.value.length >= pwdIsValid && 
    inputPwd2.value.length >= pwdIsValid &&
    inputPwd.value === inputPwd2.value
    ) {
    btnCreateAccount.style.backgroundColor = "#7898FF"
    btnCreateAccount.innerText = "Acessar";
    btnCreateAccount.removeAttribute("disabled");
    return true;
  } else {
    btnCreateAccount.style.backgroundColor = "#979292A1"
    btnCreateAccount.innerText = "Bloqueado";
    btnCreateAccount.setAttribute("disabled", true);
    return false;
  }
}

// Name validation
let smallName = document.getElementById("nameIsValid");
function validName() {
  smallName.innerText = "Preencha este campo"
  inputName.style.border = "2px solid #E9554EBB"
}
validName()

inputName.addEventListener("keyup", () => {
  if (inputName.value.length < nameIsValid) {
    validName()
  } else {
    smallName.innerText = "";
    inputName.style.border = "2px solid transparent"
  }
  validRegister();
});

// Surname validation
let smallSurname = document.getElementById("smallSurname");
function validSurname() {
  smallSurname.innerText = "Preencha este campo"
  inputSurname.style.border = "2px solid #E9554EBB"
}
validSurname()

inputSurname.addEventListener("keyup", () => {
  if (inputSurname.value.length < nameIsValid) {
    validSurname()
  } else {
    smallSurname.innerText = "";
    inputSurname.style.border = "2px solid transparent"
  }
  validRegister();
});

// Email validation
let smallEmail = document.getElementById("smallEmail");
function validEmail() {
  smallEmail.innerText = "Email inválido"
  inputEmail.style.border = "2px solid #E9554EBB"
}
validEmail()

inputEmail.addEventListener("keyup", () => {
  if(!inputEmail.checkValidity()) {
    smallEmail.innerText = "Email inválido"
    validEmail()
    emailIsValid = false
    
  } else {
    smallEmail.innerHTML = ""
    inputEmail.style.border = "2px solid transparent"
    emailIsValid = true
  }
})

// Password validation
let smallPwd = document.getElementById("smallPwd");
function validPwd() {
  smallPwd.innerText = "Minímo: 5 caracteres"
  inputPwd.style.border = "2px solid #E9554EBB"
}
validPwd()

inputPwd.addEventListener("keyup", () => {
  if (inputPwd.value.length < pwdIsValid) {
    pwdIstrue = false;
    validPwd()
  }else {
    smallPwd.innerText = "";
    inputPwd.style.border = "2px solid transparent"
    pwdIstrue = true;
  }
  validRegister();

  if (inputPwd2.value !== inputPwd.value || inputPwd2.value === "") {
    smallPwd2.innerText = "Sua senha não é igual"
    pwdIstrue = false;
    validPwd2()
  } else {
    smallPwd2.innerText = "";
    inputPwd2.style.border = "2px solid transparent"
    pwdIstrue = true;
  }
  validRegister();
});

// Validate password === password two

let smallPwd2 = document.getElementById("smallPwd2");
function validPwd2() {
  smallPwd2.innerText = "Suas senhas não são iguais"
  inputPwd2.style.border = "2px solid #E9554EBB"
}
validPwd2()

inputPwd2.addEventListener("keyup", () => {
  if (inputPwd2.value !== inputPwd.value || inputPwd2.value === "") {
    smallPwd2.innerText = "Sua senha não é igual"
    pwdIstrue = false;
    validPwd2()
  } else {
    smallPwd2.innerText = "";
    inputPwd2.style.border = "2px solid transparent"
    pwdIstrue = true;
  }

  if (inputPwd.value.length < pwdIsValid) {
    pwdIstrue = false;
    validPwd()
  } else {
    smallPwd.innerText = "";
    inputPwd.style.border = "2px solid transparent";
    pwdIstrue = true;
  }
  validRegister();
});
