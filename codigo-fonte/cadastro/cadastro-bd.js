// Se a lista de projetos existe ele guarda ela na variável listaProjetos
// Se não a lista é criada e armazenada na variável listaProjetos
var listaProjetos = JSON.parse(localStorage.getItem('listaProjetos') || '[]');

function cadastrarProjeto(){
    
    var nomeProjeto = document.querySelector('.inputNomeProjeto');
    var numeroVagasProjeto = document.querySelector('.inputVagasProjeto');
    var descricaoProjeto = document.querySelector('#inputDescricaoProjeto');
    

    const opcoesCargoProjeto = document.getElementsByClassName('opcoesCargo');
    var cargosProjeto = [];

    const skillsSelecProjeto = document.getElementsByClassName('skillsDoProjeto');
    var skillsProjeto = [];

    // Cria array com todos os cargos presentes no projeto
    for (let i = 0; i < opcoesCargoProjeto.length; i++) {
        
    if(opcoesCargoProjeto[i].checked){
           cargosProjeto[cargosProjeto.length] = opcoesCargoProjeto[i].name;
   }
       
    }   
    // Cria arrayo com todas as skills presentes no projeto
    for (let i = 0; i < skillsSelecProjeto.length; i++) {
        skillsProjeto[skillsProjeto.length] = skillsSelecProjeto[i].innerHTML;
    }

    erro = 'semErro';

    skillsSelecionadas = document.getElementsByClassName('skillsDoProjeto');

    // Identificando erros
    for (let i = 0; i < listaProjetos.length; i++) {
        if (listaProjetos[i].nome == nomeProjeto.value) {
            erro = 'projetoJaExiste';
        }
    }
    if (skillsProjeto.length == 0) {
        erro = 'skillVazia';
    }
    if(cargosProjeto.length == 0){
        erro = 'cargoVazio';
    }
    if (inputDescricao.value == "") {
        erro = 'descricaoVazia';   
    }
    if(inputVagas.value == "") {
        erro = 'vagasVazio';
    }
    if (inputNome.value == "") {
        erro = 'nomeVazio';
    }
    
    // Tratando erros
    switch (erro) {
        case 'nomeVazio':
            mensagemErro.setAttribute('style', 'color:red');
            mensagemErro.innerHTML = 'Campo Nome vazio!';
            break;
        case 'vagasVazio':
            mensagemErro.setAttribute('style', 'color:red');
            mensagemErro.innerHTML = 'Campo Vagas vazio!';
            break;
        case 'descricaoVazia':
            mensagemErro.setAttribute('style', 'color:red');
            mensagemErro.innerHTML = 'Campo Descrição vazio!'; 
            break;
        case 'cargoVazio':
            mensagemErro.setAttribute('style', 'color:red');
            mensagemErro.innerHTML = 'Selecione algum Cargo!';
            break;
        case 'skillVazia':
            mensagemErro.setAttribute('style', 'color:red');
            mensagemErro.innerHTML = 'Selecione alguma Skill!';
            break;
        case 'projetoJaExiste':
            mensagemErro.setAttribute('style', 'color:red');
            mensagemErro.innerHTML = 'Projeto já existe!';
            break;
        // Se não tiver nenhum erro ele adiciona o projeto na lista     
        case 'semErro':

            listaProjetos.push({

                nome: nomeProjeto.value,
                gestor: nomeGestor,
                vagas: numeroVagasProjeto.value,
                descricao: descricaoProjeto.value,
                cargos: cargosProjeto,
                skills: skillsProjeto,
                participantes: []
                
                
            });
        
            localStorage.setItem('listaProjetos', JSON.stringify(listaProjetos));
                   
            mensagemErro.setAttribute('style', 'color:green');
            mensagemErro.innerHTML = 'Projeto cadastrado!';

            alert('Projeto cadastrado com sucesso!');
            fechaModal();  
        default:
            break;
    }
}

function deletarProjeto(nomeDoProjeto){

    console.log(nomeDoProjeto);
    
}


if (listaProjetos.length == 0) {
    localStorage.setItem('listaProjetos', '[]');
}
 

botao__criarProjeto.addEventListener('click', cadastrarProjeto);
botao__simExcluirProjeto.addEventListener('click', function(){
    let projetos = JSON.parse(localStorage.getItem('listaProjetos'));
    let nomeDoProjeto = nome__excluirProjeto.innerHTML;
    
    for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].nome == nomeDoProjeto) {
            
            projetos.splice(i, 1);
            localStorage.setItem('listaProjetos', JSON.stringify(projetos));

            alert(nomeDoProjeto + ' FOI EXCLUIDO!');
        }
        caixa__exibicao.innerText = '';
        
    }
});
