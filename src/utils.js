// Módulo com funções utilitárias para a aplicação

function baseUrl() {
    // Define a URL base da API
    return "http://todo-api.ctd.academy:3000/v1"
}

function closeApp() {
    // Encerra a aplicação no browser e direciona o usuário
    // para a tela de login
    const encerrarSessao = confirm("Você deseja finalizar a sessão?")

    if (encerrarSessao){
        sessionStorage.removeItem('jwt')
        location.href = "index.html"
    }
}