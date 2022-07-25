import React from "react";
import "../styles/Header.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { IsFontsReady } from "../helpers/IsFontsReady";
import { headerData } from "../data/HeaderData";

function Header() {
  const isFontsReady = IsFontsReady();
  const { name, title, titleTwo } = headerData;

  return (
    <div className="headerSection" id="home">
      <div className="headerContainer">
        <RoughNotationGroup show={isFontsReady}>
          <div className="headerName">
            <RoughNotation
              type="highlight"
              color="#000000"
              order="2"
              padding={[0, 0, 5, 0]}
              animationDuration="1300"
            >
              <h2>{name}</h2>
            </RoughNotation>
          </div>

          <div className="headerTitle">
            <h1>{title}</h1>

            <div className="underline">
              <RoughNotation
                type="underline"
                color="#000000"
                order="1"
                strokeWidth="1px"
                iterations="3"
              >
                <h1>{titleTwo}</h1>
              </RoughNotation>
            </div>
          </div>
        </RoughNotationGroup>
      </div>
    </div>
  );
}

export default Header;
