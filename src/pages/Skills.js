import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const h1Ref = useRef(null);
    const skillsRef = useRef(null);
    const [h1Visible, setH1Visible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    const strongSkills =[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "English(fluent)",
        "Japanese(native)"
      ]
    const intermediateSkills =[
        "Python",
        "Angular",
        "Bootstrap",
        "AWS",
        "Docker",
        "MySQL"
      ]
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === h1Ref.current && entry.isIntersecting) {
              setH1Visible(true);
            }
            if (entry.target === skillsRef.current && entry.isIntersecting) {
              setContentVisible(true);
              observer.unobserve(entry.target)
            }
  
            
          });
        },
        { threshold: 0.3 } // Trigger when 30% of the div is in view
      );
  
       if (h1Ref.current) observer.observe(h1Ref.current);
       if (skillsRef.current) observer.observe(skillsRef.current);
  
      return () => observer.disconnect();
    }, []);
  
    const title = "Skills"

  return (
    <section id="skills" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <h1 ref={h1Ref} className={`aboutMe-title ${h1Visible ? "visible" : ""}`}>
        {title.split("").map((eachLetter, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
              display: eachLetter === " " ? "inline-block" : "inline",
              minWidth: eachLetter === " " ? "10px" : "auto",
            }}
          >
            {eachLetter}
          </span>
        ))}
      </h1>

      <div
        ref={skillsRef}
        className={`skills-wrapper ${contentVisible ? "visible" : ""}`}
      >
        <div className="skillContainer">
          <h3>Proficient Skills</h3>
          <ul>
            {strongSkills.map((eachSkill) => (
              <li>{eachSkill}</li>
            ))}
          </ul>
        </div>
        <div className="skillContainer">
          <h3>Intermediate Skills</h3>
          <ul>
            {intermediateSkills.map((eachSkill) => (
              <li>{eachSkill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
