"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Lightbulb, Video, Award, Users,Mail , ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import {
  BriefcaseBusiness ,
  Presentation ,
  Factory ,
  Milestone  ,
  ClipboardCheck ,
  MessageSquare,
  PlusCircle,
} from "lucide-react";
import React from "react";
import "./hostory.css";


gsap.registerPlugin(ScrollTrigger);

const page = () => {

  // Director Section

   const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  const teamData = [
  {
    name: "Yuvaraj Sithaiyan",
    role: "Founder & Director",
    desc: "A visionary leader driving business transformation through global best practices and strategic partnerships. With deep expertise in TPM, Lean, and operational excellence, he continues to lead GCCI’s mission of enabling organizations to achieve sustainable performance improvement and global competitiveness.",
    img: "/founder_1.jpeg",
  },
  {
    name: "Sheeja Yuvaraj",
    role: "Director & Chief CSR",
    desc: "A strong advocate of socially responsible growth, she leads GCCI’s CSR initiatives with a focus on community development and capability enhancement. Her leadership brings a balanced approach to business, ensuring value creation not only for clients but also for society.",
    img: "/founder_4.jpeg",
  },
];
  

// Workflow Section

const [lightboxImg, setLightboxImg] = useState(null);
  const cardsReff = useRef([]);

  const openLightbox = (img) => setLightboxImg(img);
  const closeLightbox = () => setLightboxImg(null);

  const workflowData = [
    {
      num: "1990-1994",
      title: "South India Viscose Ltd. (Coimbatore):",
      desc: "TPM Health Check-up Assessments conducted for 64+ Excellence Levels, developing key success strategies.",
    },
    {
      num: "1995-1996",
      title: "Balmer Lawry Freight Containers Ltd. (Chennai):",
      desc: "Supported Rejuvenate & Sustain TPM Results for 43+ Companies. Assessor for 9 Excellence Assessments.",
    },
    {
      num: "1996-2006",
      title: "Tube Products of India - Murugappa Group:",
      desc: "Conducted 8,52,740+ Man-Hours training, supported 64 JIPM Awards & 128+ Assessments.",
    },
    {
      num: "2006-2017",
      title: "CII - TPM Club India (Pune)",
      desc: "GCCI’s collective TPM experience adds to 225+ Yrs across India.",
    },
    {
      num: "PRESENT",
      title: "GCCI International LLP (Pune)",
      desc: "Founded by Mr. Yuvaraj Sithaiyan with 34+ years expert experience.",
    },
  ];

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsReff.current.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div>
      <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>The Mind Behind the Mission</h1>
          <p>
            Leading industries to new heights with 34+ years of proven success.
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>


      {/* Director Section */}

      <section className="team-section">
      {teamData.map((member, index) => (
        <div
          className={`team-card ${
            index % 2 === 0 ? "left-card" : "right-card"
          }`}
          ref={(el) => (cardsRef.current[index] = el)}
          key={index}
        >
          <div className="image-wrapper">
            <img src={member.img} alt={member.name} />
          </div>
          <p className="role">{member.role}</p>
          <h3 className="name">{member.name}</h3>
          <p className="desc">{member.desc}</p>
        </div>
      ))}
    </section>


{/* Workflow Section */}

      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-lightbox">&times;</span>
          <img src={lightboxImg} className="lightbox-content" />
        </div>
      )}

      {/* Workflow Section */}
      <section id="workflow" className="workflow-section">
        <div className="workflow-header">
          <h2 className="workflow-title">
            The Professional Journey of Mr. Yuvaraj Sithaiyan
          </h2>
        </div>

        <div className="workflow-container">
          <div className="line"></div>

          <div className="workflow-wrapper">
            {workflowData.map((item, index) => (
              <div
                ref={(el) => (cardsReff.current[index] = el)}
                className="workflow-card"
                key={index}
                onClick={() => openLightbox(`/workflow-${index + 1}.jpg`)}
              >
                <div className="top-stick"></div>
                <span className="step-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
        
    </div>
  )
}

export default page
