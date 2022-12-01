let email = document.getElementById("inputEmail")
let password = document.getElementById("inputPassword")
let button = document.getElementById("btnLogin")

function normalize(emailInput) {
    return emailInput.trim();
}

button.addEventListener('click', function (e) {
    email = document.querySelector("#inputEmail");
    password = document.querySelector("#inputPassword");


    if (validLogin()) {
        e.preventDefault()

        email = normalize(email.value);
        password = normalize(password.value);

        console.log(`E-mail: ${email}`);
        console.log(`Senha: ${password}`);

        let loginJs = {
            email: email,
            password: password
        }

        let loginJson = JSON.stringify(loginJs);
        console.log(loginJson);
        loginApi(loginJson);
    } else {
        return alert("Login inválido")
    }

});

function baseUrl() {
    return "https://ctd-fe2-todo-v2.herokuapp.com/v1"
}

function loginApi(loginJson) {
    fetch(`${baseUrl()}/users/login`, {
        method: "POST",
        body: loginJson,
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(
            resultado => {

                if (resultado.status == 201) {
                    return resultado.json()
                } else {
                    throw resultado;
                }
            }
        )
        .then(
            response => {
                loginSuccess(response);
            }
        )
        .catch(
            error => {
                loginError(error);
            }
        )
}

async function loginAssincrono(loginJson) {

    let configRequest = {
        method: "POST",
        body: loginJson,
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        let login = await fetch(`${baseUrl()}/users/login`, configRequest);
        if (login.status == 201) {
            let loginResponse = await login.json();
            loginSuccess(loginResponse);
        } else {
            throw login;
        }
    } catch (error) {
        loginError(error)
    }
}

function loginSuccess(response) {
    console.log(response.jwt);
    sessionStorage.setItem("jwt", response.jwt)
    location.href = "tarefas.html";
}

function loginError(response) {
    console.log(response);
    if (response.status == 400 || response.status == 404) {
        alert("E-mail e/ou senha inválidos.")
    }
}

button.style.backgroundColor = "#979292A1"
button.innerText = "Bloqueado";

function validLogin() {
    if (email.value.length > emailValidation && password.value.length > passwordValidation) {
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

let emailIsValid = false;
let passwordIsValid = false;
let passwordValidation = 4;
let emailValidation = 8;

email.addEventListener("keyup", () => {
    email = document.querySelector("#inputEmail");
    let emailIsValid = document.getElementById("emailIsValid");

    if (email.value.length <= emailValidation) {
        emailIsValid.innerText = `Coloque um email válido`;
        email.style.border = "2px solid #E9554EBB"

        emailIsValid = false;
    } else {
        emailIsValid.innerText = "";
        email.style.border = "2px solid transparent"
        emailIsValid = true;
    }
    validLogin();
});

password.addEventListener("keyup", () => {
    password = document.querySelector("#inputPassword");

    let passwordIsValid = document.getElementById("passwordIsValid");
    if (password.value.length <= passwordValidation) {
        passwordIsValid.innerText = `Faltam ${(passwordValidation + 1) - password.value.length} caracteres`;
        password.style.border = "2px solid #E9554EBB"

        passwordIsValid = false;
    } else {
        passwordIsValid.innerText = "";
        password.style.border = "2px solid transparent"
        passwordIsValid = true;
    }
    validLogin();
});
