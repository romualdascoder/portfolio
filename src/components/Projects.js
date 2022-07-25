import React from "react";
import "../styles/Projects.css";
import { AosEffect } from "../helpers/AosEffect";

function Projects({ projects, projectsTitle }) {
  AosEffect();
  return (
    <div className="projectsSection" id="projects">
      <div className="projectsTitle">
        <p data-aos="fade-up">{projectsTitle}</p>
      </div>
      <div className="projectsContainer">
        {projects.map((item, index) => {
          return (
            <div className="projectsData" key={index}>
              <div data-aos="fade-up">
                <img src={item.image} alt={item.alt} className="projectImg" />

                <div className="projectsTitleContainer">
                  <h1>{item.title}</h1>
                  <div>
                    <div className="github">
                    <a
                        href={item.githubLink}
                        target="_blank"
                        rel='noreferrer'
                      >
                        <img src={item.githubImage} alt={item.githubImageAlt} />
                      </a>
                    </div>
                    <div className="webLink">
                      <a
                        href={item.portfolioLink}
                        target="_blank"
                        rel='noreferrer'
                      >
                        <img
                          src={item.webLinkImage}
                          alt={item.webLinkImageAlt}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
