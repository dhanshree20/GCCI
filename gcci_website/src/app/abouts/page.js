"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Lightbulb, Video, Award, Users, ArrowRight,Telescope, Target } from "lucide-react";
import Link from "next/link";
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
import "./abouts.css"; 

const page = () => {

  // Mission & Vision Section

const visionRef = useRef(null);
  const missionRef = useRef(null);

  // SCROLL ANIMATION HANDLER
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight - 150;

      if (visionRef.current) {
        const top = visionRef.current.getBoundingClientRect().top;
        if (top < triggerPoint) {
          visionRef.current.classList.add("show-left");
        }
      }

      if (missionRef.current) {
        const top = missionRef.current.getBoundingClientRect().top;
        if (top < triggerPoint) {
          missionRef.current.classList.add("show-right");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Why Choose Us 

  useEffect(() => {
    const boxes = document.querySelectorAll(".caption-box");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-box");
        }
      });
    }, { threshold: 0.3 });

    boxes.forEach(box => observer.observe(box));
  }, []);
  

    // Alliances Section

  const sectionRef = useRef(null);

  const services = [
    { img: "/india.jpg", title: "Institute / University", desc: "MIT Aurangabad, Maharashtra, India" },
    { img: "/japan.jpg", title: "Y. Murase San", desc: "M/s. YOSHI KENKYUSHO, JAPAN" },
    { img: "/germen.jpg", title: "Mr. Navraj", desc: "Technology, Liaoning Partner, Germany" },
    { img: "/US.jpg", title: "Mr. Sai Kathiresan", desc: "Robotic / AI Specialist, U.S." },
    { img: "/austrlia.jpg", title: "Ms. Prashantini", desc: "Software Specialist, Australia" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);


  // Why choose section

  const values = [
    "VALUE CREATOR TO ORGANIZATION PURPOSE",
    "DRIVING TEAM TO OPTIMIZE RETURN ON HUMAN RESOURCE",
    "TRUSTWORTHINESS",
    "CREATIVITY AS CULTURE",
    "VALUE THE PRINCIPLES AND PEOPLE",
    "PERFECTION IN WHAT HE/SHE DOES",
    "METICULOUSNESS TO THE COMMITTED TASK",
    "HUMBLENESS IN TEAMWORK",
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div>

        {/* About Section */}

        <div className="about-section">
      <div className="overlay"></div>
      <div className="content">
        <h2>
          <span className="highlight"> Global Corporate Council India– GCCI</span>
        </h2>
        <p>
           Founded in 2017 with a vision of delivering end-to-end solutions through global expertise, GCCI has evolved into a
 multifaceted enterprise. In 2023, we expanded and rebranded as GCCI International LLP. As a consortium specializing in Business Consulting, Process Automation Solutions, Vision-based Automated
 Inspection, and ERW Steel Tube Mills, GCCI combines extensive expertise and global partnerships to enhance
 operational efficiency.
        </p>
        <p>We offer Consulting & Training tailored to enforce the team to achieve the client performance and streamline its
 operations. We achieve this through strategic alliances with industry leaders such as Ms. YOSHI KENKYUSHO (Japan),
 established by the late JIPM Lead Assessor Mr. Yoshitaka Murase, GCCI exemplifies best global practices and
 specialized systems.</p>
 <p>Our commitment to excellence consistently delivers substantial benefits to our clients, including increased
 productivity, cost reductions, and sustainable improvements in key performance indicators. At GCCI, we empower our clients with Training Workshops and deployment support for a wide array of best practices
 and business strategies. From Vision and Mission Development to SWOT Analysis, TPM, Lean, Kaizen, and beyond,
 our team is prepared to guide our clients on its journey toward capability improvement.</p>
      </div>
    </div>


    {/* Mission & Vision Section */}

<div className="vm-wrapper">
      <div className="vm-container">

        {/* VISION */}
        <div ref={visionRef} className="vm-box vm-left">
          <Telescope size={80} strokeWidth={1.5} className="vm-icon" />
          <div className="vm-title">Vision</div>
          <div className="vm-desc">
            To enable organizational enlightenment-where people, processes, and technologies evolve with clarity, integrity, and world-class excellence.
          </div>

          {/* example routing using Link */}
        </div>

        <div className="vm-divider"></div>

        {/* MISSION */}
        <div ref={missionRef} className="vm-box vm-right">
          <Target size={80} strokeWidth={1.5} className="vm-icon" />
          <div className="vm-title">Mission</div>
          <div className="vm-desc">
            To uplift industries through ethical consulting, intelligent automation, and universal knowledge systems that strengthen capabilities, improve performance, and create sustainable, enlightened business growth.
          </div>

        </div>

      </div>
    </div>

    {/* Why Choose Us  */}

    <section className="why-choose-section">
      <h2 className="why-choose-main-title">Why Choose Us</h2>

      <div className="why-choose-wrapper">
        {/* Left Side Image */}
        <div className="why-choose-image-side left-slide">
          <img
            src="/images/img_23.jpg"
            alt="Why Choose Us"
            className="why-main-image"
          />
        </div>

        {/* Right Side Content */}
        <div className="why-choose-content-side right-slide">
          <div className="container">
            <div className="caption-boxes">
              <div className="caption-box caption-blue">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">VALUE CREATOR TO ORGANIZATION PURPOSE</div>
                </div>
              </div>

              <div className="caption-box caption-green">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">DRIVING TEAM TO OPTIMIZE RETURN ON HUMAN RESOURCE</div>
                </div>
              </div>

              <div className="caption-box caption-yellow">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">TRUSTWORTHINESS</div>
                </div>
              </div>

              <div className="caption-box caption-orange">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">CREATIVITY AS CULTURE</div>
                </div>
              </div>

              <div className="caption-box caption-pink">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M20.24 12.24A6 6 0 0 0 5 10.5V19h8.5z" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">VALUE THE PRINCIPLES AND PEOPLE</div>
                </div>
              </div>

              <div className="caption-box caption-purple">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">PERFECTION IN WHAT HE/SHE DOES</div>
                </div>
              </div>

              <div className="caption-box caption-red">
                <div className="caption-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M20.24 12.24A6 6 0 0 0 5 10.5V19h8.5z" />
                  </svg>
                </div>
                <div className="caption-content">
                  <div className="caption-title">METICULOUSNESS TO THE COMMITTED TASK</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>


    {/* Alliences Section */}

    <div ref={sectionRef} className="services-section fade-up">
      <div className="services-header">
        <p className="sub-title">(India / Global)</p>
        <h2>Our Alliances</h2>
      </div>
      <div className="services-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              <Image
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
                className="service-image"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>


    {/* Contact Section */}
    
        <section className="section-container">
          <div className="image-side">
            <Image
              src="/images/img_12.jpg" // replace with your uploaded image name
              alt="City view"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
    
          <div className="text-side">
            <h2>Global Corporate Council India</h2>
            <p className="subtitle">
              - "Driven by Trust, Guided by Principle, Perfected with Meticulousness." -
            </p>
            <p className="description">
              Have a question or project in mind? We’d love to hear from you! <br/>
              Reach out to our team — we’re here to turn your ideas into meaningful outcomes.
            </p>
    
            <Link href="/contact" className="learn-more-btn">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </section>
    

    </div>
  )
}

export default page
