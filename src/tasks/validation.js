let inputNewTask = document.getElementById('novaTarefa');


inputNewTask.addEventListener("keyup", () => {
  let btnSubmit = document.getElementById('submitTask');

  if (inputNewTask.value){
    btnSubmit.removeAttribute('hidden');
  } else {
    btnSubmit.setAttribute('hidden', true);
  }
})


