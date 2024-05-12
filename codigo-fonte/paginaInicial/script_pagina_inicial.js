localStorage.setItem('cargo', 'Gestor');


const card_funcionarios = document.querySelector('#card_funcionarios');
const card_projetos = document.querySelector('#card_projetos');
const card_perfil = document.querySelector('#card_perfil');
const card_cadastro = document.querySelector('#card_cadastro');
const opcao_cadastro = document.querySelector('#opcao_2');
var cargo_atual;
card_funcionarios.classList.remove('col-lg-3');
card_projetos.classList.remove('col-lg-3');
card_perfil.classList.remove('col-lg-3');
card_cadastro.classList.remove('col-lg-3');
card_funcionarios.classList.add('col-lg-4');
card_projetos.classList.add('col-lg-4');
card_perfil.classList.add('col-lg-4');
card_cadastro.classList.add('col-lg-4');

cargo_atual = localStorage.cargo;

if (cargo_atual == 'Gestor') {
    
    card_funcionarios.classList.remove('col-lg-4');
    card_projetos.classList.remove('col-lg-4');
    card_perfil.classList.remove('col-lg-4');
    card_cadastro.classList.remove('col-lg-4');
    card_funcionarios.classList.add('col-lg-3');
    card_projetos.classList.add('col-lg-3');
    card_perfil.classList.add('col-lg-3');
    card_cadastro.classList.add('col-lg-3');
    card_cadastro.setAttribute('style', 'display: block');
    opcao_cadastro.setAttribute('style', 'display: block');
}