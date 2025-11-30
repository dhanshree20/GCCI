"use client";
import React from 'react'
import { useEffect } from "react";
import "./jounery.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft , ArrowRight, MessageSquare, Eye } from "lucide-react";


const page = () => {
    const timelineData = [
  {
    year: "2017",
    title: "Foundation Year",
    desc: "Global Corporate Council India (GCCI) was established in Pune, India, with a mission to drive business excellence, TPM, TQM, and Lean-based transformations across industries.",
    img: "/images/img_17.jpg",
  },
  {
    year: "2018",
    title: "Formation of TPM Consulting Division",
    desc: "GCCI formally structured its TPM (Total Productive Maintenance) and Operational Excellence Consulting Division, initiating partnerships with major Indian manufacturing organizations.",
    img: "/images/img_4.jpg",
  },
  {
    year: "2019",
    title: "Launch of Capability Development & Assessment Services",
    desc: "Introduced TPM Health Check-Up Assessments, Capability Development Programs, and Business Excellence Training Modules for organizations across India.",
    img: "/images/img_21.jpg",
  },
  {
    year: "2020",
    title: "Global Collaboration and Technology Integration",
    desc: "GCCI expanded globally by initiating strategic partnerships with overseas experts and organizations for AI-based, IoT, and automation-driven TPM solutions.",
    img: "/images/img_19.jpg",
  },
  {
    year: "2021",
    title: "Digital TPM and Visual Management Innovation",
    desc: "Developed Visual Management Systems (VMS) and introduced digital TPM frameworks integrating smart manufacturing concepts.",
    img: "/images/img_18.jpg",
  },
  {
    year: "2022",
    title: "Global Recognition and Expansion",
    desc: "GCCI achieved recognition for its contribution to 69+ JIPM TPM Awards through consulting support and collaboration with multiple industries.",
    img: "/images/img_16.jpg",
  },
  {
    year: "2023",
    title: "Rebranding and Globalization",
    desc: "Rebranded as GCCI International LLP, reflecting a global consulting vision with operations and collaborations across Japan, Germany, the U.S., and Australia.",
    img: "/images/img_14.jpg",
  },
  {
    year: "2024",
    title: "Institutionalization of GCCI Learning & Certification",
    desc: "Initiated plans for GCCI TPM Academy, focusing on TPM, TQM, RCM, and Business Excellence certifications in collaboration with academic and industrial partners.",
    img: "/images/img_6.jpg",
  },
  {
    year: "2025",
    title: "Digital Transformation & AI Integration",
    desc: "Launched initiatives for AI-supported TPM deployment, digital dashboards, and data-driven assessment methodologies to align with Industry 4.0 and Smart Factory frameworks.",
    img: "/images/img_9.jpg",
  },
];

useEffect(() => {
    const sections = document.querySelectorAll(".year-content");
    const timelineItems = document.querySelectorAll(".timeline li");

    function setActive(year) {
      timelineItems.forEach((li) => {
        li.classList.toggle("active", li.dataset.year === year);
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));

    timelineItems.forEach((li) => {
      li.addEventListener("click", () => {
        const section = document.getElementById(li.dataset.year);
        section?.scrollIntoView({ behavior: "smooth" });
        setActive(li.dataset.year);
      });
    });

    setActive("2001");
  }, []);

  return (
     <main>
          {/* News Hero Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>A Legacy of Transformation</h1>
          <p>
            From India to the World — Leading Excellence Transformations
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>


      <div className="timeline-container">

        {/* Left Timeline */}
        <div className="timeline">
          <ul>
            {timelineData.map((item) => (
              <li key={item.year} data-year={item.year} data-title={item.title}>
                {item.year}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Scrollable Content */}
        <div className="content">
          {timelineData.map((item) => (
            <div key={item.year} className="year-content" id={item.year}>
              <h2>{item.year} - {item.title}</h2>
              <p>{item.desc}</p>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default page
