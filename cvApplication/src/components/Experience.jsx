import React from 'react';
import SectionEntry from './SectionEntry';
import EditButton from './EditButton';

const ExperienceSection = () => {
  const experienceData = [
    {
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
    {
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
  ];

  return (
    <section className="resume-section">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <EditButton />
      </div>

      <hr className="section-divider" />
      {experienceData.map((exp, idx) => (
        <SectionEntry
          key={idx}
          title={exp.title}
          subtitle={exp.company}
          location={exp.location}
          dateRange={exp.dateRange}
          bullets={exp.bullets}
        />
      ))}
    </section>
  );
};

export default ExperienceSection;
