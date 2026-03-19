// Initialize emoji data on page load
fetch('/api/init-emoji');

// Handle form submission with fetch
document.getElementById('nameForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const userName = document.getElementById('userName').value;
  const resultDiv = document.getElementById('result');
  
  try {
    const response = await fetch('/api/get-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      resultDiv.textContent = data.name + ' ' + data.emoji;
    } else {
      resultDiv.textContent = 'Error: ' + data.error;
    }
  } catch (error) {
    resultDiv.textContent = 'Error: ' + error.message;
  }
});
