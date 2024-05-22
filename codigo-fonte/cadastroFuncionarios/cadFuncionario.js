// Declaração de variáveis "conteudo-interno-informacoes-pessoais1", "conteudo-interno-informacoes-pessoais2" && "descricao" 
let labelNome = document.querySelector('#labelNome')
let nomeUsuarioInput = document.querySelector('#nomeUsuarioInput')

let labelEspecialidade = document.querySelector('#labelEspecialidade')
let especialidadeUsuarioInput = document.querySelector('#especialidadeUsuarioInput')

let labelEmail = document.querySelector('#labelEmail')
let emailUsuarioInput = document.querySelector('#emailUsuarioInput')

let labelSenha = document.querySelector('#labelSenha')
let senhaUsuarioInput = document.querySelector('#senhaUsuarioInput')

let labelCargo = document.querySelector('#labelCargo')
let cargoSelect = document.querySelector('#cargoSelect')

let labelSobre_mim = document.querySelector('#labelSobreMim')
let sobreMimTextarea = document.querySelector('#sobreMimTextarea')

let labelObjetivos = document.querySelector('#labelObjetivos')
let objetivosTextarea = document.querySelector('#objetivosTextarea')


// Validação do nome do usuário. Não aceita carateres especiais e não aceita menos que 3 letras.
nomeUsuarioInput.addEventListener('keyup', () => {
    const usuarioValue = nomeUsuarioInput.value;
    const usuarioRegex = /^[a-zA-Z0-9]+$/;

    if (usuarioRegex.test(usuarioValue) && nomeUsuarioInput.value.length > 3 ) {
        labelNome.setAttribute('style', 'color:#87c455;');
        nomeUsuarioInput.setAttribute('style', 'border-color:#87c455;')
    } else {
        labelNome.setAttribute('style', 'color:#ff5959;');
        nomeUsuarioInput.setAttribute('style', 'border-color:#ff5959;')
    }
})

//
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expressão regular para validar o e-mail.

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
    const senhaRegex = /^(?=.*[!@#$%^&*()_+|~-]).{6,15}(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;  // Expressão regular para validar a senha. Deve conter no mínimo 6 caracteres, um caractere especial, uma letra maiúscula, uma letra minúscula e um número. O máximo de carateres aceitos é quinze.

    if (senhaRegex.test(senhaValue)) {
        labelSenha.setAttribute('style', 'color:#87c455;'); 
        senhaUsuarioInput.setAttribute('style', 'border-color:#87c455;');
    } else {
        labelSenha.setAttribute('style', 'color:#ff5959;');
        senhaUsuarioInput.setAttribute('style', 'border-color:#ff5959;');
        //alert('A senha deve conter no mínimo 6 caracteres, um caractere especial, uma letra maiúscula, uma letra minúscula e um número.')
    }
});

cargoSelect.addEventListener('keyup', () => {
    if (cargoSelect.value = "" ) {
        labelCargo.setAttribute('style', 'color:#87c455;');
        cargoSelect.setAttribute('style', 'border-color:#87c455;')
    } else {
        labelCargo.setAttribute('style', 'color:#ff5959;');
        cargoSelect.setAttribute('style', 'border-color:#ff5959;')
    }
})


function cadastrar (){

}