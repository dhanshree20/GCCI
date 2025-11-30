"use client";
import React, { useState } from "react";
import "./service4.css";
import Link from "next/link";
import { ArrowRight, Award  } from "lucide-react";

const page = () => {

    const servicesData = [
  {
    id: 1,
    title: "TPM Software – Subscription Based",
    description:
      "Comprehensive digital platform supporting all TPM pillars, available on annual/monthly subscription.",
    description1:
      "Sub-Services:",
    subServices: [
      "Autonomous Maintenance Module (AM Steps, Checklists, Tags)",
      "Planned Maintenance Module (Schedules, Life Analysis, PM KPIs)",
      "Quality Maintenance Module (Defect Mapping, 4M, QC Tools)",
      "Kobetsu Kaizen Module (Kaizen, Cost Saving Projects)",
      "Focused Improvement Module (Chronic Loss Analysis, OEE)",
      "Training & Development Module (Skill Matrix, JH/JI Cards)",
      "Safety/Environment Module",
      "Digital Dashboards for TPC, TPI, TPA Reviews",
      "Mobile App for TPM Activities (Photos, Reports, Audits)",
      "Cloud-Based & Secure Subscription Platform"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },


];

    const [selected, setSelected] = useState(0);

const handleServiceClick = (index) => {
  setSelected(index); // no toggle behavior
};

  return (
    <div>

      {/* Hero Service Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>Services</h1>
          <p>
             TPM Software - Subscription Based
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>



        {/* Services Section */}


         <section className="services-container">
      {/* <h2 className="section-title">Our Services</h2> */}

      <div className="services-box-wrapper">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`service-box ${
              selected === index ? "active" : ""
            }`}
            onClick={() => handleServiceClick(index)}
          >
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Info Section */}
      {selected !== null && (
        <div className="service-info">
          <h3>{servicesData[selected].title}</h3>
          <p>{servicesData[selected].description}</p>
          <p>{servicesData[selected].description1}</p>
          {servicesData[selected].subServices && (
  <ul className="sub-services-list">
    {servicesData[selected].subServices.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)}


          {/* <div className="service-images">
            {servicesData[selected].images.map((img, i) => (
              <img key={i} src={img} alt="service" />
            ))}
          </div> */}
        </div>
      )}
    </section>
    </div>
  )
}

export default page
