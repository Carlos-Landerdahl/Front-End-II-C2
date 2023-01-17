function baseUrl() {
    return "http://todo-api.ctd.academy:3000/"
}

function closeApp() {
    const encerrarSessao = confirm("Você deseja finalizar a sessão?")
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