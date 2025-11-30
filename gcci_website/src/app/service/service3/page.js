"use client";
import React, { useState } from "react";
import "./service3.css";
import Link from "next/link";
import { ArrowRight, Award  } from "lucide-react";

const page = () => {

    const servicesData = [
  {
    id: 1,
    title: "Maintenance Software Solutions",
    description:
      "Digitizing maintenance operations to improve equipment reliability, uptime, and cost control.",
    description1:
      "Sub-Services:",
    subServices: [
      "Computerized Maintenance Management System (CMMS)",
      "Preventive Maintenance Scheduling",
      "Breakdown & Root Cause Analysis Tracking",
      "Spare Parts Inventory Management",
      "Digital Work Orders & Mobile Maintenance Apps",
      "Maintenance Performance Dashboards (MTTR, MTBF, %PM)",
      "AMC & Warranty Tracking System",
      "Integration with ERP, SCADA, PLC"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 2,
    title: "IT Support Services",
    description:
      "Complete IT enablement for manufacturing and operational excellence.",
    description1:
      "Sub-Services:",
    subServices: [
      "IT Infrastructure Setup & Maintenance",
      "Server & Network Management",
      "Data Backup, Recovery & Security Solutions",
      "User Access, Email & ERP Support",
      "Industrial Systems IT Integration",
      "On-Site & Remote IT Helpdesk",
      "Cybersecurity Compliance Support",
      "Hardware/Software Installation & AMC"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 3,
    title: "IoT (Internet of Things) Solutions",
    description:
      "Smart connectivity for machines, data visibility, and real-time performance monitoring.",
    description1:
      "Sub-Services:",
    subServices: [
      "IoT Device Integration with Plant Equipment",
      "Cloud-Based Data Logging for Temperature, Vibration, Speed, Energy",
      "OEE Real-Time Monitoring Systems",
      "Machine Condition Monitoring (Sensors + Analytics)",
      "Predictive Maintenance Using IoT Sensors",
      "Utility Monitoring (Air, Water, Steam, Power)",
      "Custom IoT Dashboards for Plant Performance",
      "Edge Device Setup & Integration with TPM Software"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 4,
    title: "AI & Machine Learning Solutions",
    description:
      "AI-driven analytics to improve efficiency, quality, and decision-making.",
    description1:
      "Sub-Services:",
    subServices: [
      "AI-Powered Predictive Maintenance Models",
      "AI-Based Quality Defect Detection & Classification",
      "Real-Time Anomaly Detection in Machines",
      "Production Forecasting & Planning Algorithms",
      "Advanced Data Analytics for TPM, TQM, Lean",
      "Energy Optimization using AI Models",
      "AI Chatbot for Internal Plant Queries / TPM Support",
      "AI-Enabled OEE & Loss Analysis Insights"
    ],
    // images: ["/service1-1.jpg", "/service1-2.jpg"],
  },
  {
    id: 5,
    title: "Digital Transformation for Operational Excellence",
    description:
      "End-to-end digitalization aligned with TPM, Lean, TQM, and Business Excellence.",
    description1:
      "Sub-Services:",
    subServices: [
      "Paperless Manufacturing Implementation",
      "Digital SOPs, Checklists & Audit Systems",
      "Digital Skill Matrix & Competency Tracking",
      "Workflow Automation Solutions",
      "Mobile Apps for Kaizen, 5S, Audit, Safety",
      "Role-Based Dashboards for Plant Heads / HODs / Operators",
      "Integration with MES / ERP / SCADA Systems"
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
            Maintenance Software / Support IT / IoT / AI

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
