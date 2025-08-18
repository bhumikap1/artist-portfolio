import React from 'react';
import '../styles/Homepage.css';
import Navbar from './Navbar';
import ImageSlider from './Imageslide'; // 👈 import the new slider

function Homepage() {
  return (
    <div className="container">
      <h1>Shubhankar Kumar Biswas</h1>
      <h2 className="subtitle">(Ceramics and Glass) Art Works</h2>
      <Navbar />

      <ImageSlider /> {/* 👈 slideshow replaces the static image */}

      <div className="image-caption">
        Shubhankar Kumar Biswas (Ceramics and Glass) Art Works
      </div>

      <div className="contact">
        📧 <a href="mailto:artistshubhankar@gmail.com">artistshubhankar@gmail.com</a> <br />
        📞 <a href="tel:+919555452173">+91-9555452173</a> <br /><br />
        🔗 
        <a 
          href="https://www.linkedin.com/in/shubhankar-kumar-biswas-28745a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ marginRight: '15px' }}
        >
          LinkedIn
        </a>
        <a 
          href="https://www.instagram.com/shubhankar_ceramics?igsh=MWlqZ2lxMHVpemN5Yg==" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Homepage;
