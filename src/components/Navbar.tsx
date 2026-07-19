"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

const NAV_LEFT = [
  { label: "STORY", href: "/story" },
  { label: "COLLECTION", href: "/collection" },
  { label: "EXPERIENCES", href: "/experiences" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        height: "88px",
        backgroundColor: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)",
        alignItems: "center",
        padding: "0 2.5rem",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s ease",
      }}
    >
      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {NAV_LEFT.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.63rem",
              letterSpacing: "0.15em",
              color: "#111",
              textDecoration: "none",
              whiteSpace: "nowrap",
              opacity: 0.8,
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="/Logodesign.png"
          alt="The Coastal"
          height={54}
          width={180}
          style={{ objectFit: "contain", height: "54px", width: "auto" }}
          priority
        />
      </Link>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a
          href="#"
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            color: "#111",
            textDecoration: "none",
            border: "1.5px solid #111",
            padding: "0.5rem 1.25rem",
            whiteSpace: "nowrap",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#111";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#111";
          }}
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
}
