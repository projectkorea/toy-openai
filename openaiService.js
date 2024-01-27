import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${OPENAI_API_KEY}`,
};

const getRequestPayload = (message) => {
  return {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
    temperature: 0.7,
  };
};

const url = 'https://api.openai.com/v1/chat/completions';

async function fetchOpenAIResponse(message) {
  try {
    const payload = getRequestPayload(message);
    const response = await axios.post(url, payload, headers);
    return response.data;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

export { fetchOpenAIResponse };
