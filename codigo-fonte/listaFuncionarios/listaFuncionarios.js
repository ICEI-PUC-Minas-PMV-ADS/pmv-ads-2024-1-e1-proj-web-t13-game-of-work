const divDadosPessoais = document.querySelector('#dadosPessoais');
const divSoftSkills = document.querySelector('#softSkills');
const divHardSkills = document.querySelector('#hardSkills');
const divProjetos = document.querySelector('#projetos');

const botaoAddProjeto = document.querySelector('#botaoAddProjeto');
const botaoFechar = document.querySelector('#botaoFechar');

const hr = document.getElementsByTagName('hr');



const listaCards = document.getElementsByClassName('card');


const testandoErro = null;

// Pega os usuários cadastrados e cria uma lista com todos os usuários.
listaUsuarios = JSON.parse(localStorage.getItem('userList'));
function criaLista(listaUsuarios){

    for (let i = 0; i < listaUsuarios.length; i++) {
        
        let divCards = document.querySelector('#cards');

        let card = document.createElement('div');
        card.classList.add('card');

        let nome = document.createElement('h3');
        nome.innerHTML = listaUsuarios[i].nome;

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

        for (let k = 0; k < hr.length; k++) {
            hr[k].setAttribute('style', 'visibility: visible');
        }

        let cardSelecionado = document.querySelector('.cardSelecionado');
        if(cardSelecionado != null){
            cardSelecionado.classList.remove('cardSelecionado');
        }
        listaCards[i].classList.toggle('cardSelecionado');

        let emailSelecionado = listaCards[i].querySelector('.email').innerHTML;

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

                let titleList = JSON.parse(localStorage.getItem("titleList"));

                for (let j = 0; j < titleList.length; j++) {
                    
                    if (titleList[j].cargo == cargoSelecionado) {
                        
                        let nomeHS1 = document.querySelector('.nomeHardSkill1');
                        nomeHS1.innerHTML = (titleList[j].hardSkills[0]) + ':';
                        let nomeHS2 = document.querySelector('.nomeHardSkill2');
                        nomeHS2.innerHTML = (titleList[j].hardSkills[1]) + ':';
                        let nomeHS3 = document.querySelector('.nomeHardSkill3');
                        nomeHS3.innerHTML = (titleList[j].hardSkills[2]) + ':';
                        let nomeHS4 = document.querySelector('.nomeHardSkill4');
                        nomeHS4.innerHTML = (titleList[j].hardSkills[3]) + ':';
                        let nomeHS5 = document.querySelector('.nomeHardSkill5');
                        nomeHS5.innerHTML = (titleList[j].hardSkills[4]) + ':';
                        let nomeHS6 = document.querySelector('.nomeHardSkill6');
                        nomeHS6.innerHTML = (titleList[j].hardSkills[5]) + ':';
                        let nomeHS7 = document.querySelector('.nomeHardSkill7');
                        nomeHS7.innerHTML = (titleList[j].hardSkills[6]) + ':';
                        let nomeHS8 = document.querySelector('.nomeHardSkill8');
                        nomeHS8.innerHTML = (titleList[j].hardSkills[7]) + ':';
                    }
                }

                let projeto1 = document.querySelector('#projeto1');
                projeto1.innerHTML = "- " + (listaUsuarios[i].projetos[0]);
                let projeto2 = document.querySelector('#projeto2');
                projeto2.innerHTML = "- " + (listaUsuarios[i].projetos[1]);
                let projeto3 = document.querySelector('#projeto3');
                projeto3.innerHTML = "- " + (listaUsuarios[i].projetos[2]);
                let projeto4 = document.querySelector('#projeto4');
                projeto4.innerHTML = "- " + (listaUsuarios[i].projetos[3]);
            
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

    for (let k = 0; k < hr.length; k++) {
        hr[k].setAttribute('style', 'visibility: hidden');
    }

    let cardSelecionado = document.querySelector('.cardSelecionado');
        if(cardSelecionado != null){
            cardSelecionado.classList.remove('cardSelecionado');
        }
});