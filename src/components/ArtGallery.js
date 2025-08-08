// src/components/ArtGallery.js
import "../styles/ArtGallery.css";
import Navbar from "./Navbar";
import { glassArtworks, ceramicsArtworks } from "../components/Artworks";

const ArtSection = ({ title, artworks }) => (
  <div className="art-section">
    <h2>{title}</h2>
    <div className="art-grid">
      {artworks.map((art, index) => (
        <div className="art-card" key={index}>
          <img src={art.image} alt={art.title} />
          <h3>{art.title}</h3>
          <p>{art.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ArtGallery = () => {
  return (
    <>
      <Navbar />
    <div className="gallery-container">
      <ArtSection title="Glass Artworks" artworks={glassArtworks} />
      <ArtSection title="Ceramic Artworks" artworks={ceramicsArtworks} />
    </div>
    </>
  );
};

export default ArtGallery;
