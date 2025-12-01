"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [aboutHover, setAboutHover] = useState(false);
  const [serviceHover, setServiceHover] = useState(false);

  /* MOBILE STATES */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileService, setMobileService] = useState(false);

  return (
    <>
      <header className="navbar">
        {/* LEFT LOGO */}
        <div className="navbar-left">
          <Link href="/">
            <Image
              src="/logo_new-removebg-preview.png"
              alt="JIPM Logo"
              width={180}
              height={80}
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-center">
          <div
            className="nav-item-wrapper"
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            <Link href="/abouts" className="nav-item">
              About GCCI
            </Link>
            <span className="divider">|</span>

            {aboutHover && (
              <div className="dropdown">
                <div className="dropdown-arrow"></div>
                <div className="dropdown-content">
                  <Link href="/abouts" className="dropdown-link">› Company History</Link>
                  <Link href="/history" className="dropdown-link">› Our Director</Link>
                  <Link href="/jounery" className="dropdown-link">› Our Journey</Link>
                  <Link href="/awards" className="dropdown-link">› Awards And Certifications</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/activity" className="nav-item">Activities</Link>
          <span className="divider">|</span>

          <div
            className="nav-item-wrapper"
            onMouseEnter={() => setServiceHover(true)}
            onMouseLeave={() => setServiceHover(false)}
          >
            <Link href="" className="nav-item">Service</Link>
            <span className="divider">|</span>

            {serviceHover && (
              <div className="dropdown-service">
                <div className="dropdown-arrow-service"></div>
                <div className="dropdown-service-content">
                  <div className="service-column">
                    <Link href="service/service1" className="dropdown-link">› Advocacy / Assessment / Capability Development / Recognition of Competitiveness</Link>
                    <Link href="service/service2" className="dropdown-link">› Liaison Global Expertise Technology Support / Industry Automation</Link>
                  </div>

                  <div className="service-column">
                    <Link href="service/service3" className="dropdown-link">› Maintenance Software / Support IT / IoT / AI</Link>
                    <Link href="service/service4" className="dropdown-link">› TPM Software - Subscription Based</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/news" className="nav-item">News</Link>
          <span className="divider">|</span>
          <Link href="/gallery" className="nav-item">Our Gallery</Link>
        </nav>

        {/* RIGHT DESKTOP BUTTONS */}
        <div className="navbar-right">
          <Link href="/contact" className="contact-btn">Contact Us</Link>
          <button className="lang-btn">
            <Globe size={18} style={{ marginRight: "4px" }} /> JP
          </button>
        </div>

        {/* HAMBURGER FOR MOBILE */}
        <button className="hamburger-btn" onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <X size={28} className="close-btn" onClick={() => setMobileOpen(false)} />
        </div>

        <div className="mobile-links">

          <Link href="/" className="mobile-item">Home</Link>

          {/* ABOUT MOBILE */}
          <div
            className="mobile-item dropdown-toggle"
            onClick={() => setMobileAbout(!mobileAbout)}
          >
            About GCCI <ChevronDown size={16} />
          </div>

          {mobileAbout && (
            <div className="mobile-submenu">
              <Link href="/abouts">Company History</Link>
              <Link href="/history">Our Director</Link>
              <Link href="/jounery">Our Journey</Link>
              <Link href="/awards">Awards & Certifications</Link>
            </div>
          )}

          <Link href="/activity" className="mobile-item">Activities</Link>

          {/* SERVICES MOBILE */}
          <div
            className="mobile-item dropdown-toggle"
            onClick={() => setMobileService(!mobileService)}
          >
            Services <ChevronDown size={16} />
          </div>

          {mobileService && (
            <div className="mobile-submenu">
              <Link href="/service/service1">Advocacy / Assessment / Capability Development / Recognition of Competitiveness</Link>
              <Link href="/service/service2">Liaison Global Expertise Technology Support / Industry Automation</Link>
              <Link href="/service/service3">Maintenance Software / Support IT / IoT / AI</Link>
              <Link href="/service/service4">TPM Software - Subscription Based</Link>
            </div>
          )}
          
          <Link href="/news" className="mobile-item">News</Link>
          <Link href="/gallery" className="mobile-item">Our Gallery</Link>
          <Link href="/contact" className="mobile-item">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
