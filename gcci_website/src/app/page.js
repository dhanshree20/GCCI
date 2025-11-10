"use client";
import React from "react";
import { Briefcase , Users , HeartPulse , GraduationCap , ChevronRight, ArrowRight, CheckCircle, Plus  } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";


export default function Home() {

  // Home Hero Section

  const slides = [
    {
      image: "/images/img_1.jpg",
      title: "Global Corporate Council India – GCCI International LLP",
      desc: "Delivering End-to-End Business Transformation Through Global Expertise",
    },
    {
      image: "/images/img_6.jpg",
      title: "Productivity Redefined Through Precision.",
      desc: "Experts in TPM, Lean, and Process Automation Solutions.",
    },
    {
      image: "/images/img_2.jpg",
      title: "GCCI International – Inspiring Global Excellence",
      desc: "Transforming Organizations Through Knowledge, Innovation, and Collaboration.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];


  // Services Section

  const insights = [
    {
      id: 1,
      date: "",
      title:
        " Advocacy / Assessment / Capability Development / Recognition of Competitiveness",
      img: "/service/service_1.jpg",
      link: "#",
    },
    {
      id: 2,
      date: "",
      title: " Liaison Global Expertise Technology Support / Industry Automation",
      img: "/service/service_2.jpg",
      link: "#",
    },
    {
      id: 3,
      date: "",
      title:
        "Maintenance Software / TPM Software / Support IT / IoT / AI",
      img: "/service/service_3.jpg",
      link: "#",
    },
    {
      id: 4,
      date: "",
      title:
        "TPM Tools and Books : Produces and sells various tools for promoting TPM",
      img: "/service/service_4.jpg",
      link: "#",
    },
  ];

  //  News Section

  const newsData = [
    {
      date: "June 09, 2025",
      category: "News",
      title:
        "9th June is the Global Maintenance Day.",
      link: "#",
    },
    {
      date: "Aug 22, 2020",
      category: "News",
      title:
        "TPM consulting and training",
      link: "#",
    },
    {
      date: "Aug 20, 2020",
      category: "News",
      title:
        "KAIZEN for Business Improvement and Industrial Development in Africa.",
      link: "#",
    },
  ];

  // About Section

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);


  // Time Section
    const stats = [
  { icon: <Briefcase size={32} color="#d69e2e" />, value: 220, suffix: "+", label: "GCCI’s Total Years of Experience" },
  { icon: <Users size={32} color="#d69e2e" />, value: 18, suffix: "", label: "GCCI Consultants" },
  { icon: <HeartPulse size={32} color="#d69e2e" />, value: 7, suffix: "+", label: "GCCI Health Check-up assessors" },
  { icon: <GraduationCap size={32} color="#d69e2e" />, value: 13, suffix: "", label: "GCCI Trainers" },
];

const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);


  // Client Section

  const sliderRef = useRef(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const logosHTML = slider.innerHTML;
    slider.innerHTML += logosHTML; // duplicate for infinite scroll

    const initScroll = () => {
      let totalWidth = 0;
      slider.querySelectorAll("img").forEach((img) => {
        totalWidth += img.offsetWidth + parseInt(getComputedStyle(slider).gap || 0);
      });

      if (totalWidth === 0) return;
      const duration = window.innerWidth < 768 ? 20 : 40;

      gsap.killTweensOf(slider);
      gsap.set(slider, { x: 0 });
      gsap.to(slider, {
        x: -totalWidth / 2,
        duration,
        ease: "linear",
        repeat: -1,
      });
    };

    const checkImagesLoaded = () => {
      const images = slider.querySelectorAll("img");
      let loadedCount = 0;

      images.forEach((img) => {
        if (img.complete) loadedCount++;
        else img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) initScroll();
        });
      });

      if (loadedCount === images.length) initScroll();
      setTimeout(initScroll, 1000);
    };

    checkImagesLoaded();
    window.addEventListener("resize", () => setTimeout(initScroll, 300));

    return () => window.removeEventListener("resize", initScroll);
  }, []);

// Case Studies Section

const caseStudies = [
  {
    id: 1,
    image: "/casestudies/tuna1.png",
    title: "Indian Ocean Tuna (IOT) [2/2]",
    description:
      'How ownership was created More than a year has passed since the start of the project, and Madnack notes that he has begun to foresee the achievement of goals that had been considered difficult. "The C...',
    link: "/case-study/indian-ocean-tuna-2",
  },
  {
    id: 2,
    image: "/casestudies/tuna2.png",
    title: "Indian Ocean Tuna (IOT) [1/2]",
    description:
      "Corporate Reform through Company-wide Strategy Deployment Project to Strengthen the Corporate Structure - Promoting Activities Through Ownership and Taking on Challenges to Achieve Higher Goals In Ju...",
    link: "/case-study/indian-ocean-tuna-1",
  },
  {
    id: 3,
    image: "/casestudies/tuna3.png",
    title: "BETAGRO [2/2]",
    description:
      "The KAIZEN mindset in the BETAGRO culture Originally, the company had started its own KAIZEN activities, but the Strategy Deployment Project made the results visible, so the company created a reportin...",
    link: "/case-study/betagro",
  },
];


  return (
    <div>

      {/* Home Hero Section */}
      
       <div
      className="about-hero fade"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      <div className="overlay">
        <div key={currentIndex} className="about-content text-fade">
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.desc}</p>
        </div>
      </div>
    </div>


      {/* News Section */}

    <section className="news-section isolated-bg">
      <div className="news-container">
        <h2 className="news-title">News</h2>

        <div className="news-list">
          {newsData.map((item, index) => (
            <div className="news-item" key={index}>
              <p className="news-date">{item.date}</p>
              <span className="news-divider">|</span>
              <p className="news-category">{item.category}</p>
              <span className="news-divider">/</span>
              <Link href={item.link} className="news-link">
                {item.title}
              </Link>
            </div>
          ))}
        </div>

        <div className="view-more">
          <Link href="/news" className="view-more-btn">
            View more <ChevronRight size={18} className="icon" />
          </Link>
        </div>
      </div>
    </section>


    {/* About Section */}
    
    <section className="business-section">
  <div className="container">
    {/* LEFT SIDE IMAGES */}
    <div className={`left-side ${isVisible ? "animate-left" : ""}`} ref={leftRef}>
      <div className="image-container">
        <div className="top-image">
          <Image
            src="/images/img_9.jpg"
            alt="Team discussion"
            width={350}
            height={250}
            className="rounded-image"
          />
        </div>
        <div className="bottom-image">
          <Image
            src="/images/img_10.jpg"
            alt="Professional woman"
            width={300}
            height={200}
            className="rounded-image"
          />
        </div>
      </div>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className={`right-side ${isVisible ? "animate-right" : ""}`} ref={rightRef}>
      <p className="section-label">About Us</p>
      <h2 className="main-heading">
        Global Corporate Council India <br />
        <span>TRUST I PRINCIPLE I METICULOUSNESS</span>
      </h2>

      <p className="section-par">
        Founded in 2017 with a vision of delivering end-to-end solutions through global expertise,
        GCCI has evolved into a multifaceted enterprise. In 2023, we expanded and rebranded as
        GCCI International LLP.
      </p>

      <p className="section-par">
        As a consortium specializing in Business Consulting, Process Automation Solutions,
        Vision-based Automated Inspection, and ERW Steel Tube Mills, GCCI combines extensive
        expertise and global partnerships to enhance operational efficiency.
      </p>

      <p className="section-par">
        GCCI Headquartered in Pune, India, and led by founder Mr. Yuvaraj S, GCCI boasts a team
        with over 225 years of collective experience, including 62 JIPM TPM Awards across various
        sectors.
      </p>

      <Link href="/about" className="quote-btn-1">
        Learn More <ChevronRight size={18} className="icon" />
      </Link>
    </div>
  </div>
</section>

    {/* Services Section */}

    <section className="insights-section">
      <h2 className="services-title">Services</h2>
      <div className="insights-grid">
        {insights.map((item) => (
          <Link href={item.link} key={item.id} className="insight-card">
            <div className="insight-bg">
              <Image
                src={item.img}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
                className="insight-img"
              />
            </div>
            <div className="insight-overlay"></div>
            <div className="insight-content">
              <p className="insight-date">{item.date}</p>
              <h3 className="insight-title">
                {item.title} <ChevronRight size={16} />
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="view-more-services">
          <Link href="#" className="view-more-btn-services">
            View All Services <ChevronRight size={18} className="icon" />
          </Link>
        </div>
    </section>

  
    {/* Time Section */}

    <section className="stats-section" ref={sectionRef}>
      <div className="overlay"></div>
      <div className="stats-container">
        {stats.map((item, index) => (
          <Link href="#" key={index} className="stat-card">
            <div className="icon">{item.icon}</div>
            <h2>
              {visible ? <Counter end={item.value} /> : 0}
              {item.suffix}
            </h2>
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* Client Section */}

     <section className="partners-section">
      <div className="partners-header">
        <h2>Our Business Partners</h2>
      </div>

      <div className="partners-slider-container">
        <div className="clients-slider" ref={sliderRef}>
          {/* Add or modify images here */}
          <img src="/clients/client_1.jpg" alt="Client 1" />
          <img src="/clients/client_2.png" alt="Client 1" />
          <img src="/clients/client_3.png" alt="Client 1" />
          <img src="/clients/client_4.png" alt="Client 1" />
          <img src="/clients/client_5.jpg" alt="Client 1" />
          <img src="/clients/client_6.png" alt="Client 1" />
          <img src="/clients/client_7.png" alt="Client 1" />
          <img src="/clients/client_8.jpg" alt="Client 1" />
          <img src="/clients/client_9.png" alt="Client 1" />
          <img src="/clients/client_10.png" alt="Client 1" />
          <img src="/clients/client_11.png" alt="Client 1" />
          <img src="/clients/client_12.png" alt="Client 1" />
          <img src="/clients/client_13.png" alt="Client 1" />
          <img src="/clients/client_14.avif" alt="Client 1" />
          <img src="/clients/client_15.png" alt="Client 1" />
          <img src="/clients/client_16.png" alt="Client 1" />
          <img src="/clients/client_17.png" alt="Client 1" />
          <img src="/clients/client_18.png" alt="Client 1" />
          <img src="/clients/client_19.png" alt="Client 1" />
          <img src="/clients/client_20.webp" alt="Client 1" />
          <img src="/clients/client_21.png" alt="Client 1" />
          <img src="/clients/client_22.png" alt="Client 1" />
          <img src="/clients/client_23.jpg" alt="Client 1" />
          <img src="/clients/client_24.webp" alt="Client 1" />
          <img src="/clients/client_25.png" alt="Client 1" />
          <img src="/clients/client_26.png" alt="Client 1" />
          <img src="/clients/client_27.png" alt="Client 1" />
          <img src="/clients/client_28.png" alt="Client 1" />
          <img src="/clients/client_28.jpg" alt="Client 1" />
          <img src="/clients/client_29.jpg" alt="Client 1" />
          <img src="/clients/client_30.png" alt="Client 1" />
          <img src="/clients/client_31.png" alt="Client 1" />
          <img src="/clients/client_32.png" alt="Client 1" />
          <img src="/clients/client_33.png" alt="Client 1" />
          <img src="/clients/client_34.png" alt="Client 1" />
          <img src="/clients/client_35.jpg" alt="Client 1" />
          <img src="/clients/client_36.jpg" alt="Client 1" />
          <img src="/clients/client_37.png" alt="Client 1" />
          <img src="/clients/client_38.png" alt="Client 1" />
        </div>
      </div>

      <div className="partners-btn">
        <button onClick={() => setPopupVisible(true)}>View All Partners <ChevronRight size={18} className="icon" /></button>
      </div>

      {/* Popup Modal */}
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setPopupVisible(false)}>
              Close ✕
            </button>
            <h3>All Partners</h3>

            <div className="popup-grid">
              {/* Same image list for popup */}
              <img src="/clients/client_1.jpg" alt="Client 1" />
          <img src="/clients/client_2.png" alt="Client 1" />
          <img src="/clients/client_3.png" alt="Client 1" />
          <img src="/clients/client_4.png" alt="Client 1" />
          <img src="/clients/client_5.jpg" alt="Client 1" />
          <img src="/clients/client_6.png" alt="Client 1" />
          <img src="/clients/client_7.png" alt="Client 1" />
          <img src="/clients/client_8.jpg" alt="Client 1" />
          <img src="/clients/client_9.png" alt="Client 1" />
          <img src="/clients/client_10.png" alt="Client 1" />
          <img src="/clients/client_11.png" alt="Client 1" />
          <img src="/clients/client_12.png" alt="Client 1" />
          <img src="/clients/client_13.png" alt="Client 1" />
          <img src="/clients/client_14.avif" alt="Client 1" />
          <img src="/clients/client_15.png" alt="Client 1" />
          <img src="/clients/client_16.png" alt="Client 1" />
          <img src="/clients/client_17.png" alt="Client 1" />
          <img src="/clients/client_18.png" alt="Client 1" />
          <img src="/clients/client_19.png" alt="Client 1" />
          <img src="/clients/client_20.webp" alt="Client 1" />
          <img src="/clients/client_21.png" alt="Client 1" />
          <img src="/clients/client_22.png" alt="Client 1" />
          <img src="/clients/client_23.jpg" alt="Client 1" />
          <img src="/clients/client_24.webp" alt="Client 1" />
          <img src="/clients/client_25.png" alt="Client 1" />
          <img src="/clients/client_26.png" alt="Client 1" />
          <img src="/clients/client_27.png" alt="Client 1" />
          <img src="/clients/client_28.png" alt="Client 1" />
          <img src="/clients/client_28.jpg" alt="Client 1" />
          <img src="/clients/client_29.jpg" alt="Client 1" />
          <img src="/clients/client_30.png" alt="Client 1" />
          <img src="/clients/client_31.png" alt="Client 1" />
          <img src="/clients/client_32.png" alt="Client 1" />
          <img src="/clients/client_33.png" alt="Client 1" />
          <img src="/clients/client_34.png" alt="Client 1" />
          <img src="/clients/client_35.jpg" alt="Client 1" />
          <img src="/clients/client_36.jpg" alt="Client 1" />
          <img src="/clients/client_37.png" alt="Client 1" />
          <img src="/clients/client_38.png" alt="Client 1" />
            </div>
          </div>
        </div>
      )}
    </section>

    {/* Case Studies Section */}

    <section className="case-section">
      <h2 className="case-heading">Case Studies</h2>

      <div className="case-grid">
        {caseStudies.map((item) => (
          <div key={item.id} className="case-card">
            <img src={item.image} alt={item.title} className="case-img" />
            <h3 className="case-title">{item.title}</h3>
            <p className="case-desc">{item.description}</p>
            <Link href={item.link} className="case-link">
              Read More <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>

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
  );

}


// ✅ Place this BELOW your component (outside the main function)
function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <>{count}</>;
}