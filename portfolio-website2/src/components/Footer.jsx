import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      
      <p>&copy; 2024 Mr Madeus. All rights reserved.</p>

    </footer>
  );
}

export default Footer;
