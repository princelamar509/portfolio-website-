import React, { useState } from 'react';
import './Skills.css';
import D3Icon from '../components/D3Icon';
import MarqueeButton from '../components/MarqueeButton';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSass, FaBootstrap,  FaGithub, FaApple, FaMicrosoft } from 'react-icons/fa';
const Skills = () => { 
  const [showMarquee, setShowMarquee] = useState(false);

  const skills = [
    { name: 'HTML', color: 'bar-html', icon: <FaHtml5  size="1.5em"/>, percentage: '90%' },
    { name: 'CSS', color: 'bar-css', icon: <FaCss3Alt  size="1.5em"/>, percentage: '85%' },
    { name: 'JavaScript', color: 'bar-js', icon: <FaJs  size="1.5em"/>, percentage: '60%' },
    { name: 'React', color: 'bar-react', icon: <FaReact  size="1.5em"/>, percentage: '65%' },
    { name: 'SASS', color: 'bar-sass', icon: <FaSass  size="1.5em"/>, percentage: '65%' },
    { name: 'Bootstrap', color: 'bar-bootstrap', icon: <FaBootstrap  size="1.5em"/>, percentage: '60%' },
    { name: 'D3.js', color: 'bar-d3', icon: <D3Icon />, percentage: '50%' },
    { name: 'GitHub', color: 'bar-github', icon: <FaGithub size="1.5em" />, percentage: '65%' },
    { name: 'Node.js', color: 'bar-node', icon: <FaNodeJs  size="1.5em" />, percentage: '70%' },
    { name: 'macOS', color: 'bar-macos', icon: <FaApple   size="1.5em"/>},
    { name: 'Visual Studio Code', color: 'bar-vscode', icon: <FaMicrosoft  size="1.5em"/> },
  ];
  const handleButtonClick = () => {
    setShowMarquee((prev) => !prev);
  };

  
   

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
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
