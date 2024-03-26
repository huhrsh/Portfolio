import React, { useState, useEffect } from "react";
import "../Styles/Skills.css";

function Skills() {
  const [skills, setSkills] = useState([
    {
      type: "frontend", skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TailwindCSS",
        "Redux",
      ]
    },
    {
      type: "backend", skills: [
        "MongoDB",
        "ExpressJS",
        "ReactJS",
        "NodeJS",
        "MongoDB Atlas",
      ],
    },
    {
      type: "programming", skills: [
        "C++",
        "Python",
        // "Pandas",
      ],
    },
    {
      type: "libraries", skills: [
        "Pandas",
        "React-Toastify",
        "React-Router",
        "PassportJS",
        "Multer",
        "NodeMailer",
        "GmailSMTP",
        "Gulp",
      ],
    }
  ]);

  // const [visibleSkills, setVisibleSkills] = useState([]);

  // useEffect(() => {
  //   const delay = 500; // Adjust the delay between each line
  //   const timeouts = skills.map((skill, index) => {
  //     return setTimeout(() => {
  //       setVisibleSkills((prevVisibleSkills) => [...prevVisibleSkills, skill]);
  //     }, index * delay);
  //   });

  //   return () => {
  //     timeouts.forEach((timeout) => clearTimeout(timeout));
  //   };
  // }, []);

  return (
    <>
      <main className="flex h-auto min-h-[90vh] px-24 w-screen items-start pt-16 gap-32 
      max-sm:flex-col max-sm:px-12 max-sm:gap-16 max-sm:mb-32
      ">
        {skills.map((item, index) => (
          <div className="w-1/4 animate__animated animate__fadeInUp h-auto min-h-96
          max-sm:w-full max-sm:min-h-24
          ">
            <h3
            key={index}
            className="w-full capitalize text-2xl font-semibold px-3 py-2 border"
          >
            {item.type}
          </h3>
          <ul className="h-auto">
            {item.skills.map((skill,ind)=>(
              <li key={ind} className={`text-xl pl-3 ${item.type=="libraries"?"py-2.5":"py-3"}`} >{skill}</li>
            ))}
          </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export { Skills };
