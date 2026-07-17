"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

const NAV_LEFT = [
  { label: "STORY", href: "/story" },
  { label: "COLLECTION", href: "/collection" },
  { label: "EXPERIENCES", href: "/experiences" },
];

export default function Home() {
  const [navVisible, setNavVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <main>

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
          transform: navVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s ease",
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
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
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
      </section>

      {/* ── Welcome section ────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "10rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "#111",
            opacity: 0.4,
            marginBottom: "2rem",
          }}
        >
          BERRY, NSW SOUTH COAST
        </p>
        <p
          style={{
            maxWidth: "52ch",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
            lineHeight: 1.55,
            color: "#111",
            opacity: 0.85,
          }}
        >
          A short stroll from Berry township in one direction, and minutes from the beach in the other. Serenity sits right in the middle — four private stays on the NSW South Coast, where everything you need is closer than you think.
        </p>
      </section>

      {/* ── Two-image section ──────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#fff",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 3rem",
          gap: "3rem",
        }}
      >
        {["/frame1.png", "/frame2.png"].map((src, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "75%",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </section>

      {/* ── Single frame right section ─────────────────────────── */}
      <section
        style={{
          backgroundColor: "#fff",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 3rem",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              color: "#111",
              opacity: 0.4,
            }}
          >
            THE COLLECTION
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3vw, 3rem)",
              lineHeight: 1.15,
              color: "#111",
            }}
          >
            The Residence
          </h2>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
              lineHeight: 1.8,
              color: "#111",
              opacity: 0.6,
              maxWidth: "38ch",
            }}
          >
            The main house at Serenity. Made for families and groups who
            want space to spread out — four bedrooms, two bathrooms, a
            wide open living area that connects to an outdoor terrace, and
            enough room for eight people to feel comfortable, not crowded.
          </p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "0.5rem",
            }}
          >
            {[["4", "Bedrooms"], ["2", "Bathrooms"], ["8", "Guests"]].map(([n, label]) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#111",
                    marginBottom: "0.2rem",
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 400,
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    color: "#111",
                    opacity: 0.45,
                  }}
                >
                  {label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "#111",
              textDecoration: "none",
              marginTop: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              opacity: 0.75,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          >
            VIEW RESIDENCE →
          </a>
        </div>

        {/* Right — image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/frame3.png"
          alt="The Residence"
          style={{
            width: "34%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            flexShrink: 0,
            marginRight: "8rem",
          }}
        />
      </section>

      {/* ── Suites section (flipped) ────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#fff",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left — image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/frame4.png"
          alt="The Suites"
          style={{
            width: "34%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            flexShrink: 0,
            marginLeft: "8rem",
          }}
        />

        {/* Right — text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 3rem",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              color: "#111",
              opacity: 0.4,
            }}
          >
            THE COLLECTION
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3vw, 3rem)",
              lineHeight: 1.15,
              color: "#111",
            }}
          >
            The Suites
          </h2>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
              lineHeight: 1.8,
              color: "#111",
              opacity: 0.6,
              maxWidth: "38ch",
            }}
          >
            Three private suites, each with their own character. Whether
            you&rsquo;re after a couple&rsquo;s retreat or a solo escape,
            the suites offer one bedroom, a full bathroom, and a private
            outdoor space — intimate by design, without anything missing.
          </p>
          <div style={{ display: "flex", gap: "2rem", marginTop: "0.5rem" }}>
            {[["3", "Suites"], ["1", "Bedroom"], ["2", "Guests"]].map(([n, label]) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#111",
                    marginBottom: "0.2rem",
                  }}
                >
                  {n}
                </p>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 400,
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    color: "#111",
                    opacity: 0.45,
                  }}
                >
                  {label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "#111",
              textDecoration: "none",
              marginTop: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              opacity: 0.75,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          >
            VIEW SUITES →
          </a>
        </div>
      </section>

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
