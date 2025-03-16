import React, { useState } from 'react';
import EditButton from './EditButton';
import EditHeaderForm from './EditHeaderForm';

const Header = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Single object for header data
  const [headerData, setHeaderData] = useState({
    name: 'Jake Ryan',
    location: 'Texas, USA',
    phone: '123-456-7890',
    email: 'jake@supd.io',
    linkedin: 'https://www.linkedin.com/feed/',
    github: 'https://github.com/',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedData) => {
    setHeaderData(updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <header className="resume-header">
      {!isEditing ? (
        <>
          <div className="resume-entry-header">
            <h1 className="resume-name">{headerData.name}</h1>
            <EditButton onClick={handleEditClick} />
          </div>

          <p className="resume-location">{headerData.location}</p>
          <div className="resume-contact">
            <span>{headerData.phone}</span> | 
            <a href={`mailto:${headerData.email}`}>{headerData.email}</a> | 
            <a href="http://linkedin.com">LinkedIn</a> | 
            <a href="http://github.com">GitHub</a>
          </div>
        </>
      ) : (
        <EditHeaderForm
          data={headerData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </header>
  );
};

export default Header;
