let _nome = localStorage.getItem('nome');
let _cargo = localStorage.getItem('cargo');
let _email = localStorage.getItem('email');
let _token = localStorage.getItem('token');

var _sair = document.querySelector('#sair');

_sair.addEventListener("click", function(){
    localStorage.removeItem('nome');
    localStorage.removeItem('cargo');
    localStorage.removeItem('email');
    localStorage.removeItem('token');

})

let secao = localStorage.getItem('token');

if (secao==null) {
    alert("Seção Expirada");
    window.location.replace("../login/telalogin.html");
}


