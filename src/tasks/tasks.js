
let jwt;

// CARREGANDO DADOS PERFIL USUARIO E TAREFAS
onload = function () {
    jwt = sessionStorage.getItem('jwt');

    if (!jwt) {
        location.href = "index.html";
    } else {
        buscarDadosUsuarioApi();
        buscaTarefas();
    }

    function buscarDadosUsuarioApi() {
        fetch(`${baseUrl()}/users/getMe`, {
            method: "GET",
            headers: {
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
        nomeUsuario.innerText = dadosUsuario.firstName + " " + dadosUsuario.lastName
    }

    function buscaTarefas() {
        fetch(`${baseUrl()}/tasks`, {
            method: "GET",
            headers: {
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
                    manipulaListaTarefas(response)
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    function manipulaListaTarefas(tarefas) {
        tarefas.forEach(tarefa => {
            if (tarefa.completed) {
                renderizaTarefaRealizada(tarefa)
            } else {
                renderizaTarefaPendente(tarefa);
            }
        })
    }
}

// CRIANDO UMA NOVA TAREFA
let novaTarefa = document.querySelector(".nova-tarefa")
novaTarefa.addEventListener('submit', function (event) {
    event.preventDefault()
    const novaTarefaUsuario = document.getElementById("novaTarefa")

    payload = JSON.stringify({
        "description": novaTarefaUsuario.value,
        "completed": false
    })

    fetch(`${baseUrl()}/tasks`, {
        method: 'POST',
        body: payload,
        headers: {
            "authorization": jwt,
            "Content-type": "application/json"
        }
    })
        .then(response => response.json()
        )
        .then(response => location.reload())
        .catch(error => console.log(error))
})
