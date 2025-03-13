import React from 'react';
import EditButton from './EditButton';

const Header = () => {
  return (
    <header className="resume-header">
      <div className='resume-entry-header'>
        <h1 className="resume-name">Jake Ryan</h1>
        <EditButton />
      </div>
      

      <p className="resume-location">Texas, USA</p>
      <div className="resume-contact">
        <span>123-456-7890</span> | 
        <a href="mailto:jake@supd.io">jake@supd.io</a> | 
        <a href="http://linkedin.com">LinkedIn</a> | 
        <a href="http://github.com">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
