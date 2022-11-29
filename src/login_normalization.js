const email = document.getElementById("inputEmail").value
const password = document.getElementById("inputPassword").value
const button = document.getElementById("btnLogin")

button.disabled = false;

function emailNomalization(email) {
    return String(email)
        .trim();
}

button.addEventListener('click', function (e) {
    e.preventDefault()

    emailLogin = document.querySelector("#inputEmail");
    passwordLogin = document.querySelector("#inputPassword");


    if (validaLogin()) {

        evento.preventDefault();

        /* Normalizando os inputs da tela de login */
        emailLogin = normalizaStringUsandoTrim(emailLogin.value);
        passwordLogin = normalizaStringUsandoTrim(passwordLogin.value);

        console.log(`E-mail: ${emailLogin}`);
        console.log(`Senha: ${passwordLogin}`);

        //Cria objeto JS que representa o login do usuário
        let loginJs = {
            email: email,
            password: password
        }

        //Cria objeto JSON que representa o login do usuário
        let loginJson = JSON.stringify(loginJs);
        console.log(loginJson);

        //
        loginApi(loginJson);


    } else {
        console.log("Login inválido");
    }

    fetch("https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login", {
        method: "POST",
        body: loginJs,
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(
            response => {
                return response.json()
            }
        )
        .then(
            response => {
                console.log(response)
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
});







