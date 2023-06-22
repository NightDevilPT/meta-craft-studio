import React from "react";
import Link from "next/link";

import { RiCustomerServiceFill } from "react-icons/ri";
import { FaMapMarkedAlt, FaEnvelopeOpenText } from "react-icons/fa";

const FooterFrame = () => {
  return (
    <footer className="footer-section">
      <div className="footer-data-section">
        <div className="footer-info-section">
          <h3 className="footer-info-title">About</h3>
          <span className="footer-info-description">
            Metal Craft Studio (MCS), a Narela Delhi-based company, Provides
            high-quality metal job work services
          </span>
        </div>

        <div className="footer-info-section">
          <h3 className="footer-info-title">Quick Links</h3>
          <div className="footer-info-data-section">
            <Link className="footer-info-link" href="#">
              Home
            </Link>
            <Link className="footer-info-link" href="#">
              About
            </Link>
            <Link className="footer-info-link" href="#">
              Contact Us
            </Link>
            <Link className="footer-info-link" href="#">
              Infrastructure
            </Link>
          </div>
        </div>

        <div className="footer-info-section">
          <h3 className="footer-info-title">Products</h3>
          <div className="footer-info-data-section">
            <Link className="footer-info-link" href="#">
              PVD Louver Panels
            </Link>
            <Link className="footer-info-link" href="#">
              PVD Metal Sheets
            </Link>
            <Link className="footer-info-link" href="#">
              Stainless Steel Decorative Profiles
            </Link>
            <Link className="footer-info-link" href="#">
              Textured Sheets
            </Link>
          </div>
        </div>

        <div className="footer-info-section">
          <h3 className="footer-info-title">Contact Us</h3>
          <div className="footer-info-data-section">
            <div className="footer-contact-data">
              <RiCustomerServiceFill className="footer-contact-icon" />
              <span className="footer-contact-text">+91 87509 99128</span>
            </div>
            <div className="footer-contact-data">
              <FaEnvelopeOpenText className="footer-contact-icon" />
              <span className="footer-contact-text">
                info@metalcraftstudio.com
              </span>
            </div>
            <div className="footer-contact-data">
              <FaMapMarkedAlt className="footer-contact-icon" />
              <span className="footer-contact-text">
                D-1668, DSIDC Industrial Area, Narela, Delhi-110040
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-last-section">
        Proudly powered | Metal Craft Studio .
      </div>
    </footer>
  );
};

export default FooterFrame;
