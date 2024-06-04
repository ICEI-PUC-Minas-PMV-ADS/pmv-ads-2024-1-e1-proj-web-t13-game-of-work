const iconeVerSenha = document.getElementById("verSenha")
const inputEmail = document.querySelector("#emailUsuario")
const inputSenha = document.querySelector("#senhaUsuario")

const botaologar = document.querySelector("#logar")

const erro = document.querySelector("#mensagem-erro")

/* ----- CRIPTOGRAFIA -----*/
// Chave de criptografia de 128 bits(16 bytes * 8 bits/byte = 128 bits)
const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function criptografa(texto) {

    // Converte o texto para bytes
    var textoBytes = aesjs.utils.utf8.toBytes(texto);

    // The counter is optional, and if omitted will begin at 1
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    // Criptografa os bytes
    var textoBytesCriptografado = aesCtr.encrypt(textoBytes);

    // Converte os bytes criptografados para hexadecimal
    var textoCriptografado = aesjs.utils.hex.fromBytes(textoBytesCriptografado);
    return textoCriptografado;
}

function descriptografa(texto) {

    // Converte o hexadecimal em bytes
    var bytesCriptografados = aesjs.utils.hex.toBytes(texto);

    // The counter mode of operation maintains internal state, so to
    // decrypt a new instance must be instantiated.
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    // Descriptografa os bytes
    var bytesDescriptografados = aesCtr.decrypt(bytesCriptografados);

    // Converte os bytes descriptografados para texto
    var textoDescriptografado = aesjs.utils.utf8.fromBytes(bytesDescriptografados);
    return textoDescriptografado
}


//Função para Mostrar/Esconder senha
function mostrarSenha() {

    if (inputSenha.type === "password") {
        inputSenha.type = "text";
        iconeVerSenha.classList.remove("bi-eye-fill");
        iconeVerSenha.classList.add("bi-eye-slash-fill");
    } else {
        inputSenha.type = "password";
        iconeVerSenha.classList.remove("bi-eye-slash-fill");
        iconeVerSenha.classList.add("bi-eye-fill");
    }
}

iconeVerSenha.addEventListener('click', function () {
    mostrarSenha();
})



//Função para realizar login. Deve estar vinculada com o localStorage
function logar() {
    
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
    
    console.log(inputEmail.value == validacaoUsuario.email)
    console.log(inputSenha.value == validacaoUsuario.senha)
    console.log(teste)
    listaUsuarios.forEach((usuario) => {

        if (inputEmail.value == usuario.email && inputSenha.value == descriptografa(usuario.senha)) {
            validacaoUsuario = {
                nome: usuario.nome,
                email: usuario.email,
                cargo: usuario.cargo,
                senha: descriptografa(usuario.senha)
            }

            email = usuario.email;
            nome = usuario.nome;
            cargo = usuario.nome
        }
    })
    if (inputEmail.value == validacaoUsuario.email && inputSenha.value == validacaoUsuario.senha && inputEmail.value != "" && inputSenha.value != "") {
        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        localStorage.setItem("token", token);

        localStorage.setItem('nome', JSON.stringify(nome));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('cargo', JSON.stringify(cargo));

        alert("LOGIN EFETUADO COM SUCESSO!!!")
    } else {
        alert("Email ou Senha incorretos")
    }
}

botaologar.addEventListener('click', function () {

    if (inputEmail.value == "" || inputSenha.value == "") {
        erro.setAttribute("style", "visibility: visible")
    } else {

        logar();

    }

})