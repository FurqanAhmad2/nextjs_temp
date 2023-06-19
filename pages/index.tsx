import React, { useState } from 'react';

const IndexPage = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "It always seems impossible until it's done. - Nelson Mandela",
  ];

  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to the Surprise Page!</h1>
      <p className="subtitle">Click the button to generate a random quote:</p>
      <blockquote className="quote">{quote}</blockquote>
      <button className="btn" onClick={generateRandomQuote}>
        Generate Quote
        <div className="sparkle" />
      </button>
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: black;
          color: white;
          font-family: 'Montserrat', sans-serif;
          margin: 0;
          padding: 0;
        }

        .title {
          font-size: 24px;
          margin-bottom: 16px;
        }

        .subtitle {
          font-size: 16px;
          margin-bottom: 24px;
        }

        .quote {
          font-size: 18px;
          margin-bottom: 32px;
        }

        .btn {
          position: relative;
          padding: 8px 16px;
          font-size: 14px;
          border: none;
          background-color: transparent;
          color: white;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
        }


        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
