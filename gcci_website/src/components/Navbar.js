"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [aboutHover, setAboutHover] = useState(false);

  return (
    <header className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
      <Link href="/">  <Image
          src="/logo_4.png"
          alt="JIPM Logo"
          width={150}
          height={60}
          className="navbar-logo"
        /></Link>
      </div>

      {/* Center Links */}
      <nav className="navbar-center">
        <div
          className="nav-item-wrapper"
          onMouseEnter={() => setAboutHover(true)}
          onMouseLeave={() => setAboutHover(false)}
        >
          <Link href="abouts" className="nav-item">
            About GCCI
          </Link>
          <span className="divider">|</span>

          {/* Dropdown Menu */}
          {aboutHover && (
            <div className="dropdown">
              <div className="dropdown-arrow"></div>
              <div className="dropdown-content">
                <Link href="abouts" className="dropdown-link">
                  › History
                </Link>
                <Link href="history" className="dropdown-link">
                  › Our Director
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href="activity" className="nav-item">
          Activities
        </Link>
        <span className="divider">|</span>
        <Link href="service" className="nav-item">
          Service
        </Link>
        <span className="divider">|</span>
        <Link href="news" className="nav-item">
          News
        </Link>
      </nav>

      {/* Right Section */}
      <div className="navbar-right">
        <Link href="contact" className="contact-btn">
          Contact Us
        </Link>
        <button className="lang-btn">
          <Globe size={18} style={{ marginRight: "4px" }} /> JP
        </button>
      </div>
    </header>
  );
};

export default Navbar;
