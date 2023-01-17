function baseUrl() {
    return "http://todo-api.ctd.academy:3000/"
}

function closeApp() {
    const encerrarSessao = confirm("Você deseja finalizar a sessão?")

    if (encerrarSessao){
        sessionStorage.removeItem('jwt')
        location.href = "index.html"
    }
}