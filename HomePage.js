import React, { useState } from 'react';

const HomePage = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(num);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Number Generator</h1>
      <button
        onClick={generateRandomNumber}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor: '#282c34',
          color: 'white',
          border: 'none',
          marginTop: '20px',
        }}
      >
        Generate Random Number
      </button>
      {randomNumber !== null && (
        <p style={{ fontSize: '24px', marginTop: '20px' }}>
          Generated Number: <strong>{randomNumber}</strong>
        </p>
      )}
    </div>
  );
};

export default HomePage;
