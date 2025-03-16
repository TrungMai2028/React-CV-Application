import React from 'react';
import SectionEntry from './SectionEntry';
import EditButton from './EditButton';
import { useState } from 'react';
import EditEducationForm from './EditEducationForm';

const EducationSection = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [educationData, setEducationData] = useState([
    {
      institution: 'Southwestern University',
      degree: 'Bachelor of Technology in Computer Science',
      location: 'Georgetown, TX',
      dateRange: 'Aug. 2018 – May 2022',
      gpa: '3.9/10'
    },
    {
      institution: 'Blinn School',
      degree: 'Higher Secondary Education',
      location: 'Bryan, TX',
      dateRange: 'May 2014 – May 2018',
      gpa: 'N/A'
    }
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSave = (updateData) => {
    setEducationData(updateData);
    setIsEditing(false);
  }

  const handleCancel = () => {
    setIsEditing(false);
  }


  return (
    <section className="resume-section">
      {!isEditing ? (
        <>
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <EditButton onClick={handleEditClick}/>
          </div>
          <hr className="section-divider" />
      
          {educationData.map((edu, idx) => (
            <SectionEntry
              key={idx}
              title={edu.institution}
              subtitle={edu.degree}
              location={edu.location}
              dateRange={edu.dateRange}
              description={`GPA: ${edu.gpa}`}
            />
          ))}
        </>
      ) : (
        <>
          <div className="section-header">
            <h2 className="section-title">Education</h2>
          </div>
          <EditEducationForm
            data={educationData}
            onSave={handleSave}
            onCancel={handleCancel}
        />
        </>
      )}

      
    </section>
  );
};

export default EducationSection;
