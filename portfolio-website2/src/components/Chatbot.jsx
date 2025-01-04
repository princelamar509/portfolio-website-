import React, { useState } from 'react';
import ChatIcon from './ChatIcon'; 
import CustomAlert from './CustomAlert'; 
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setHasInteracted(true);
    setTimeout(() => {
      setShowAlert(true); 
    }, 500);
  };

  const handleCloseAlert = () => {
    setShowAlert(false); 
  };



  window.addEventListener('click', (event) => {
    if (!isOpen) return;
    if (!event.target.closest('.chatbot-container')) {
      setIsOpen(false);
    }
  })

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChat}>
        <ChatIcon size={40} color="goldenrod" /> 
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

      {showAlert && (
        <CustomAlert 
          message="Cool beans! Make sure to hover over everything and have fun."
          onClose={handleCloseAlert} // Pass close function to custom alert
        />
      )}
    </div>
  );
};

export default Chatbot;
