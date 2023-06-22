import { GlobalData } from "@/contextAPI/ContextAPI";
import Link from "next/link";
import React, { useContext, useState } from "react";

const NavBarFrame = () => {
  const { hamburger, setHamburger,activeNav, setActiveNav } = useContext(GlobalData);

  return (
    <div className={`navbar-section ${!hamburger&&'hide-navbar-section'}`}>
      <nav className={`navbar-container`}>
        <ul>
          <li
            onClick={(e) => {
              setActiveNav("home");
              setHamburger(false);
            }}>
            <Link
              href={"/"}
              className={`navbar-tab ${
                activeNav === "home" && "active-navbar-tab"
              }`}>
              Home
            </Link>
          </li>
          <li
            onClick={(e) => {
              setActiveNav("about");
              setHamburger(false);
            }}>
            <Link
              href={"/about"}
              className={`navbar-tab ${
                activeNav === "about" && "active-navbar-tab"
              }`}>
              About
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`navbar-tab ${
                (activeNav === "submenu1" ||
                  activeNav === "submenu2" ||
                  activeNav === "submenu3" ||
                  activeNav === "submenu4") &&
                "active-navbar-tab"
              }`}>
              Products +
            </Link>
            <ul>
              <li
                onClick={(e) => {
                  setActiveNav("submenu1");
                  setHamburger(false);
                }}>
                <Link
                  href={"#"}
                  className={`navbar-tab ${
                    activeNav === "submenu1" && "active-navbar-tab"
                  }`}>
                  PVD Louver Panels
                </Link>
              </li>
              <li
                onClick={(e) => {
                  setActiveNav("submenu2");
                  setHamburger(false);
                }}>
                <Link
                  href={"#"}
                  className={`navbar-tab ${
                    activeNav === "submenu2" && "active-navbar-tab"
                  }`}>
                  PVD Metal Sheets
                </Link>
              </li>
              <li
                onClick={(e) => {
                  setActiveNav("submenu3");
                  setHamburger(false);
                }}>
                <Link
                  href={"#"}
                  className={`navbar-tab ${
                    activeNav === "submenu3" && "active-navbar-tab"
                  }`}>
                  Textured Sheets
                </Link>
              </li>
              <li
                onClick={(e) => {
                  setActiveNav("submenu4");
                  setHamburger(false);
                }}>
                <Link
                  href={"#"}
                  className={`navbar-tab ${
                    activeNav === "submenu4" && "active-navbar-tab"
                  }`}>
                  Stainless Steel Decorative Profile
                </Link>
              </li>
            </ul>
          </li>
          <li
            onClick={(e) => {
              setActiveNav("infrastructure");
              setHamburger(false);
            }}>
            <Link
              href={"/infrastructure"}
              className={`navbar-tab ${
                activeNav === "infrastructure" && "active-navbar-tab"
              }`}>
              Infrastructure
            </Link>
          </li>
          <li
            onClick={(e) => {
              setActiveNav("contactus");
              setHamburger(false);
            }}>
            <Link
              href={"/contact-us"}
              className={`navbar-tab ${
                activeNav === "contactus" && "active-navbar-tab"
              }`}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarFrame;
