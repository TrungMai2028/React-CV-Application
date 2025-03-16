// ProjectSection.jsx
import React from 'react';
import EditButton from './EditButton';
import { useState } from 'react';
import EditProject from './EditProject';


function ProjectSection() {
  const [isEditing, setIsEditing] = useState(false);

  const [projectData, setProjectData] = useState({
    proj1: {
      title: 'Gitlytics',
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
  });

  const handleEditClick = () => {
    setIsEditing(true);
  }
  const handleSave = (updatedData) => {
    setProjectData(updatedData);
    setIsEditing(false);
  }
  const handleCancel = () => {
    setIsEditing(false);
  }

  return (
    <section className="resume-section">
      {isEditing ? (
        <>
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
          </div>
          <EditProject
            data={projectData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </>
      ) : (
        <>
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <EditButton onClick={handleEditClick} />
          </div>

          <hr className="section-divider" />

          {Object.values(projectData).map((project, idx) => (
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
        </>
      )}
    </section>
  );
}

export default ProjectSection;
