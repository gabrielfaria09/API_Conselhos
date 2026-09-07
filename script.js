const botao = document.getElementById("botao");
const paragrafo = document.getElementById("conselho");

async function aconselhar() {

    botao.disabled = true;
    botao.textContent = 'Carregando...';


    try {
        const resposta = (await fetch('https://api.adviceslip.com/advice'));

        if(!resposta.ok){
            throw new Error(`Erro na API: Status ${response.status}`);
        }

        else{
            const dados = await resposta.json();
            const texto = dados.slip.advice;
            console.log(texto);
            paragrafo.textContent = texto;
        }
    } catch (error) {
         console.error("Falha ao buscar conselho:", error.message);
    }

    botao.disabled = false;
    botao.textContent = "Gerar conselho?";

}
botao.addEventListener('click', aconselhar);
