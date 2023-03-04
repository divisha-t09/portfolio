import React from "react";
import "./project.css";

function Project() {
  return (
    <div className="project-container">
      <div>
        <h1>MY PROJECTS</h1>
      </div>
      <div className="project-list">
        <section id="Project1" className="projects">
          <h2>Facial Expression Detector</h2>
          <p>The facial expression detector project is a system that is designed to identify the expression of a person's face at a given instant. It is able to identify a range of expressions, including happiness, sadness, surprise, anger, and disgust. It would work in real-time, analyzing video or image input from a camera or webcam and providing a real-time analysis of the person's expression.</p>
          <a href="https://github.com/divisha-t09/Facial-Expression-Detector"><button className="view"><span>View</span></button></a>
        </section>
        <section id="Project2" className="projects">
          <h2>Color Finder Chrome-extension</h2>
          <p>
          This project is developed using JavaScript with a simple design. This Chrome Extension is a convenient tool for web developers and designers, allowing them to quickly and easily identify the hexadecimal code of any color selected through a color picker. The color picker would be a small window that appears over the webpage, allowing the user to select any color from the page using their mouse.
          </p>
          <a href="https://github.com/divisha-t09/30-days-of-JavaScript/tree/main/DAY5-%20color-code-finder-chrome-extension"><button className="view"><span>View</span></button></a>
        </section>
        <section id="Project3" className="projects">
          <h2>Landing Page</h2>
          <p>
          This landing page project for a imaginary donation foundation is designed to encourage visitors to make a donation to the organization. This is designed using HTML, CSS and JavaScript with a clean and minimalist aesthetic, with a focus on compelling images and copy that effectively communicate the mission and impact of the foundation.
          </p>
          <a href="https://github.com/divisha-t09/grant-foundation-project"><button className="view view-3"><span>View</span></button></a>
        </section>
      </div>
    </div>
  );
}

export default Project;
