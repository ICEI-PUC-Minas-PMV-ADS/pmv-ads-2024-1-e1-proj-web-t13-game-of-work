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




//Expressão regular para validar usuário. Aceita apenas letras.
const usuarioRegex = /^[a-zA-Z]+$/;

// Expressão regular para validar o e-mail.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Expressão regular para validar senha.
const senhaRegex = /^(?=.*[!@#$%^&*()_+|~-])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/;

const botaoCadastrar = document.querySelector('#botaoCadastrar')

const inputSkill = document.getElementsByClassName("inputSkill")




function cadastrar() {

}

// Validação do nome do usuário. Não aceita carateres especiais e não aceita menos que 3 letras.
nomeUsuarioInput.addEventListener('keyup', () => {
    const usuarioValue = nomeUsuarioInput.value;

    if (usuarioRegex.test(usuarioValue) && nomeUsuarioInput.value.length > 3) {
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
    // Expressão regular para validar a senha. Deve conter no mínimo 6 caracteres, um caractere especial, uma letra maiúscula, uma letra minúscula e um número. O máximo de carateres aceitos é quinze.
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

    if (cargoSelect.value === "Selecione..") {
        //Se nenhuma opção for selecionada
        labelCargo.setAttribute('style', 'color:#ff5959;');
        cargoSelect.setAttribute('style', 'border-color:#ff5959;');
    } else {
        labelCargo.setAttribute('style', 'color:#87c455;');
        cargoSelect.setAttribute('style', 'border-color:#87c455;');
    }
})


// Carrega os dados do localStorage
var listaCargos = JSON.parse(localStorage.getItem("listaCargos"));


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

// Event listener para capturar a seleção do cargo
cargoSelect.addEventListener('change', () => {
    const cargoSelecionado = cargoSelect.value;
    const cargo = listaCargos.find((c) => c.cargo === cargoSelecionado);

    // Lógica para atualizar as hard skills com base no cargo selecionado
    if (cargo) {
        const hardSkillsElement = document.getElementById('hardSkills');
        if (hardSkillsElement) {
            // Limpa o conteúdo existente para começar do zero
            hardSkillsElement.innerHTML = '';

            // Adiciona os novos campos de hard skills com base no cargo selecionado
            cargo.hardSkills.forEach((skill, index) => {
                const span = document.createElement('span');
                const h4 = document.createElement('h4');
                const input = document.createElement('input');

                h4.textContent = `${skill}:`;
                input.type = 'number';
                input.maxlength = '1';
                input.name = `input${skill.replace(/\s+/g, '')}`; // Remove espaços e adiciona ao nome do input

                // Lógica para definir a cor da hard skill dinamicamente
                const skillClass = `hardSkill${index + 1}`;
                span.classList.add(skillClass); // Adiciona a classe dinâmica de acordo com o índice

                span.appendChild(h4);
                span.appendChild(input);
                hardSkillsElement.appendChild(span);
            });
        }
    }
});





botaoCadastrar.addEventListener('click', function () {
    let contador = 0
    if (nomeUsuarioInput.value == "" ||
        senhaUsuarioInput.value == "" ||
        especialidadeUsuarioInput.value == "" ||
        emailUsuarioInput.value == "" ||
        sobreMimTextarea.value == "" ||
        objetivosTextarea.value == "" ||
        cargoSelect.value == "") {
        contador = contador + 1

    } // Se não estiver validado corretamente contador = +1
    for (let i = 0; i < inputSkill.length; i++) {

        if (inputSkill[i].value == "") {
            contador = contador + 1
        }
    }
    if (!(senhaRegex.test(senhaUsuarioInput.value))) {
        contador = contador + 1
    }

    if (!(emailRegex.test(emailUsuarioInput.value))) {
        contador = contador + 1
    }

    if (!(especialidadeUsuarioInput.value.length > 2)) {
        contador = contador + 1
    }

    if (!(usuarioRegex.test(nomeUsuarioInput.value) && nomeUsuarioInput.value.length > 3)) {
        contador = contador + 1
    }

    // Se estiver todas as informações forem validadas alert e chamar a função CADASTRAR.
    if (contador == 0) {
        cadastrar()
        alert('DEU BOM PARCEIRO!!!')

    } else {
        alert('INPUT VAZIO!!!')
    }

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
