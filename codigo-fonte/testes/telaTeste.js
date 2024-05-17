/* ----- CRIPTOGRAFIA -----*/
// Chave de criptografia de 128 bits(16 bytes * 8 bits/byte = 128 bits)
const key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

function criptografa(texto){
  
  // Converte o texto para bytes
  var textoBytes = aesjs.utils.utf8.toBytes(texto);
  
  // The counter is optional, and if omitted will begin at 1
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  // Criptografa os bytes
  var textoBytesCriptografado = aesCtr.encrypt(textoBytes);
  
  // Converte os bytes criptografados para hexadecimal
  var textoCriptografado = aesjs.utils.hex.fromBytes(textoBytesCriptografado);
  return textoCriptografado;
}

function descriptografa(texto){

  // Converte o hexadecimal em bytes
  var bytesCriptografados = aesjs.utils.hex.toBytes(texto);
  
  // The counter mode of operation maintains internal state, so to
  // decrypt a new instance must be instantiated.
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  // Descriptografa os bytes
  var bytesDescriptografados = aesCtr.decrypt(bytesCriptografados);
  
  // Converte os bytes descriptografados para texto
  var textoDescriptografado = aesjs.utils.utf8.fromBytes(bytesDescriptografados);
  return textoDescriptografado
}

/* ----- VALIDAÇÃO DE EMAIL -----*/
function validaEmail(texto) {
  // Variável que define se o email é valido ou não
  var isValid = false;
  // usuario é todo texto que vem antes do @ (O @ não faz parte)
  let usuario = texto.substring(0, texto.indexOf("@"));
  // dominio é todo texto que vem depois do @ (O @ não faz parte)
  let dominio = texto.substring(texto.indexOf("@")+ 1, texto.length);
  
  // Essa condicional abaixo faz os seguintes testes:
  //
  // Se o tamanho de usuario é maior ou igual a 3 caracteres.
  // Se o tamanho de dominio é maior ou igual a 3 caracteres.
  // Se usuario não contém @.
  // Se dominio não contém @.
  // Se usuario não pode contem o “ ” (espaço em branco).
  // Se dominio não pode contem o “ ” (espaço em branco).
  // Se o dominio possui “.” (ponto).
  // Se a existe algum caracter entre o @ e o ponto (não pode ter um ponto logo depois do @).
  // Se a existe algum caracter após o ponto (o ponto não pode ser o último carcter). 


  if ((usuario.length >=3) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
        // Se o email for válido isValid = true;
        isValid = true;
        return isValid;
  }
  else{
    // Se o email for inválido isValid = false;
    isValid = false;
    return isValid;
  }
}

/*----- CADASTRO -----*/

const inputEmailCadastro = document.querySelector("#inputEmailCadastro");
const inputNomeCadastro = document.querySelector("#inputNomeCadastro");
const inputCargoCadastro = document.querySelector("#inputCargoCadastro");
const inputSenhaCadastro = document.querySelector("#inputSenhaCadastro");

const botaoEntrarCadastro = document.querySelector("#botaoEntrarCadastro");


botaoEntrarCadastro.addEventListener("click", function(){

    if (validaEmail(inputEmailCadastro.value)) {
    
      if((inputNomeCadastro.value == "")  ||
         (inputCargoCadastro.value == "") ||
         (inputSenhaCadastro.value == "") ||
         (inputNomeCadastro.value.length < 4)  ||
         (inputCargoCadastro.value.length < 4) ||
         (inputSenhaCadastro.value < 4)){
          alert("Campos invalidos!!!");
      }
      else{

          let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
          let emailCadastrado = false;

          listaUsuarios.forEach(usuario => {
            if(usuario.email == inputEmailCadastro.value){
              emailCadastrado = true;
            }
          });

          if(!emailCadastrado){

            listaUsuarios.push(
              {
                nome: inputNomeCadastro.value,
                email: inputEmailCadastro.value,
                cargo: inputCargoCadastro.value,
                senha: criptografa(inputSenhaCadastro.value)
              });
          
            localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
          
            alert("Usuário cadastrado com sucesso!");
          } else {
            alert("Este email já está cadastrado!!!");
          }
      }
  } else {
    alert('Email inválido!!!!');
  }
});

/* -------------------------------------*/

/* -------- AUTENTICAÇÃO LOGIN --------*/

const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputSenha");

const botaoEntrar = document.querySelector("#botaoEntrar");

var nome;
var email;
var cargo;

var usuarioLogado = {
  nome: "",
  email: "",
  cargo: "",
  token: ""
};

  
botaoEntrar.addEventListener("click", function(){
  
    let listaUser = []; //listaUser criada no código do cadastro
      
    let userValid = { //para validar e depois percorrer com Foreach
          
        nome: "",
        email: "",
        senha: "",
        cargo: ""
       
      }

    //pega a listaUser do LocalStorage criada no cadastro e percorre essa lista para comparar os dados que eu insiro no login com os dados retirados ao fazer o cadastro
    listaUser = JSON.parse(localStorage.getItem("listaUsuarios"));

    
    listaUser.forEach((usuario) => {

      if(inputEmail.value == usuario.email && inputSenha.value == descriptografa(usuario.senha)){

            userValid = {
                nome: usuario.nome,
                email: usuario.email,
                cargo: usuario.cargo,
                senha: descriptografa(usuario.senha)
            }

            email = usuario.email;
            nome  = usuario.nome;
            cargo = usuario.cargo;
      
      }
  })

  if(inputEmail.value == userValid.email && inputSenha.value == userValid.senha && inputEmail.value != "" && inputSenha.value != ""){
    
    let mathRandom = Math.random().toString(16).substr(2); 
    let token = mathRandom + mathRandom;
    
    localStorage.setItem("token", token);

    localStorage.setItem('nome', JSON.stringify(nome));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('cargo', JSON.stringify(cargo))

    alert("O USUÁRIO ENTROU CORRETAMENTE!!");

  } else {
    alert("Email ou Senha incorretos!!!");
  }
  
});

/* -------------------------------------*/


// TESTE LISTA DE OBJETOS ----------------------------------------------

// criar objeto java script com todos os cargos
var cargos = [
    {
      cargo: 'Desenvolvedor',
      tecnologia: 'JavaScript',
      funcao: 'Programar'
    },
    {
      cargo: 'Professor',
      tecnologia: 'Matemática',
      funcao: 'Lecionar'
    },
    {
      cargo: 'Piloto',
      tecnologia: 'Avião',
      funcao: 'Voar'
    }
];


//--------------------------------------------------------------------------

// listaTeste testa se a lista de cargos já está salva no localStorage

let listaTeste = JSON.parse(localStorage.getItem("listaCargos"));
if(listaTeste == null){
    localStorage.setItem('listaCargos', JSON.stringify(cargos));
}

let listaCargos = JSON.parse(localStorage.getItem("listaCargos"));
  for (let i = 0; i < listaCargos.length; i++) {

    const divCargos = document.querySelector(".divCargos");
  
    const cardCargo = document.createElement("div");
    cardCargo.classList.add("cardCargo");
  
    const pCargo = document.createElement("p");
    pCargo.id = "p_cargo";
    pCargo.innerHTML = "Cargo: ";
  
    const cargo = document.createElement("p");
    cargo.innerHTML = listaCargos[i].cargo;
  
    const pTecnologia = document.createElement("p");
    pTecnologia.id = "p_tecnologia";
    pTecnologia.innerHTML = "Tecnologia: ";
  
    const tecnologia =  document.createElement("p");
    tecnologia.innerHTML = listaCargos[i].tecnologia;
  
    const pFuncao = document.createElement("p");
    pFuncao.id = "p_funcao";
    pFuncao.innerHTML = "Função: ";
    
    const funcao = document.createElement("p");
    funcao.innerHTML = listaCargos[i].funcao;
  
    divCargos.appendChild(cardCargo);
  
    cardCargo.appendChild(pCargo);
    cardCargo.appendChild(cargo);
  
    cardCargo.appendChild(document.createElement("br"));
  
    cardCargo.appendChild(pTecnologia);
    cardCargo.appendChild(tecnologia);
  
    cardCargo.appendChild(document.createElement("br"));
  
    cardCargo.appendChild(pFuncao);
    cardCargo.appendChild(funcao);
  }

  /*

  --------- TEMPLATE PROJETOS, CARGOS E FUNCIONÁRIO --------- 

  cargos: [
    {
      cargo: "Desenvolvedor",
      hardSkills: ["JavaScript", "SQL", "Java", "C#", "Python", "TypeScript", "Bash", "PHP"]
    },
    {
      cargo: "Design",
      hardSkills: ["Photoshop", "Illustrator", "Afinity", "Procreate", "CorelDRAW", "Figma", "Sketch", "AdobeXD"]
    },
    {
      cargo: "Gestor",
      hardSkills: ["Organizaçao", "Res. conflitos", "Liderança", "Planejamento", "Scrum", "RUP", "Trab. Equipe", "Negociação"]
    },
    {
      cargo: "RH",
      hardSkills: ["Organizaçao","Res. conflitos","Gestão","Decisões","Multitarefa","Negociação","Data-driven","Inovação"]
    }
  ]


  funcionarios: [
    {
      nome:
      cargo:
      especialidade:

      softSkills: [1,2,3,4,5,6]
      hardSkills: [1,2,3,4,5,6,7,8]
      projetos: [1,2,3,4]

      email:
      senha:
    }
  ]

  projetos: [
    {
      nome:
      skills: [0,1,2,3,4,5,6,7,8,9,0]
      gestor:
      participantes: [0,1,2,3,4,5,6,7,8,9,0]
      vagas:
    }
  ]


  ---------- FUNCIONALIDADES DISPONÍVEIS APENAS PARA GESTOR E RH ----------

  ----- TESTE 1 ----- => Possui acesso aos recursos limitados por cargo

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Cássio Marques de Araújo');
  localStorage.setItem('email', 'cascaoLimoeiro@gmail.com');
  localStorage.setItem('cargo', 'Gestor');

  ----- TESTE 2 -----

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Magali Fernandes de Lima');
  localStorage.setItem('email', 'magaliMelancia@gmail.com');
  localStorage.setItem('cargo', 'Desenvolvedor');

  ----- TESTE 3 ----- => Possui acesso aos recursos limitados por cargo

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Cebolácio Menezes da Silva Júnior');
  localStorage.setItem('email', 'cebolinha@gmail.com');
  localStorage.setItem('cargo', 'RH');

  ----- TESTE 4 -----

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Monica Sousa');
  localStorage.setItem('email', 'monicaSansao@gmail.com');
  localStorage.setItem('cargo', 'Design');



  ----------------- LISTA DE FUNCIONÁRIOS ----------------- 

  let userList = [
    {
      nome: 'Cássio Marques de Araújo',
      cargo: 'Gestor',
      especialidade: 'Não tomar banho',

      softSkills: [6,1,4,2,9,6],
      hardSkills: [7,2,1,0,9,2,3,4],
      projetos: ['Roubar Coelho','','',''],
      email: 'cascaoLimoeiro@gmail.com',
      senha: 'naotomarbanho27'
    },
    {
      nome: 'Magali Fernandes de Lima',
      cargo: 'Desenvolvedor',
      especialidade: 'Comer',

      softSkills: [7,1,6,3,0,1],
      hardSkills: [7,1,4,2,8,4,2,6],
      projetos: ['Almoço','Janta','',''],
      email: 'magaliMelancia@gmail.com',
      senha: 'mingau22'
    },
    {
      nome: 'Cebolácio Menezes da Silva Júnior',
      cargo: 'RH',
      especialidade: 'Planos infalíveis',

      softSkills: [7,1,6,3,2,6],
      hardSkills: [1,5,7,1,8,6,3,8],
      projetos: ['Roubar coelho','Não apanhar','Se esconder',''],
      email: 'cebolinha@gmail.com',
      senha: 'planoinfalivel83'
    },
    {
      nome: 'Monica Sousa',
      cargo: 'Design',
      especialidade: 'Bater com coelho',

      softSkills: [6,2,7,1,8,6],
      hardSkills: [6,3,8,8,9,2,9,0],
      projetos: ['Proteger o coelho','Bater no Cebolinha','Voltar pra casa','Ver a magali'],
      email: 'monicaSansao@gmail.com',
      senha: 'sansao45'
    }
  ];

  localStorage.setItem("userList", JSON.stringify(userList));
  userlist = JSON.parse(localStorage.getItem("userList"));

  ----------------- LISTA DE PROJETOS ----------------- 

  let projectList = [
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

  localStorage.setItem("projectList", JSON.stringify(projectList));
  userlist = JSON.parse(localStorage.getItem("projectList"));

  ----------------- LOGIN ----------------- 
  
  let userList = [
    {
      nome: 'Cássio Marques de Araújo',
      cargo: 'Gestor',
      especialidade: 'Não tomar banho',

      softSkills: [6,1,4,2,9,6],
      hardSkills: [7,2,1,0,9,2,3,4],
      projetos: ['Roubar Coelho','','',''],
      email: 'cascaoLimoeiro@gmail.com',
      senha: 'naotomarbanho27'
    },
    {
      nome: 'Magali Fernandes de Lima',
      cargo: 'Desenvolvedor',
      especialidade: 'Comer',

      softSkills: [7,1,6,3,0,1],
      hardSkills: [7,1,4,2,8,4,2,6],
      projetos: ['Almoço','Janta','',''],
      email: 'magaliMelancia@gmail.com',
      senha: 'mingau22'
    },
    {
      nome: 'Cebolácio Menezes da Silva Júnior',
      cargo: 'RH',
      especialidade: 'Planos infalíveis',

      softSkills: [7,1,6,3,2,6],
      hardSkills: [1,5,7,1,8,6,3,8],
      projetos: ['Roubar coelho','Não apanhar','Se esconder',''],
      email: 'cebolinha@gmail.com',
      senha: 'planoinfalivel83'
    },
    {
      nome: 'Monica Sousa',
      cargo: 'Design',
      especialidade: 'Bater com coelho',

      softSkills: [6,2,7,1,8,6],
      hardSkills: [6,3,8,8,9,2,9,0],
      projetos: ['Proteger o coelho','Bater no Cebolinha','Voltar pra casa','Ver a magali'],
      email: 'monicaSansao@gmail.com',
      senha: 'sansao45'
    }
  ];

  localStorage.setItem("userList", JSON.stringify(userList));
  userlist = JSON.parse(localStorage.getItem("userList"));

  ----------------- PERFIL ----------------- 

  let userList = [
    {
      nome: 'Cássio Marques de Araújo',
      cargo: 'Gestor',
      especialidade: 'Não tomar banho',

      softSkills: [6,1,4,2,9,6],
      hardSkills: [7,2,1,0,9,2,3,4],
      projetos: ['Roubar Coelho','','',''],
      email: 'cascaoLimoeiro@gmail.com',
      senha: 'naotomarbanho27'
    },
    {
      nome: 'Magali Fernandes de Lima',
      cargo: 'Desenvolvedor',
      especialidade: 'Comer',

      softSkills: [7,1,6,3,0,1],
      hardSkills: [7,1,4,2,8,4,2,6],
      projetos: ['Almoço','Janta','',''],
      email: 'magaliMelancia@gmail.com',
      senha: 'mingau22'
    },
    {
      nome: 'Cebolácio Menezes da Silva Júnior',
      cargo: 'RH',
      especialidade: 'Planos infalíveis',

      softSkills: [7,1,6,3,2,6],
      hardSkills: [1,5,7,1,8,6,3,8],
      projetos: ['Roubar coelho','Não apanhar','Se esconder',''],
      email: 'cebolinha@gmail.com',
      senha: 'planoinfalivel83'
    },
    {
      nome: 'Monica Sousa',
      cargo: 'Design',
      especialidade: 'Bater com coelho',

      softSkills: [6,2,7,1,8,6],
      hardSkills: [6,3,8,8,9,2,9,0],
      projetos: ['Proteger o coelho','Bater no Cebolinha','Voltar pra casa','Ver a magali'],
      email: 'monicaSansao@gmail.com',
      senha: 'sansao45'
    }
  ];

  localStorage.setItem("userList", JSON.stringify(userList));
  userlist = JSON.parse(localStorage.getItem("userList"));

    ----- USUÁRIOS LOGADOS -----

    ----- TESTE 1 ----- => Possui acesso aos recursos limitados por cargo

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Cássio Marques de Araújo');
  localStorage.setItem('email', 'cascaoLimoeiro@gmail.com');
  localStorage.setItem('cargo', 'Gestor');

  ----- TESTE 2 -----

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Magali Fernandes de Lima');
  localStorage.setItem('email', 'magaliMelancia@gmail.com');
  localStorage.setItem('cargo', 'Desenvolvedor');

  ----- TESTE 3 ----- => Possui acesso aos recursos limitados por cargo

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Cebolácio Menezes da Silva Júnior');
  localStorage.setItem('email', 'cebolinha@gmail.com');
  localStorage.setItem('cargo', 'RH');

  ----- TESTE 4 -----

  let mathRandom = Math.random().toString(16).substr(2); 
  let token = mathRandom + mathRandom;
    
  localStorage.setItem("token", token);

  localStorage.setItem('nome', 'Monica Sousa');
  localStorage.setItem('email', 'monicaSansao@gmail.com');
  localStorage.setItem('cargo', 'Design');

  ----------------- CARGOS ----------------- 

  let titleList = [
    {
      cargo: 'Desenvolvedor',
      hardSkills: ['JavaScript','SQL','Python','Java','TypeScript','Bash','C#','PHP']
    },
    {
      cargo: 'Design',
      hardSkills: ['Photoshop', 'Illustrator', 'Affinity', 'Procreate', 'CorelDRAWN', 'Figma', 'Sketch', 'AdobeXD']
    },
    {
      cargo: 'Gestor',
      hardSkills: ['-', '-', '-', '-', '-', '-', '-', '-']
    },
    {
      cargo: 'RH',
      hardSkills: ['-', '-', '-', '-', '-', '-', '-', '-']
    }
  ];

  localStorage.setItem("titleList", JSON.stringify(titleList));
  titleList = JSON.parse(localStorage.getItem("titleList"));


*/

