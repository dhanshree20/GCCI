"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award  } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./activity.css";
import Achivement from "@/components/Achivement";

const page = () => {


  // Guru Section

  const leftGurus = [
    { name: "Seo Yamaguchi San", detail: "(TPM) – JIPM" },
    { name: "Murase San", detail: "(TPM) - JIPM" },
    { name: "Prof. Shobi Shiba", detail: "(Breakthrough Mgt., VLFM, VSME) - JICA" },
    { name: "Furuhashi San", detail: "(TPS, Lean, VSME) - JICA" },
    { name: "Suzuki San", detail: "(TPM) - JIPM" },
    { name: "Sugiyura San", detail: "(TPM) - JIPM" },
    { name: "Ichikawa San", detail: "(TPM) - JIPM" },
    { name: "Nomura San", detail: "(TPM) – JIPM" },
  ];

  const rightGurus = [
    { name: "Nakamura San", detail: "(TPM) - JIPM" },
    { name: "Amakawa San", detail: "(TPM) - JIPM" },
    { name: "Inamura San", detail: "(TPM) - JIPM" },
    { name: "Kubota San", detail: "(TPM) - JIPM" },
    { name: "Ishikawa San", detail: "(TPM) – JIPM" },
    { name: "Takano San", detail: "(TPM) – JIPM" },
    { name: "Miyamura San", detail: "(TPM) - JIPM" },
    { name: "Yoko San", detail: "(TPM) – JIPM" },

  ];

  useEffect(() => {
    const items = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
  }, []);

  
  return (
    <div>

    {/* Hero Activity Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>Activities</h1>
          <p>
            Learning from Japanese excellence to drive global growth and continuous improvement.
          </p>
          <Link href="/abouts" className="about-link">
            Learn More <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Guru Section */}

<div className="guru-section">
   <div className="learning-section">
      {/* <div className="background">
        <Image
          src="/cherry_updated_3.jpg"
          alt="Japanese Background"
          fill
          className="bg-image"
        />
        <div className="bg-overlay"></div>
        <div className="bg-radial"></div>
      </div> */}

      <div className="header fade-in">
        <h2>
          Learning <span>From Japanese Guru's</span>
        </h2>
        <p>
          <span className="corp">CORPORATE</span> BUSINESS MANAGEMENT
        </p>
        <div className="underline"></div>
      </div>

      <div className="gurus-container fade-in">
        <div className="guru-column">
          {leftGurus.map((guru, i) => (
            <div key={i} className="guru-card">
              <span className="tick">✓</span>
              <div>
                <h4>{guru.name}</h4>
                <p>{guru.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center-image fade-in">
          <div className="circle-bg">
            <Image
              src="/guru.jpg"
              alt="Guru Illustration"
              width={240}
              height={240}
              className="guru-image"
            />
          </div>
        </div>

        <div className="guru-column">
          {rightGurus.map((guru, i) => (
            <div key={i} className="guru-card">
              <span className="tick">✓</span>
              <div>
                <h4>{guru.name}</h4>
                <p>{guru.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="footer-motto fade-in">
        <span className="orange">TRUST</span> |{" "}
        <span className="blue">PRINCIPLE</span> |{" "}
        <span className="orange">METICULOUSNESS</span>
      </div> */}
    </div>
</div>

    {/* Achivement Scetion */}

    <Achivement />
    </div>
  )
}

export default page
