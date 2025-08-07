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
        📧 artistshubhankar@gmail.com <br />
        📞 +91-9555452173
      </div>
    </div>
  );
}

export default Homepage;
