import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* GitHub link */}
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="col-md-4">
            {/* LinkedIn link */}
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="col-md-4">
            {/* Stack Overflow link */}
            <a href="https://stackoverflow.com/users/your-stack-overflow-id" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
