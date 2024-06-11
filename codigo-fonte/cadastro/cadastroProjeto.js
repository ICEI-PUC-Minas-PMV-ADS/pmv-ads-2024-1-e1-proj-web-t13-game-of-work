const overlay = document.querySelector('#overlay');
const botaoNovoProjeto = document.querySelector('.botao__novoProj');
const modalNovoProjeto = document.querySelector('.modal__novoProj');
const botaoFecharModal = document.querySelector('.botaoFechar');
const email = localStorage.getItem('email');

var listaCargos =  JSON.parse(localStorage.getItem("listaCargos"));

const selectCargos = document.querySelector('.selectCargosProjeto');
const selectSkills = document.querySelector('.selectSkillsProjeto');

const cargosProj = document.querySelector('.cargosProj');
const skillsProj = document.querySelector('.skillsProj');

const inputVagas = document.querySelector('.inputVagasProjeto');
const inputNome = document.querySelector('.inputNomeProjeto');
const inputDescricao = document.querySelector('#inputDescricaoProjeto');

const botao__criarProjeto = document.querySelector('.botao__criarProj');
const mensagemErro = document.querySelector('#mensagemErro');

const cargosPossiveis = document.getElementsByClassName('opcoesCargo');
var cargosSelecionados = [];
var skillsSelecionadas;

var gestor = document.querySelector('.nomeGestor');
var emailGestor = localStorage.email;


const botao__excluirProj = document.querySelector('.botao__excluirProj');
const caixa__exibicao = document.querySelector('#caixa__exibicao');

const modal__excluirProj = document.querySelector('.modal__excluirProj');
const botao__fecharExcluirProjeto = modal__excluirProj.querySelector('.botaoFechar');

const botao__simExcluirProjeto = modal__excluirProj.querySelector('.botao__sim');
const botao__naoExcluirProjeto = modal__excluirProj.querySelector('.botao__nao');

const nome__excluirProjeto = document.querySelector('.nome__excluirProjeto');

function deletarSkill(e){
    const skillClicada = e.target;
    var temClasse = false;
    for (let i = 0; i < skillClicada.classList.length; i++) {
        if(skillClicada.classList[i] == 'skillSelecionada') {
            temClasse = true;   
        }
    }

    if (temClasse) {

        const opcaoSkill = document.createElement('option');
        opcaoSkill.classList.add('opcoesSkill');
                
        opcaoSkill.innerHTML = skillClicada.innerHTML;
                
        selectSkills.appendChild(opcaoSkill);

        skillsProj.removeChild(skillClicada);
        
    } else{
        
        let itemComClasse = document.querySelector('.skillSelecionada');

        if (itemComClasse) {
            itemComClasse.classList.remove('skillSelecionada');
            skillClicada.classList.toggle('skillSelecionada');
            
        } else
            skillClicada.classList.toggle('skillSelecionada');
        
    }
        
}
// Fecha o modal novoProjeto caso clique no botão fechar (todos os valores dos inputs são zerados)
function fechaModal(){
    overlay.setAttribute('style', 'display: none');
    modalNovoProjeto.setAttribute('style', 'display: none');

    inputNome.value = "";
    inputVagas.value = "";
    inputDescricao.value = "";
    mensagemErro.innerHTML = "";

    let listaCheckBox = document.getElementsByClassName('opcoesCargo');

    if(listaCargosCheckbox){
        for (let i = 0; i < listaCheckBox.length; i++) {
            
            listaCheckBox[i].checked = false;
        }
    }

    let listaOpcoesSkill = document.getElementsByClassName('opcoesSkill');

    let tamanhoLista = listaOpcoesSkill.length

    if (listaOpcoesSkill) {
        for (let j = 0; j < tamanhoLista; j++) {

            selectSkills.removeChild(listaOpcoesSkill[0]);
            
        }
    }

    let listaSkillProj = document.getElementsByClassName('skillsDoProjeto');

    let tamanhoLista2 = listaSkillProj.length;

    if (listaSkillProj) {
        for (let j = 0; j < tamanhoLista2; j++) {

            skillsProj.removeChild(listaSkillProj[0]);
            
        }
    }
}

// Mostra o modal na tela
botaoNovoProjeto.addEventListener('click', function(){
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email == email) {
            if (listaUsuarios[i].projetos.length < 4) {
                overlay.setAttribute('style', 'display: block');
                modalNovoProjeto.setAttribute('style', 'display: block');
                caixa__exibicao.innerText = '';
            } else {
                alert('Você já está vinculado a 4 projetos, saia de um projeto caso queira criar um novo!')
            }
        }
    }
});

// Fecha o modal caso clique fora dele (os valores dos inputs são mantidos)
overlay.addEventListener('click', function(){
    overlay.setAttribute('style', 'display: none');
    modalNovoProjeto.setAttribute('style', 'display: none');
    modal__excluirProj.setAttribute('style', 'display: none');

});
// Fecha o modal caso clique no botão fechar (todos os valores dos inputs são zerados)
botaoFecharModal.addEventListener('click', fechaModal);

// Aplicao o nome do gestor loggado ao modal
gestor.innerHTML = gestor.innerHTML + emailGestor;

// Cria as opções de cargo baseada na lista de cargos
listaCargos.forEach(cargo => {
    
    const opcaoCargo = document.createElement('input');
    opcaoCargo.type = 'checkbox';
    opcaoCargo.classList.add('opcoesCargo');
    opcaoCargo.name = cargo.cargo;

    const nomeCargo = document.createElement('h4');
    nomeCargo.innerHTML = "- " + cargo.cargo;
    const spanCargo = document.createElement('span');

    spanCargo.appendChild(opcaoCargo);
    spanCargo.appendChild(nomeCargo);

    cargosProj.appendChild(spanCargo);
});

const listaCargosCheckbox = document.getElementsByClassName('opcoesCargo');

// Adiciona ou remove as skills possíveis baseado nos cargos selecionados
for (let i = 0; i < listaCargosCheckbox.length; i++) {
    
    listaCargosCheckbox[i].addEventListener('change', function(){

        // Cria no select a skill referente ao cargo que foi marcado
        if (listaCargosCheckbox[i].checked) {
            listaCargos.forEach(cargo =>{
                if (cargo.cargo == listaCargosCheckbox[i].name) {
                    cargo.hardSkills.forEach(skills =>{
            
                        const opcaoSkill = document.createElement('option');
                        opcaoSkill.classList.add('opcoesSkill');
                
                        opcaoSkill.innerHTML = skills;
                
                        selectSkills.appendChild(opcaoSkill);
                    });
                }
            });
        } else {
            // Remove do select de skills as skills referente ao cargo que foi desmarcado
            let opcaoSkill = document.getElementsByClassName('opcoesSkill');

            listaCargos.forEach(cargo =>{
                if (cargo.cargo == listaCargosCheckbox[i].name) {
                    cargo.hardSkills.forEach(skills =>{

                        for (let j = 0; j < opcaoSkill.length; j++) {
                            if (skills == opcaoSkill[j].innerHTML) {
                                
                                selectSkills.removeChild(opcaoSkill[j]);
                            }
                        }
                    });
                }
            });

            // Remove todas as skills selecionadas se o cargo relacionado a essas skills for removido
            let skills = [];
            
            listaCargos.forEach(cargo =>{
                if(listaCargosCheckbox[i].name == cargo.cargo){
                    
                   cargo.hardSkills.forEach(skill =>{
                     skills[skills.length] = skill;
                   });
                }
            });

            const skillsJaSelecionadas = document.getElementsByClassName('skillsDoProjeto');

            var nomeSkillsJaSelecionadas = [];

            for (let i = 0; i < skillsJaSelecionadas.length; i++) {
                
                nomeSkillsJaSelecionadas[i] = skillsJaSelecionadas[i];
            }

            if (skillsJaSelecionadas != 0) {
                nomeSkillsJaSelecionadas.forEach(skill1 =>{
                    skills.forEach(skill2 =>{
                        if (skill1.innerHTML == skill2) {
                            
                            skillsProj.removeChild(skill1);
                        }
                    });
                });

            }
        }
    });
}

// Impede o usuário de adicionar a mesma skill 2 vezes
selectSkills.addEventListener('change', function(){

    const skill = document.createElement('h5');
    skill.innerHTML = selectSkills.value;
    skill.classList.add('skillsDoProjeto');

    skill.addEventListener('click', deletarSkill);

    let opcaoSkill = document.getElementsByClassName('opcoesSkill');
    let skillPadrao = document.querySelector('#opcaoSkill');

    for (let i = 0; i < opcaoSkill.length; i++) {
        
        if (opcaoSkill[i].innerHTML == selectSkills.value) {
            selectSkills.removeChild(opcaoSkill[i]);
            selectSkills.value = "";
            skillsProj.appendChild(skill);
        }
        
    }

});

// Define que o valor do input de vagas não pode ser maior do que o seu valor e tamanho máximo (esses valores são definidos na tag HTML)
inputVagas.addEventListener('input', function(){

    if(inputVagas.value.length > inputVagas.maxLength){
        inputVagas.value = inputVagas.value.slice(0, inputVagas.maxLength);
    }
     
    if (inputVagas.value > inputVagas.max) {
        inputVagas.value = inputVagas.max;
    }
});

// Impede o uso de caracteres especiais no input vagas
inputVagas.addEventListener('keypress', function(e){
    if (e.key === '-'){
      e.preventDefault();
    }
    if (e.key === '+'){
      e.preventDefault();
    }
    if (e.key === 'e'){
      e.preventDefault();
    }
    if (e.key === 'E'){
      e.preventDefault();
    }
    if (e.key === '.'){
      e.preventDefault();
    }
    if (e.key === ','){
      e.preventDefault();
    }
});

botao__excluirProj.addEventListener('click', function(){

    caixa__exibicao.innerText = '';

    let projetos = JSON.parse(localStorage.getItem('listaProjetos'));

    projetos.forEach(projeto => {
        
        const nomeProjeto = document.createElement('h3');
        nomeProjeto.innerHTML = projeto.nome;
        nomeProjeto.classList.add('projetoExibido');

        caixa__exibicao.appendChild(nomeProjeto);
    });

    let projetosListados = document.getElementsByClassName('projetoExibido');

    for (let i = 0; i < projetosListados.length; i++) {
        
        projetosListados[i].addEventListener('click', function(e){

            const projetoClicado = e.target;
            var temClasse = false;

            for (let i = 0; i < projetoClicado.classList.length; i++) {
                if(projetoClicado.classList[i] == 'projetoSelecionado') {
                    temClasse = true;   
                }
            }

            
             if (temClasse) {
                modal__excluirProj.setAttribute('style', 'display:block');
                overlay.setAttribute('style', 'display: block');

                nome__excluirProjeto.innerHTML = projetoClicado.innerHTML;
        
            } else{
        
                let projetoComClasse = document.querySelector('.projetoSelecionado');

                if (projetoComClasse) {
                    projetoComClasse.classList.remove('projetoSelecionado');
                    projetoClicado.classList.toggle('projetoSelecionado');
            
                } else
                    projetoClicado.classList.toggle('projetoSelecionado');
        
            }
        });
    }
});    
    
botao__fecharExcluirProjeto.addEventListener('click', function(){
    modal__excluirProj.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});

botao__naoExcluirProjeto.addEventListener('click', function(){
    modal__excluirProj.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});
botao__simExcluirProjeto.addEventListener('click', function(){
    modal__excluirProj.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});