// Insere dados no localStorage
listaProjetos = [
    {
      nome: 'Roubar coelho',
      skills: ['PHP','JavaScript','','','','','','','',''],
      gestor: 'Cebolácio Menezes da Silva Júnior',
      participantes: ['Cebolinha','Cascão','','','','','','','',''],
      vagas: '2'
    },
    {
      nome: 'Almoço',
      skills: ['Figma','Photoshop','JavaScript','','','','','','',''],
      gestor: 'Mãe da Magali',
      participantes: ['Magali','','','','','','','','',''],
      vagas: '0'
    },
    {
      nome: 'Jantar',
      skills: ['Photoshop','Gestão','Proatividade','PHP','','','','','',''],
      gestor: 'Mãe da Magali',
      participantes: ['Magali','Monica','','','','','','','',''],
      vagas: '4'
    },
    {
      nome: 'Se esconder',
      skills: ['PHP','','','','','','','','','',''],
      gestor: 'Professor Hayala',
      participantes: ['Cebolinha','Cascao','Bidu','','','','','','',''],
      vagas: '1'
    }
];

localStorage.setItem("listaProjetos", JSON.stringify(listaProjetos));
userlist = JSON.parse(localStorage.getItem("listaProjetos"));


// Pega a div que ficam os cards
const divProjetos = document.querySelector('#divProjetos');
// Pega a lista de Projetos do localStorage
var listaProjetos = JSON.parse(localStorage.getItem('listaProjetos'));

// Se a lista não existir ela é criada vazia
if(listaProjetos == null){
    localStorage.setItem('listaProjetos', '[]');
}

// Percorre a lista de Projetos
for (let i = 0; i < listaProjetos.length; i++) {
    
    // cria uma div
    const divCard = document.createElement('div');
    // adiciona a classe "card" a essa div
    divCard.classList.add('card');
    // cria um h3
    const nomeProjeto = document.createElement('h3');
    // adiciona a classe "nomeProjeto" a esse h3
    nomeProjeto.classList.add('nomeProjeto');

    // Adiciona o nome do projeto de indice atual ao h3
    nomeProjeto.innerHTML = listaProjetos[i].nome;

    // Adiciona o h3 na div
    divCard.appendChild(nomeProjeto);
    // Adiciona a div dentro da "divProjetos"
    divProjetos.appendChild(divCard);
}