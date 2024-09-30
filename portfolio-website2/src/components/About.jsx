import React, { useState, useEffect } from 'react';
import Skills from './Skills';
import { FaAngleRight } from 'react-icons/fa';
import './About.css';

function About() {
  const [animate, setAnimate] = useState(false);





  useEffect(() => {
    const handleScroll = () => {

      const aboutSection = document.querySelector('.about');
      const rect = aboutSection.getBoundingClientRect();
      
    
      const scrollPercentage = (window.innerHeight - rect.top) / rect.height * 100;

      if (scrollPercentage >= 10) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
   <div className="about-section">

    <div className="about-image">
      <img  
        src={"https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/07/disability002-c7489c4724f59970087c.jpg" } 
        draggable={false}
        alt="img"
      />
      <div className="about-text">
        <h2>More <strong className="connect-text"> About </strong> Me</h2>
        <p className = "about-para">

        I’m passionate about creating sleek, responsive web applications that not only look great but also feel intuitive to use—when the code behaves, that is! 
        When I'm not wrestling with stubborn divs that refuse to center, you’ll find me exploring new technologies. 
        For me, it's not just about building something that works—it's about creating something that connects, captivates, and stands out.
        </p>
      
      </div>

      <Skills />

      <fieldset>
      <legend className='achievements'>Achievements</legend>
      <ul>
        <li><FaAngleRight /> Responsive Web Design</li>
        <li><FaAngleRight /> Javascript A D S (Beta)</li>
        <li><FaAngleRight /> Front End Development Libraries</li>
        <li><FaAngleRight /> Data Visualization With D3</li>
        <br/>
        <li className='note'> Currently learning  <span className='bold1'> Relational Database <progress id='file' value="30" min="0" max="100"></progress></span></li>
      </ul>
    </fieldset>
 
    </div>



   </div>


  
  );
}

export default About;





