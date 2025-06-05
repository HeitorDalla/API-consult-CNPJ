"use strict";

document.querySelector("#btnBuscar").addEventListener("click", async (e) => {
    e.preventDefault();

    const containerResposta = document.querySelector("#containerResposta");
    const cnpj = document.querySelector("#cnpj").value;

    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    const dados = requisicaoAPI(url);
    popularDados(dados, containerResposta);
})

async function requisicaoAPI (url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Não possível carregar seus dados.")
        }

        return response.json();
    } catch (error){
        console.error(error);
        return;
    }
}

function popularDados (dados, containerResposta){
    
}