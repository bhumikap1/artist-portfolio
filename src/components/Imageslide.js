import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Imageslide.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.png';

const images = [img1, img2, img3];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 3s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-box">
      {images.map((image, index) => (
        <Link to="/artworks" key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={`main-photo ${index === current ? 'active' : ''}`}
          />
        </Link>
      ))}
    </div>
  );
}

export default ImageSlider;
