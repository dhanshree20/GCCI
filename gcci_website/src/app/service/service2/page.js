"use client";
import React, { useState } from "react";
import "./service2.css";
import Link from "next/link";
import { ArrowRight, Award  } from "lucide-react";

const page = () => {

    const servicesData = [
  {
    id: 1,
    title: "Liaison – Global Expertise",
    description:
      "Connecting Indian industries with global OEMs and world-class technology partners.",
    description1:
      "Sub-Services:",
    subServices: [
      "International Technology Partnership Facilitation",
      "Liaison with Global Equipment Manufacturers",
      "Expert Exchange & Knowledge Transfer Programs",
      "Global Vendor Identification & Technical Evaluation",
      "Joint Technology Development Support",
      "Import Assistance for Specialized Industrial Machinery"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 2,
    title: "Technology Support",
    description:
      "Advanced technical solutions to upgrade plant performance and adopt modern manufacturing technology.",
    description1:
      "Sub-Services:",
    subServices: [
      "Technology Upgradation Consulting",
      "Custom Machine Design Support",
      "Smart Manufacturing Integration (IoT / IIoT / MES / OEE)",
      "Process Engineering & Digital Transformation",
      "Feasibility Studies & ROI Analysis for New Technologies",
      "Machine Health Diagnostics & Performance Monitoring",
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 3,
    title: "Industry Automation",
    description:
      "Automation solutions for quality, productivity, safety, and operational reliability.",
    description1:
      "Sub-Services:",
    subServices: [
      "PLC/SCADA Automation",
      "Robotics Integration (Handling, Welding, Inspection)",
      "End-of-Line Automation Solutions",
      "AI-Based Automated Quality Control",
      "Metrology & Precision Measurement Automation",
      "Automated Conveyor & Transfer Systems",
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 4,
    title: "Vision Inspection Systems",
    description:
      "AI-driven inspection systems for zero-defect manufacturing.",
    description1:
      "Sub-Services:",
    subServices: [
      "Inline Vision Inspection for Tube/Strip/Component Lines",
      "Surface Defect Detection (crack, dent, scratch, blemish)",
      "Dimensional Accuracy Verification",
      "High-Speed Camera-Based Inspection",
      "Barcode, Label & OCR Verification Systems",
      "Integrated AI/ML Defect Classification"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 5,
    title: "Special Purpose Machines (SPM",
    description:
      "Custom-built automation machines designed for unique plant requirements.",
    description1:
      "Sub-Services:",
    subServices: [
      "Tailor-Made SPM Design & Development",
      "Automated Assembly, Machining & Testing Stations",
      "Servo-Controlled Precision Systems",
      "Auto-Gauging / Auto-Feeding SPM",
      "Retrofit, Modification & Upgrade of Existing Machines",
      "Complete Mechanical + Electrical + Control Integration"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 6,
    title: "Steel Tube & Strip Mill Equipment Support",
    description:
      "Comprehensive solutions and coordination with OEMs for tube mill and strip processing lines.",
    description1:
      "Sub-Services:",
    subServices: [
      "Equipment Selection & Technical Specification Support",
      "Tube Mill Welding, Sizing & Straightening Line Assistance",
      "Coil Handling, Slitting & Cut-to-Length Line Support",
      "Integration of NDT Systems (UT, Eddy Current, Hydro Test)",
      "Online Thickness, Width & Weld Seam Monitoring",
      "Process Optimization & Line Balancing"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 7,
    title: "Processing Machines – Manufacturing Support",
    description:
      "End-to-end support for developing and optimizing industrial processing machines.",
    description1:
      "Sub-Services:",
    subServices: [
      "Vendor Finalization & Technical Coordination",
      "Custom Processing Line Design",
      "Tooling, Rollers, Dies & Fixture Development",
      "Automation Upgrade for Existing Lines",
      "OEE Improvement & Performance Monitoring",
      "AMC, Retrofit & Obsolescence Management"
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
             Liaison Global Expertise Technology Support / Industry Automation
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
