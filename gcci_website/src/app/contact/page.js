"use client";

import React, { useState } from "react";
import "./contact.css";
import { Mail, Phone, MapPin, Building2, Globe, User, MessageSquareMore, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const page = () => {

    // Send Message Section

   const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    mobile: "",
    country: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div>

      {/* Contact Hero Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>Contact Us</h1>
          <p>
            Get in Touch with the GCCI Team for Expert Guidance and Support
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>


    {/* Send Message Section */}
<div className="conttact-section">
    <div className="contact-container">
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="company">
            <Building2 className="icon" /> Company Name:
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="name">
          <User  className="icon" />  Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">
            <Mail className="icon" /> Email Address:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="mobile">
            <Phone className="icon" /> Mobile Number:
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="country">
            <Globe className="icon" /> Country:
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="address">
            <MapPin className="icon" /> Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row textarea-row">
          <label htmlFor="message">
            <MessageSquareMore  className="icon" />Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
          Submit
        </button>

      </form>
    </div>
</div>
    {/* Map Section */}

    <div className="map-container">
      <h2 className="map-title">Find Us on Map</h2>
      <p className="map-address">
        <MapPin className="map-icon" />
        Shop No. LG-K-02, S. No. 588/2B, Raviraj Cru Premises,
        <br />
        Bibwewadi, Market Yard, Pune, Maharashtra, India.
      </p>

      <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.289627129939!2d73.86405147500084!3d18.495866882593785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c03d168c7b25%3A0xf4c0ed2db06d4f7a!2sRaviraj%20Cru%20Premises%2C%20Bibwewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696780987654!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Link href="https://maps.google.com/?q=Raviraj+Cru+Premises,+Bibwewadi,+Pune" target="_blank" className="map-link">
        View Larger Map
      </Link>
    </div>
    </div>
  )
}

export default page
