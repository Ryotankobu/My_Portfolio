import React, { useEffect, useRef, useState } from "react";
import myPhoto2 from "../assets/images/myPhoto2.png";
import myPhoto3 from "../assets/images/myPhoto3.png";
import WorkingExperience from "../components/descriptions/WorkingExperience";
import EducationExperience from "../components/descriptions/EducationExperience";

const Experience = () => {
  const h1Ref = useRef(null);
  const [h1Visible, setH1Visible] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === h1Ref.current && entry.isIntersecting) {
              setH1Visible(true);
            }
          })
        },
        { threshold: 0.3 }
      );
  
      if (h1Ref.current) observer.observe(h1Ref.current);
      return () => observer.disconnect();
  
    }, [])

    const title = "Experience"


  return (
    <section id="experience">
      <div className="experience-wrapper">
        <h1
          ref={h1Ref}
          className={`experience-header ${h1Visible ? "visible" : ""}`}
        >
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

        <div className="experience-container">
          <div className="experience-business-container">
            <div className="experience-business-before">
              <img
                alt="myPhoto2"
                src={myPhoto2}
                className="experience-photos"
              ></img>
              <h2 className="experience-title">Work</h2>
            </div>
            <div className="experience-business-after">
              <WorkingExperience />
            </div>
          </div>

          <div className="experience-education-container">
            <div className="experience-education-before">
              <img
                alt="myPhoto3"
                src={myPhoto3}
                className="experience-photos"
              ></img>
              <h2 className="experience-title">Study</h2>
            </div>
            <div className="experience-education-after">
              <EducationExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
