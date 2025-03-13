import React from 'react';

const SectionEntry = ({ 
  title, 
  subtitle, 
  location, 
  dateRange, 
  description, 
  bullets = [] 
}) => {
  return (
    <div className="section-entry">
      <div className="section-entry-header">
        <h3 className="section-entry-title">{title}</h3>
        <span className="section-entry-date">{dateRange}</span>
      </div>
      
      

      {subtitle && <p className="section-entry-subtitle">{subtitle}</p>}
      {location && <p className="section-entry-location">{location}</p>}

      {description && (
        <p className="section-entry-description">{description}</p>
      )}

      {bullets.length > 0 && (
        <ul className="section-entry-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SectionEntry;
