import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const handleScroll= (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth"});
    }
    console.log(typeof bootstrap);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container ">
        <button
          className="navbar-brand btn btn-link nav-link navbar-title"
          onClick={() => handleScroll("home")}
        >
          My Portfolio
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("aboutMe")}
              >
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("projects")}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("skills")}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("experience")}
              >
                Experience
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("contactMe")}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar