const linha_projetos = document.querySelector("#linha_projetos");
var listaProjetos = JSON.parse(localStorage.getItem('listaProjetos') || '[]');
const imagens = ["projetoCoca.png", "projetoFood.png", "projetoGame.png", "projetoGestao.png", "projetoSaude.png","projetoWork.png"]

for (let i = 0; i < listaProjetos.length; i++) {
    const cardProjetos = document.createElement("div")
    cardProjetos.classList.add("cardProjetos")
    cardProjetos.classList.add("col-lg-6")

    const cartao = document.createElement("div")
    cartao.classList.add("card")
    cartao.classList.add("mb-3")
    cartao.classList.add("cartao")
    cardProjetos.appendChild(cartao)

    const row = document.createElement("div")
    row.classList.add("row")
    cartao.appendChild(row)

    const col_md_5 = document.createElement("div")
    col_md_5.classList.add("col-md-5")
    row.appendChild(col_md_5)

    const imagem = document.createElement("img")
    imagem.classList.add("img-fluid")
    imagem.classList.add("rounded-start")
    const randomIndex = Math.floor(Math.random() * imagens.length);
    imagem.src="../imagens/projetos/" + imagens[randomIndex]
    col_md_5.appendChild(imagem)

    const col_md_7 = document.createElement("col-md-7")
    col_md_7.classList.add("col-md-7")
    row.appendChild(col_md_7)

    const card_title = document.createElement("h5")
    card_title.classList.add("card-title")
    card_title.innerHTML = listaProjetos[i].nome
    col_md_7.appendChild(card_title)

    const prioridade = document.createElement("p")
    prioridade.classList.add("prioridade")
    prioridade.innerHTML = "Prioridade: ALTA"
    col_md_7.appendChild(prioridade)

    const div_quebra = document.createElement("div")
    div_quebra.classList.add("row")
    row.appendChild(div_quebra)

    const br = document.createElement("br")
    div_quebra.appendChild(br)

    const col_md_12 = document.createElement("div")
    col_md_12.classList.add("col-md-12")
    row.appendChild(col_md_12)

    const card_text = document.createElement("p")
    card_text.classList.add("card-text")
    card_text.innerHTML = listaProjetos[i].descricao
    col_md_12.appendChild(card_text)

    linha_projetos.appendChild(cardProjetos)

}

const nomeProjeto = document.querySelector("#nomeProjeto")
const descricaoProjeto = document.querySelector("#descricaoProjeto")
const hardSkills = document.querySelector("#hardSkills")
const nomeGestor = document.querySelector("#nomeGestor")
const equipe = document.querySelector("#equipe")
const numeroVagas = document.querySelector("#numeroVagas")

var cartaoProjeto = document.getElementsByClassName("cardProjetos")

for (let i = 0; i < cartaoProjeto.length; i++) {
    let nome = cartaoProjeto[i].querySelector(".card-title").innerHTML
    cartaoProjeto[i].addEventListener("click",function(){
        for (let j = 0; j < listaProjetos.length; j++) {
            if (nome==listaProjetos[j].nome) {
                nomeProjeto.innerHTML = nome
                descricaoProjeto.innerHTML = listaProjetos[j].descricao
                let skills = ''
                for (let k = 0; k < listaProjetos[j].skills.length; k++) {
                    if (k < listaProjetos[j].skills.length - 1) {
                        skills = skills + listaProjetos[j].skills[k] + ', '
                    } else{
                        skills = skills + listaProjetos[j].skills[k] + '.'
                    }
                }
                hardSkills.innerHTML = skills
                nomeGestor.innerHTML = listaProjetos[j].gestor
                equipe.innerText = ""
                const h5 = document.createElement("h5")
                h5.classList.add("card-title2")
                h5.innerHTML = "Equipe:"
                equipe.appendChild(h5)
                for (let k = 0; k < listaProjetos[j].participantes.length; k++) {
                    const p = document.createElement("p")
                    p.classList.add("card-text2")
                    p.innerHTML = listaProjetos[j].participantes[k]
                    equipe.appendChild(p)
                }
                numeroVagas.innerHTML = ""
                numeroVagas.innerHTML = numeroVagas.innerHTML + listaProjetos[j].vagas
            }
        }
    })
    
}

let cargo = localStorage.getItem('cargo');
var opcao_2 = document.querySelector('#opcao_2');
if (cargo=='Gestor' || cargo=='RH' ) {
    opcao_2.setAttribute('style','display:block')

} else{ 
    opcao_2.setAttribute('style','display:none') 
}

var opcao_3 = document.querySelector('#opcao_3');
if (cargo=='Gestor' || cargo=='RH' ) {
    opcao_3.setAttribute('style','display:block')

} else{ 
    opcao_3.setAttribute('style','display:none') 
}
