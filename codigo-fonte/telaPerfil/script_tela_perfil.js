localStorage.setItem('nome', 'Hayala');
localStorage.setItem('cargo', 'Gestor');

const nome_usuario = document.querySelector('#nome_usuario');
const cargo_usuario = document.querySelector('#cargo_usuario');
const avatar = document.querySelector('#avatar');

var nome;
var cargo;

nome = localStorage.nome;
cargo = localStorage.cargo;

nome_usuario.innerHTML = nome;
cargo_usuario.innerHTML = cargo;

if (cargo == 'Gestor') {
    avatar.src = '../imagens/avatar/Avatar.png';
}
if (cargo == 'RH') {
    avatar.src = '../imagens/avatar/RH.png'
}
if (cargo == 'Desenvolvedor') {
    avatar.src = '../imagens/avatar/Desenvolvedor.png'
}
if (cargo == 'Design') {
    avatar.src = '../imagens/avatar/Design.png'
}
