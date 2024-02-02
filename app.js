import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import bodyParser from 'body-parser';
// import cors from 'cors';
import { getOpenAIChatResponse } from './openaiService.js';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
*/

app.use(bodyParser.json());

app.post('/test-openai', async (req, res) => {
  try {
    const userMessage = req.body.message; 
    const data = await getOpenAIChatResponse(userMessage);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  // index.html을 보낸다
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
