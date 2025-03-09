import React from 'react';

const Header = () => {
  return (
    <header className="resume-header">
      <h1 className="resume-name">Jake Ryan</h1>
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
