// src/components/TechnicalSkills.jsx
import React, { useState } from 'react';
import EditButton from './EditButton';
import EditTech from './EditTech';

function TechnicalSkills() {
  const [isEditing, setIsEditing] = useState(false);

  // State holding arrays for each skill category
  const [skillsData, setSkillsData] = useState({
    languages: ['Java', 'Python', 'C/C++', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS', 'R'],
    frameworks: ['React', 'Node.js', 'Flask', 'JUnit', 'WordPress', 'Material-UI', 'FastAPI'],
    tools: ['Git', 'Docker', 'TravisCI', 'Google Cloud Platform', 'VS Code'],
    libraries: ['Pandas', 'NumPy', 'Matplotlib'],
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedSkills) => {
    setSkillsData(updatedSkills);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <section className="resume-section">
      {!isEditing ? (
        <>
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <EditButton onClick={handleEditClick} />
          </div>

          <hr className="section-divider" />

          <div style={{ marginTop: '1rem' }}>
            <p><strong>Languages:</strong> {skillsData.languages.join(', ')}</p>
            <p><strong>Frameworks:</strong> {skillsData.frameworks.join(', ')}</p>
            <p><strong>Development Tools:</strong> {skillsData.tools.join(', ')}</p>
            <p><strong>Libraries:</strong> {skillsData.libraries.join(', ')}</p>
          </div>
        </>
      ) : (
        <>
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <EditTech
            data={skillsData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </>
      )}
    </section>
  );
}

export default TechnicalSkills;
