import React from 'react';


const HappyDogBotIcon = ({ size = 34, color = '#000' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dog-bot-icon"
    >
      {/* Head */}
      <circle cx="12" cy="12" r="8" className="dog-head" stroke={color} fill="none" />
      {/* Smile */}
      <path d="M10 16s1 2 2 2 2-2 2-2" fill="none" stroke={color} />
      {/* Eyes */}
      <circle cx="9" cy="10" r="1" className="dog-eye dog-eye-left" fill={color} />
      <circle cx="15" cy="10" r="1" className="dog-eye dog-eye-right" fill={color} />
      {/* Antennas */}
      <path d="M12 2v2" stroke={color} />
      <path d="M8 4l-1.5 2" stroke={color} />
      <path d="M16 4l1.5 2" stroke={color} />
      {/* Tail */}
      <path d="M6 14s-2 1.5-2 3 1 3 1 3" className="dog-tail" stroke={color} />
      <path d="M18 14s2 1.5 2 3-1 3-1 3" stroke={color} />
    </svg>
  );
};

export default HappyDogBotIcon;
