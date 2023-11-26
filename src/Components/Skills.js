import React, { useState, useEffect } from "react";
import "../Styles/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "ExpressJS",
    "ReactJS",
    "NodeJS",
    // "PassportJS",
    "Firebase",
    "AWS Basics",
    "Redux",
    "C++"
  ]);

  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const delay = 500; // Adjust the delay between each line
    const timeouts = skills.map((skill, index) => {
      return setTimeout(() => {
        setVisibleSkills((prevVisibleSkills) => [...prevVisibleSkills, skill]);
      }, index * delay);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [skills]);

  return (
    <>
      <main className={`skills-main`}>
        {visibleSkills.map((item, index) => (
          <h3 className="individual-skills animate__animated animate__fadeInUp" key={index}>
            {item}
          </h3>
        ))}
      </main>
    </>
  );
}

export { Skills };
