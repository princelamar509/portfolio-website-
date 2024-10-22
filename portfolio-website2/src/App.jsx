
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollTrigger from './components/ScrollTrigger';
import Preloader from './components/Preloader'; 
import React, { useState, useEffect } from 'react';
import Chatbot from './components/Chatbot';
import SvgGrid from './components/SvgGrid';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false);
      console.log('Loading complete!');
    }, 1200); 
  }, []);

  if (isLoading) {
    return <Preloader />;

  }

  return (

    <div className="App">
      <SvgGrid />
    <Router>
      <Navbar />
      <ScrollTrigger>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Chatbot />
      <Footer />
      </ScrollTrigger>
    </Router>

    </div>


  );
}
export default App;

