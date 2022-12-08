button.addEventListener('click', function (e) {
  email = document.querySelector("#inputEmail");
  password = document.querySelector("#inputPassword");

  mostrarSpinner();

  if (validLogin()) {
    e.preventDefault()

    email = normalize(email.value);
    password = normalize(password.value);

    console.log(`E-mail: ${email}`);
    console.log(`Senha: ${password}`);

    let loginJs = {
      email: email,
      password: password
    }

    let loginJson = JSON.stringify(loginJs);
    console.log(loginJson);
    loginApi(loginJson);
  } else {
    return alert("Login inválido")
  }

});

function loginApi(loginJson) {
  fetch(`${baseUrl()}/users/login`, {
    method: "POST",
    body: loginJson,
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(
      resultado => {
        if (resultado.status == 201) {
          return resultado.json()
        } else {
          throw resultado;
        }
      }
    )
    .then(
      response => {
        loginSuccess(response);
      }
    )
    .catch(
      error => {
        loginError(error);
      }
    )
}

async function loginAssincrono(loginJson) {

  let configRequest = {
    method: "POST",
    body: loginJson,
    headers: {
      "Content-Type": "application/json"
    }
  }

  try {
    let login = await fetch(`${baseUrl()}/users/login`, configRequest);
    if (login.status == 201) {
      let loginResponse = await login.json();
      loginSuccess(loginResponse);
    } else {
      throw login;
    }
  } catch (error) {
    loginError(error)
  }
}

function loginSuccess(response) {
  console.log(response.jwt);
  sessionStorage.setItem("jwt", response.jwt)
  location.href = "tasks.html";
}

function loginError(response) {
  console.log(response);
  if (response.status == 400 || response.status == 404) {
    alert("E-mail e/ou senha inválidos.")
  }
}