
let jwt;

// CARREGANDO DADOS PERFIL USUARIO E tasks
onload = function () {
    jwt = sessionStorage.getItem('jwt');

    if (!jwt) {
        location.href = "index.html";
    } else {
        getDataUserApi();
        getTasks();
    }

    function getDataUserApi() {
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
                    renderDataUser(response)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )
    }

    function renderDataUser(dadosUsuario) {
        let nomeUsuario = document.getElementById("nameUserHeader")
        nomeUsuario.innerText = dadosUsuario.firstName
    }

    function getTasks() {
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
                    createTask(response)
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    function createTask(tasks) {
        tasks.forEach(task => {
            if (task.completed) {
                renderingTaskComplete(task)
            } else {
                renderPendingTask(task);
            }
        })
    }
}

// CRIANDO UMA NOVA task
let newTaskInput = document.querySelector(".newTask")
newTaskInput.addEventListener('submit', function (event) {
    event.preventDefault()
    const newTaskInput = document.getElementById("newTaskInput")

    payload = JSON.stringify({
        "description": newTaskInput.value,
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
