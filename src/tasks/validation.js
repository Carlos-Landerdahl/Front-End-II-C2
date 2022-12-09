let inputNewTask = document.getElementById('newTaskInput');


inputNewTask.addEventListener("keyup", () => {
  let btnSubmit = document.getElementById('submitTask');

  if (inputNewTask.value){
    btnSubmit.removeAttribute('hidden');
  } else {
    btnSubmit.setAttribute('hidden', true);
  }
})


