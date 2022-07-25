import React, { useState } from "react";
import "../styles/Dropdown.css";
import { menuData } from "../data/MenuData";
import { FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className="dropDownContainer"
      // isOpen={isOpen}
      onClick={toggle}
      style={{ opacity: isOpen ? "1" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div className="icon">
        <FaTimes onClick={toggle} />
      </div>
      <div className="dropDownWrapper">
        <div className="dropDownMenu">
          {menuData.map((item, index) => {
            return (
              <div className="dropDownLink" key={index}>
                <Link to={item.id} smooth={true} onClick={toggle}>
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
