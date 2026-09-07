const botao = document.getElementById("botao");
const paragrafo = document.getElementById("conselho");

async function aconselhar() {
        const resposta = (await fetch('https://api.adviceslip.com/advice'));

        if(!resposta.ok){
            console.log("error");
            paragrafo.textContent = "Error";
        }
        else{
        const dados = await resposta.json();
        const texto = dados.slip.advice;
        console.log(texto);
        paragrafo.textContent = texto;
        }

}
botao.addEventListener('click', aconselhar);
