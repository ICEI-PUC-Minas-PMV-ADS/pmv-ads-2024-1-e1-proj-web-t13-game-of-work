var listaUsuarios = [
    {
      nome: 'Cássio Marques de Araújo',
      cargo: 'Gestor',
      especialidade: 'Não tomar banho',

      softSkills: [6,1,4,2,9,6],
      hardSkills: [7,2,1,0,9,2,3,4],
      projetos: ['Roubar Coelho','','',''],
      email: 'cascaoLimoeiro@gmail.com',
      senha: 'naotomarbanho27',
      sobre_mim: 'Eu odeio tomar banho',
      objetivo: 'Ficar sujo pra sempre'
    },
    {
      nome: 'Magali Fernandes de Lima',
      cargo: 'Desenvolvedor',
      especialidade: 'Comer',

      softSkills: [7,1,6,3,0,1],
      hardSkills: [7,1,4,2,8,4,2,6],
      projetos: ['Almoço','Janta','',''],
      email: 'magaliMelancia@gmail.com',
      senha: 'mingau22',
      sobre_mim: 'Eu amo comer melancia',
      objetivo: 'Comer mais melancia'
    },
    {
      nome: 'Cebolácio Menezes da Silva Júnior',
      cargo: 'RH',
      especialidade: 'Planos infalíveis',

      softSkills: [7,1,6,3,2,6],
      hardSkills: [1,5,7,1,8,6,3,8],
      projetos: ['Roubar coelho','Não apanhar','Se esconder',''],
      email: 'cebolinha@gmail.com',
      senha: 'planoinfalivel83',
      sobre_mim: 'Tenho medo da calvice',
      objetivo: 'Roubar o coelho da Mônica'
    },
    {
      nome: 'Monica Sousa',
      cargo: 'Design',
      especialidade: 'Bater com coelho',

      softSkills: [6,2,7,1,8,6],
      hardSkills: [6,3,8,8,9,2,9,0],
      projetos: ['Proteger o coelho','Bater no Cebolinha','Voltar pra casa','Ver a magali'],
      email: 'monicaSansao@gmail.com',
      senha: 'sansao45',
      sobre_mim: 'Eu odeio o cebolinha',
      objetivo: 'Bater no Cebolinha'
    }
  ];

  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  userlist = JSON.parse(localStorage.getItem("listaUsuarios"));
