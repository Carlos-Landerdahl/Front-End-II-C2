
function renderizaTarefaPendente(tarefa) {

  let tarefasPendentesUL = document.querySelector(".tarefas-pendentes")
  let li = document.createElement("li");
  li.classList.add("tarefa")

  li.innerHTML =
    `
    <div class="not-done" onclick="manipulaTarefaPeloId(${tarefa.id})"></div>
    <div class="descricao">
      <p class="nome">${tarefa.description}</p>
      <p class="timestamp">Criada em: ${tarefa.createdAt.substring(0, 10)}</p>
    </div>
    `;

  tarefasPendentesUL.appendChild(li);
}

function manipulaTarefaPeloId(id) {

  payload = JSON.stringify({
    "completed": true
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
    response => {
      console.log(response),
        location.reload()
    }

  ).catch(
    error => console.log(error)
  )
}