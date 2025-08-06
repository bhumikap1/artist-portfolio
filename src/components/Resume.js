import React from 'react';
import Navbar from './Navbar';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <Navbar />
      <div className="resume-container">
        <h2>Resume</h2>
        <iframe
          title="Resume PDF"
          src={`${process.env.PUBLIC_URL}/resume.pdf`}
          width="100%"
          height="600px"
          frameBorder="0"
        >
          This browser does not support PDFs.
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Resume;
