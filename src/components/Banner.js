import React from "react";
import "../styles/Banner.css";
import { bannerData } from "../data/BannerData";
import { MobileScreenSize } from "../helpers/MobileScreenSize";
import { RellaxEffect } from "../helpers/RellaxEffect";
import { Link, animateScroll as scroll } from "react-scroll";

function Banner() {
  const mobileScreenSize = MobileScreenSize();
  const rellaxRef = RellaxEffect();
  const { imageOne, imageTwo, imageThree, alt, bannerText, btnText } =
    bannerData;

  return (
    <div className="bannerSection" id="about">
      <div className="bannerContainer">
        <div className="column-1">
          <img src={imageThree} alt={alt}></img>
          <div>
            <img src={imageTwo} alt={alt}></img>
          </div>
        </div>
        <div className="column-2">
          <div className="column-2-container">
            <div className="bannerAboutText">
              <p>{bannerText}</p>
            </div>
            <div className="aboutBtn">
              <Link to="about" smooth={true}>
                <p>{btnText}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="column-3">
          <img
            src={imageOne}
            alt={alt}
            className={`${mobileScreenSize ? "" : "rellax"}`}
            ref={rellaxRef.current}
            data-rellax-speed="3"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
