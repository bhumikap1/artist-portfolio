import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Resume from './components/Resume';
import ArtGallery from './components/ArtGallery';
import ImageSlider from './components/Imageslide';

function App() {
  return (
    <Router basename="/artist-portfolio">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/artworks" element={<ArtGallery />} />
        <Route path="/" element={<ImageSlider />} />
      </Routes>
    </Router>
  );
}

export default App;
