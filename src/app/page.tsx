"use client";

import Link from "next/link";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

const NAV_LEFT = [
  { label: "STORY", href: "/story" },
  { label: "COLLECTION", href: "/collection" },
  { label: "EXPERIENCES", href: "/experiences" },
];

export default function Home() {
  return (
    <main style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 50,
          height: "68px",
          backgroundColor: "#fff",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)",
          alignItems: "center",
          padding: "0 2.5rem",
        }}
      >
        {/* Left nav */}
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
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link
          href="/"
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.35em",
            color: "#111",
            textDecoration: "none",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          THE COASTAL
        </Link>

        {/* Right — Book Now */}
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

      {/* ── Hero image ─────────────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Trialimage.png"
        alt="The Coastal — Berry, NSW"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "fadeIn 1s ease 1s both",
        }}
      >
        <span
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            color: "#fff",
            opacity: 0.7,
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "36px",
            backgroundColor: "rgba(255,255,255,0.55)",
            animation: "scrollPulse 1.8s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1);   opacity: 0.55; }
          50%       { transform: scaleY(0.6); opacity: 0.2;  }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
