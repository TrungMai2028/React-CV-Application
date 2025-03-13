// ProjectSection.jsx
import React from 'react';
import EditButton from './EditButton';

const projectData = [
  {
    title: 'Gitlytics | Python, Flask, React, PostgreSQL, Docker',
    links: [
      { label: 'Live', url: 'https://gitlytics.com' },
      { label: 'Code', url: 'https://github.com/user/gitlytics' }
    ],
    bullets: [
      'Developed a full-stack web application using Flask serving a REST API with React as the frontend.',
      'Implemented GitHub OAuth to get data from user\'s repositories.',
      'Visualized GitHub data to show collaboration.',
      'Used Celery and Redis for asynchronous tasks.'
    ]
  },
  // ... more projects
];


function ProjectSection() {
  return (
    <section className="resume-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <EditButton />
      </div>

      <hr className="section-divider" />

      {projectData.map((project, idx) => (
        <div key={idx} className="project-entry">
          {/* Title & Links in one row */}
          <div className="project-header">

            <h3 className="project-title">{project.title}</h3>
            <div className="project-links">
              {project.links.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                  {index < project.links.length - 1 && (
                    <span className="divider">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            
          </div>

          {/* Bullets */}
          <ul className="project-bullets">
            {project.bullets.map((bullet, bIdx) => (
              <li key={bIdx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default ProjectSection;
