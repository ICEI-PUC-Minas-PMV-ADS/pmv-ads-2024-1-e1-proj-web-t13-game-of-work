const senhaInput = document.getElementById("senhaInput")
const iconeVerSenha = document.getElementById("verSenha")


//Função para Mostrar/Esconder senha
function mostrarSenha() {

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        iconeVerSenha.classList.remove("bi-eye-fill");
        iconeVerSenha.classList.add("bi-eye-slash-fill");
    } else {
        senhaInput.type = "password";
        iconeVerSenha.classList.remove("bi-eye-slash-fill");
        iconeVerSenha.classList.add("bi-eye-fill");
    }
}


//Função para realizar login. Deve estar vinculada com o localStorage
function logar(){



}