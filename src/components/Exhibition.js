import React, { useState, useEffect } from "react";
import "../styles/Exhibition.css";
import Navbar from "./Navbar"; 

// ✅ Import multiple images for exhibitions
import ex1a from "../assets/exi1.jpg";
import ex1b from "../assets/exi2.jpg";
import ex1c from "../assets/exi3.jpg";
import ex1d from "../assets/exi4.jpg";
import ex1e from "../assets/exi5.jpg";
import ex1f from "../assets/exi6.jpg";
import ex1g from "../assets/exi7.jpg";
import ex1h from "../assets/exi8.jpg";

const exhibitions = [
  {
    title: "Nandan Gallery",
    description: "2025 – Group Exhibition – Nandan Gallery – Santiniketan",
    images: [ex1a, ex1b, ex1c, ex1d, ex1e],
  },
  {
    title: "Hues Of Bengal",
    description: "A celebration of Bengal’s vibrant art and heritage.",
    images: [ex1f, ex1g, ex1h],
  },
];

const Exhibition = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    exhibitions.map(() => 0)
  );

  useEffect(() => {
    const timers = exhibitions.map((_, idx) =>
      setInterval(() => {
        setCurrentIndexes((prev) =>
          prev.map((val, i) =>
            i === idx ? (val + 1) % exhibitions[i].images.length : val
          )
        );
      }, 3000)
    );

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <>
      <Navbar />
      <div className="exhibition-container">
        {exhibitions.map((exhibition, idx) => (
          <div key={idx} className="exhibition-slide">
            <img
              src={exhibition.images[currentIndexes[idx]]}
              alt={exhibition.title}
              className="exhibition-image"
            />
            <div className="exhibition-overlay">
              <h2>{exhibition.title}</h2>
              <p>{exhibition.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Exhibition;
