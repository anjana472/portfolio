// Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faAngular, faDatabase, faCode } from '@fortawesome/free-brands-svg-icons';
import './Skills.css'; // Import CSS file for styling

function Skills() {
  return (
    <section className="skills-section">
      
      <ul className="skills-list">
        <li className="skill html">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon html-icon" />
          HTML
        </li>
        <li className="skill css">
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css-icon" />
          CSS
        </li>
        <li className="skill javascript">
          <FontAwesomeIcon icon={faJs} className="skill-icon javascript-icon" />
          JavaScript
        </li>
        <li className="skill react">
          <FontAwesomeIcon icon={faReact} className="skill-icon react-icon" />
          React
        </li>
        <li className="skill angular">
          <FontAwesomeIcon icon={faAngular} className="skill-icon angular-icon" />
          Angular
        </li>
        
      </ul>
    </section>
  );
}

export default Skills;
