import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-row">
        {/* Tech Stack */}
        <div className="skills-column">
          <h3>Tech Stack</h3>
          <div className="skills-container">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Spring Boot','Python','C', 'Java','Node JS','Express JS', 'MySQL', 'REST API', 'JWT'].map((skill, index) => (
              <span className="skill-badge" key={index}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="skills-column">
          <h3>Tools</h3>
          <div className="skills-container">
            {['Git', 'GitHub', 'VS Code', 'Postman', 'MySQL Workbench', 'Maven', 'IntelliJ', 'Figma'].map((tool, index) => (
              <span className="skill-badge" key={index}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
