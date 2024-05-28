// Declaração de variáveis "conteudo-interno-informacoes-pessoais1", "conteudo-interno-informacoes-pessoais2" && "descricao" 
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

var listaCargos =  JSON.parse(localStorage.getItem("listaCargos"));


function cadastrar (){

}


// Validação do nome do usuário. Não aceita carateres especiais e não aceita menos que 3 letras.
nomeUsuarioInput.addEventListener('keyup', () => {
    const usuarioValue = nomeUsuarioInput.value;
    const usuarioRegex = /^[a-zA-Z]+$/;
    //somente letras

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
    const senhaRegex = /^(?=.*[!@#$%^&*()_+|~-])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,15}$/;  // Expressão regular para validar a senha. Deve conter no mínimo 6 caracteres, um caractere especial, uma letra maiúscula, uma letra minúscula e um número. O máximo de carateres aceitos é quinze.

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



    if (cargoSelect.value === "Selecione.." ) {
        //Se nenhuma opção for selecionada
        labelCargo.setAttribute('style', 'color:#ff5959;');
        cargoSelect.setAttribute('style', 'border-color:#ff5959;');
    } else {
        labelCargo.setAttribute('style', 'color:#87c455;');
        cargoSelect.setAttribute('style', 'border-color:#87c455;');
    }
})





