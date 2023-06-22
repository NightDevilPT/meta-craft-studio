import React, { useState } from "react";

import { RiCustomerServiceFill } from "react-icons/ri";
import { FaMapMarkedAlt, FaEnvelopeOpenText } from "react-icons/fa";

const ContactUsFrame = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  return (
    <div className="contact-section">
      <div className="contact-form-section">
        <h1 className="contact-subtitle">
          Get In Touch
        </h1>

        <form>
          <div className="input-section">
            <label className="input-label">Name <span style={{ color: "red" }}>*</span></label>
            <input type="text" className="input-field" value={form.name} onChange={e => {
              setForm(pre => ({ ...pre, name: e.target.value }));
            }} placeholder="Name" />
          </div>

          <div className="input-section">
            <label className="input-label">Email <span style={{ color: "red" }}>*</span></label>
            <input type="text" className="input-field" value={form.email} onChange={e => {
              setForm(pre => ({ ...pre, email: e.target.value }));
            }} placeholder="Email Address" />
          </div>

          <div className="input-section">
            <label className="input-label">Phone <span style={{ color: "red" }}>*</span></label>
            <input type="text" className="input-field" value={form.phone} onChange={e => {
              setForm(pre => ({ ...pre, phone: e.target.value }));
            }} placeholder="Phone" />
          </div>

          <div className="input-section">
            <label className="input-label">Your Message <span style={{ color: "red" }}>*</span></label>
            <textarea type="text" className="input-field" value={form.message} onChange={e => {
              setForm(pre => ({ ...pre, message: e.target.value }));
            }} placeholder="Your Message" />
          </div>

          <button className="submit-btn">Submit Form</button>
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
