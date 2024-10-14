
import React from 'react';
import './MarqueeButton.css';

const MarqueeButton = ({ onClick }) => {
  return (
    <button className="marquee-button" type="button" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="70" fill="none" stroke="#000" strokeWidth="1"   viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="60"  fillOpacity="0" stroke="#DAA520" strokeWidth="3" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.45rem" fontSize="30" fill="#000">Click Me</text>
      </svg>
    </button>
  );
};

export default MarqueeButton;
