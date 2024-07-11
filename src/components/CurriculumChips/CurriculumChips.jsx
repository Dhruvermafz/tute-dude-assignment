import React from "react";
import eye from "../../assets/icons/fi-br-eye.svg";
import "./curriculumchips.css";

const CurriculumChips = ({ course, description }) => {
  return (
    <div className="container">
      <div className="heading">
        <h1>{course}</h1> <p>{description}</p>
      </div>

      <div className="curriculum">
        <img src={eye} alt="" /> View Curriculum
      </div>
    </div>
  );
};

export default CurriculumChips;
