import './Projects.css';

const projects = [
  {
    title: 'E-commerce Website',
    tech: 'React, Spring Boot, Razorpay, MySQL',
    frontend: 'https://github.com/venkataeswarachi/Ecom-frontend',
    backend: 'https://github.com/venkataeswarachi/Ecom-backend',
    desc: 'Developed a full-stack e-commerce application with Razorpay payments, authentication, email notifications, and AWS deployment.',
  },
  {
    title: 'Freelancing Platform Website (Prolance)',
    tech: 'MongoDB, Express.js, React.js, Node.js (MERN)',
    link: 'https://github.com/venkataeswarachi/Prolance',
    desc: 'Led a team to build a full-stack freelancing platform for connecting clients and freelancers. Implemented JWT authentication, role-based access, gig posting, messaging, and used GitHub Projects for Agile sprint management.',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    <div className="project-grid">
      {projects.map((proj, i) => (
        <div key={i} className="project-card">
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-tech"><strong>Tech Stack:</strong> {proj.tech}</p>
          <p className="project-desc">{proj.desc}</p>
          <div className="project-links">
             {proj.link && (<a href={proj.link} className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>)}
            {proj.backend && (
              <>
              <a href={proj.frontend} className="project-link" target="_blank" rel="noopener noreferrer">
                  FrontEnd Repo
                </a>
                <span className="divider"> | </span>
                
                <a href={proj.backend} className="project-link" target="_blank" rel="noopener noreferrer">
                  Backend Repo
                </a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
