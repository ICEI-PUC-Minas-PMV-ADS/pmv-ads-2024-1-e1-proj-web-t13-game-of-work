const users = [
    { name: "Hayala", profile: "Gestor" },
    { name: "Brenda Drumond", profile: "Gestor" },
    { name: "Catiane de Souza", profile: "RH" },
    { name: "Nikolas Mota", profile: "Gestor" },
    { name: "Kayque Fonseca", profile: "Funcionário" }
];

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('currentUser', JSON.stringify({ name: "Brenda Drumond", profile: "Gestor" }));

function carregarPerfil() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        atualizarInterface(currentUser);
    }
}

function atualizarInterface(usuario) {
    // Atualizar a saudação
    document.getElementById('bemvindo').innerText = `Seja bem-vindo: ${usuario.name}`;

    // Atualizar a informação de perfil
    document.querySelector('.card-text').innerText = `Você está acessando com o perfil: ${usuario.profile}.`;

    // Mostrar ou esconder cards com base no perfil
    const cardCadastro = document.getElementById('card_cadastro');
    const cardFuncionarios = document.getElementById('card_funcionarios');
    const cardProjetos = document.getElementById('card_projetos');
    const cardPerfil = document.getElementById('card_perfil');

    if (usuario.profile === 'Gestor' || usuario.profile === 'RH') {
        cardCadastro.style.display = 'block';
        cardFuncionarios.style.display = 'block';
        cardProjetos.style.display = 'block';
        cardPerfil.style.display = 'block';
    } else if (usuario.profile === 'Funcionário') {
        cardCadastro.style.display = 'none';
        cardFuncionarios.style.display = 'none';
        cardProjetos.style.display = 'block';
        cardPerfil.style.display = 'block';
    }
}

// Função para mudar o perfil do usuário
function mudarPerfil(nomeUsuario) {
    const users = JSON.parse(localStorage.getItem('users'));
    const usuario = users.find(user => user.name === nomeUsuario);

    if (usuario) {
        localStorage.setItem('currentUser', JSON.stringify(usuario));
        atualizarInterface(usuario);
    } else {
        console.error('Usuário não encontrado');
    }
}

document.addEventListener('DOMContentLoaded', carregarPerfil);

// Exemplo de uso para testar
// mudarPerfil('Catiane de Souza');
// mudarPerfil('Brenda Drumond');
// mudarPerfil('Kayque Fonseca');
