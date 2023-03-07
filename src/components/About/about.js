import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2>About Me</h2>
      <p>
      Hello, I'm Divisha Tahiliani a front-end web developer and UI designer with expertise in HTML, CSS, JavaScript, ReactJs and Bootstrap. With an year of experience in this field, i have developed a passion for creating elegant and intuitive user interfaces that elevate the user experience.
I'm a skilled UI designer who has completed few successful freelance projects. With a keen eye for design and a deep understanding of user behavior, I'm able to create stunning visuals that are both beautiful and functional. I love building responsive and user-friendly web applications that solve problems and meet the needs of my clients.
      </p>
      <h3>What I Know?</h3>
      <ul className="skills-list">
        <li>
          <img src={require('../../assets/html.png')} alt="HTML" /><br/>
          HTML
        </li>
        <li>
          <img src={require('../../assets/css-3.png')} alt="CSS" /><br/>
          CSS
        </li>
        <li>
          <img src={require('../../assets/js.png')} alt="JS" /><br/>
          JavaScript
        </li>
        <li className='skill-part'>
          <img src={require('../../assets/atom.png')} alt="ReactJs" /><br/>
          React Js
        </li>
        <li className='skill-part'>
          <img src={require('../../assets/UI.png')} alt="UI-Design" /><br/>
          UI designing
        </li>
      </ul>
    </div>
  );
}

export default About;
