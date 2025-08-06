import React from 'react';
import '../styles/Homepage.css';
import artwork from '../assets/artist.jpg';
import Navbar from './Navbar';

function Homepage() {
  return (
    <div className="container">
      <h1>Shubhankar Kumar Biswas</h1>
      <h2>(Ceramics and Glass)</h2>
      <Navbar />
      <img src={artwork} alt="Shubhankar's Artwork" className="main-photo" />
        <div className="image-caption">
         Shubhankar Kumar Biswas (Ceramics and Glass) Art Gallery
        </div>
      <div className="contact">
        📧 artistshubhankar@gmail.com <br />
        📞 +91-9555452173
      </div>
    </div>
  );
}

export default Homepage;
