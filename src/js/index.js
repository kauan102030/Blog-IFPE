//Limpar Formulário
function Cancelar(){
    window.location.reload();
}

//Cadastrar novo usuário
function AdicionarUsuario(){
    const form = document.getElementById('formulario')
    form.addEventListener('submit', e => {
    e.preventDefault()
    })
    var nome = document.getElementById("nome").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (nome === '' || username === '' || email === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var nome1 = document.querySelectorAll(".nome");
    var email1 = document.querySelectorAll(".email");
    var username1 = document.querySelectorAll(".username");

    var usuarioExistente = false;
        for (var i = 0; i < nome1.length; i++) {
            if (username1[i].textContent === username || email1[i].textContent === email) {
                usuarioExistente = true;
                break;
            }
        }

        if (usuarioExistente) {
            alert("Cadastro existente, tente novamente");
            return;
        }

    var vazioEncontrado = true;
    for (var i = 0; i < nome1.length; i++) {
        if (nome1[i].textContent === '' && username1[i].textContent === '' && email1[i].textContent === '') {
            nome1[i].textContent = nome;
            email1[i].textContent = email;
            username1[i].textContent = username;
            alert("Cadastro realizado com sucesso!");
            vazioEncontrado = false;
                break;
        }
    }
    if (vazioEncontrado) {
        alert("Sem espaço para cadastro");
    }

}
