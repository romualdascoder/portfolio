import React, { useEffect } from "react";
import {
  technologiesData,
  technologiesTitleData,
} from "../data/TechnologiesData";
import "../styles/Technologies.css";
import { AosEffect } from "../helpers/AosEffect";

function Technologies() {
  AosEffect();
  return (
    <div className="technologiesSection">
      <div className="technologiesContainer">
        <div className="technologiesTitle">
          <h1 data-aos="fade-up">{technologiesTitleData.technologiesTitle}</h1>
          <h1 data-aos="fade-up">{technologiesTitleData.technologiesTitleTwo}</h1>
        </div>
        <div className="technologiesData">
          {technologiesData.map((item, index) => {
            return (
              <div key={index} data-aos="fade-up">
                <h2>{item.title}</h2>
                <p>{item.technologies}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
