# 🎲 Gerador de Conselhos (Advice Generator)

Um aplicativo web simples e elegante que gera conselhos aleatórios ao clicar em um botão, consumindo uma API REST gratuita e desenvolvido com HTML, CSS e JavaScript puro (Vanilla JS).

---

## 🚀 Funcionalidades

- 🎲 **Geração Instantânea:** Clique no botão para receber um novo conselho.
- ⚡ **Fetch em Tempo Real:** Conexão direta com a API REST externa.
- 📱 **Layout Responsivo:** Funciona perfeitamente em dispositivos móveis, tablets e desktops.
- 🎯 **Feedback Visual:** Estado de carregamento (*loading*) enquanto busca a requisição.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização moderna utilizando Flexbox, variáveis CSS e efeitos de transição.
- **JavaScript (ES6+):** Manipulação do DOM, funções assíncronas (`async/await`) e `Fetch API`.
- **API Extrena:** [Advice Slip API](https://api.adviceslip.com/)

---

## 🌐 API Utilizada

Este projeto consome a **Advice Slip API**, uma API pública gratuita que não exige chave de autenticação (API Key).

- **Endpoint utilizado:** `https://api.adviceslip.com/advice`
- **Exemplo de Resposta (JSON):**
  ```json
  {
    "slip": {
      "id": 117,
      "advice": "Use sua imaginação. É o seu maior superpoder."
    }
  }
  ```

---

## 💡 Conceitos Praticados

- Requisições HTTP usando `fetch()`
- Manipulação de dados assíncronos com `async/await` e `try...catch`
- Manipulação dinâmica de elementos no DOM (`querySelector`, `textContent`)
- Centralização e layout responsivo com CSS Flexbox
- Tratamento de erros e controle de estado na UI (desabilitar botão durante requisições)

---

## 🔧 Como Executar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/gabrielfaria09/API_Conselhos.git
   ```
2. **Navegue até a pasta do projeto:**
   ```bash
   cd API_Conselhos
   ```
3. **Abra o arquivo `index.html`:**
   - Basta dar dois cliques no arquivo `index.html` ou abri-lo usando a extensão **Live Server** no VS Code.

---

## 📝 Licença

Sinta-se livre para usar, modificar e distribuir.

---

Desenvolvido com 💜 por [Gabriel Alves Faria](https://github.com/gabrielfaria09)
