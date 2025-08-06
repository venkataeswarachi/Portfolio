import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-item">
        <h3 className="role">WikiTech Contributor</h3>
        <p className="organization">Open Source Project by Wikimedia Community</p>
        <p className="duration">July 2024 – Present</p>
        <p className="description">
          <ul className="experience-list">
            <li>
              Collaborated with an open-source team on building a <strong>Community Insights Dashboard</strong> using SQL and Python.
            </li>
            <li>
              Developed dashboards to aggregate and visualize Wikimedia community data; implemented data access using optimized SQL queries.
            </li>
            <li>
              Improved dashboards using charts, filters, and summaries for effective data storytelling.
            </li>
            <li>
              Actively participated in GitHub pull requests, issue discussions, and code reviews while following Agile practices.
            </li>
            <li>
              <a
                href="https://github.com/indictechcom/community-insights-dashboard-tooling"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Experience;
