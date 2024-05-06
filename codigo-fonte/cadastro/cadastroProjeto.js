const overlay = document.querySelector('#overlay');
const botaoNovoProjeto = document.querySelector('.botao__novoProj');
const modalNovoProjeto = document.querySelector('.modal__novoProj');
const botaoFecharModal = document.querySelector('.botaoFechar');

const listaCargos =  JSON.parse(localStorage.getItem("titleList"));

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
var nomeGestor = localStorage.nome;

var erro = false;





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
// Fecha o modal caso clique no botão fechar (todos os valores dos inputs são zerados)
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
    overlay.setAttribute('style', 'display: block');
    modalNovoProjeto.setAttribute('style', 'display: block');
});
// Fecha o modal caso clique fora dele (os valores dos inputs são mantidos)
overlay.addEventListener('click', function(){
    overlay.setAttribute('style', 'display: none');
    modalNovoProjeto.setAttribute('style', 'display: none');

});
// Fecha o modal caso clique no botão fechar (todos os valores dos inputs são zerados)
botaoFecharModal.addEventListener('click', fechaModal);

// Aplicao o nome do gestor loggado ao modal
gestor.innerHTML = gestor.innerHTML + nomeGestor;

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

// Verifica se todos os inputs e opções não estão vazios
botao__criarProjeto.addEventListener('click', function(){

    erro = 'semErro';

    for (let i = 0; i < cargosPossiveis.length; i++) {
        if (cargosPossiveis[i].checked) {
            cargosSelecionados[cargosSelecionados.length] = cargosPossiveis[i].innerHTML;
        }
    }

    skillsSelecionadas = document.getElementsByClassName('skillsDoProjeto');

    if (skillsSelecionadas.length == 0) {
        erro = 'skillVazia';
        mensagemErro.setAttribute('style', 'color:red');
        mensagemErro.innerHTML = 'Selecione alguma Skill!'
    }
    if(cargosSelecionados.length == 0){
        erro = true;
        mensagemErro.setAttribute('style', 'color:red');
        mensagemErro.innerHTML = 'Selecione algum Cargo!'
    }
    if (inputDescricao.value == "") {
        erro = true;
        mensagemErro.setAttribute('style', 'color:red');
        mensagemErro.innerHTML = 'Campo Descrição vazio!'
    }
    if(inputVagas.value == "") {
        erro = true;
        mensagemErro.setAttribute('style', 'color:red');
        mensagemErro.innerHTML = 'Campo Vagas vazio!'
    }
    if (inputNome.value == "") {
        erro = true;
        mensagemErro.setAttribute('style', 'color:red');
        mensagemErro.innerHTML = 'Campo Nome vazio!'
    }
    
    
   
    
    
    if(!erro){
        mensagemErro.setAttribute('style', 'color:green');
        mensagemErro.innerHTML = 'Projeto cadastrado!'    
    }
});


    
