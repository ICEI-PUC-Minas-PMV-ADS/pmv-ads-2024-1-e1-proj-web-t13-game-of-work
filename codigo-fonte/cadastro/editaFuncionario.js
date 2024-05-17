const botao__excluirFunc = document.querySelector('.botao__excluirFunc');

const modal__excluirFunc = document.querySelector('.modal__excluirFunc');
const botao__fecharExcluirFuncionario = modal__excluirFunc.querySelector('.botaoFechar');

const botao__simExcluirFuncionario = modal__excluirFunc.querySelector('.botao__sim');
const botao__naoExcluirFuncionario = modal__excluirFunc.querySelector('.botao__nao');

const email__excluirFuncionario = document.querySelector('.email__excluirFuncionario');

botao__excluirFunc.addEventListener('click', function(){

    caixa__exibicao.innerText = '';

    let funcionarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    console.log(funcionarios);

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