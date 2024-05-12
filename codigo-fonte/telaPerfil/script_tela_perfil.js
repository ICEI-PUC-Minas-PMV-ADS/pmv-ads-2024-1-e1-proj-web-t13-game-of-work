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
    avatar.src = 'img/Avatar.png';
}
if (cargo == 'RH') {
    avatar.src = 'img/RH.png'
}
if (cargo == 'Desenvolvedor') {
    avatar.src = 'img/Desenvolvedor.png'
}
if (cargo == 'Design') {
    avatar.src = 'img/Design.png'
}
