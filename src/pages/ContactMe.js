import React, { useEffect, useRef, useState } from "react";

import ContactInfo from "../components/ContactInfo";

const ContactMe = () => {
  const h1Ref = useRef(null);
    const aboutMeRef = useRef(null);
  
    const [h1Visible, setH1Visible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === h1Ref.current && entry.isIntersecting) {
              setH1Visible(true);
            }
            if (entry.target === aboutMeRef.current && entry.isIntersecting) {
              setContentVisible(true);
              observer.unobserve(entry.target)
            }
  
            
          });
        },
        { threshold: 0.3 } // Trigger when 30% of the div is in view
      );
  
       if (h1Ref.current) observer.observe(h1Ref.current);
       if (aboutMeRef.current) observer.observe(aboutMeRef.current);
  
      return () => observer.disconnect();
    }, []);
  
    const title = "Contact Me"




  return (
    <section
      id="contactMe"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
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
        ref={aboutMeRef}
        className={`aboutMe-wrapper ${contentVisible ? "visible" : ""}`}
      >
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactMe;
