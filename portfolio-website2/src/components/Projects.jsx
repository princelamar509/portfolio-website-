import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';



import cashmeee from '../assets/cashmeee.jpeg';
import shoppingCartImg from '../assets/shoppingimage.png';
import securePay from '../assets/securepay.jpeg';
import landingPageImg from '../assets/landing-pageimage.png';
import taxWebsite from '../assets/taxwebsite.jpeg';

const Projects = () => {
  const allProjects = [
    {
      title: 'Money Transfer',
      description: 'This is an international money transfer project developed with React (JSX) and CSS. Built entirely without APIs, it highlights a DIY approach to coding, emphasizing both creativity and technical skill in creating a fully functional, standalone application.',
      link: 'https://princelamar509.github.io/transfer-app/',
      snapshot: cashmeee, 
      category: 'React',
    },
    {
      title: 'SecurePay',
      description: 'This is a payment application project built with React (JSX) and CSS. The idea for this app originated from a personal experience: while attempting to purchase a car for my young cousin living in another state, we faced a significant obstacle. She needed to transfer over $5,000 for the purchase, but we found that traditional money transfer services imposed restrictive limits, capping transactions at $2,500. This project aims to address such limitations by providing a streamlined, secure, and flexible platform for managing larger financial transactions with ease.  ',
      link: 'https://princelamar509.github.io/securepay/',
      snapshot: securePay, 
      category: 'React',
    },
   {
      title: 'Tax Website',
      description:
        "This is a professional tax website built with HTML, CSS, and JSX, designed for seamless user experience, efficiency, and modern aesthetics.",
      link: 'https://princelamar509.github.io/taxwebsite/',
      snapshot: taxWebsite , 
      category: 'HTML/CSS/Js',
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
      title: 'Landing Page',
      description: 'This is a Landing Page Project. Created using HTML/CSS.',
      link: 'https://princelamar509.github.io/Start-up1/',
      snapshot: landingPageImg, 
      category: 'HTML/CSS/Js',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
 const [expanded, setExpanded] = useState({});

 const toggleExpand = (index) => {
   setExpanded((prevState) => ({
    ...prevState,
    [index]: !prevState[index],
   }));
 };

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const categories = ['All', 'React', 'HTML/CSS/Js'];

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

             {/* <p>{project.description}</p> */}
             <p>
                {expanded[index] ? project.description : `${project.description.substring(0, 100)}...`}
              </p>
              <button className="read-more-btn" onClick={() => toggleExpand(index)}>
                {expanded[index] ? 'Read Less' : 'Read More'}
              </button>
              
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


                                        

