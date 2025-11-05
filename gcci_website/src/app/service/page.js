"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award  } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import "./service.css";

const page = () => {
  return (
    <div>
      {/* Hero Service Section */}

    <section className="about-section">
      <div className="about-overlay">
        <div className="about-text">
          <h1>Services</h1>
          <p>
            Comprehensive Solutions to Transform Your Business
          </p>
          <Link href="/" className="about-link">
            Back to Home <ArrowRight className="arrow-icon" size={18} />
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
