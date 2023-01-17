let jwt;

onload = function () {
    renderizarSkeletons(3, ".pendingTasks");
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
        nomeUsuario.innerText = dadosUsuario.firstName + " " + dadosUsuario.lastName
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
                    setTimeout(function () {
                        createTask(response)
                        removerSkeleton(".pendingTasks")
                    }, 500)
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
