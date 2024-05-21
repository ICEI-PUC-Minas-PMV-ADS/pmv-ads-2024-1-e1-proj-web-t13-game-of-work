const botao__excluirFunc = document.querySelector('.botao__excluirFunc');

const modal__excluirFunc = document.querySelector('.modal__excluirFunc');
const botao__fecharExcluirFuncionario = modal__excluirFunc.querySelector('.botaoFechar');

const botao__simExcluirFuncionario = modal__excluirFunc.querySelector('.botao__sim');
const botao__naoExcluirFuncionario = modal__excluirFunc.querySelector('.botao__nao');

const email__excluirFuncionario = document.querySelector('.email__excluirFuncionario');




const botao__editFunc = document.querySelector('.botao__editFunc');

const modal__editFunc = document.querySelector('.modal__editFunc');
const botao__fecharEditarFuncionario = modal__editFunc.querySelector('.botaoFechar');

const botao__editar = document.querySelector('.botao__editar');


const nomeFuncionario_edit = document.querySelector('#nomeFuncionario_edit');
const emailFuncionario_edit = document.querySelector('#emailFuncionario_edit');
const cargoFuncionario_edit = document.querySelector('#cargoFuncionario_edit');
const input__especialidade = document.querySelector('#input__especialidade');
const input__objetivos = document.querySelector('#input__objetivos');
const input__sobreMim = document.querySelector('#input__sobreMim');
const listaInput__softSkills = document.getElementsByClassName('input__softSkill');
const listaInput__hardSkills = document.getElementsByClassName('input__hardSkill');
const hardSkills = document.getElementsByClassName('hardSkill');

var esta_Preenchido = false;

botao__excluirFunc.addEventListener('click', function(){

    caixa__exibicao.innerText = '';

    let funcionarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    funcionarios.forEach(funcionario => {
        
        const emailFuncionario = document.createElement('h3');
        emailFuncionario.innerHTML = funcionario.email;
        emailFuncionario.classList.add('funcionarioExibido');

        caixa__exibicao.appendChild(emailFuncionario);
    });

    let funcionariosListados = document.getElementsByClassName('funcionarioExibido');

    for (let i = 0; i < funcionariosListados.length; i++) {
        
        funcionariosListados[i].addEventListener('click', function(e){

            const funcionarioClicado = e.target;
            var temClasse = false;

            for (let i = 0; i < funcionarioClicado.classList.length; i++) {
                if(funcionarioClicado.classList[i] == 'funcionarioSelecionado') {
                    temClasse = true;   
                }
            }

            
             if (temClasse) {
                modal__excluirFunc.setAttribute('style', 'display:block');
                overlay.setAttribute('style', 'display: block');

                email__excluirFuncionario.innerHTML = funcionarioClicado.innerHTML;
        
            } else{
        
                let funcionarioComClasse = document.querySelector('.funcionarioSelecionado');

                if (funcionarioComClasse) {
                    funcionarioComClasse.classList.remove('funcionarioSelecionado');
                    funcionarioClicado.classList.toggle('funcionarioSelecionado');
            
                } else
                    funcionarioClicado.classList.toggle('funcionarioSelecionado');
        
            }
        });
    }
});

overlay.addEventListener('click', function(){
    modal__excluirFunc.setAttribute('style', 'display: none');
    modal__editFunc.setAttribute('style', 'display: none');

});

botao__naoExcluirFuncionario.addEventListener('click', function(){
    modal__excluirFunc.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});

botao__simExcluirFuncionario.addEventListener('click', function(){
    modal__excluirFunc.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});

botao__fecharExcluirFuncionario.addEventListener('click', function(){
    modal__excluirFunc.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});

botao__fecharEditarFuncionario.addEventListener('click', function(){
    modal__editFunc.setAttribute('style', 'display:none');
    overlay.setAttribute('style', 'display:none');
});



botao__editFunc.addEventListener('click', function(){

    caixa__exibicao.innerText = '';

    let funcionarios = JSON.parse(localStorage.getItem('listaUsuarios'));

    funcionarios.forEach(funcionario => {

        const emailFuncionario_edit = document.createElement('h3');
        emailFuncionario_edit.innerHTML = funcionario.email;
        emailFuncionario_edit.classList.add('funcionarioExibido');

        caixa__exibicao.appendChild(emailFuncionario_edit);
    });

    let funcionariosListados = document.getElementsByClassName('funcionarioExibido');

    for (let i = 0; i < funcionariosListados.length; i++) {
        
        funcionariosListados[i].addEventListener('click', function(e){

            const funcionarioClicado = e.target;
            var temClasse = false;

            for (let i = 0; i < funcionarioClicado.classList.length; i++) {
                if(funcionarioClicado.classList[i] == 'funcionarioSelecionado_edit') {
                    temClasse = true;   
                }
            }

            
             if (temClasse) {
                modal__editFunc.setAttribute('style', 'display:block');
                overlay.setAttribute('style', 'display: block');

                funcionarios.forEach(funcionario =>{

                    if (funcionarioClicado.innerHTML == funcionario.email) {
                        
                        nomeFuncionario_edit.innerHTML = funcionario.nome;
                        cargoFuncionario_edit.innerHTML = funcionario.cargo;
                        emailFuncionario_edit.innerHTML = funcionario.email;

                        input__especialidade.value = funcionario.especialidade;
                        input__sobreMim.value = funcionarios.sobreMim;
                        input__objetivos.value = funcionarios.input__objetivos;

                        let cargos = JSON.parse(localStorage.getItem('listaCargos'));

                        for (let i = 0; i < cargos.length; i++) {
                            
                            if(funcionario.cargo == cargos[i].cargo){
                                
                                for (let j = 0; j < hardSkills.length; j++) {
                                    
                                    hardSkills[j].innerHTML = cargos[i].hardSkills[j];
                                    
                                }
                            }
                        }

                        for (let i = 0; i < listaInput__softSkills.length; i++) {
                            
                            listaInput__softSkills[i].value = funcionario.softSkills[i];
                
                        }
                        for (let i = 0; i < listaInput__hardSkills.length; i++) {
                            
                            listaInput__hardSkills[i].value = funcionario.hardSkills[i];

                        }
                    }
                });
        
            } else{
        
                let funcionarioComClasse = document.querySelector('.funcionarioSelecionado_edit');

                if (funcionarioComClasse) {
                    funcionarioComClasse.classList.remove('funcionarioSelecionado_edit');
                    funcionarioClicado.classList.toggle('funcionarioSelecionado_edit');
            
                } else
                    funcionarioClicado.classList.toggle('funcionarioSelecionado_edit');
        
            }
        });
    }
});

botao__editar.addEventListener('click', function(){

    if (input__especialidade.value != '' && input__objetivos.value != '' && input__sobreMim.value != '') {
        
        for (let i = 0; i < listaInput__softSkills.length; i++) {
            
            if (listaInput__softSkills[i].value != '') {
                
                for (let j = 0; j < listaInput__hardSkills.length; j++) {
                    
                    if (listaInput__hardSkills != '') {
                        esta_Preenchido = true;
                    } else{
                        esta_Preenchido = false;
                    }
                }
            } else {
                esta_Preenchido = false;
            }
        }
    } else {
        esta_Preenchido = false;
    }


    if (esta_Preenchido) {
        alert('Funcionário ' + nomeFuncionario_edit.innerHTML + ' foi editado.');

        caixa__exibicao.innerText = '';
        overlay.setAttribute('style', 'display:none');
        modal__editFunc.setAttribute('style', 'display: none');

    } else {
        alert('CAMPO VAZIO!!!');
    }
});