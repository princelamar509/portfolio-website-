import React from 'react';

const DownloadPreloader = () => {
  return (
    <div className="preloader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', background: 'none', display: 'block' }}
        width="270px"
        height="270px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
       
      >
   
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#ffd700"
          strokeWidth="6"
          fill="none"
          strokeDasharray="188.49555921538757 64.83185307179586"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>

    
        <path
          d="M40 50 L50 70 L60 50"
          fill="none"
          stroke="#ffd700"
          strokeWidth="6"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="50"
            to="0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
        <line
          x1="50"
          y1="30"
          x2="50"
          y2="65"
          stroke="#ffd700"
          strokeWidth="6"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="50"
            to="0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </line>

      
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="#ffd700"
          strokeWidth="6"
          fill="none"
          strokeDasharray="125.66370614359172 42.187902047863905"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.5s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};

export default DownloadPreloader;
