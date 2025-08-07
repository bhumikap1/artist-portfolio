import React, { useState, useEffect } from 'react';
import '../styles/Imageslide.css';
import img1 from '../assets/img5.jpg';
import img2 from '../assets/img14.jpg';
import img3 from '../assets/img3.png'; // Add more if needed

const images = [img1, img2, img3];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-box">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`main-photo ${index === current ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
