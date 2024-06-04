const labelNome = document.querySelector('#labelNome')
const nomeUsuarioInput = document.querySelector('#nomeUsuarioInput')

const labelEspecialidade = document.querySelector('#labelEspecialidade')
const especialidadeUsuarioInput = document.querySelector('#especialidadeUsuarioInput')

const labelEmail = document.querySelector('#labelEmail')
const emailUsuarioInput = document.querySelector('#emailUsuarioInput')

const labelSenha = document.querySelector('#labelSenha')
const senhaUsuarioInput = document.querySelector('#senhaUsuarioInput')

const labelCargo = document.querySelector('#labelCargo')
const cargoSelect = document.querySelector('#cargoSelect')

const labelSobre_mim = document.querySelector('#labelSobreMim')
const sobreMimTextarea = document.querySelector('#sobreMimTextarea')

const labelObjetivos = document.querySelector('#labelObjetivos')
const objetivosTextarea = document.querySelector('#objetivosTextarea')

const botaoCadastrar = document.querySelector('#botaoCadastrar')

const inputSkill = document.getElementsByClassName("inputSkill")

const inputSoftSkills = document.getElementsByClassName("inputSoftSkills")
const inputHardSkills = document.getElementsByClassName("inputHardSkills")

const nomeHardSkills = document.getElementsByClassName("nomeHardSkills")

const verSenha = document.querySelector("#verSenha")


//Expressão regular para validar usuário. Aceita apenas letras.
const usuarioRegex = /^[a-zA-Z]+$/;

// Expressão regular para validar o e-mail.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Expressão regular para validar senha.
const senhaRegex = /^(?=.*[!@#$%^&*()_+|~-])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

// Carrega os dados do localStorage
var listaCargos = JSON.parse(localStorage.getItem("listaCargos"));


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


function cadastrar() {

    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
    let emailCadastrado = false;

    listaUsuarios.forEach(usuario => {

        if (usuario.email == emailUsuarioInput.value) {
            emailCadastrado = true;
        }

    });

    let sSkills = []
    let hSkills = []

    for (let i = 0; i < inputSoftSkills.length; i++) {
        sSkills[i] = inputSoftSkills[i].value;
    }

    for (let i = 0; i < inputHardSkills.length; i++) {
        hSkills[i] = inputHardSkills[i].value;
    }

    if (!emailCadastrado) {

        listaUsuarios.push(
            {
                nome: nomeUsuarioInput.value,
                email: emailUsuarioInput.value,
                cargo: cargoSelect.value,
                senha: criptografa(senhaUsuarioInput.value),
                sobre_mim: sobreMimTextarea.value,
                especialidade: especialidadeUsuarioInput.value,
                objetivos: objetivosTextarea.value,
                projetos: [],
                hardSkills: hSkills,
                softSkills: sSkills
            })
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

        alert('Cadastrado com sucesso!!!');
    } else {
        alert("Este e-mail já está cadastrado!!!")
    }
}

// Validação do nome do usuário. Não aceita carateres especiais e não aceita menos que 3 letras.
nomeUsuarioInput.addEventListener('keyup', () => {
    const usuarioValue = nomeUsuarioInput.value;

    if (usuarioRegex.test(usuarioValue) && nomeUsuarioInput.value.length > 2) {
        labelNome.setAttribute('style', 'color:#87c455;');
        nomeUsuarioInput.setAttribute('style', 'border-color:#87c455;')
    } else {
        labelNome.setAttribute('style', 'color:#ff5959;');
        nomeUsuarioInput.setAttribute('style', 'border-color:#ff5959;')
    }
})

// Validação da especialidade
especialidadeUsuarioInput.addEventListener('keyup', () => {

    if (especialidadeUsuarioInput.value.length > 2) {
        labelEspecialidade.setAttribute('style', 'color:#87c455;');
        especialidadeUsuarioInput.setAttribute('style', 'border-color:#87c455;')
    } else {
        labelEspecialidade.setAttribute('style', 'color:#ff5959;');
        especialidadeUsuarioInput.setAttribute('style', 'border-color:#ff5959;')
    }
})

// Validação do email com RegEx 
emailUsuarioInput.addEventListener('keyup', () => {
    const emailValue = emailUsuarioInput.value;

    if (emailRegex.test(emailValue)) {
        labelEmail.setAttribute('style', 'color:#87c455;');
        emailUsuarioInput.setAttribute('style', 'border-color:#87c455;');
    } else {
        labelEmail.setAttribute('style', 'color:#ff5959;');
        emailUsuarioInput.setAttribute('style', 'border-color:#ff5959;');
    }
});

//Validação da Senha com RegEx
senhaUsuarioInput.addEventListener('keyup', () => {
    const senhaValue = senhaUsuarioInput.value;

    if (senhaRegex.test(senhaValue)) {
        labelSenha.setAttribute('style', 'color:#87c455;');
        senhaUsuarioInput.setAttribute('style', 'border-color:#87c455;');
    } else {
        labelSenha.setAttribute('style', 'color:#ff5959;');
        senhaUsuarioInput.setAttribute('style', 'border-color:#ff5959;');
        //alert('A senha deve conter no mínimo 6 caracteres, um caractere especial, uma letra maiúscula, uma letra minúscula e um número.')
    }
});

cargoSelect.addEventListener('change', () => {

    //Se nenhuma opção for selecionada
    if (cargoSelect.value === "Selecione..") {

        labelCargo.setAttribute('style', 'color:#ff5959;');
        cargoSelect.setAttribute('style', 'border-color:#ff5959;');
    } else {
        labelCargo.setAttribute('style', 'color:#87c455;');
        cargoSelect.setAttribute('style', 'border-color:#87c455;');
    }
})


// Função para adicionar as opções ao select
function carregarOpcoesCargos() {
    listaCargos.forEach((cargo) => {
        const option = document.createElement('option');
        option.value = cargo.cargo;
        option.textContent = cargo.cargo;
        cargoSelect.appendChild(option);
    });
}

// Carrega as opções do select ao carregar a página
window.addEventListener('load', () => {
    carregarOpcoesCargos();
});

// Função para adicionar event listeners aos inputs de skills
const inputSkills = document.getElementsByClassName('inputSkill');
for (var i = 0; i < inputSkills.length; i++) {
    inputSkills[i].addEventListener('keypress', function (e) {
        if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E' || e.key === '.' || e.key === ',') {
            e.preventDefault();
        }
        if (this.value.length >= 1) {
            e.preventDefault();
        }
    });
    inputSkills[i].addEventListener('input', function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });
}

// Event listener para capturar a seleção do cargo
cargoSelect.addEventListener('change', () => {
    let listaCargos = JSON.parse(localStorage.getItem('listaCargos'))
    for (let i = 0; i < listaCargos.length; i++) {
        if (listaCargos[i].cargo == cargoSelect.value) {
            for (let j = 0; j < nomeHardSkills.length; j++) {
                nomeHardSkills[j].innerHTML = listaCargos[i].hardSkills[j] + ':'
            }
        }
    }
});



// Função de validação geral
function validarFormulario() {
    let contador = 0;
    if (nomeUsuarioInput.value == "" ||
        senhaUsuarioInput.value == "" ||
        especialidadeUsuarioInput.value == "" ||
        emailUsuarioInput.value == "" ||
        sobreMimTextarea.value == "" ||
        objetivosTextarea.value == "" ||
        cargoSelect.value == "") {
        contador++;
    }

    const inputSkills = document.getElementsByClassName('inputSkill');
    for (let i = 0; i < inputSkills.length; i++) {
        if (inputSkills[i].value == "") {
            contador++;
        }
    }

    if (!(senhaRegex.test(senhaUsuarioInput.value))) {
        contador++;
    }

    if (!(emailRegex.test(emailUsuarioInput.value))) {
        contador++;
    }

    if (!(especialidadeUsuarioInput.value.length > 2)) {
        contador++;
    }

    if (!(usuarioRegex.test(nomeUsuarioInput.value) && nomeUsuarioInput.value.length > 2)) {
        contador++;
    }

    if (contador == 0) {
        cadastrar();
    } else {
        alert('Input preenchido incorretamente');
    }
}

// Event listener para o botão de cadastrar
botaoCadastrar.addEventListener('click', validarFormulario);


function  mostrarSenha() {
    var senhaInput = document.getElementById("senhaUsuarioInput");
    var iconeVerSenha = document.getElementById("verSenha");

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

verSenha.addEventListener('click', function(){

    mostrarSenha()

})













/* declaração de INPUTS das Skills  
// Seleciona todos os inputs de softSkills
const inputSoftSkill1 = document.querySelector('input[name="inputsoftSkill1"]');
const inputSoftSkill2 = document.querySelector('input[name="inputsoftSkill2"]');
const inputSoftSkill3 = document.querySelector('input[name="inputsoftSkill3"]');
const inputSoftSkill4 = document.querySelector('input[name="inputsoftSkill4"]');
const inputSoftSkill5 = document.querySelector('input[name="inputsoftSkill5"]');
const inputSoftSkill6 = document.querySelector('input[name="inputsoftSkill6"]');

// Seleciona todos os inputs de hardSkills
const inputHardSkill1 = document.querySelector('input[name="inputHardSkill1"]');
const inputHardSkill2 = document.querySelector('input[name="inputHardSkill2"]');
const inputHardSkill3 = document.querySelector('input[name="inputHardSkill3"]');
const inputHardSkill4 = document.querySelector('input[name="inputHardSkill4"]');
const inputHardSkill5 = document.querySelector('input[name="inputHardSkill5"]');
const inputHardSkill6 = document.querySelector('input[name="inputHardSkill6"]');
const inputHardSkill7 = document.querySelector('input[name="inputHardSkill7"]');
const inputHardSkill8 = document.querySelector('input[name="inputHardSkill8"]');
*/