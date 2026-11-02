"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

const PROPERTY_LINKS = [
  { label: "The House", href: "/collection#residence" },
  { label: "The Suites", href: "/collection#suites" },
];

const SECTION_LINKS = [
  { label: "Stay", href: "/collection" },
  { label: "Experiences", href: "/experiences" },
  { label: "Story", href: "/story" },
  { label: "About", href: "/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkStyle = {
    fontFamily: FUTURA,
    fontSize: "0.72rem",
    fontWeight: 700 as const,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: INK,
    textDecoration: "none",
    opacity: 0.7,
    transition: "opacity 0.2s",
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 50,
          backgroundColor: CREAM,
          borderBottom: "1px solid rgba(26,25,22,0.1)",
        }}
      >
        {/* ── Top bar: property links | logo | book ─── */}
        <div
          style={{
            height: mobile ? "72px" : "76px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            padding: "0 clamp(1.2rem, 3vw, 3rem)",
          }}
        >
          {/* Left: property shortcuts (desktop) or hamburger (mobile) */}
          {mobile ? (
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
                  style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: INK }}
                />
              ))}
            </button>
          ) : (
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              {PROPERTY_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          {/* Center: logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/logo.svg"
              alt="The Coastal"
              height={46}
              width={76}
              style={{ height: mobile ? "52px" : "60px", width: "auto" }}
              priority
              unoptimized
            />
          </Link>

          {/* Right: BOOK */}
          <div style={{ justifySelf: "end" }}>
            <a
              href="/book"
              style={{
                fontFamily: FUTURA,
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: INK,
                textDecoration: "none",
                border: "1.5px solid rgba(26,25,22,0.5)",
                borderRadius: "50px",
                padding: "0.6rem 1.6rem",
                whiteSpace: "nowrap" as const,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = INK;
                e.currentTarget.style.color = CREAM;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = INK;
              }}
            >
              Book
            </a>
          </div>
        </div>

        {/* ── Secondary nav (desktop only) ─────────── */}
        {!mobile && (
          <div
            style={{
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1.5rem, 3vw, 3rem)",
              borderTop: "1px solid rgba(26,25,22,0.75)",
            }}
          >
            {SECTION_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ── Fullscreen mobile menu ─────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          backgroundColor: INK,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1.8rem",
            right: "1.8rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.4rem",
            color: CREAM,
            opacity: 0.6,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <Image
          src="/logo.svg"
          alt="The Coastal"
          height={40}
          width={66}
          style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9, marginBottom: "0.5rem" }}
          unoptimized
        />

        {[...PROPERTY_LINKS, ...SECTION_LINKS].map(({ label, href }) => (
          <Link
            key={label + href}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              color: CREAM,
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
          href="/book"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "0.5rem",
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: CREAM,
            textDecoration: "none",
            border: "1.5px solid rgba(242,237,229,0.4)",
            borderRadius: "50px",
            padding: "0.7rem 2rem",
          }}
        >
          Book Now
        </a>
      </div>
    </>
  );
}
