// Módulo com funções utilitárias para a aplicação

function baseUrl() {
    // Define a URL base da API
    return "http://todo-api.ctd.academy:3000/v1"
}

function closeApp() {
    // Encerra a aplicação no browser e direciona o usuário
    // para a tela de login
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
        title: 'Deseja sair?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.removeItem("jwt")
            location.href = "index.html"
        }
    })
}