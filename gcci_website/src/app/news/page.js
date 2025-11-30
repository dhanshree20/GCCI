"use client";
import React, { useState } from "react";
import "./news.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft , ArrowRight, MessageSquare, Eye } from "lucide-react";

const page = () => {

  // News Section

  const articles = [
  {
    id: 1,
    category: "June 09, 2025",
    title:
      "GCCI Launches Cloud-Based TPM Software (Subscription Model)",
    description:
      "GCCI has introduced a next-generation TPM Digital Platform covering all eight TPM pillars with real-time dashboards, mobile app connectivity, and cloud-based analytics. The software is now available on an annual and monthly subscription basis for all industries.",
    // author: "Alex H. Hillixer",
    // comments: 0,
    // views: "1.62K",
    image:
      "/service/service_4.jpg",
  },
  {
    id: 2,
    category: "Aug 22, 2020",
    title:
      "New Partnership for Global Industrial Technology Integration",
    description:
      "GCCI has established collaborative channels with international OEMs and technology experts for automation, smart manufacturing solutions, and advanced vision inspection systems. This alliance strengthens our ability to deliver world-class solutions to Indian industries.",
    // author: "Alex H. Hillixer",
    // comments: 0,
    // views: "458",
    image:
      "/images/img_4.jpg",
  },
  {
    id: 3,
    category: "Aug 20, 2020",
    title:
      "Successful Commissioning of Vision Inspection System",
    description:
      "GCCI recently supported the design and implementation of an AI-driven vision inspection solution for steel tube and strip processing lines, enabling 100% surface defect detection and automated quality control.",
    image:
      "/images/img_9.jpg",
  },
  {
    id: 4,
    category: "Aug 20, 2020",
    title:
      "Custom SPM (Special Purpose Machine) Development Completed",
    description:
      "Our engineering team successfully coordinated the development of tailor-made SPMs for assembly and machining applications, improving cycle time, safety, and productivity at multiple client plants.",
    image:
      "/images/img_13.jpg",
  },
  {
    id: 5,
    category: "Aug 20, 2020",
    title:
      "GCCI Expands IoT & AI Offerings for Predictive Maintenance",
    description:
      "GCCI now provides IoT-based sensor integration for critical machines along with AI/ML predictive maintenance models that help clients prevent breakdowns and optimize equipment reliability.",
    image:
      "/images/img_11.jpg",
  },
  {
    id: 6,
    category: "Aug 20, 2020",
    title:
      "New Consulting Assignments in TPM, Lean & Business Excellence",
    description:
      "GCCI has initiated new consulting projects across India covering: - TPM Pillar Deployment, - Lean Manufacturing, - TQM & QC Tools Training, - Business Excellence Frameworks. This expansion reflects growing trust in GCCI’s expertise.",
    image:
      "/images/img_14.jpg",
  },
  {
    id: 7,
    category: "Aug 20, 2020",
    title:
      "GCCI’s Maintenance Software Rollout at Multiple Plants",
    description:
      "Our CMMS-based Maintenance Management Software has been successfully implemented in several factories, enabling digital maintenance scheduling, spares control, and OEE tracking.",
    image:
      "/images/img_24.jpg",
  },
  {
    id: 8,
    category: "Aug 20, 2020",
    title:
      "New R&D Initiative for Steel Tube & Strip Mill Solutions",
    description:
      "GCCI is developing advanced solutions for steel tube and strip mill equipment, including integration support for NDT systems and smart processing lines.",
    image:
      "/images/img_25.jpg",
  },
  {
    id: 9,
    category: "Aug 20, 2020",
    title:
      "Global Experts Conduct Capability Development Sessions",
    description:
      "GCCI hosted international experts for hands-on capability development programs focusing on: - Smart Manufacturing, - Digital Transformation, - Industry 4.0, - Advanced Equipment Technology. Participants from multiple sectors joined these sessions.",
    image:
      "/images/img_26.jpg",
  },
];


  return (
    <div>
      {/* News Hero Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>News</h1>
          <p>
            Learning from Japanese excellence to drive global growth and continuous improvement.
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>

      {/* News Section */}
     

<main className="container">
      {articles.map((article) => (
        <div className="card" key={article.id}>
          <div className="card-text">
            <span className="category">{article.category}</span>
            <h2 className="title">{article.title}</h2>
            <p className="description">{article.description}</p>
            <div className="meta">
              <span className="author">{article.author}</span>
              <div className="icons">
                <div className="icon-item">
                  <span>{article.comments}</span>
                </div>
                {/* <div className="icon-item">
                  <Eye size={26} />
                  <span>{article.views}</span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="card-image">
            <img src={article.image} alt={article.title} />
          </div>
        </div>
      ))}
    </main>


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
