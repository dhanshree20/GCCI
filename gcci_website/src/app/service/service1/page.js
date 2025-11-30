"use client";
import React, { useState } from "react";
import "./service1.css";
import Link from "next/link";
import { ArrowRight, Award  } from "lucide-react";

const page = () => {

    const servicesData = [
  {
    id: 1,
    title: "Advocacy",
    description:
      "Promoting and guiding organizations toward world-class manufacturing and operational excellence.",
    description1:
      "Sub-Services:",
    subServices: [
      "Awareness Programs on TPM / TQM / Lean / TPS",
      "Benchmarking Studies & Best-Practice Sharing",
      "Leadership Advisory for Business Excellence Journey",
      "Policy Guidance for Manufacturing Competitiveness",
      "Steering Committee Facilitation for TPM/TQM Deployment"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 2,
    title: "Assessment",
    description:
      "Structured evaluations for performance, capability improvement, and certification readiness.",
    description1:
      "Sub-Services:",
    subServices: [
      "TPM Maturity Assessment (JIPM Model Compatible)",
      "TQM System Assessment",
      "Lean Maturity Assessment (Value Stream, Flow, Waste Analysis)",
      "TPS Assessment (Stability, Standardization, Flow & Pull)",
      "Business Excellence Assessment (EFQM / CII / Customized Models)",
      "Gap Analysis & Roadmap Creation",
      "Pre-Audit & Certification Readiness Checks"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 3,
    title: "Capability Development ",
    description:
      "Training & skill-building to enhance competence at all organizational levels.",
    description1:
      "Sub-Services:",
    subServices: [
      "Training Programs on TPM Pillars (JH, KK, QM, PM, EPM, OPL, etc.)",
      "Lean Training (5S, Kaizen, SMED, VSM, Kanban, Poka-Yoke, etc.)",
      "TQM Training (PDCA, QC Tools, QCC, Standardization)",
      "TPS Training (Stability, Heijunka, Pull Systems, Standard Work)",
      "Leadership Capability Development (Managers, HODs, Supervisors)",
      "Competency Development for Business Excellence Models",
      "Digital Capability Building for Industry 4.0 Readiness"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 4,
    title: "Recognition of Competitiveness",
    description:
      "Supporting organizations in achieving national/international recognition.",
    description1:
      "Sub-Services:",
    subServices: [
      "TPM Award Guidance (JIPM)",
      "TQM / Deming Prize Preparation",
      "Business Excellence Award Support (EFQM, CII, FICCI)",
      "Internal Recognition Systems Design (Kaizen Awards, Best Practices)",
      "Documentation, Dossier Preparation & Review",
      "Mock Audits for Recognition Programs"
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
            Advocacy / Assessment / Capability Development / Recognition of Competitiveness
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
