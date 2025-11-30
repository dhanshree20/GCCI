"use client";
import React, {useEffect, useState } from "react";
import "./awards.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft , ArrowRight, MessageSquare, Eye } from "lucide-react";

const page = () => {
    
    const awardsData = {
        "2017-09-06": {
    date: "06 Sepember 2017",
    title: "Government of India Form GST REG-06",
    description:
      "This certification officially recognizes GCCI International LLP as a registered and compliant business entity under the Goods and Services Tax Act in India. It reinforces our credibility and ensures transparent, lawful, and trustworthy business operations across all our service divisions.",
    certificate: "/certificate/certificate_2.jpg",
    hoverImage: "/certificate/certificate_2.jpg",
  },
  "2025-10-16": {
    date: "16 October 2025",
    title: "JIPM Certified TPM Specialist",
    description:
      "Acknowledged by globally reputed TPM authorities, this certification validates our deep expertise in Total Productive Maintenance. It highlights our capability to drive significant productivity enhancement, cost reduction, and operational excellence through world-class TPM methodologies.",
    certificate: "/certificate/certificate_1.jpeg",
    hoverImage: "/certificate/certificate_1.jpeg",
  },
};


const awardKeys = Object.keys(awardsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAward, setSelectedAward] = useState(
    awardsData[awardKeys[0]]
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAward = (index) => {
    setCurrentIndex(index);
    setSelectedAward(awardsData[awardKeys[index]]);
  };

  const navigateTimeline = (direction) => {
    let newIndex =
      direction === "prev"
        ? (currentIndex - 1 + awardKeys.length) % awardKeys.length
        : (currentIndex + 1) % awardKeys.length;
    updateAward(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (modalOpen && e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") navigateTimeline("prev");
      if (e.key === "ArrowRight") navigateTimeline("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });



  return (
    <div>
      {/* News Hero Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>Awards And Certifications</h1>
          <p>
            Recognized for Excellence, Celebrated for Innovation
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>


    <section className="horizontal-timeline-section">
      <div className="container">
        {/* Title Section */}
        <div className="company-excellence-info">
          <div className="excellence-content">
            <h2>What We’ve Earned</h2>
            <p>
              Global Corporate Council India – GCCI has built a strong reputation for driving operational excellence across diverse industries. Our dedication to quality, innovation, and global best practices has been consistently recognized by trusted industry leaders and international partners.
            </p>
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="timeline-navigation">
          <button
            className="timeline-nav-btn prev"
            onClick={() => navigateTimeline("prev")}
          >
            ◀
          </button>

          <div className="horizontal-timeline">
            <div className="timeline-track">
              <div
                className="timeline-progress"
                style={{
                  width: `${((currentIndex + 1) / awardKeys.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="timeline-points">
              {awardKeys.map((date, index) => (
                <div
                  key={date}
                  className={`timeline-point ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => updateAward(index)}
                >
                  <div className="point-dot"></div>
                  <div className="point-date">{awardsData[date].date}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="timeline-nav-btn next"
            onClick={() => navigateTimeline("next")}
          >
            ▶
          </button>
        </div>

        {/* Award Details */}
        <div className="timeline-award-details">
          <div className="award-info-section">
            <div className="award-date">{selectedAward.date}</div>
            <h3>{selectedAward.title}</h3>
            <p>{selectedAward.description}</p>
          </div>

          <div className="award-certificate-section">
            <div className="certificate-frame">
              <img
                src={selectedAward.hoverImage}
                alt="certificate"
                onClick={() => setModalOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="certificate-modal" onClick={() => setModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
              <img src={selectedAward.certificate} alt="Certificate Full" />
            </div>
          </div>
        )}
      </div>
    </section>

    </div>
  )
}

export default page
