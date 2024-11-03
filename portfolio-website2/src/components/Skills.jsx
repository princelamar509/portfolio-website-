import React, { useState } from 'react';
import './Skills.css';
import D3Icon from '../components/D3Icon';
import MarqueeButton from '../components/MarqueeButton';
import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaPython, FaNodeJs,  FaSass, FaBootstrap,  FaGithub, FaApple, FaMicrosoft } from 'react-icons/fa';
import ScrollAnimation from "./ScrollAnimation";
const Skills = () => { 
  const [showMarquee, setShowMarquee] = useState(false);

  const NextJsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.46-5.31l-3.14-4.56v4.52H9.71v-8.91h1.29l3.13 4.53V8.99h1.29v8.92h-1.29z"/>
  </svg>
  );

  const skills = [
    { name: 'HTML', color: 'bar-html', icon: <FaHtml5  size="1.5em"/>, percentage: '90%' },
    { name: 'CSS', color: 'bar-css', icon: <FaCss3Alt  size="1.5em"/>, percentage: '85%' },
    { name: 'JavaScript', color: 'bar-js', icon: <FaJs  size="1.5em"/>, percentage: '60%' },
    { name: 'React', color: 'bar-react', icon: <FaReact  size="1.5em"/>, percentage: '65%' },
    { name: 'Python', color: 'bar-python', icon: <FaPython  size="1.5em"/>, percentage: '50%' },
    { name: 'SASS', color: 'bar-sass', icon: <FaSass  size="1.5em"/>, percentage: '65%' },
    { name: 'Bootstrap', color: 'bar-bootstrap', icon: <FaBootstrap  size="1.5em"/>, percentage: '60%' },
    { name: 'D3.js', color: 'bar-d3', icon: <D3Icon />, percentage: '50%' },
    { name: 'GitHub', color: 'bar-github', icon: <FaGithub size="1.5em" />, percentage: '65%' },
    { name: 'Node.js', color: 'bar-node', icon: <FaNodeJs  size="1.5em" />, percentage: '70%' },
    { name: 'Next.js', color: 'bar-next', icon: <NextJsIcon />, percentage: '70%' },
    { name: 'macOS', color: 'bar-macos', icon: <FaApple   size="1.5em"/>},
    { name: 'Visual Studio Code', color: 'bar-vscode', icon: <FaMicrosoft  size="1.5em"/> },
  ];
  const handleButtonClick = () => {
    setShowMarquee((prev) => !prev);
  };

  
   

  return (
  
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <ScrollAnimation delay={0.2} duration={0.8} easing={[0.42, 0, 0.58, 1]}>
        <div className="skills-header">
          <h2>Skills <strong className="connect-text">/</strong> Toolkit</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>

          ))}
        </div>
        </ScrollAnimation>
        <MarqueeButton onClick={handleButtonClick} />

        {showMarquee && (
          <figcaption className="marquee">
            
          <div className="marquee-container">
            <div className="marquee-lane">
              {skills.map((skill, index) => ( 
                <div className="marquee-item1" key={index}>

                  {skill.icon} 

                </div>

              ))}
            </div>
         
         
         
           
            <div className="marquee-lane  ">
              {skills.map((skill, index) => (
                <div className="marquee-item1" key={index} >
                  {skill.icon}  {skill.name}
            
                </div>
              ))}
            </div>
            <div className="marquee-lane reverse  ">
              {skills.map((skill, index) => (
                <div className="marquee-item2" key={index} >
                  {skill.icon} {skill.percentage}
              
                </div>
              ))}
            </div>

          </div>
        </figcaption>
        )}
      </div>
    </section>
  );
};

export default Skills;
