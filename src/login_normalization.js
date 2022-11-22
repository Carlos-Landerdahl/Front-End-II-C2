const email = document.getElementById("inputEmail").value
const password = document.getElementById("inputPassword").value
const button = document.getElementById("btnLogin")

sendButton.disabled = true;

function emailNomalization(email) {
    return String(email)
        .trim();
}

button.addEventListener('click', function (e) {

    e.preventDefault()

    // Email validation
    if (!email || !password) {
        button.disabled = true;
    } else {
        console.log("Email inválido!")
    }
    //sobe pro git pra eu testar depois
})
 
