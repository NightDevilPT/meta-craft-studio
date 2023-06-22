import React from "react";

import { RiCustomerServiceFill } from "react-icons/ri";
import { FaMapMarkedAlt, FaEnvelopeOpenText } from "react-icons/fa";

const ContactUsFrame = () => {
  return (
    <div className="contact-section">
      <div className="contact-form-section">
        <h1 className="contact-subtitle">
          Get In Touch
        </h1>

        <form>
          
        </form>
      </div>


      <div className="contact-detail-section">
        <h1 className="contact-subtitle">Contact Info</h1>
        <div className="contact-info-section">
            <RiCustomerServiceFill className="contact-info-icon" />
            <span className="contact-info-text">+91 87509 99128</span>
        </div>
        <div className="contact-info-section">
            <FaEnvelopeOpenText className="contact-info-icon" />
            <span className="contact-info-text">info@metalcraftstudio.com</span>
        </div>
        <div className="contact-info-section">
            <FaMapMarkedAlt className="contact-info-icon" />
            <span className="contact-info-text">D-1668, DSIDC Industrial Area, Narela, Delhi-110040</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFrame;
