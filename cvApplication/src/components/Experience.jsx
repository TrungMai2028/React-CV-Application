import React from 'react';
import SectionEntry from './SectionEntry';
import EditButton from './EditButton';
import { useState } from 'react';
import EditExperienceForm from './EditExperienceForm';

const ExperienceSection = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [experienceData, setExperienceData] = useState({
    exp1: {
      title: 'Information Technology Support Specialist',
      company: 'Southwestern University',
      location: 'Georgetown, TX',
      dateRange: 'Sep. 2019 – Present',
      bullets: [
        'Coordinate with managers to set up campus computers used on campus',
        'Assisted troubleshooting with hardware/software issues for faculty and staff',
        'Maintained upkeep of computers, classroom equipment, and 200 printers across campus'
      ]
    },
    exp2: {
      title: 'Artificial Intelligence Research Assistant',
      company: 'Southwestern University',
      location: 'Georgetown, TX',
      dateRange: 'Aug. 2021 – May 2022',
      bullets: [
        'Developed methods to generate video game dungeons based on The Legend of Zelda',
        'Improved AI pathfinding using reinforcement learning',
        'Presented findings at the university’s annual research symposium'
      ]
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


  return (
    <section className="resume-section">
      {isEditing ? (
        <>
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
          </div>
          <EditExperienceForm
            data={experienceData}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </>
      ) : (
        <>
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <EditButton onClick={handleEditClick} />
          </div>

          <hr className="section-divider" />
          {Object.entries(experienceData).map(([key, exp]) => (
            <SectionEntry
              key={key}
              title={exp.title}
              subtitle={exp.company}
              location={exp.location}
              dateRange={exp.dateRange}
              bullets={exp.bullets}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default ExperienceSection;
