let cardconteiner = document.querySelector(".card-container");
let dados = []

// Função para carregar os dados do JSON e renderizar os cards iniciais
async function carregarCardsIniciais() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados); // Mostra todos os cards inicialmente
}

// Função para filtrar e mostrar os resultados da busca
function buscar() {
    // 1. Pega o termo digitado no campo de busca
    let campoBusca = document.getElementById("campo-busca");
    let termoBusca = campoBusca.value.toLowerCase(); // Pega o valor e converte para minúsculas

    // 2. Filtra os dados com base no nome ou na descrição
    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    // 3. Mostra os resultados na tela
    renderizarCards(resultados);
}

function renderizarCards(dadosParaRenderizar) {
    cardconteiner.innerHTML = ""; // Limpa os resultados anteriores
    for (let dado of dadosParaRenderizar) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.area}</h2>
        <p>${dado.tema}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardconteiner.appendChild(article);
    }
}

// Carrega todos os cards quando a página é carregada
document.addEventListener("DOMContentLoaded", carregarCardsIniciais);