import React from "react";
import SkillBox from "./SkillBox";
import ImageSlider from "./ImageSlider";

const ProjectTile = ({ index, eachProject }) => {
  const imageInfo = [
    {
      images: eachProject.images,
      imageTitles: eachProject.imageTitle,
    },
  ];


  return (
    <div className="project-tile-wrapper">
      <div className="project-tile-text-section">
        <h2>{eachProject.title}</h2>
        <p>{eachProject.explanation}</p>

        {/* <a>{eachProject.gitUrl}</a>
        <a>{eachProject.videoUrl}</a> */}

        <div className="skills-container">
          {eachProject.skills.map((eachSkill, index) => (
            <SkillBox key={index} eachSkill={eachSkill} />
          ))}
        </div>
      </div>
      <div className="project-tile-photo-section">
        {/* <img alt="sample" src={sample}></img> */}
        <div>
          <ImageSlider imageInfo={imageInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
