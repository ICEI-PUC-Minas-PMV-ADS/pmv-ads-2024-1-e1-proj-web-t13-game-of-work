let nome = localStorage.getItem('nome');
let cargo = localStorage.getItem('cargo');
let email = localStorage.getItem('email');
let token = localStorage.getItem('token');


var nome_usuario = document.querySelector('#nome_usuario');
nome_usuario.innerHTML = nome;

var cargo_usuario = document.querySelector('#cargo_usuario');
cargo_usuario.innerHTML = cargo;

var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
var listaCargos = JSON.parse(localStorage.getItem('listaCargos'));
var listaProjetos = JSON.parse(localStorage.getItem('listaProjetos'));

const valorSoftSkills = document.getElementsByClassName('valorSoftSkills')
for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].email==email) {
        for (let j = 0; j < valorSoftSkills.length; j++) {
            valorSoftSkills[j].innerHTML = listaUsuarios[i].softSkills[j]
        }
    }
}

const nomeHardSkills = document.getElementsByClassName('nomeHardSkills')
const valorHardSkills = document.getElementsByClassName('valorHardSkills')

for (let i = 0; i < listaCargos.length; i++) {
    if (listaCargos[i].cargo==cargo) {
        for (let j = 0; j < nomeHardSkills.length; j++) {
            nomeHardSkills[j].innerHTML = listaCargos[i].hardSkills[j] + ':'

        }
    }
}

for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].email==email) {
        for (let j = 0; j < valorHardSkills.length; j++) {
            valorHardSkills[j].innerHTML = listaUsuarios[i].hardSkills[j]

        }
    }
}

const sobremim = document.querySelector('#sobremim');
for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].email==email) {       
        sobremim.innerHTML = listaUsuarios[i].sobre_mim
     }
}


const objetivos = document.querySelector('#objetivos');
for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].email==email) {       
        objetivos.innerHTML = listaUsuarios[i].objetivos
     }
}


const projetos_o = document.querySelector('#projetos_o');
for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].email==email) {   
        var projetos = listaProjetos[i].projetos    
     }
}

for (let i = 0; i < projetos.length; i++) {
    const h6 = document.createElement('h6')
    h6.innerHTML = projetos[i]
    projetos_o.appendChild(h6)
}

const avatar = document.querySelector('#avatar');
if (cargo=='Gestor') {
    avatar.src = '../imagens/avatar/Avatar_Hayala.png'
}

if (cargo=='RH') {
    avatar.src = '../imagens/avatar/Avatar_Catiane.png'
}

if (cargo=='Desenvolvedor') {
    avatar.src = '../imagens/avatar/Avatar_Nikolas.png'
}

if (cargo=='Design') {
    avatar.src = '../imagens/avatar/Avatar_Brenda.png'
}

var opcao_2 = document.querySelector('#opcao_2');
if (cargo=='Gestor' || cargo=='RH' ) {
    opcao_2.setAttribute('style','display:block')

} else{ 
    opcao_2.setAttribute('style','display:none') 
}

var opcao_3 = document.querySelector('#opcao_3');
if (cargo=='Gestor' || cargo=='RH' ) {
    opcao_3.setAttribute('style','display:block')

} else{ 
    opcao_3.setAttribute('style','display:none') 
}
