let nome = localStorage.getItem('nome');
let cargo = localStorage.getItem('cargo');
let email = localStorage.getItem('email');
let token = localStorage.getItem('token');

var bemvindo = document.querySelector('#bemvindo');
bemvindo.innerHTML = `Seja bem-vindo: ${nome}`;

var acesso = document.querySelector('#acesso');
acesso.innerHTML = `Você está acessando com o perfil: ${cargo}.`;

var cadastro = document.querySelector('.cadastro');
var opcao_2 = document.querySelector('#opcao_2');
if (cargo=='Gestor' || cargo=='RH' ) {
    cadastro.setAttribute('style','display:block')
    opcao_2.setAttribute('style','display:block')

} else{ 
    cadastro.setAttribute('style','display:none')
    opcao_2.setAttribute('style','display:none') 
}

var funcionarios = document.querySelector('.funcionarios');
var opcao_3 = document.querySelector('#opcao_3');
if (cargo=='Gestor' || cargo=='RH' ) {
    funcionarios.setAttribute('style','display:block')
    opcao_3.setAttribute('style','display:block')

} else{ 
    funcionarios.setAttribute('style','display:none')
    opcao_3.setAttribute('style','display:none') 
}



//Teste 
/*
mathRandom = Math.random().toString(16).substr(2);
token = mathRandom + mathRandom;

localStorage.setItem("token", token);

localStorage.setItem('nome', 'Cássio Marques de Araújo');
localStorage.setItem('email', 'cascaoLimoeiro@gmail.com');
localStorage.setItem('cargo', 'Gestor');
*/

/*
let mathRandom = Math.random().toString(16).substr(2);
  let token = mathRandom + mathRandom;
   
  localStorage.setItem("token", token);
 
  localStorage.setItem('nome', 'Magali Fernandes de Lima');
  localStorage.setItem('email', 'magaliMelancia@gmail.com');
  localStorage.setItem('cargo', 'Desenvolvedor');
*/


