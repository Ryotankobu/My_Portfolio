import React from 'react'

const EducationExperience = () => {
  return (
    <div className="scrollExperienceWrapper">
      <h3 className="experienceTitle">Education Experience</h3>
      <div className="experience-description">
        <h4>Bachelor of Information Technology</h4>
        <ul className="uniInfo">
          <li>- Griffith University (2022 - Expected 2025)</li>
          <li>- Major: Information Technology</li>
          <li>- Grade Point Average: 6.2 (Scale 1 -7, 7 being the highest)</li>
        </ul>

        <ul>
          <li>
            Developed a Python desktop application to fetch data from an Excel
            file as a database.
          </li>
          <li>
            Created a software Lifecycle Development plan for a local business
          </li>
          <li>
            Configured an AWS Docker environment for a provided online platform
            (local business homepage).
          </li>
          <li>
            Developed an online chat system as a full-stack project using the
            MEAN stack.
          </li>
          <li>
            Built a React project to fetch API-based photos according to user
            interactions.
          </li>
          <li>Created Angular mobile app using Ionic.</li>
          <li>Created a board game using JavaScript flamework p5.js.</li>
          <li>Designed a homepage using HTML and CSS </li>
        </ul>
      </div>

      <div className="experience-description">
        <h4>Bachelor of Law</h4>
        <ul className="uniInfo">
          <li>- University of Toyama, Japan (2006 - 2012)</li>
         
        </ul>
      </div>
    </div>
  );
}

export default EducationExperience