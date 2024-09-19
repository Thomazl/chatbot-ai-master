# Chatbot AI

## Descrição
O Chatbot AI é uma aplicação de chatbot avançada que utiliza a inteligência artificial para fornecer respostas precisas e úteis aos usuários. Esta aplicação é construída com várias bibliotecas e frameworks modernos para garantir desempenho e escalabilidade.

## Instalação
Para instalar a aplicação, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/thomazl/chatbot-ai.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd chatbot-ai
    ```
3. Instale as dependências:
    ```sh
    pnpm install
    ```

## Dependências
A aplicação utiliza as seguintes dependências principais:
- Node.js
- Express
- Axios
- Dotenv
- Google Gemini IA

## Utilização do Gemini IA da Google
Para utilizar o Gemini IA da Google, siga os passos abaixo:

1. Crie uma conta no Google Cloud Platform e ative a API do Gemini IA.
2. Obtenha a chave de API e configure-a no arquivo `.env`:
    ```
    GOOGLE_GEMINI_API_KEY=your_api_key_here
    ```
3. No código da aplicação, importe e configure o Gemini IA:
    ```typescript
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const prompt = pergunta;

  const result = await model.generateContent(prompt);
    ```

4. Utilize a função `getGeminiResponse` para obter respostas do Gemini IA:
    ```javascript
    app.post('/chat', async (req, res) => {
        const { pergunta } = req.body;
        const geminiResponse = await getGeminiResponse(pergunta);
        res.json({ resposta });
    });
    ```

## Como Utilizar
1. Inicie o servidor:
    ```sh
    pnpm start
    ```
2. Acesse a aplicação no navegador:
    ```
    http://localhost:3000
    ```
3. Interaja com o chatbot enviando perguntas e recebendo respostas inteligentes.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).