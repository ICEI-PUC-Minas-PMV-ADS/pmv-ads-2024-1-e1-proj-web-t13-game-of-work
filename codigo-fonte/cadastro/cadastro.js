const overlay = document.querySelector('#overlay');
const botaoNovoProjeto = document.querySelector('.botao__novoProj');
const modalNovoProjeto = document.querySelector('.modal__novoProj');
const botaoFecharModal = document.querySelector('.botaoFechar');

const listaCargos =  JSON.parse(localStorage.getItem("titleList"));

const selectCargos = document.querySelector('.selectCargos');
const selectSkills = document.querySelector('.selectSkills');

const cargosProj = document.querySelector('.cargosProj');
const skillsProj = document.querySelector('.skillsProj');

const inputVagas = document.querySelector('.inputVagas');
const inputNome = document.querySelector('.inputNome');
const inputDescricao = document.querySelector('#inputDescricao');



function myfunction(e){
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

// Mostra o modal na tela
botaoNovoProjeto.addEventListener('click', function(){
    overlay.setAttribute('style', 'display: block');
    modalNovoProjeto.setAttribute('style', 'display: block');
});
// Fecha o modal caso clique fora dele
overlay.addEventListener('click', function(){
    overlay.setAttribute('style', 'display: none');
    modalNovoProjeto.setAttribute('style', 'display: none');

});
// Fecha o modal caso clique no botão fechar
botaoFecharModal.addEventListener('click', function(){
    overlay.setAttribute('style', 'display: none');
    modalNovoProjeto.setAttribute('style', 'display: none');

    inputNome.value = "";
    inputVagas.value = "";
    inputDescricao.value = "";

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
});
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
        }
    });
}

// Impede o usuário de adicionar a mesma skill 2 vezes
selectSkills.addEventListener('change', function(){

    const skill = document.createElement('h5');
    skill.innerHTML = selectSkills.value;
    skill.classList.add('skillsDoProjeto');

    skill.addEventListener('click', myfunction);

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


inputVagas.addEventListener('input', function(){

    if(inputVagas.value.length > inputVagas.maxLength){
        inputVagas.value = inputVagas.value.slice(0, inputVagas.maxLength);
    }
     
    if (inputVagas.value > inputVagas.max) {
        inputVagas.value = inputVagas.max;
    }
});

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




    
