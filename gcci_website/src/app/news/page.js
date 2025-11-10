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
      "9th June is the Global Maintenance Day.",
    description:
      "9th June is Global Maintenance Day. It was established by GFMAM, in which JIPM participates, and this year marks its third anniversary.",
    // author: "Alex H. Hillixer",
    // comments: 0,
    // views: "1.62K",
    image:
      "/news/news1.jpg",
  },
  {
    id: 2,
    category: "Aug 22, 2020",
    title:
      "TPM consulting and training",
    description:
      "JMAC is well known as a business consulting firm, especially in Japan, and also as a consulting firm providing high-quality effective TPM consulting and training, globally.",
    // author: "Alex H. Hillixer",
    // comments: 0,
    // views: "458",
    image:
      "/news/news2.jpg",
  },
  {
    id: 3,
    category: "Aug 20, 2020",
    title:
      "KAIZEN for Business Improvement and Industrial Development in Africa.",
    description:
      "Africa is a frontier market that offers vast opportunities and where job creation is a priority to meet the rapid population growth. Enhancing productivity will allow Africa to bolster its competitive edge in the global market.",
    // author: "Alex H. Hillixer",
    // comments: 0,
    // views: "458",
    image:
      "/news/news3.jpg",
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

      {/* Newa Section */}
     

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
                <div className="icon-item">
                  <Eye size={26} />
                  <span>{article.views}</span>
                </div>
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
