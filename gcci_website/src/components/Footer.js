"use client";
import React from 'react'
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-brand">
            <Link href="/">
              <Image 
                src="/logo_new-removebg-preview.png"
                alt="Centric Logo" 
                width={150} 
                height={50} 
                className="footer-logo"
              />
            </Link>

            <p>
              Founded in 2017 with a vision of delivering end-to-end solutions through global expertise, 
              GCCI has evolved into a multifaceted enterprise. In 2023, we expanded and rebranded as 
              GCCI International LLP
            </p>
          </div>

          {/* Push Services + Company to right */}
          <div className="footer-links">
            {/* Services */}
            <div className="footer-col">
              <h3>SERVICES</h3>
              <ul>
                <li><Link href="/service/service1">Advocacy / Assessment / Capability Development / Recognition of Competitiveness</Link></li>
                <li><Link href="/service/service2">Liaison Global Expertise Technology Support / Industry Automation</Link></li>
                <li><Link href="/service/service3">Maintenance Software / Support IT / IoT / AI</Link></li>
                <li><Link href="/service/service4">TPM Software - Subscription Based</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h3>COMPANY</h3>
              <ul>
                <li><Link href="/abouts">About</Link></li>
                <li><Link href="/service/service1">Services</Link></li>
                <li><Link href="/activity">Activities</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/gallery">Our Gallery</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col foot">
            <h3>CONTACT</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={24} /> {/* bigger icon */}
                <span>Shop No. LG-K-02, S. No. 588/2B, Raviraj Cru Premises, Bibwewadi, Market Yard, Pune, Maharashtra, India.</span>
              </li>
              <li>
                <Phone size={20} />
                <span>+91 76201 21069</span>
              </li>
              <li>
                <Mail size={20} />
                <span> gcci-enquiry@gcc-india.com</span>
              </li>
            </ul>

            {/* Social Icons Row */}
            <div className="social-icons">
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><Twitter size={20} /></Link>
              <Link href="#"><Linkedin size={20} /></Link>
              <Link href="#"><Instagram size={20} /></Link>
              <Link href="#"><Youtube size={20} /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Global Corporate Council India. All Rights Reserved</p>
          <p><Link href="https://dwi4u.com/"> Developed by DW Innovation Pvt. Ltd.</Link></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
