"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Lightbulb, Video, Award, Users,Mail , ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    // Left box animation
    gsap.from(".hero-left, .hero-left1", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%", // Scroll hone par start
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // Right Image animation 3D flip
    gsap.from(".image-frame, .image-frame1", {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%",
      },
      opacity: 0,
      rotationY: 90,
      transformOrigin: "left center",
      duration: 1.8,
      ease: "power4.out",
    });

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




       {/* ==== Section 1 ==== */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="small-title">Founder & Director</div>

            <h1 className="main-heading">Yuvaraj Sithaiyan</h1>

            <p className="description">
              Yuvaraj Sithaiyan, Founder & Director of GCCI, is a Mechanical
              Engineer with 34+ years of industry expertise. He has successfully
              led TPM initiatives across India and globally, driving
              transformation for 43+ companies through strategic excellence and
              continuous improvement.
            </p>
          </div>

          <div className="hero-right">
            <div className="image-frame">
              <img src="/founder_1.jpeg" alt="business-person" />
            </div>
          </div>
        </div>
      </section>

      {/* ==== Section 2 ==== */}
      <section className="hero-section">
        <div className="hero-inner1">
          <div className="hero-right1">
            <div className="image-frame1">
              <img src="/founder_4.jpeg" alt="business-person" />
            </div>
          </div>

          <div className="hero-left1">
            <div className="small-title">Founder & Director</div>

            <h1 className="main-heading">Yuvaraj Sithaiyan</h1>

            <p className="description">
              We help businesses implement modern strategies to boost
              performance, improve customer experience, and expand globally.
              With expert consultation and innovation-driven solutions, we
              empower brands to achieve exceptional growth.
            </p>
          </div>
        </div>
      </section>

                {/* Founder Section */}
        <div className="founder-section isolated-bg">
             <div className="main-container">
              {/* ===== Header Section ===== */}
              <div className="header-section">
                <div className="image-wrapper">
                  <Image
                    src="/founder_1.jpeg" // <-- replace with your image path
                    alt="CEO"
                    width={200}
                    height={200}
                    className="ceo-image"
                  />
                </div>
                <div className="ceo-details">
                  <h2 className="ceo-name">Yuvaraj Sithaiyan</h2>
                  <div className="ceo-title"> Founder & Director</div>
                  <div className="company-name">Global Corporate Council India</div>
                </div>
              </div>
        
              {/* ===== Timeline Section ===== */}
              <div className="timeline">
                <div className="timeline-item">
                  <div className="icon-box">
                    <BriefcaseBusiness  size={20} />
                  </div>
                  <p>
                    <span className="year"> PRESENT </span>-<br/> <b> Global Corporate Council India – GCCI / GCCI International LLP (Pune) <br/>
                     Founder & Director </b> <br/>
                   GCCI operating from Pune, India. Founded by Mr. Yuvaraj Sithaiyan, Mechanical Engineer with over all 34 Yrs. experience. JIPM Certified TPM Facilitator
         (Year 2004).
                  </p>
                </div>
        
                <div className="timeline-item">
                  <div className="icon-box">
                    <Presentation  size={20} />
                  </div>
                  <p>
                    <span className="year"> 2006-17 </span>- <br/><b> CII - TPM Club India (Pune) <br/>
                     Sr. Counsellor</b> <br/>
                     GCCI teams collective experience in TPM will adds to
         225+ Yrs. & in Manufacturing 115+ Yrs. We spread
         across India.
                  </p>
                </div>
        
                <div className="timeline-item">
                  <div className="icon-box">
                    <Factory  size={20} />
                  </div>
                  <p>
                  <span className="year">  1996-2006 </span>- <br/><b>Tube Products of India, Murugappa
         Group (Pune & Chennai): <br/>
         Mfg. / PE / Projects / TPM Coordinator </b> <br />
         Conducted Trainings Approx. 8,52,740 + Man Hrs. for
         1,15,390 people across the Country and Global level.
         Supported for accomplishing 64 JIPM Awards (Special
         + Consistency + Excellence Awards)
         Associated and Challenged– 128+ JIPM Assessments
                  </p>
                </div>
        
                <div className="timeline-item">
                  <div className="icon-box">
                    <Milestone   size={20} />
                  </div>
                  <p>
                  <span className="year">  1995-1996 </span>- <br/><b> Balmer Lawry Freight Containers Ltd. 
        (Chennai):  <br/>
        Maintenance </b><br/>
        Supporting to Rejuvenate and Sustain The Achieved
         TPMResults For 43+ Companies
         Assessor for (EFQM) Business Excellence model for 9
         Assessments.
                  </p>
                </div>
        
                <div className="timeline-item">
                  <div className="icon-box">
                    <ClipboardCheck  size={20} />
                  </div>
                  <p>
                 <span className="year">   1990-1994</span> - <br/><b> South India Viscose Ltd. (Coimbatore):  <br/>
                    Maintenance </b><br/>
                    TPM Health Check-up Assessments done for 64+
         Excellence and Consistency Levels & Special Awards.
         Instrumental for developing many Success Strategies
         and TPMSpecific training material and Programs.
                  </p>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default page
