// src/components/TechnicalSkills.jsx
import React from 'react';
import EditButton from './EditButton';

const skillsData = {
  languages: ['Java', 'Python', 'C/C++', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS', 'R'],
  frameworks: ['React', 'Node.js', 'Flask', 'JUnit', 'WordPress', 'Material-UI', 'FastAPI'],
  tools: ['Git', 'Docker', 'TravisCI', 'Google Cloud Platform', 'VS Code'],
  libraries: ['Pandas', 'NumPy', 'Matplotlib']
};

function TechnicalSkills() {
  return (
    <section className="resume-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <EditButton />
      </div>

      <hr className="section-divider" />

      <div style={{ marginTop: '1rem' }}>
        <p><strong>Languages:</strong> {skillsData.languages.join(', ')}</p>
        <p><strong>Frameworks:</strong> {skillsData.frameworks.join(', ')}</p>
        <p><strong>Development Tools:</strong> {skillsData.tools.join(', ')}</p>
        <p><strong>Libraries:</strong> {skillsData.libraries.join(', ')}</p>
      </div>
    </section>
  );
}

export default TechnicalSkills;
