"use client";

import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ── Hero image ─────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Arielshot.jpg"
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

      {/* ── Instagram section ──────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "7rem 3rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2rem",
            maxWidth: "1400px",
            margin: "0 auto 2rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: FUTURA,
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#111",
                opacity: 0.4,
                marginBottom: "0.6rem",
              }}
            >
              FOLLOW ALONG
            </p>
            <p
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)",
                color: "#111",
                lineHeight: 1.1,
              }}
            >
              @thecoastal.berry
            </p>
          </div>
          <a
            href="https://instagram.com/thecoastal.berry"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "#111",
              textDecoration: "none",
              opacity: 0.5,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
          >
            VIEW PROFILE →
          </a>
        </div>

        {/* 4-square grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.75rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="instagram-tile"
              style={{
                aspectRatio: "1 / 1",
                backgroundColor: "#f5f4f2",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* Placeholder state — replace inner content when Instagram feed is connected */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(0,0,0,0.18)" stroke="none"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .instagram-tile { transition: opacity 0.25s ease; }
        .instagram-tile:hover { opacity: 0.88; }
      `}</style>

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
