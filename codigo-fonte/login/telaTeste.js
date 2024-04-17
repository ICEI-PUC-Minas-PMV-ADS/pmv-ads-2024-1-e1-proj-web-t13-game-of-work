const botaoEntrarCadastro = document.querySelector("#botaoEntrarCadastro");
const inputLoginCadastro = document.querySelector("#inputLoginCadastro");
const inputSenhaCadastro = document.querySelector("#inputSenhaCadastro");


botaoEntrarCadastro.addEventListener("click", function(){
    if(inputLoginCadastro.value == "" || inputSenhaCadastro.value == "" || inputLoginCadastro.value.length < 4 || inputSenhaCadastro.value.length < 4 ){
        alert("Campo inválido");
    }
    else{
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  
        listaUser.push(
          {
            nomeUser: inputLoginCadastro.value,
            senhaUser: inputSenhaCadastro.value
          });
      
        localStorage.setItem("listaUser", JSON.stringify(listaUser))
      
        alert("Usuário cadastrado com sucesso!");
    }
});

const botaoEntrar = document.querySelector("#botaoEntrar");
const inputLogin = document.querySelector("#inputLogin");
const inputSenha = document.querySelector("#inputSenha");

var senha;
var email;

let msgError = document.querySelector("#msgError") // para quando errar senha ou email
  
let listaUser = [] //listaUser criada no código do cadastro
  
let userValid = { //para validar e depois percorrer com Foreach
      
    email: "",
    senha: ""
   
  }

botaoEntrar.addEventListener("click", function(){

    let msgError = document.querySelector("#msgError") // para quando errar senha ou email
  
    let listaUser = [] //listaUser criada no código do cadastro
      
    let userValid = { //para validar e depois percorrer com Foreach
          
        email: "",
        senha: ""
       
      }
    
    

    //pega a listaUser do LocalStorage criada no cadastro e percorre essa lista para comparar os dados que eu insiro no login com os dados retirados ao fazer o cadastro
    listaUser = JSON.parse(localStorage.getItem("listaUser"));
    
    listaUser.forEach((item) => {
    
        if(inputLogin.value == item.nomeUser && inputSenha.value == item.senhaUser){

            userValid = {
                email: item.nomeUser,
                senha: item.senhaUser
                
            }

            email = item.nomeUser;
            senha  = item.senhaUser;
      
        }
  })

  if(inputLogin.value == userValid.email && inputSenha.value == userValid.senha && inputLogin.value != "" && inputSenha.value != ""){
    
    let mathRandom = Math.random().toString(16).substr(2) 
    let token = mathRandom + mathRandom
    
    localStorage.setItem("token", token);

    localStorage.setItem('senha', JSON.stringify(senha));
    localStorage.setItem('email', JSON.stringify(email));

    console.log("O USUÁRIO ENTROU CORRETAMENTE!!");

  } else {
    console.log("DEU ERRO TROPA!!!");

    console.log(userValid);

  }
  
});


// TESTE LISTA DE OBJETOS ----------------------------------------------

// criar objeto java script com todos os cargos
var cargos = {
  cargos:[
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
  ]
}

//--------------------------------------------------------------------------

// listaTeste testa se a lista de cargos já está salva no localStorage

let listaTeste = JSON.parse(localStorage.getItem("listaCargos"));
if(listaTeste == null){
    localStorage.setItem('listaCargos', JSON.stringify(cargos));
}

let listaCargos = JSON.parse(localStorage.getItem("listaCargos"));
console.log(listaCargos.cargos.length);

  for (let i = 0; i < listaCargos.cargos.length; i++) {
    console.log("ALO");
    const divCargos = document.querySelector(".divCargos");
  
    const cardCargo = document.createElement("div");
    cardCargo.classList.add("cardCargo");
  
    const pCargo = document.createElement("p");
    pCargo.id = "p_cargo";
    pCargo.innerHTML = "Cargo: ";
  
    const cargo = document.createElement("p");
    cargo.innerHTML = listaCargos.cargos[i].cargo;
  
    const pTecnologia = document.createElement("p");
    pTecnologia.id = "p_tecnologia";
    pTecnologia.innerHTML = "Tecnologia: ";
  
    const tecnologia =  document.createElement("p");
    tecnologia.innerHTML = listaCargos.cargos[i].tecnologia;
  
    const pFuncao = document.createElement("p");
    pTecnologia.id = "p_funcao";
    pTecnologia.innerHTML = "Função: ";
    
    const funcao = document.createElement("p");
    funcao.innerHTML = listaCargos.cargos[i].funcao;
  
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



