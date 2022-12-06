/* Captura de dados e normalização dos usuarios */

import baseUrl from "./utils.js";

let btnCreateAccount = document.getElementById('btnCreateAccount');
btnCreateAccount.addEventListener('click', function (event) {
    event.preventDefault()

    const inputName = document.getElementById('inputName');
    const inputSurname = document.getElementById('inputSurname');
    const inputEmail = document.getElementById('inputEmail');
    const inputPwd = document.getElementById('inputPwd');
    const inputPwd2 = document.getElementById('inputPwd2');

    const userInput = JSON.stringify({
        "firstName": inputName.value,
        "lastName": inputSurname.value,
        "email": inputEmail.value,
        "password": inputPwd.value,
    })

    const requestConfig = {
        method: "POST",
        body: userInput,
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(`${baseUrl()}/users`, requestConfig)
        .then(
            response => {
                console.log(response)
                return response
            }
        )
        .then(
            token => {
                try {
                    sessionStorage.setItem("jwt", token.jwt)
                }
                catch {
                    throw new Error("O cadastro não deu certo.")
                }
            }
        )
        .catch(
            error => console.log(error)
        )

});
