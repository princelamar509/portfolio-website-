import React, { useState, useEffect } from "react";
import "../index.css";

const DayNightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="toggle-btn"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
          <div className="icon moon">
          <svg height="30" viewBox="-5 -28 521.00002 512" width="30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"/>
          </svg>
      </div>
      ) : (
        <div className="icon-sun">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"

        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1V3" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 21V23" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M4.22 4.22L5.64 5.64" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M18.36 18.36L19.78 19.78" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 12H3" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 12H23" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M4.22 19.78L5.64 18.36" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M18.36 5.64L19.78 4.22" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
        </div>
      )}
    </button>

  );
};

export default DayNightToggle;
