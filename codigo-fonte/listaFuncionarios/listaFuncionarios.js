const divDadosPessoais = document.querySelector('#dadosPessoais');
const divSoftSkills = document.querySelector('#softSkills');
const divHardSkills = document.querySelector('#hardSkills');
const divProjetos = document.querySelector('#projetos');

const botaoAddProjeto = document.querySelector('#botaoAddProjeto');
const botaoRemoverProjeto = document.querySelector('#botaoRemoverProjeto');
const botaoFechar = document.querySelector('#botaoFechar');

const hr = document.getElementsByTagName('hr');



const listaCards = document.getElementsByClassName('card');


const testandoErro = null;

var listaProjetos = JSON.parse(localStorage.getItem('listaProjetos') || '[]');

const selectProjetos = document.querySelector('#selectAddProjeto');
const selectRemoveProjetos = document.querySelector('#selectRemoveProjeto');

const fecharModal_addProjetos = document.querySelector('#fechar_modalAddProjeto')
const modal_addProjetos = document.querySelector('#modal_addProjeto');
const nome_addProjetos = document.querySelector('#usuario_modalAddProjeto');
const botao__AdicionarProjeto = document.querySelector('#botao_addProjeto');

const fecharModal_removeProjetos = document.querySelector('#fechar_modalRemoveProjeto')
const modal_removeProjetos = document.querySelector('#modal_removeProjeto');
const nome_removeProjetos = document.querySelector('#usuario_modalRemoveProjeto');
const botao__RemoverProjeto = document.querySelector('#botao_removeProjeto');

var nomeClicado = "";
var emailSelecionado = "";

const selectAddProjeto = document.querySelector('#selectAddProjeto');
var numProjetos = 0;
var numRemoveProjetos = 4;

// Pega os usuários cadastrados e cria uma lista com todos os usuários.
listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
function criaLista(listaUsuarios){

    for (let i = 0; i < listaUsuarios.length; i++) {
        
        let divCards = document.querySelector('#cards');

        let card = document.createElement('div');
        card.classList.add('card');

        let nome = document.createElement('h3');
        nome.innerHTML = listaUsuarios[i].nome;
        nomeClicado = listaUsuarios[i].nome;

        let cargo = document.createElement('h4');
        cargo.innerHTML = listaUsuarios[i].cargo;

        let especialidade = document.createElement('h4');
        especialidade.innerHTML = listaUsuarios[i].especialidade;

        let email = document.createElement('h4');
        email.classList.add('email');
        email.innerHTML = listaUsuarios[i].email;

        let containerSkills = document.createElement('div');
        containerSkills.classList.add('containerSoftSkills');

        let cardSkill1 = document.createElement('span');
        cardSkill1.classList.add('softSkills');
        cardSkill1.classList.add('cardSkill1');
        cardSkill1.innerHTML = listaUsuarios[i].softSkills[0];

        let cardSkill2 = document.createElement('span');
        cardSkill2.classList.add('softSkills');
        cardSkill2.classList.add('cardSkill2');
        cardSkill2.innerHTML = listaUsuarios[i].softSkills[1];

        let cardSkill3 = document.createElement('span');
        cardSkill3.classList.add('softSkills');
        cardSkill3.classList.add('cardSkill3');
        cardSkill3.innerHTML = listaUsuarios[i].softSkills[2];

        let cardSkill4 = document.createElement('span');
        cardSkill4.classList.add('softSkills');
        cardSkill4.classList.add('cardSkill4');
        cardSkill4.innerHTML = listaUsuarios[i].softSkills[3];

        let cardSkill5 = document.createElement('span');
        cardSkill5.classList.add('softSkills');
        cardSkill5.classList.add('cardSkill5');
        cardSkill5.innerHTML = listaUsuarios[i].softSkills[4];

        let cardSkill6 = document.createElement('span');
        cardSkill6.classList.add('softSkills');
        cardSkill6.classList.add('cardSkill6');
        cardSkill6.innerHTML = listaUsuarios[i].softSkills[5];

        divCards.appendChild(card);

        card.appendChild(nome);
        card.appendChild(cargo);
        card.appendChild(especialidade);
        card.appendChild(email);
        card.appendChild(containerSkills);

        containerSkills.appendChild(cardSkill1);
        containerSkills.appendChild(cardSkill2);
        containerSkills.appendChild(cardSkill3);
        containerSkills.appendChild(cardSkill4);
        containerSkills.appendChild(cardSkill5);
        containerSkills.appendChild(cardSkill6);

    }
}
criaLista(listaUsuarios);


for (let i = 0; i < listaCards.length; i++) {
    
    listaCards[i].addEventListener('click', function(){

        
        divDadosPessoais.setAttribute('style', 'visibility: visible');
        divSoftSkills.setAttribute('style', 'visibility: visible');
        divHardSkills.setAttribute('style', 'visibility: visible');
        divProjetos.setAttribute('style', 'visibility: visible');
        botaoAddProjeto.setAttribute('style', 'visibility: visible');
        botaoRemoverProjeto.setAttribute('style', 'visibility: visible')

        for (let k = 0; k < hr.length; k++) {
            hr[k].setAttribute('style', 'visibility: visible');
        }

        let cardSelecionado = document.querySelector('.cardSelecionado');
        if(cardSelecionado != null){
            cardSelecionado.classList.remove('cardSelecionado');
        }
        listaCards[i].classList.toggle('cardSelecionado');

        emailSelecionado = listaCards[i].querySelector('.email').innerHTML;

        for (let i = 0; i < listaUsuarios.length; i++) {
            
            if (listaUsuarios[i].email == emailSelecionado) {
                
                let campoNome = document.querySelector('#nome');
                campoNome.innerHTML = listaUsuarios[i].nome;
                

                let campoCargo = document.querySelector('#cargo');
                campoCargo.innerHTML = listaUsuarios[i].cargo;

                let campoEspecialidade = document.querySelector('#especialidade');
                campoEspecialidade.innerHTML = listaUsuarios[i].especialidade;

                let campoEmail = document.querySelector('#email');
                campoEmail.innerHTML = emailSelecionado;

                let valorSS1 = document.querySelector('.valorSoftSkill1');
                valorSS1.innerHTML = listaUsuarios[i].softSkills[0];
                let valorSS2 = document.querySelector('.valorSoftSkill2');
                valorSS2.innerHTML = listaUsuarios[i].softSkills[1];
                let valorSS3 = document.querySelector('.valorSoftSkill3');
                valorSS3.innerHTML = listaUsuarios[i].softSkills[2];
                let valorSS4 = document.querySelector('.valorSoftSkill4');
                valorSS4.innerHTML = listaUsuarios[i].softSkills[3];
                let valorSS5 = document.querySelector('.valorSoftSkill5');
                valorSS5.innerHTML = listaUsuarios[i].softSkills[4];
                let valorSS6 = document.querySelector('.valorSoftSkill6');
                valorSS6.innerHTML = listaUsuarios[i].softSkills[5];

                let valorHS1 = document.querySelector('.valorHardSkill1');
                valorHS1.innerHTML = listaUsuarios[i].hardSkills[0];
                let valorHS2 = document.querySelector('.valorHardSkill2');
                valorHS2.innerHTML = listaUsuarios[i].hardSkills[1];
                let valorHS3 = document.querySelector('.valorHardSkill3');
                valorHS3.innerHTML = listaUsuarios[i].hardSkills[2];
                let valorHS4 = document.querySelector('.valorHardSkill4');
                valorHS4.innerHTML = listaUsuarios[i].hardSkills[3];
                let valorHS5 = document.querySelector('.valorHardSkill5');
                valorHS5.innerHTML = listaUsuarios[i].hardSkills[4];
                let valorHS6 = document.querySelector('.valorHardSkill6');
                valorHS6.innerHTML = listaUsuarios[i].hardSkills[5];
                let valorHS7 = document.querySelector('.valorHardSkill7');
                valorHS7.innerHTML = listaUsuarios[i].hardSkills[6];
                let valorHS8 = document.querySelector('.valorHardSkill8');
                valorHS8.innerHTML = listaUsuarios[i].hardSkills[7];

                let cargoSelecionado = listaUsuarios[i].cargo;

                let listaCargos = JSON.parse(localStorage.getItem("listaCargos"));

                for (let j = 0; j < listaCargos.length; j++) {
                    
                    if (listaCargos[j].cargo == cargoSelecionado) {
                        
                        let nomeHS1 = document.querySelector('.nomeHardSkill1');
                        nomeHS1.innerHTML = (listaCargos[j].hardSkills[0]) + ':';
                        let nomeHS2 = document.querySelector('.nomeHardSkill2');
                        nomeHS2.innerHTML = (listaCargos[j].hardSkills[1]) + ':';
                        let nomeHS3 = document.querySelector('.nomeHardSkill3');
                        nomeHS3.innerHTML = (listaCargos[j].hardSkills[2]) + ':';
                        let nomeHS4 = document.querySelector('.nomeHardSkill4');
                        nomeHS4.innerHTML = (listaCargos[j].hardSkills[3]) + ':';
                        let nomeHS5 = document.querySelector('.nomeHardSkill5');
                        nomeHS5.innerHTML = (listaCargos[j].hardSkills[4]) + ':';
                        let nomeHS6 = document.querySelector('.nomeHardSkill6');
                        nomeHS6.innerHTML = (listaCargos[j].hardSkills[5]) + ':';
                        let nomeHS7 = document.querySelector('.nomeHardSkill7');
                        nomeHS7.innerHTML = (listaCargos[j].hardSkills[6]) + ':';
                        let nomeHS8 = document.querySelector('.nomeHardSkill8');
                        nomeHS8.innerHTML = (listaCargos[j].hardSkills[7]) + ':';
                    }
                }

                numProjetos = 0;
                numRemoveProjetos = 4;

                let projeto1 = document.querySelector('#projeto1');
                if (listaUsuarios[i].projetos[0]) {
                    projeto1.innerHTML = "- " + (listaUsuarios[i].projetos[0]);
                    numProjetos++;
                } else {
                    projeto1.innerHTML = "- "
                    numRemoveProjetos--;
                }

                let projeto2 = document.querySelector('#projeto2');
                if (listaUsuarios[i].projetos[1]) {
                    projeto2.innerHTML = "- " + (listaUsuarios[i].projetos[1]);
                    numProjetos++;
                } else {
                    projeto2.innerHTML = "- "
                    numRemoveProjetos--;
                }

                let projeto3 = document.querySelector('#projeto3');
                if (listaUsuarios[i].projetos[2]) {
                    projeto3.innerHTML = "- " + (listaUsuarios[i].projetos[2]);
                    numProjetos++;
                } else {
                    projeto3.innerHTML = "- "
                    numRemoveProjetos--;
                }

                projeto4.innerHTML = "- " + (listaUsuarios[i].projetos[3]);
                if (listaUsuarios[i].projetos[3]) {
                    projeto4.innerHTML = "- " + (listaUsuarios[i].projetos[3]);
                    numProjetos++;
                } else {
                    projeto4.innerHTML = "- "
                    numRemoveProjetos--;
                }

                if (numProjetos == 4 || listaProjetos.length == 0) {
                    botaoAddProjeto.disabled = true;
                } else {
                    botaoAddProjeto.disabled = false;
                }

                if (numRemoveProjetos == 0 || listaProjetos.length == 0) {
                    botaoRemoverProjeto.disabled = true;
                } else {
                    botaoRemoverProjeto.disabled = false;
                }
                
            }
            
        }
    });


}

botaoFechar.addEventListener('click', function(){
    divDadosPessoais.setAttribute('style', 'visibility: hidden');
    divSoftSkills.setAttribute('style', 'visibility: hidden');
    divHardSkills.setAttribute('style', 'visibility: hidden');
    divProjetos.setAttribute('style', 'visibility: hidden');
    botaoAddProjeto.setAttribute('style', 'visibility: hidden');
    botaoRemoverProjeto.setAttribute('style', 'visibility: hidden');

    for (let k = 0; k < hr.length; k++) {
        hr[k].setAttribute('style', 'visibility: hidden');
    }

    let cardSelecionado = document.querySelector('.cardSelecionado');
        if(cardSelecionado != null){
            cardSelecionado.classList.remove('cardSelecionado');
        }
});

overlay.addEventListener('click', function(){
    modal_addProjetos.setAttribute('style', 'display: none');
    modal_removeProjetos.setAttribute('style', 'display: none');
    overlay.setAttribute('style', 'display: none');
});

botaoAddProjeto.addEventListener('click', function(){
    modal_addProjetos.setAttribute('style', 'display: block');
    overlay.setAttribute('style', 'display: block');
    nome_addProjetos.innerHTML = nomeClicado;

    selectProjetos.innerText = '';
        
    const optionPrincipal = document.createElement('option');
    optionPrincipal.id = 'optionPrincipal_addProjetos';
    optionPrincipal.value = '';
    optionPrincipal.selected = true;
    optionPrincipal.disabled = true;
    optionPrincipal.innerHTML = 'Projetos';

    selectProjetos.appendChild(optionPrincipal);

    for (let i = 0; i < listaProjetos.length; i++) {
    
        if (parseInt(listaProjetos[i].vagas) > 0) {
            const option = document.createElement('option');
            option.classList.add('opcoesProjetos');
            option.innerHTML = listaProjetos[i].nome;
    
            selectProjetos.appendChild(option);
        }
    }
    
    fecharModal_addProjetos.addEventListener('click', function(){
        modal_addProjetos.setAttribute('style', 'display: none');
        overlay.setAttribute('style', 'display: none');
    });

    let opcoesProjeto = document.getElementsByClassName('opcoesProjetos') || [];

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email == emailSelecionado) {
            
           for (let j = 0; j < opcoesProjeto.length; j++) {
                
                for (let k = 0; k < listaUsuarios[i].projetos.length; k++) {
                    
                    if (opcoesProjeto[j].value == listaUsuarios[i].projetos[k]) {
                        opcoesProjeto[j].remove();
                    }
                }
           }
        }
    }
})


botao__AdicionarProjeto.addEventListener('click', function(){
    for (let i = 0; i < listaUsuarios.length; i++) {
        
        if (listaUsuarios[i].email == emailSelecionado) {
            
            let projetos = [];

            for (let j = 0; j < listaUsuarios[i].projetos.length; j++) {
                
                projetos[j] = listaUsuarios[i].projetos[j]
                
            }


            if (selectAddProjeto.value != '') {
                let nomeProjeto = selectAddProjeto.value
                projetos.push(nomeProjeto);
                listaUsuarios[i].projetos = projetos;

                localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

                for (let j = 0; j < listaProjetos.length; j++) {
                    if (nomeProjeto == listaProjetos[j].nome) {
                        let participantes = listaProjetos[j].participantes;
                        let vagas = parseInt(listaProjetos[j].vagas);
                        vagas = vagas - 1;

                        listaProjetos[j].vagas = vagas.toString();
                        participantes.push(emailSelecionado);

                        listaProjetos[j].participantes = participantes;

                        localStorage.setItem('listaProjetos', JSON.stringify(listaProjetos));
                    }
                }

                alert('Projeto adicionado com sucesso!');

                divDadosPessoais.setAttribute('style', 'visibility: hidden');
                divSoftSkills.setAttribute('style', 'visibility: hidden');
                divHardSkills.setAttribute('style', 'visibility: hidden');
                divProjetos.setAttribute('style', 'visibility: hidden');
                botaoAddProjeto.setAttribute('style', 'visibility: hidden');
                botaoRemoverProjeto.setAttribute('style', 'visibility: hidden');

                for (let k = 0; k < hr.length; k++) {
                    hr[k].setAttribute('style', 'visibility: hidden');
                }

                modal_addProjetos.setAttribute('style', 'display: none');
                overlay.setAttribute('style', 'display: none');
            } else{
                alert('Selecione um projeto!')
            }
            
        }
        
    }
});

botaoRemoverProjeto.addEventListener('click', function(){
    modal_removeProjetos.setAttribute('style', 'display: block');
    overlay.setAttribute('style', 'display: block');
    nome_removeProjetos.innerHTML = nomeClicado;

    fecharModal_removeProjetos.addEventListener('click', function(){
        modal_removeProjetos.setAttribute('style', 'display: none');
        overlay.setAttribute('style', 'display: none');
    });


    selectRemoveProjetos.innerText = '';
        
    const optionRemovePrincipal = document.createElement('option');
    optionRemovePrincipal.id = 'optionPrincipal_removeProjetos';
    optionRemovePrincipal.value = '';
    optionRemovePrincipal.selected = true;
    optionRemovePrincipal.disabled = true;
    optionRemovePrincipal.innerHTML = 'Projetos';

    selectRemoveProjetos.appendChild(optionRemovePrincipal);


    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email == emailSelecionado) {
            
            for (let j = 0; j < listaUsuarios[i].projetos.length; j++) {
                const optionRemove = document.createElement('option');
                optionRemove.classList.add('opcoesRemoveProjetos');
                optionRemove.innerHTML = listaUsuarios[i].projetos[j];
                selectRemoveProjetos.appendChild(optionRemove);
            }
        }
    }
});

botao__RemoverProjeto.addEventListener('click', function(){
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email == emailSelecionado) {
            let projetos = listaUsuarios[i].projetos;
            
            let projetoRemoveSelecionado = selectRemoveProjetos.value;

            if (projetoRemoveSelecionado != '') {
                for (let j = 0; j < projetos.length; j++) {
                    if (projetos[j] == projetoRemoveSelecionado) {
                        projetos.splice(j,1);

                        listaUsuarios[i].projetos = projetos;

                        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

                        for (let k = 0; k < listaProjetos.length; k++) {
                            if (projetoRemoveSelecionado == listaProjetos[k].nome) {
                                let participantes = listaProjetos[k].participantes;
                                let vagas = parseInt(listaProjetos[k].vagas);
                                vagas = vagas + 1;
                                listaProjetos[k].vagas = vagas.toString();

                                for (let l = 0; l < participantes.length; l++) {
                                    if (participantes[l] == emailSelecionado) {
                                        participantes.splice(l,1);
                                        listaProjetos[i].participantes = participantes;

                                        localStorage.setItem('listaProjetos', JSON.stringify(listaProjetos));

                                    }
                                }
                            }
                        }

                        alert('Projeto removido com sucesso!!');

                        divDadosPessoais.setAttribute('style', 'visibility: hidden');
                        divSoftSkills.setAttribute('style', 'visibility: hidden');
                        divHardSkills.setAttribute('style', 'visibility: hidden');
                        divProjetos.setAttribute('style', 'visibility: hidden');
                        botaoAddProjeto.setAttribute('style', 'visibility: hidden');
                        botaoRemoverProjeto.setAttribute('style', 'visibility: hidden');

                        for (let k = 0; k < hr.length; k++) {
                            hr[k].setAttribute('style', 'visibility: hidden');
                        }

                        modal_removeProjetos.setAttribute('style', 'display: none');
                        overlay.setAttribute('style', 'display: none');
                    }  
                }
            } else {
                alert('Selecione um projeto!')
            }
        }
    }
});