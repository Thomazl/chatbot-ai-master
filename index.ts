import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express();
app.use(express.json());
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173', // Permite requisições dessa origem específica
  methods: 'GET,POST',             // Métodos permitidos
}));

async function CallTheGemini(pergunta: string) {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "Nesse chat você só podera responder questões sobre doenças relacionadas ao aedes aegypti, caso a mensagem enviada não seja relacionada ao assunto peça para a pessoa perguntar sobre esse assunto.",
  });
  const prompt = pergunta;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());

  return result.response.text();
}

app.post("/chat", async (req: { body: { pergunta: any; }; }, res: { json: (arg0: { resposta: string; }) => void; }) => {
  const { pergunta } = req.body;

  const resposta = await CallTheGemini(pergunta);

  res.json({ resposta });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
