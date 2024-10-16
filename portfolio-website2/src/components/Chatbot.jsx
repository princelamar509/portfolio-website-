import React, { useState } from 'react';
import ChatIcon from './ChatIcon'; 
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setHasInteracted(true);
    setTimeout(() => {
      alert("Cool beans! Make sure to hover over everything and have fun.");
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChat}>
        <ChatIcon size={43} color="goldenrod" /> 
      </div>

      {isOpen && (
        <div className="chatbot-window">
          {!hasInteracted ? (
            <>
              <p>Hello! Welcome to my portfolio. How can I help you navigate better?</p>
              <button onClick={() => handleOptionClick('about')}>Check About Section</button>
              <button onClick={() => handleOptionClick('home')}>Stay at Home Section</button>
              <button onClick={() => handleOptionClick('explore')}>Just Looking Around</button>
            </>
          ) : (
            <p>Thanks for interacting!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
