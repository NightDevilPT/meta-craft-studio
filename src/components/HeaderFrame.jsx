import Image from "next/image";
import React, { useContext } from "react";

import logo from "../../public/images-removebg-preview.webp";

import {
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { GlobalData } from "@/contextAPI/ContextAPI";

const HeaderFrame = () => {
  const { hamburger, setHamburger } = useContext(GlobalData);

  return (
    <header className="header-section">
      <div className="header-logo-section">
        <Image className="header-logo-image" src={logo} alt="logo-images" />
      </div>

      <div className="header-info-section">
        <div className="header-contact-timing-section">
          <div className="header-contact-container">
            <FaPhoneSquareAlt className="header-contact-icon" />
            <div className="header-contact-info-section">
              <span className="header-contact-info">+91 87509 99128</span>
              <span className="header-contact-info">+91 87509 99128</span>
            </div>
          </div>

          <div className="header-contact-container">
            <BsFillClockFill className="header-contact-icon2" />
            <div className="header-contact-info-section">
              <span className="header-contact-info">7:30 AM - 7:30 PM</span>
              <span className="header-contact-info">Monday to Saturday</span>
            </div>
          </div>
        </div>

        <div className="header-social-section">
          <a href="#">
            <div className="header-social-icon-container">
              <FaFacebookF className="header-social-icon" />
            </div>
          </a>

          <a href="#">
            <div className="header-social-icon-container">
              <FaTwitter className="header-social-icon" />
            </div>
          </a>

          <a href="#">
            <div className="header-social-icon-container">
              <FaLinkedinIn className="header-social-icon" />
            </div>
          </a>

          <a href="#">
            <div className="header-social-icon-container">
              <FaInstagram className="header-social-icon" />
            </div>
          </a>
        </div>
      </div>

      <div
        className={`hamburger ${hamburger && "open-hamburger"}`}
        onClick={(e) => setHamburger(!hamburger)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default HeaderFrame;
