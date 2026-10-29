
import { useState } from 'react';

function App() {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState('');

  const resets = {
    overwhelmed: 'Take five slow breaths and put your phone down.',
    comparing: 'Remember that social media shows highlights, not whole lives.',
    down: 'Take a break, get some water, and be kind to yourself.',
    okay: 'Reach out to a friend and spread some positivity.'
  };

  
async function getQuote() {
  try {
    const response = await fetch(
      'https://api.api-ninjas.com/v1/hobbies',
      {
        headers: {
          'X-Api-Key': 'FWct3kQR6n5ItRLoRRjbRJl6izbMvog1iWyxYnko'
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error('API request failed');
    }

    setQuote(data.hobby);
  } catch (error) {
    console.log(error);
    setQuote('Could not load a hobby. Try again!');
  }
}


  return (
    <div>
      <h1>Scroll Bloom 🌷</h1>
      <p>A little reset for your mind.</p>

      <h2>How are you feeling after scrolling?</h2>

      <button onClick={() => setMood('overwhelmed')}>
        Overwhelmed
      </button>

      <button onClick={() => setMood('comparing')}>
        Comparing myself
      </button>

      <button onClick={() => setMood('down')}>
        Feeling down
      </button>

      <button onClick={() => setMood('okay')}>
        Doing okay
      </button>

      {mood && (
        <div>
          <h2>Your little reset ♡</h2>
          <p>{resets[mood]}</p>

          <button onClick={getQuote}>
            Try a new hobbie!
          </button>

          <p>{quote}</p>
        </div>
      )}
    </div>
  );
}

export default App;

