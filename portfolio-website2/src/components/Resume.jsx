import React from "react";
import {  FaFilePdf } from "react-icons/fa";  
import pdf from "../assets/resume.pdf"; 
import './Resume.css';
import ScrollAnimation from "./ScrollAnimation";
const CV = () => {
  return (
    <div className="resume-container">
    <div style={{ fontFamily: "Times New Roman', Times, serif", padding: "20px" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1 className="resume-title">Madeus Rene</h1>
        <h2>Front-End Developer</h2>
        <p>Location: Indianapolis, Indiana</p>
        <p>Email: <a href="mailto:mrmadeus1@gmail.com">mrmadeus1@gmail.com</a></p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/madeusrene" target="_blank" rel="noopener noreferrer">linkedin.com/in/madeusrene</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/princelamar509" target="_blank" rel="noopener noreferrer">github.com/princelamar509</a>
          
        </p>
       
      </header>

      <div className="button-container">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          <FaFilePdf style={{ marginRight: "8px" }} /> 
          Download <span className="visually-hidden">CV</span>
        </a>
      </div>

      <section>
        <h2>Summary</h2>
        <p className="summary">
          Self-taught and passionate Front-End Developer with a strong foundation in responsive web design, user-centric development, and modern front-end technologies. Adept at creating intuitive, accessible, and visually appealing websites. Experienced in collaborating with clients and teams to deliver high-quality web solutions. Eager to continuously learn and contribute to dynamic teams that value creativity, performance, and innovation.
        </p>
      </section>
      <ScrollAnimation delay={0.1} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong >Front-End Development:</strong> HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, Sass, Tailwind CSS</li>
          <li><strong >Web Design:</strong> Responsive Design, UI/UX Best Practices, Cross-Browser Compatibility</li>
          <li className="skills-list"><strong >Version Control:</strong> Git, GitHub, GitFlow</li>
          <li><strong >Tools & Frameworks:</strong> Visual Studio Code, NPM, RESTful APIs, IOS</li>
          <li><strong >Additional Skills:</strong> Problem Solving, Agile Methodology, Effective Communication</li>
        </ul>
      </section>
      </ScrollAnimation>
      <ScrollAnimation delay={0.1} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
      <section>
        <h2>Professional Experience</h2>
        <h3>Freelance Front-End Developer | Self-Employed | Fiverr</h3>
        <p><em>(Dates: 04/2024–Present)</em></p>
        <ul>
          <li>Partner with clients to understand project goals and deliver tailored web solutions that meet their business needs.</li>
          <li>Build and maintain websites focusing on performance, SEO, and accessibility.</li>
          <li>Provide ongoing maintenance, support, and updates for client projects, ensuring they remain optimized and up-to-date.</li>
        </ul>
        <strong>Key Achievements:</strong>
        <ul>
          <li>Delivered mobile-responsive websites that improved user engagement by 30%.</li>
          <li>Enhanced website SEO performance, resulting in higher search engine rankings.</li>
        </ul>
      </section>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
      <section>
        <h2>Education & Certifications</h2>
        <h3>Self-Taught Developer</h3>
        <p><strong>Relevant Coursework:</strong></p>
        <ul>
          <li>JavaScript Algorithms and Data Structures – FreeCodeCamp</li>
          <li>Responsive Web Design – FreeCodeCamp</li>
          <li>Modern React with Redux – FreeCodeCamp</li>
          <li>Advanced CSS, Sass, and Bootstrap – FreeCodeCamp</li>
          <li>jQuery – FreeCodeCamp</li>
        </ul>
        <strong>Certifications:</strong>
        <ul>
          <li>JavaScript Algorithms and Data Structures – FreeCodeCamp</li>
          <li>Responsive Web Design – FreeCodeCamp</li>
          <li>Modern React with Redux – FreeCodeCamp</li>
          <li>Front End Development Libraries – FreeCodeCamp</li>
          <li>Data Visualization With D3 - FreeCodeCamp</li>
        </ul>
      </section>
      </ScrollAnimation>

      <ScrollAnimation delay={0.3} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
      <section>
        <h2>Languages</h2>
        <ul>
          <li><strong>English:</strong> Fluent</li>
          <li><strong>French:</strong> Intermediate</li>
          <li><strong>Haitian Creole:</strong> Fluent</li>
        </ul>
      </section>

      <section className="additional-info">
        <h2>Additional Information</h2>
        <p>
          A self-motivated developer with an insatiable curiosity for modern web technologies. I enjoy tackling complex problems and creating efficient, user-friendly solutions. Always open to learning new tools and techniques to stay on the cutting edge of the front-end ecosystem.
        </p>
        <p>
          Link to Portfolio: <a href="https://princelamar509.github.io/portfolio-website-/" target="_blank" rel="noopener noreferrer">https://princelamar509.github.io/portfolio-website-/</a>
        </p>
      </section>
       </ScrollAnimation>
    </div>
    </div>
  );
};

export default CV;




