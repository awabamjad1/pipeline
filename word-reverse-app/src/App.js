import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [reversedWord, setReversedWord] = useState('');

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const reverseWord = () => {
    const reversed = word.split('').reverse().join('');
    setReversedWord(reversed);
  };

  return (
    <div className="container">
      <h1>Word Reversal App</h1>
      <div>
        <input
          className="input-field"
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={handleInputChange}
        />
        <button className="reverse-btn" onClick={reverseWord}>
          Reverse
        </button>
      </div>
      {reversedWord && (
        <div className="result">
          <h2>Reversed Word:</h2>
          <p>{reversedWord}</p>
        </div>
      )}
    </div>
  );
}

export default App;

