btnCreateAccount.addEventListener('click', function (event) {
  event.preventDefault()
  RenderSpinner()
  validRegister()
  RegisterAccount()
});

function RegisterAccount () {
  const userInput = JSON.stringify({
    "firstName": inputName.value,
    "lastName": inputSurname.value,
    "email": inputEmail.value,
    "password": inputPwd.value,
  })

  const requestConfig = {
    method: "POST",
    body: userInput,
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch(`${baseUrl()}/users`, requestConfig)
    .then(
      response => {
        console.log(response)
        return response.json()
      }
    )
    .then(
      token => {
        try {
          sessionStorage.setItem("jwt", token.jwt)
          location.href = './index.html'
        }
        catch {
          throw new Error("O cadastro não deu certo.")
        }
      }
    )
    .catch(
      error => console.log(error)
    )
}