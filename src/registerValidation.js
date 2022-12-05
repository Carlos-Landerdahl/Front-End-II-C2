/* Captura de dados e normalização dos usuarios */

let btnAcess = document.getElementById('btnAcess');
btnAcess.addEventListener('click', function(event){

    let inputName = document.getElementById('inputName');
    let inputEmail = document.getElementById('inputEmail');
    let inputPwd = document.getElementById('inputPwd');
    let inputPwd2 = document.getElementById('inputPwd2');

    if(inputName.value){
        console.log(event.preventDefault());
        console.log("clicou no botão");
    }
});