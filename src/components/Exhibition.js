import React, { useState, useEffect } from "react";
import "../styles/Exhibition.css";
import Navbar from "./Navbar"; 

// ✅ Import multiple images for the same exhibition
import ex1a from "../assets/exi1.jpg";
import ex1b from "../assets/exi2.jpg";
import ex1c from "../assets/exi3.jpg";
import ex1d from "../assets/exi4.jpg";
import ex1e from "../assets/exi5.jpg";

const exhibition = {
  title: "Nandan Gallery",
  description:
    "2025 – Group Exhibition – Nandan Gallery – Santiniketan",
  images: [ex1a, ex1b, ex1c, ex1d, ex1e], // multiple images
};

const Exhibition = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % exhibition.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <Navbar />
    <div className="exhibition-container">
      <div className="exhibition-slide active">
        <img
          src={exhibition.images[current]}
          alt={exhibition.title}
          className="exhibition-image"
        />
        <div className="exhibition-info">
          <h2>{exhibition.title}</h2>
          <p>{exhibition.description}</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default Exhibition;
