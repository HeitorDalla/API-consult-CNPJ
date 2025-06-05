"use strict";

document.querySelector("#btnBuscar").addEventListener("click", async (e) => {
    e.preventDefault();

    const respostaAPI = document.querySelector("#respostaAPI");
    const cnpj = document.querySelector("#cnpj").value;

    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;

    const dados = requisicaoAPI(url);

    popularDados(dados, respostaAPI);
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

function popularDados (dados, resposta){
    console.log(dados)
    console.log(dados)
}