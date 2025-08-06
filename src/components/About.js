import React from 'react';
import '../styles/About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="about-page">
      <Navbar /> {/* Navbar at top-left */}
      <div className="about-container">
        <h2>About</h2>
        <p>
          I am <strong>Shubhankar Kumar Biswas</strong>, a final-year Bachelor of Fine Arts (BFA) student at
          Kala Bhavan, Visva-Bharati University, Santiniketan, specializing in <strong>Ceramics and Glass</strong> (Graduating 2026). 
          My artistic practice engages deeply with pottery sculpture, glasswork, and interdisciplinary material exploration. 
          I work extensively with slumping, fusing, casting, molding, and kiln firing processes, while also incorporating surface 
          sensitivity influenced by my elective training in printmaking.
        </p>
        <p>
          I have participated in multiple national and international workshops that expanded my technical vocabulary and collaborative 
          skills, including in ceramics, installation, and glass art. These experiences inform my evolving approach to installation art, 
          process-based making, and material. Through exhibitions, public projects, and hands-on experimentation, I aim to build a distinct 
          yet adaptive visual language rooted in both tradition and contemporary inquiry.
        </p>
      </div>
    </div>
  );
};

export default About;