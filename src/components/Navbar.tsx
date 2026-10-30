"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

const NAV_LINKS = [
  { label: "Story", href: "/story" },
  { label: "Collection", href: "/collection" },
  { label: "Experiences", href: "/experiences" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 50,
          height: "88px",
          backgroundColor: "#f2ede5",
          borderBottom: "1px solid rgba(26,25,22,0.1)",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 2.5rem",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s ease",
        }}
      >
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.4rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifySelf: "start",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                backgroundColor: "#1a1916",
              }}
            />
          ))}
        </button>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/Logodesign.png"
            alt="The Coastal"
            height={54}
            width={180}
            style={{ objectFit: "contain", height: "54px", width: "auto" }}
            priority
          />
        </Link>

        {/* Book */}
        <div style={{ justifySelf: "end" }}>
          <a
            href="#"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              color: "#1a1916",
              textDecoration: "none",
              border: "1.5px solid rgba(26,25,22,0.55)",
              borderRadius: "50px",
              padding: "0.55rem 1.4rem",
              whiteSpace: "nowrap",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1a1916";
              e.currentTarget.style.color = "#f2ede5";
              e.currentTarget.style.borderColor = "#1a1916";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1a1916";
              e.currentTarget.style.borderColor = "rgba(26,25,22,0.55)";
            }}
          >
            BOOK
          </a>
        </div>
      </header>

      {/* ── Full-screen menu overlay ─────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          backgroundColor: "#1a1916",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "2.2rem",
            right: "2.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: FUTURA,
            fontSize: "1.2rem",
            color: "#f2ede5",
            opacity: 0.6,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Logo in menu */}
        <Image
          src="/Logodesign.png"
          alt="The Coastal"
          height={48}
          width={160}
          style={{ objectFit: "contain", height: "48px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9, marginBottom: "1rem" }}
        />

        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#f2ede5",
              textDecoration: "none",
              opacity: 0.9,
              transition: "opacity 0.2s",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
          >
            {label}
          </Link>
        ))}

        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "1rem",
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            color: "#f2ede5",
            textDecoration: "none",
            border: "1.5px solid rgba(242,237,229,0.4)",
            borderRadius: "50px",
            padding: "0.7rem 2rem",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f2ede5";
            e.currentTarget.style.color = "#1a1916";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#f2ede5";
          }}
        >
          BOOK NOW
        </a>
      </div>
    </>
  );
}
