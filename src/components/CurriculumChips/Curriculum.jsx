import React from "react";
import "./curriculum.css";
import CurriculumChips from "./CurriculumChips";
const Curriculum = () => {
  return (
    <div id="curriculum" className="container">
      <div className="heading">DATA SCIENCE COURSE LEARNING PATH</div>
      <div className="mainHead">
        <p>
          <span> Data Science </span> Course Curriculum
        </p>
      </div>

      <div className="chips">
        <CurriculumChips
          course="C++"
          description="Learn C++ for strong programming fundamentals."
        />
        <CurriculumChips
          course="MERN Stack"
          description="Master the MERN stack for high-demand projects."
        />
        <CurriculumChips
          course="Data Structure & Algorithm"
          description="Excel in Data Structures and Algorithms for interview success."
        />
        <CurriculumChips
          course="Competitve Programming"
          description="Excel in Data Structures and Algorithms for interview success."
        />
      </div>
    </div>
  );
};

export default Curriculum;
