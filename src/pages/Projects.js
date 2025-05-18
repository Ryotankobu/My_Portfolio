import React, { useEffect, useRef, useState } from "react";
import movie_finder_home from "../assets/images/movie_finder_home.png";
import movie_finder_bookmark from "../assets/images/movie_finder_bookmark.png";
import movie_finder_genre from "../assets/images/movie_finder_genre.png";
import movie_finder_modal from "../assets/images/movie_finder_modal.png";
import movie_finder_title from "../assets/images/movie_finder_title.png";
import fake_store_home from "../assets/images/fake_store_home.png";
import fake_store_productList from "../assets/images/fake_store_productList.png";
import fake_store_productDetails from "../assets/images/fake_store_productDetails.png";
import fake_store_cart from "../assets/images/fake_store_cart.png";
import ProjectTile from "../components/ProjectTile";


const Projects = () => {
  const h1Ref = useRef(null);
  const [h1Visible, setH1Visible] = useState(false);
  const projects = [
    {
      title: "Movie Finder",
      explanation:
        "This React-based movie discovery app provides an intuitive interface for exploring films using data from the TMDB API. The home screen showcases the top 20 trending movies and genre-specific titles, all fetched dynamically. Users can click on any movie to view detailed information in a modal, including the option to bookmark favorites. The app also includes a title search and genre filter for more targeted browsing. Styling is a mix of Bootstrap and custom CSS, ensuring a responsive layout. This project highlights skills in API integration, React hooks, state management, and component-based design, and serves as a solid base for future enhancements like user authentication or persistent bookmarks.",
      images: [
        movie_finder_home,
        movie_finder_modal,
        movie_finder_genre,
        movie_finder_title,
        movie_finder_bookmark,
      ],
      imageTitle: [
        "Home Screen",
        "Modal (Movie Details)",
        "Genre Search",
        "Title Search",
        "Bookmarks",
      ],
      gitUrl: "https://github.com/Ryotankobu/Movie-Finder.git",
      videoUrl: "https://github.com/Ryotankobu/Movie-Finder.git",
      skills: ["JavaScript", "React", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "E-Commerce Platform",
      explanation:
        "This mobile shopping application is built with React Native and integrates the Fake Store API to provide a realistic e-commerce experience. On the Home screen, users are presented with dynamically fetched product categories. Selecting a category navigates them to a Product List screen, followed by a Product Detail screen where they can view item information and add items to their cart. The Cart screen allows users to manage their selected products, including increasing, decreasing, or removing item quantities. The cart state is fully managed using Redux, ensuring a responsive and centralized state management approach across the application.",
      images: [
        fake_store_home,
        fake_store_productList,
        fake_store_productDetails,
        fake_store_cart,
      ],
      imageTitle: [
        "Home Screen",
        "Products List",
        "Product Details",
        "Shopping Cart",
      ],
      gitUrl: "https://github.com/Ryotankobu/E-Commerce.git",
      videoUrl: "https://github.com/Ryotankobu/E-Commerce.git",
      skills: ["React Native", "Redux", "JavaScript", "HTML", "CSS"],
    },

  ];

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
  
  const title = "Projects"

  return (
    <section id="projects">
      <div style={{ height: "100%" }} className="projects-wrapper">
        <h1 ref={h1Ref} className={`project-title ${h1Visible ? "visible" : ""}`}>
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

        {projects.map((eachProject, index) => (
          <ProjectTile key={index} eachProject={eachProject} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
