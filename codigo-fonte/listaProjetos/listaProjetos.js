const projetos = {
  cocaCola: {
      titulo: "Coca Cola",
      descricao: "Desenvolvimento de um site para divulgação de um novo sabor de Coca Cola.",
      softSkills: "Comunicação, Liderança e Organização.",
      hardSkills: "JavaScript, CSS, HTML.",
      gestor: "Brenda Drumond",
      equipe: ["Catiane de Souza", "Nikolas Mota", "Kayque Fonseca"],
      vagas: ["Desenvolvedor", "Analista", "Coordenador"]
  },
  gameOfWork: {
      titulo: "GameOfWork",
      descricao: "Desenvolvimento de um sistema para facilitar a formação de equipes de projetos.",
      softSkills: "Comunicação, Trabalho em Equipe e Criatividade",
      hardSkills: "JavaScript, CSS, HTML.",
      gestor: "Prof. Hayala",
      equipe: ["Brenda Drumond", "Catiane de Souza", "Nikolas Mota", "Kayque Fonseca"],
      vagas: ["Sem vagas abertas."]
  },
  vidaSaudavel: {
      titulo: "Vida Saudável",
      descricao: "Desenvolvimento de um software de gestão de saúde que auxilie na busca para uma alimentação saudável.",
      softSkills: "Empatia, Liderança",
      hardSkills: "Python, Django, SQL",
      gestor: "Catiane de Souza",
      equipe: ["Brenda Drumond", "Nikolas Mota", "Kayque Fonseca"],
      vagas: ["Nutricionista", "Desenvolvedor"]
  },
  mcDonalds: {
      titulo: "McDonalds",
      descricao: "Criação de um programa para controle de vendas realizadas através de plataformas de delivery.",
      softSkills: "Organização, Proatividade",
      hardSkills: "Java, Spring Boot, MySQL",
      gestor: "Nikolas Mota",
      equipe: ["Brenda Drumond", "Catiane de Souza", "Kayque Fonseca"],
      vagas: ["Desenvolvedor", "Analista"]
  },
  gestaoAVista: {
      titulo: "Gestão a Vista",
      descricao: "Criação de um sistema de tecnologia em nuvem, que possibilite o gerenciamento de pessoas.",
      softSkills: "Liderança, Visão Estratégica",
      hardSkills: "C#, .NET, Azure",
      gestor: "Vaga em aberto",
      equipe: ["Brenda Drumond", "Catiane de Souza", "Nikolas Mota"],
      vagas: ["Gerente de Projeto", "Desenvolvedor"]
  },
  jogos: {
      titulo: "Jogos",
      descricao: "Desenvolvimento de um jogo eletrônico voltado para o folclore brasileiro.",
      softSkills: "Criatividade, Trabalho em Equipe",
      hardSkills: "Unity, C#",
      gestor: "Kayque Fonseca",
      equipe: ["Brenda Drumond", "Catiane de Souza", "Nikolas Mota"],
      vagas: ["Game Designer", "Programador"]
  }
};

// Armazenar projetos no localStorage
var projetosJSON = JSON.stringify(projetos);
localStorage.setItem('projetos', projetosJSON);


// Função para atualizar o card de descrição
function atualizarDescricao(projeto) {
  const cardDescricao = document.getElementById("card_descricao");
  cardDescricao.querySelector(".card-title2").textContent = `Projeto: ${projeto.titulo}`;
  cardDescricao.querySelectorAll(".card-text2")[0].textContent = projeto.descricao;
  cardDescricao.querySelectorAll(".card-text2")[1].textContent = projeto.softSkills;
  cardDescricao.querySelectorAll(".card-text2")[2].textContent = projeto.hardSkills;
  cardDescricao.querySelectorAll(".card-text2")[3].textContent = projeto.gestor;

  
  const equipeHtml = projeto.equipe.map(membro => `<p class="card-text2">${membro}</p>`).join('');
  const vagasHtml = projeto.vagas.map(vaga => `<p class="card-text2">${vaga}</p>`).join('');
  
  cardDescricao.querySelectorAll(".card-body")[1].innerHTML = `<h5 class="card-title2">Equipe:</h5>${equipeHtml}`;
  cardDescricao.querySelectorAll(".card-body")[2].innerHTML = `<h5 class="card-title2">Vagas Abertas:</h5>${vagasHtml}`;
}

// Adicionar event listeners aos cards
document.getElementById("card_cocacola").addEventListener("click", () => atualizarDescricao(projetos.cocaCola));
document.getElementById("card_gameofwork").addEventListener("click", function() {
  atualizarDescricao(projetos.gameOfWork);
  alert('Atenção: Equipe formada! SEM VAGAS ABERTAS');
});
document.getElementById("card_vidasaudavel").addEventListener("click", () => atualizarDescricao(projetos.vidaSaudavel));
document.getElementById("card_mcdonalds").addEventListener("click", () => atualizarDescricao(projetos.mcDonalds));
document.getElementById("card_gestao").addEventListener("click", () => atualizarDescricao(projetos.gestaoAVista));
document.getElementById("card_jogos").addEventListener("click", () => atualizarDescricao(projetos.jogos));
