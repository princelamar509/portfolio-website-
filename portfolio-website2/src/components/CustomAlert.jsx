import React from 'react';


const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <span className="custom-alert-message">{message}</span>
        <button className="custom-alert-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
