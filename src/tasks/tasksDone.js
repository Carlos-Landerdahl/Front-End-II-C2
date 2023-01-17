function renderingTaskComplete(task) {

    let taskFinishedUl = document.querySelector(".finishedTask")
    let li = document.createElement("li");
    li.classList.add("task")

    li.innerHTML = `
        <div class="done"></div>
        <div class="taskDescription">
            <p class="nome">${task.description}</p>
            <div>
                <button onclick="editTaskById(${task.id})"><i id="${task.createdAt}" class="fas fa-undo-alt change"></i></button>
                <button onclick="deleteTaskById(${task.id})">
                    <i id="${task.createdAt}" class="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
      `
    taskFinishedUl.appendChild(li);
}

function deleteTaskById(id) {
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

function editTaskById(id) {

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