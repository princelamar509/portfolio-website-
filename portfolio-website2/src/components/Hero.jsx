import React, { useState } from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import profilePicture from "../assets/profile-picture.webp";
import TextToSpeechButton from "./Speech-Button";




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
              {"Front End Developer"}

            </h2>
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePicture} alt="Profile" draggable={false} />
         
        </div>

        <TextToSpeechButton />
    
        <div className="introduction-section">
          <h2 className="intro-heading">Let Me <strong className="connect-text"> Introduce </strong>  Myself</h2>
          <p className="intro-text">
            I’m <strong className="connect-text">Madeus Rene</strong> a self-taught Front-end developer who has spent more time debugging code than I care to admit. Armed with curiosity and coffee, I’ve learned how to turn pixels into interactive experiences that <strong className="connect-text">(hopefully)</strong> don't break the internet!
          </p>

          <div className="intro-avatar">
            <img src={profilePicture} alt="Avatar" draggable={false} className="avatar-container" />
            <div class="emoji">😊</div>
            <div className="emoji">😄</div>
            <div className="emoji">😎</div>
          </div>
         
          <h3 className="social-heading">Find Me Online</h3>
          <p className="social-text">
            Feel free to <strong className="connect-text">connect</strong> with me.
          </p>

          <div className="intro-social-icons">
            <a href="https://github.com/princelamar509" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} />
            </a>
            <a href="https://www.linkedin.com/in/madeus-rene-294196318/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={50} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
      </div>
    </section>


  );
}

export default Hero;
