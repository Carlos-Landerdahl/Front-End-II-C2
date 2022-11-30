const email = document.getElementById("inputEmail").value
const password = document.getElementById("inputPassword").value
const button = document.getElementById("btnLogin")


function validaLogin() {
    if (email && password) {
        /* Ativa o botão de acesso novamente e retorna suas propriedades */
        button.style.backgroundColor = "#7898FF"
        button.innerText = "Acessar";
        button.removeAttribute("disabled");
        return true;
    } else {
        /* Desabilita o botão de acesso e troca suas caracteristicas*/
        // button.style.backgroundColor = "#979292A1"
        // button.innerText = "Bloqueado";
        // button.setAttribute("disabled", true);
        return false;
    }
}


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
            response => {
                return response.json()
            }
        )
        .then(
            response => {
                console.log(response)
                sessionStorage.setItem('jwt', response.jwt)
                window.location.href = 'tarefas.html'
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )
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

});
