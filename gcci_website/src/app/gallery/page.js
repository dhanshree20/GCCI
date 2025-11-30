"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./gallery.css";
import Link from "next/link";
import { ArrowLeft , ArrowRight, MessageSquare, Eye } from "lucide-react";

const page = () => {
    const galleryItems = [
  { src: "/images/img_29.jpeg", title: "Conducting MAKIGAMI Analysis in Rucha Engineers" },
  { src: "/images/img_31.jpeg", title: "Conducting MAKIGAMI Analysis in Rucha Engineers" },
  { src: "/images/img_33.jpeg", title: "TPM Kick off at MMForgings" },
  { src: "/images/img_22.jpg", title: "JIPM Assessment with Sensei Ichikawa San & Sensei Nomura San" },
  { src: "/images/img_37.jpg", title: "ABI Showa tech JIPM Assessment" },
  { src: "/images/img_18.jpg", title: "TPM Facilitators course (cii) conducted for foreign deligate" },
  { src: "/images/img_4.jpg", title: "COCA COLA JIPM Assessment with Japanese Sensei Sugiura San & Sensei Nomura San" },
  { src: "/images/img_38.jpg", title: "JIPM Assessment Harsha Engg. International" },
  { src: "/images/img_39.jpg", title: "TPM Review at WAR ROOM" },
  { src: "/images/img_40.jpg", title: "Lean Tour Japan" },
  { src: "/images/img_11.jpg", title: "Bussiness Excellence Assesmsnet in SAIL" },
  { src: "/images/img_41.jpg", title: "NIPPON Steel - Japan Plant Visit" },

  { src: "/images/img_12.jpg", title: "Team Member in Business Excellence Assessment SAIL -" },
  { src: "/images/img_7.jpg", title: "LUMAX JIPM Assessment" },
  { src: "/images/img_35.jpg", title: "GCCI Equipment Manufacturing Division" },
  { src: "/images/img_36.jpg", title: "Joining with YOSHI KENKYASHO, Sensei Yoshitaka MURASE San" },
];

  return (
    <div>

       {/* News Hero Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>Our Gallery</h1>
          <p>
            A Journey of Excellence — Captured in Every Moment, Framed with Pride
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>

        {/* Gallery Section */}

      <section className="gallery-section">
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <Image
              src={item.src}
              alt={item.title}
              width={400}
              height={300}
              className="gallery-img"
            />
            <div className="gallery-content">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default page
