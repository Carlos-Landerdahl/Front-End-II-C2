
function renderizaTarefaPendente(tarefa){
    console.log(tarefa)

    let li = document.createElement("li");
    li.classList.add("tarefa")

    li.innerHTML = 
    `
    <div class="not-done"></div>
    <div class="descricao">
      <p class="nome">${tarefa.description}</p>
      <p class="timestamp">Criada em: ${tarefa.createdAt}</p>
    </div>
    `;
    tarefasPendentesUL.appendChild(li);
}