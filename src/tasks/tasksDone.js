
function renderizaTarefaRealizada(tarefa) {

    let tarefasTerminadasUL = document.querySelector(".tarefas-terminadas")
    let li = document.createElement("li");
    li.classList.add("tarefa")

    li.innerHTML = `
        <div class="done"></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <div>
                <button onclick="editaTarefaPeloId(${tarefa.id})"><i id="${tarefa.createdAt}" class="fas fa-undo-alt change"></i></button>
                <button onclick="deletaTarefaPeloId(${tarefa.id})">
                    <i id="${tarefa.createdAt}" class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
      `
    tarefasTerminadasUL.appendChild(li);
}

function deletaTarefaPeloId(id) {
    fetch(`${baseUrl()}/tasks/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": sessionStorage.getItem("jwt")
        }
    }).then(
        response => response.json()
    ).then(
        response => location.reload()
    ).catch(

    )
}

function editaTarefaPeloId(id) {

    payload = JSON.stringify({
        "completed": false
    })

    fetch(`${baseUrl()}/tasks/${id}`, {
        method: "PUT",
        body: payload,
        headers: {
            "authorization": sessionStorage.getItem("jwt"),
            "Content-type": "application/json"
        }
    }).then(
        response => response.json()
    ).then(
        response => location.reload()
    ).catch(
        error => console.log(error)
    )
}