"use client";
import React from "react";
import "./Whatsapp.css"; // plain CSS file

export default function Whatsapp({
  phone = "917620121069", // Replace with your number
  defaultMessage = "Hello! I am interested in your Services",
  size = 64,
  ariaLabel = "Chat on WhatsApp",
}) {
  const encoded = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <a
      className="whatsappButton"   // <-- use normal className here
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.88 11.88 0 0012.03.12 11.93 11.93 0 001.5 11.6c0 2.06.54 4.06 1.57 5.86L.12 23.2l6.04-1.58a11.97 11.97 0 005.87 1.46h.02c6.6 0 12-5.35 12-12 0-3.2-1.25-6.2-3.6-8.6z"
          fill="#25D366"
        />
        <path
          d="M17.33 14.16c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.58-1.48-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18 0-.34-.05-.48-.05-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.14 3.25 1.42 3.25 0 3.83-.06.58-.06 1.88-.76 2.15-1.5.27-.74.27-1.38.19-1.5-.09-.12-.33-.18-.6-.32z"
          fill="#fff"
        />
      </svg>
      <span className="whatsappText">Chat</span>
    </a>
  );
}
