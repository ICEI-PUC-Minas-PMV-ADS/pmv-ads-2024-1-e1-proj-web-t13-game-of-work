// Se a lista de projetos existe ele guarda ela na variável listaProjetos
// Se não a lista é criada e armazenada na variável listaProjetos
var listaProjetos = JSON.parse(localStorage.getItem('listaProjetos') || '[]');

function cadastrarProjeto(){
    
    listaProjetos = JSON.parse(localStorage.getItem('listaProjetos') || '[]');

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
            console.log(listaProjetos);
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
                gestor: emailGestor,
                vagas: numeroVagasProjeto.value,
                descricao: descricaoProjeto.value,
                cargos: cargosProjeto,
                skills: skillsProjeto,
                participantes: [emailGestor]
                
                
            });
        
            localStorage.setItem('listaProjetos', JSON.stringify(listaProjetos));

            let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].email == emailGestor) {
                    let projetos = listaUsuarios[i].projetos;

                    projetos.push(nomeProjeto.value);
                    listaUsuarios[i].projetos = projetos;

                    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
                }
            }
                   
            mensagemErro.setAttribute('style', 'color:green');
            mensagemErro.innerHTML = 'Projeto cadastrado!';

            alert('Projeto cadastrado com sucesso!');
            fechaModal();  
        default:
            break;
    }
}

if (listaProjetos.length == 0) {
    localStorage.setItem('listaProjetos', '[]');
}
 

botao__criarProjeto.addEventListener('click', cadastrarProjeto);

botao__simExcluirProjeto.addEventListener('click', function(){
    let projetos = JSON.parse(localStorage.getItem('listaProjetos'));
    let nomeDoProjeto = nome__excluirProjeto.innerHTML;
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    for (let j = 0; j < listaUsuarios.length; j++) {
        for (let k = 0; k < listaUsuarios[j].projetos.length; k++) {
            if (listaUsuarios[j].projetos[k] == nomeDoProjeto) {
                let projetos2 = listaUsuarios[j].projetos;
                projetos2.splice(k,1);
                listaUsuarios[j].projetos = projetos2;

                localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
            }
        }
        
    }
    
    for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].nome == nomeDoProjeto) {
            
            projetos.splice(i, 1);
            localStorage.setItem('listaProjetos', JSON.stringify(projetos));

            alert(nomeDoProjeto + ' FOI EXCLUIDO!');
        }
        caixa__exibicao.innerText = '';
        
    }
});

botao__simExcluirFuncionario.addEventListener('click', function(){
    let usuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    let emailDoFuncionario = email__excluirFuncionario.innerHTML;
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == emailDoFuncionario) {
            
            usuarios.splice(i, 1);
            localStorage.setItem('listaUsuarios', JSON.stringify(usuarios));

            alert(emailDoFuncionario + ' FOI EXCLUIDO!');
        }
        caixa__exibicao.innerText = '';
        
    }
});

botao__editar.addEventListener('click', function(){

    if (esta_Preenchido) {
        
        let objeto = {

            nome: '',
            email: '',
            cargo: '',
            especialidade: '',
            sobre_mim: '',
            objetivos: '',
            softSkills: [],
            hardSkills: [],
            projetos: [],
            senha: ''
        }

        objeto.nome = nomeFuncionario_edit.innerHTML;
        objeto.email = emailFuncionario_edit.innerHTML;
        objeto.cargo = cargoFuncionario_edit.innerHTML;
        objeto.especialidade = input__especialidade.value;
        objeto.sobre_mim = input__sobreMim.value;
        objeto.objetivos = input__objetivos.value;

        for (let i = 0; i < listaInput__softSkills.length; i++) {
            
            objeto.softSkills[i] = listaInput__softSkills[i].value;
            
        }

        for (let i = 0; i < listaInput__hardSkills.length; i++) {
            
            objeto.hardSkills[i] = listaInput__hardSkills[i].value;
            
        }

        let usuarios = JSON.parse(localStorage.getItem('listaUsuarios'));


        for (let i = 0; i < usuarios.length; i++) {
            
            if (usuarios[i].email == objeto.email) {
                
                objeto.projetos = usuarios[i].projetos;
                objeto.senha = usuarios[i].senha;
                usuarios.splice(i, 1);
                usuarios.push(objeto);
                localStorage.setItem('listaUsuarios', JSON.stringify(usuarios));
            }
            
        }
    }
});

