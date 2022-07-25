import React from "react";
import "../styles/Footer.css";
import { footerData } from "../data/FooterData";

import { AosEffect } from "../helpers/AosEffect";

function Footer() {
  AosEffect();
  const { logo, alt, title, btnText, time, phone, email } = footerData;
  return (
    <div className="footerSection" id="contacts">
      <div className="footerContainer">
        <div className="footerTitle">
          <h1 data-aos="fade-up">{title}</h1>
          <div className="footerBtn">
            <a href="mailto:romualdas.f@gmail.com">{btnText}</a>
          </div>
        </div>
        <div className="footerSecondSection">
          <img src={logo} alt={alt} />
          <div>
            <p>{time}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
