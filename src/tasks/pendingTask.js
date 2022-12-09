
function renderPendingTask(task) {

  let pendingTasks = document.querySelector(".pendingTasks")
  let li = document.createElement("li");
  li.classList.add("task")

  li.innerHTML =
    `
    <div class="not-done" onclick="handleClickCreate(${task.id})"></div>
    <div class="description">
      <p class="nome">${task.description}</p>
      <p class="timestamp">Criada em: ${task.createdAt.substring(0, 10)}</p>
    </div>
    `;

  pendingTasks.appendChild(li);
}

function handleClickCreate(id) {

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