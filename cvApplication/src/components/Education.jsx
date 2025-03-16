import React, { useState } from 'react';
import SectionEntry from './SectionEntry';
import EditButton from './EditButton';
import EditEducationForm from './EditEducationForm';

const EducationSection = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Using an object to hold education entries keyed by an ID.
  const [educationData, setEducationData] = useState({
    edu1: {
      institution: 'Southwestern University',
      degree: 'Bachelor of Technology in Computer Science',
      location: 'Georgetown, TX',
      dateRange: 'Aug. 2018 – May 2022',
      gpa: '3.9/10'
    },
    edu2: {
      institution: 'Blinn School',
      degree: 'Higher Secondary Education',
      location: 'Bryan, TX',
      dateRange: 'May 2014 – May 2018',
      gpa: 'N/A'
    }
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedData) => {
    // updatedData should be an object with the same structure
    setEducationData(updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // Function to add a new education entry
  const addEducationEntry = (newEntry) => {
    // Create a new key. You could also use a library like uuid for unique IDs.
    const newKey = `edu${Date.now()}`;
    setEducationData(prevData => ({
      ...prevData,
      [newKey]: newEntry,
    }));
  };

  return (
    <section className="resume-section">
      {!isEditing ? (
        <>
          <div className="section-header">
            <h2 className="section-title">Education</h2>
            <EditButton onClick={handleEditClick} />
          </div>
          <hr className="section-divider" />
          {Object.entries(educationData).map(([key, edu]) => (
            <SectionEntry
              key={key}
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
