import { baseURl } from '../validacoes/utils'

let jwt;

onload = function () {
    jwt = sessionStorage.getItem('jwt');

    if (!jwt) {
        location.href = "index.html";
    } else {
        buscarDadosUsuarioApi();
    }

    function buscarDadosUsuarioApi() {
        fetch("`${}`/users/getMe", {
            method: "GET",
            header: {
                "authorization": jwt
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
                    renderizaDadosUsuario(response)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )
    }

    function renderizaDadosUsuario(dadosUsuario) {
        let nomeUsuario = document.getElementById("nomeUsuarioHeader")
        nomeUsuario.innerText = dadosUsuario.firstName
    }
}
