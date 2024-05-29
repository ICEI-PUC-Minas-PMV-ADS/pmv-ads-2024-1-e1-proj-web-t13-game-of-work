// Perfis de teste
const perfis = {
    Hayala: {
        nome: 'Hayala',
        cargo: 'Professor',
        avatar: '../img/Avatar_Hayala.png',
        softSkills: {
            comunicacao: 3,
            criatividade: 6,
            lideranca: 1,
            organizacao: 6,
            analitico: 3,
            equipe: 8
        },
        hardSkills: {
            HTML: 1,
            CSS: 6,
            JavaScript: 2,
            Csharp: 0,
            SQL: 9,
            Python: 4,
            Cplusplus: 1,
            Java: 3
        },
        sobreMim: 'Sou professor na Pontifícia Universidade Católica de Minas Gerais, e orientador dos alunos do 1º período do curso de Análise e Desenvolvimento de Sistemas no Projeto de Web Front End.',
        objetivos: 'Meu objetivo é que meus alunos sejam aprovados com êxito.',
        projetos: ['GameOfWork']
    },
    Brenda: {
        nome: 'Brenda Drumond',
        cargo: 'Designer',
        avatar: '../img/Avatar_Brenda.png',
        softSkills: {
            comunicacao: 8,
            criatividade: 8,
            lideranca: 8,
            organizacao: 9,
            analitico: 8,
            equipe: 7
        },
        hardSkills: {
            HTML: 7,
            CSS: 6,
            JavaScript: 3,
            Csharp: 0,
            SQL: 5,
            Python: 0,
            Cplusplus: 0,
            Java: 0
        },
        sobreMim: 'Sou designer com experiência em projetos de branding e UX/UI.',
        objetivos: 'Meu objetivo é criar experiências visuais incríveis.',
        projetos: ['Coca-Cola', 'GameOfWork', 'Vida Saldável', 'McDonalds', 'Gestão a Vista', 'Jogos']
    },
    Catiane: {
        nome: 'Catiane de Souza',
        cargo: 'Desenvolvedor de Sistemas',
        avatar: '../img/Avatar_Catiane.png',
        softSkills: {
            comunicacao: 5,
            criatividade: 8,
            lideranca: 4,
            organizacao: 7,
            analitico: 6,
            equipe: 9
        },
        hardSkills: {
            HTML: 7,
            CSS: 9,
            JavaScript: 6,
            Csharp: 5,
            SQL: 8,
            Python: 7,
            Cplusplus: 4,
            Java: 6
        },
        sobreMim: 'Sou desenvolvedora com foco em front-end.',
        objetivos: 'Quero criar interfaces objetivas e funcionais.',
        projetos: ['Coca-Cola', 'GameOfWork', 'Vida Saldável', 'McDonalds', 'Gestão a Vista', 'Jogos']
    },
    Kayque: {
        nome: 'Kayque Fonseca',
        cargo: 'Analista de Sistemas',
        avatar: '../img/Avatar_Kayque.png',
        softSkills: {
            comunicacao: 6,
            criatividade: 9,
            lideranca: 7,
            organizacao: 5,
            analitico: 6,
            equipe: 9,
        },
        hardSkills: {
            HTML: 9,
            CSS: 2,
            JavaScript: 7,
            Csharp: 9,
            SQL: 9,
            Python: 6,
            Cplusplus: 6,
            Java: 9,
        },
        sobreMim: 'Sou analista de sistemas com experiência em desenvolvimento full-stack.',
        objetivos: 'Desejo liderar projetos inovadores e eficientes.',
        projetos: ['Coca-Cola', 'GameOfWork', 'Vida Saldável', 'McDonalds', 'Gestão a Vista', 'Jogos']
    },
    Nikolas: {
        nome: 'Nikolas Mota',
        cargo: 'Engenheiro de Software',
        avatar: '../img/Avatar_Nikolas.png',
        softSkills: {
            comunicacao: 6,
            criatividade: 9,
            lideranca: 7,
            organizacao: 4,
            analitico: 6,
            equipe: 9,
        },
        hardSkills: {
            HTML: 7,
            CSS: 2,
            JavaScript: 7,
            Csharp: 6,
            SQL: 9,
            Python: 4,
            Cplusplus: 6,
            Java: 5,
        },
        sobreMim: 'Sou engenheiro de software com foco em inteligência artificial e machine learning.',
        objetivos: 'Quero desenvolver soluções inteligentes e automatizadas.',
        projetos: ['Coca-Cola', 'GameOfWork', 'Vida Saldável', 'McDonalds', 'Gestão a Vista', 'Jogos']
    }
};

localStorage.setItem('perfis', JSON.stringify(perfis));

function carregarPerfil() {
    const perfilAtual = JSON.parse(localStorage.getItem('perfilAtual'));
    if (perfilAtual) {
        document.querySelector("#nome_usuario").innerHTML = `Nome: ${perfilAtual.nome}`;
        document.querySelector("#cargo_usuario").innerHTML = `Cargo: ${perfilAtual.cargo}`;
        document.querySelector("#avatar").src = perfilAtual.avatar;

        // Soft skills
        document.querySelector("#comunicacao").nextElementSibling.innerHTML = perfilAtual.softSkills.comunicacao;
        document.querySelector("#criatividade").nextElementSibling.innerHTML = perfilAtual.softSkills.criatividade;
        document.querySelector("#lideranca").nextElementSibling.innerHTML = perfilAtual.softSkills.lideranca;
        document.querySelector("#organizacao").nextElementSibling.innerHTML = perfilAtual.softSkills.organizacao;
        document.querySelector("#analitico").nextElementSibling.innerHTML = perfilAtual.softSkills.analitico;
        document.querySelector("#equipe").nextElementSibling.innerHTML = perfilAtual.softSkills.equipe;

        // Hard skills
        document.querySelector("#HTML").nextElementSibling.innerHTML = perfilAtual.hardSkills.HTML;
        document.querySelector("#CSS").nextElementSibling.innerHTML = perfilAtual.hardSkills.CSS;
        document.querySelector("#JavaScript").nextElementSibling.innerHTML = perfilAtual.hardSkills.JavaScript;
        document.querySelector("#Csharp").nextElementSibling.innerHTML = perfilAtual.hardSkills.Csharp;
        document.querySelector("#SQL").nextElementSibling.innerHTML = perfilAtual.hardSkills.SQL;
        document.querySelector("#Python").nextElementSibling.innerHTML = perfilAtual.hardSkills.Python;
        document.querySelector("#Cplusplus").nextElementSibling.innerHTML = perfilAtual.hardSkills.Cplusplus;
        document.querySelector("#Java").nextElementSibling.innerHTML = perfilAtual.hardSkills.Java;

        // Descrição e objetivos
        document.querySelector("#Descricao p:nth-of-type(1)").innerHTML = perfilAtual.sobreMim;
        document.querySelector("#Descricao p:nth-of-type(2)").innerHTML = perfilAtual.objetivos;

        // Projetos
        const projetosList = document.querySelector("#projetos_o");
        projetosList.innerHTML = ''; // Limpar projetos existentes
        perfilAtual.projetos.forEach(projeto => {
            const projetoItem = document.createElement('h6');
            projetoItem.innerHTML = projeto;
            projetosList.appendChild(projetoItem);
        });
    } else {
        console.error('Perfil não encontrado no localStorage.');
    }
}

function mudarPerfil(usuario) {
    const perfis = JSON.parse(localStorage.getItem('perfis'));
    const perfil = perfis[usuario];
    if (perfil) {
        localStorage.setItem('perfilAtual', JSON.stringify(perfil));
        carregarPerfil();
    } else {
        console.error('Usuário não encontrado.');
    }
}

document.addEventListener('DOMContentLoaded', carregarPerfil);

// Exemplo de teste: 
mudarPerfil('Brenda');
