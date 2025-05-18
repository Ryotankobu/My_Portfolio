import React from 'react'
import myPhoto1 from '../assets/images/myPhoto1.png'

const Home = () => {

   const handleScroll = (id) => {
     const section = document.getElementById(id);
     if (section) {
       section.scrollIntoView({ behavior: "smooth" });
     }
     console.log(typeof bootstrap);
   };

  return (
    <section id="home">
      <div style={{ height: "100%" }} className="home-wrapper">
        <div className="home-image-container">
          <img alt="myPhoto1" src={myPhoto1}></img>
        </div>

        <div className="home-contents">
          <div className="home-text-container">
            <h1>I'm Ryota Ando!</h1>
            <h2>Aspiring front-end developer.</h2>
            <p>
              I'm a student at Griffith University whoseMy passion is to bridge
              the gap between humans and technology by designing and developing
              user friendly and intuitive apps.
            </p>
            <div className="home-button-container">
              <div className="home-button-box">
                <button
                  onClick={() => handleScroll("contactMe")}
                  // style={{ marginLeft: "25px", width: "400px" }}
                >
                  Contact me
                </button>
              </div>
              <div className="home-button-box">
                <a
                  href="https://drive.google.com/file/d/1R-7yQxph8NM53X2hBQX5EZYwMRh1cZED/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resumeLink"
                  // style={{ marginLeft: "25px", width: "400px" }}
                >
                  <button>Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home