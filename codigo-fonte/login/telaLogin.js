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