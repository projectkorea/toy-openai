const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const responseContainer = document.getElementById('responseContainer');

sendButton.addEventListener('click', async () => {
  const userMessage = userInput.value;
  try {
    const response = await fetch('/test-openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (response.ok) {
      const data = await response.json();
      const elem = (document.createElement('div').textContent = JSON.stringify(data, null, 2));
      responseContainer.append(elem);
    } else {
      responseContainer.textContent = 'Error: ' + response.status;
    }
  } catch (error) {
    responseContainer.textContent = 'Error: ' + error.message;
  }
});
