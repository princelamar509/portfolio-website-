import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';



import moneyTransferImg from '../assets/money-transfer.png';
import musicAppImg from '../assets/music-app.png';
import shoppingCartImg from '../assets/shoppingimage.png';
import diceGameImg from '../assets/dice-gameimage.png';
import dashboard from '../assets/dashboard.jpeg'; 
import landingPageImg from '../assets/landing-pageimage.png';

const Projects = () => {
  const allProjects = [
    {
      title: 'Money Transfer',
      description:
        "This is an International Money Transfer Project. Created using REACT(JSX) + CSS. I didn't use any API for this project, just to make it more of a DIY adventure. It’s a real testament to how amusing coding can be.",
      link: 'https://princelamar509.github.io/transfer-app/',
      snapshot: moneyTransferImg, 
      category: 'React',
    },
    {
      title: 'Dashboard',
      description: 'This is a Home automation Dashboard Project. I created using REACT(JSX) + CSS + Freeweather API .',
      link: 'https://princelamar509.github.io/Dashboard1/',
      snapshot: dashboard, 
      category: 'React',
    },
    {
      title: 'Music App',
      description:
        "This is a Music App Project. I've always been curious about music and it's fun. My bootcamp project for a music app was one of my favorite projects; for this reason, I decided to build something more advanced and interesting. Created using REACT(JSX) + CSS/SASS.",
      link: 'https://princelamar509.github.io/music-app/',
      snapshot: musicAppImg, 
      category: 'React',
    },
    {
      title: 'E-commerce/Shopping-cart',
      description:
        'This is an E-commerce Project created using the fakestore API. It showcases my skills in using APIs, created using REACT(JSX) + CSS, etc.',
      link: 'https://princelamar509.github.io/shopping1/',
      snapshot: shoppingCartImg,
      category: 'React',
    },
    {
      title: 'Dice Game',
      description:
        'This is a Dice Game Project. I think this project is very interesting and fun to build. Created using Plain JavaScript + CSS.',
      link: 'https://princelamar509.github.io/DiceGame1/',
      snapshot: diceGameImg, 
      category: 'JavaScript',
    },
  
    {
      title: 'Landing Page',
      description: 'This is a Landing Page Project. Created using HTML/CSS.',
      link: 'https://princelamar509.github.io/Start-up1/',
      snapshot: landingPageImg, 
      category: 'HTML/CSS',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const categories = ['All', 'React', 'JavaScript', 'HTML/CSS'];

  return (

    <section id="projects" className="projects-section">
      <div className="projects">
        <h2>Projects</h2>
        <div className="filter-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.snapshot}
                alt={`${project.title} Snapshot`}
                className="project-snapshot" draggable={false}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub style={{ marginRight: '8px' }} /> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
  
    </section>
  );
};

export default Projects;
