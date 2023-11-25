import React from 'react';

export default function Blog() {
  return (
    <div>
      <h1>Resume</h1>
      <header>
        <h1>Kenneth A. Westbrook</h1>
        <p>Los Angeles, California | 607-759-7425 | kennethwestbrook17@gmail.com</p>
        <p>
          <a href="https://github.com/kwestbrook17" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/kenneth-westbrook/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <p>
          <strong>UCLA Extension Coding Bootcamp, Los Angeles, CA</strong><br />
          June 2023 - November 2023<br />
          Intensive coding bootcamp focused on web development and programming.
          Hands-on experience with HTML, CSS, JavaScript, React, Node.js, etc.
        </p>
        <p>
          <strong>St. John Fisher College, Rochester, NY</strong><br />
          May 2022<br />
          Bachelor of Arts in Political Science with a Minor in Data Analytics<br />
          Overall GPA: 3.4/4.0
        </p>
      </section>

      {/* Professional Experience Section */}
      <section>
        <h2>Professional Experience</h2>
        {/* Operations Manager I at Amazon */}
        <article>
          <h3>Operations Manager I</h3>
          <p><strong>Amazon, LGB8, Rialto, CA</strong><br />June 2022 - April 2023</p>
          <p>
            Owned inbound dock process path, managing the unloading process of upwards of 80,000 cartons and supervising 50-75 hourly reports per shift.
            Worked closely with senior leadership to develop and execute operational plans and strategies to achieve business objectives.
          </p>
        </article>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Technical Skills</h2>
        <p>
          JavaScript (ES6+), CSS3, HTML5<br />
          SQL and NoSQL databases (MySQL, MongoDB)<br />
          Version control and collaboration using GitHub<br />
          Web development frameworks: Express, React, Node, Handlebars, jQuery, Bootstrap<br />
          Data Analysis: R Studio
        </p>
      </section>

      <section>
        <h2>Download Resume</h2>
        <p>
          <a href="C:\Users\kaw07\Documents\Kens-React-Portfolio\public\Kenneth Westbrook Resume (12).pdf" download>Download PDF</a>
        </p>
      </section>

      {/* Footer Section */}
      <footer>
        <p>
          Connect with me on:
          <a href="https://github.com/kwestbrook17" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/kenneth-westbrook/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}
