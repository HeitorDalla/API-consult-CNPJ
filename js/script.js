import { request } from './request.js';

document.querySelector("#btnBuscar").addEventListener("click", async (e) => {
    e.preventDefault();

    const containerResposta = document.querySelector("#containerResposta");
    const cnpj = document.querySelector("#cnpj").value.trim();

    if (!cnpj) {
        containerResposta.textContent = `Por favor, digite um CNPJ válido!`;
        return;
    }

    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
    const dados = await request(url);

    if (dados) {
        popularDados(dados, containerResposta);
    } else {
        containerResposta.textContent = `Erro ao buscar dados!`;
    }    
})

function popularDados (dados, containerResposta) {    
    containerResposta.innerHTML = `
        <p><strong>Razão Social:</strong> ${dados.razao_social}</p>
        <p><strong>Nome Fantasia:</strong> ${dados.nome_fantasia}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        <p><strong>Município:</strong> ${dados.municipio}</p>
        <p><strong>UF:</strong> ${dados.uf}</p>
    `;
}