import React from 'react';
import Navbar from './Navbar';
import '../styles/Resume.css';

const Resume = () => {
  const resumePath = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div className="resume-page">
      <Navbar />
      <div className="resume-container">
        <h2>Resume</h2>
        <iframe
          title="Bhumika Pawar Resume"
          src={resumePath}
          width="100%"
          height="600px"
          frameBorder="0"
          aria-label="Resume PDF Viewer"
        />
        <div className="download-link-container">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
