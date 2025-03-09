import React from 'react';
import SectionEntry from './SectionEntry';

const EducationSection = () => {
  const educationData = [
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
  ];

  return (
    <section className="resume-section">
      <h2>Education</h2>
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
    </section>
  );
};

export default EducationSection;
