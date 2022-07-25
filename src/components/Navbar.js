import React, { useEffect, useRef, useState } from "react";
import { menuData } from "../data/MenuData";
import "../styles/Navbar.css";
import MobileMenuBtn from "../assets/bar.svg";
import Dropdown from "../components/Dropdown";
import Logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <Link to="home" smooth={true}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="menu">
        {menuData.map((item, index) => {
          return (
            <div className="menuLinks" key={index}>
              <Link to={item.id} smooth={true} spy={true}>
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mobileMenuBtn" onClick={toggle}>
        <img src={MobileMenuBtn} />
      </div>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default Navbar;
