"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Lightbulb, Video, Award, Users, ArrowRight } from "lucide-react";
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

    // Map Section

    const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = imageRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100) {
          element.classList.add("slide-up");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

    {/* Why choose section */}

    <section className="value-section">
      {/* Background Image */}
      <div className="value-bg">
        <Image
          src="/value-created.jpg"
          alt="Background"
          fill
          className="value-bg-img"
        />
      </div>

      {/* Floating blur circle */}
      <div
        className="floating-blur"
        style={{
          transform: `translate(${mousePos.x * 80}px, ${mousePos.y * 40}px)`,
        }}
      ></div>

      {/* Content */}
      <div className="value-container">
        {/* Left Section */}
        <div className="value-left">
          <h2 className="value-title">Value Created</h2>
          <p className="value-subtitle">
            <span>Building Excellence Through People & Purpose</span>
          </p>

          <div className="value-grid">
            {values.map((item, index) => (
              <div key={index} className="value-card">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="value-right">
          <div className="value-image-box">
            <Image
              src="/value-created.jpg"
              alt="Value Created"
              width={800}
              height={600}
              className="value-img"
            />
            <div className="value-img-overlay">
              <h4>Human Values at the Heart of Growth</h4>
            </div>
          </div>
        </div>
      </div>

    </section>

    {/* Map Section */}
    
    <div className="country-section">
      <h2 className="country-title">Country Visited with Purpose</h2>

      <div className="image-container">
        <img
          ref={imageRef}
          src="/map2.png"
          alt="Country Visited"
          className="country-image"
        />
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
    
            <Link href="contact" className="learn-more-btn">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </section>
    

    </div>
  )
}

export default page
