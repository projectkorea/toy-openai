import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getChatCompletion(content) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content }],
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
  });
  return chatCompletion
}

async function getOpenAIChatResponse(content) {
  try {
    const result = getChatCompletion(content);
    return result;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

export { getOpenAIChatResponse };
