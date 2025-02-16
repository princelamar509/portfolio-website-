import React from 'react';
import "./Hero.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import profilePicture from "../assets/profile-picture.webp";
import TextToSpeechButton from "./Speech-Button";
import ScrollAnimation from "./ScrollAnimation";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-title">
            <h3 id="greeting">
              Hello, There! <strong className="hero-emoji">👋🏾</strong>
            </h3>
            <h1 id="name">
              I'M <strong className="hero-name-highlight">Madeus Rene</strong>
            </h1>
           
           <h2 className="typewriter" id="typewriter">
      {'Front End Developer'}
    </h2>
          </div>
        </div>
        <div className="hero-image" >
          <img src={profilePicture} alt="Profile" id="profile-picture" draggable={false} />
        </div>

      

        <div className="introduction-section">
        <ScrollAnimation delay={0.3} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
          <h2 className="intro-heading">
            Let Me <strong className="connect-text">Introduce</strong> Myself
          </h2>
          <p className="intro-text">
            I’m <strong className="connect-text">Madeus Rene</strong>, a
            self-taught Front-end developer with a passion for creating
            intuitive and <strong className="connect-text">dynamic user experiences</strong>. Armed with curiosity and
            coffee, I turn pixels into seamless interactions that{" "}
            <strong className="connect-text">(hopefully)</strong> don't break the internet !
          </p>
      
        </ScrollAnimation>


          <ScrollAnimation delay={0.1} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
          <div className="intro-avatar">

            <img
              src={profilePicture}
              alt="Avatar"
              draggable={false}
              className="avatar-container"
            />
            <div className="emoji">😊</div>
            <div className="emoji">😄</div>
            <div className="emoji">😎</div>
          </div>
    
          
          </ScrollAnimation>
          <ScrollAnimation delay={0.4} duration={0.9} easing={[0.52, 0, 0.58, 1]}>
          <div className="social-section">
          <h3 className="social-heading">Find Me Online</h3>
          <p className="social-text">
            Feel free to <strong className="connect-text">connect</strong> with
            me.
          </p>

          </div>

          <div className="intro-social-icons">
            <a
              href="https://github.com/princelamar509"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub  size={30}/>
            </a>
            <a
              href="https://www.linkedin.com/in/madeus-rene-294196318/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </div>

          </ScrollAnimation>
        
        </div>


      </div>


      
    </section>

  );
}

export default Hero;
