localStorage.setItem('nome', 'Hayala');
localStorage.setItem('cargo', 'Desenvolvedor');

const nome_usuario = document.querySelector("#nome_usuario");
const cargo_usuario = document.querySelector("#cargo_usuario");
const avatar = document.querySelector("#avatar");

let titulo = document.querySelector("h1");

var nome;
var cargo;

nome = localStorage.nome;
cargo = localStorage.cargo;

nome_usuario.innerHTML = nome;
cargo_usuario.innerHTML = cargo;

if (nome == 'Hayala') {
    avatar.src = '../img/Avatar_Hayala.png';
}
if (nome == 'Brenda') {
    avatar.src = '../img/Avatar_Brenda.png';
}
if (nome == 'Catiane') {
    avatar.src = '../img/Avatar_Catiane.png';
}
if (nome == 'Kayque') {
    avatar.src = '../img/Avatar_Kayque.png';
}
if (nome == 'Nikolas') {
    avatar.src = '../img/Avatar_Nikolas.png';
}
