"use client";

import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

const STAYS = [
  {
    name: "THE RESIDENCE",
    tag: "The Main House",
    specs: [
      ["4", "Bedrooms"],
      ["2", "Bathrooms"],
      ["8+", "Guests"],
    ],
    description:
      "The main house at The Coastal. Made for families and groups who want space to spread out — four bedrooms, a wide open living area connecting to an outdoor terrace, and enough room for eight people to feel comfortable.",
    image: "/theresidence.jpg",
    href: "/collection",
  },
  {
    name: "THE SUITES",
    tag: "Three Private Suites",
    specs: [
      ["3", "Suites"],
      ["1", "Bedroom"],
      ["2", "Guests"],
    ],
    description:
      "Three private suites, each with their own character. One bedroom, a full bathroom, and a private outdoor space — intimate by design, without anything missing.",
    image: "/Olivesuite.jpg",
    href: "/collection",
  },
];

export default function HomePageClient() {
  return (
    <main style={{ backgroundColor: CREAM }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "75vh", overflow: "hidden", backgroundColor: "rgba(26,25,22,0.08)" }}>
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
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.45)",
              animation: "scrollPulse 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── Brand intro — Linnaeus editorial block ───────────────── */}
      <section
        style={{
          backgroundColor: CREAM,
          padding: "9rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.4rem",
        }}
      >
        <p
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.55rem",
            letterSpacing: "0.28em",
            color: INK,
            opacity: 0.4,
          }}
        >
          BERRY, NSW SOUTH COAST
        </p>
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
            color: INK,
            lineHeight: 1.65,
            maxWidth: "58ch",
          }}
        >
          Welcome to The Coastal — a private retreat on the NSW South Coast, tucked between
          the hills of Berry township and the wild stretch of Seven Mile Beach. Four stays,
          each with their own character: a main residence built for families and groups, and
          three intimate suites for those who come to slow down. Twelve acres of gardens,
          open sky, and nothing you need to rush back for.
        </p>
        <a
          href="/collection"
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            color: INK,
            textDecoration: "none",
            opacity: 0.55,
            marginTop: "0.5rem",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
        >
          VIEW THE COLLECTION →
        </a>
      </section>

      {/* ── Two editorial images ─────────────────────────────────── */}
      <section
        className="r-pad-x"
        style={{
          backgroundColor: CREAM,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          padding: "0 5rem 4rem",
        }}
      >
        {["/frame1.png", "/frame2.png"].map((src, i) => (
          <div key={i} style={{ overflow: "hidden", aspectRatio: "4/3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </section>

      {/* ── Property placeholders — 4 col ───────────────────────── */}
      <section
        style={{
          backgroundColor: CREAM,
          padding: "6rem 3rem",
        }}
      >
        <div
          className="r-grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {[
            "The House",
            "The Olive Suite",
            "The Shoreline Suite",
            "The Horizon Suite",
          ].map((name) => (
            <div
              key={name}
              style={{
                aspectRatio: "3/4",
                backgroundColor: "rgba(26,25,22,0.06)",
                border: "1px dashed rgba(26,25,22,0.12)",
                display: "flex",
                alignItems: "flex-end",
                padding: "1.2rem",
              }}
            >
              <p
                style={{
                  fontFamily: FUTURA,
                  fontWeight: 700,
                  fontSize: "0.52rem",
                  letterSpacing: "0.2em",
                  color: INK,
                  opacity: 0.25,
                }}
              >
                {name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-bleed feature image ─────────────────────────────── */}
      <section style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/frame3.png"
          alt="The Coastal"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(26,25,22,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.52rem",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            OUR STORY
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "#fff",
              lineHeight: 1.2,
              textAlign: "center",
              maxWidth: "36ch",
            }}
          >
            Built by hand. Designed to last.
          </p>
          <a
            href="/story"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              color: "#fff",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.55)",
              borderRadius: "50px",
              padding: "0.65rem 1.8rem",
              marginTop: "0.5rem",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = INK;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            READ THE STORY
          </a>
        </div>
      </section>

      {/* ── Instagram section ──────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: CREAM,
          padding: "7rem 3rem",
        }}
      >
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
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
                color: INK,
                opacity: 0.4,
                marginBottom: "0.6rem",
              }}
            >
              FOLLOW ALONG
            </p>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.4rem, 2vw, 2rem)",
                color: INK,
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
              fontSize: "0.58rem",
              letterSpacing: "0.16em",
              color: INK,
              textDecoration: "none",
              opacity: 0.45,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
          >
            VIEW PROFILE →
          </a>
        </div>

        <div
          className="r-grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0.5rem",
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
                backgroundColor: "rgba(26,25,22,0.06)",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(26,25,22,0.15)" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(26,25,22,0.15)" stroke="none" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "#1a1916",
          color: "#f2ede5",
          padding: "5rem 3rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            className="r-footer"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "3rem",
              paddingBottom: "4rem",
              borderBottom: "1px solid rgba(242,237,229,0.1)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.28em", color: "#f2ede5" }}>
                THE COASTAL
              </p>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.04em", lineHeight: 1.8, color: "rgba(242,237,229,0.45)", maxWidth: "28ch" }}>
                Four private stays on the NSW South Coast. A short stroll from Berry, minutes from the beach.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>
                EXPLORE
              </p>
              {[["Story", "/story"], ["Collection", "/collection"], ["Experiences", "/experiences"]].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.6)")}
                >
                  {label}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>
                CONTACT
              </p>
              <a
                href="mailto:hello@thecoastal.com.au"
                style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.6)")}
              >
                hello@thecoastal.com.au
              </a>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.45)", lineHeight: 1.7 }}>
                Berry, NSW 2535<br />South Coast, Australia
              </p>
              <a
                href="https://instagram.com/thecoastal.berry"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.6)")}
              >
                @thecoastal.berry
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "2rem",
            }}
          >
            <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.12em", color: "rgba(242,237,229,0.25)" }}>
              © {new Date().getFullYear()} THE COASTAL. ALL RIGHTS RESERVED.
            </p>
            <a
              href="/book"
              style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.18em", color: "rgba(242,237,229,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f2ede5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.35)")}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @font-face {
          font-family: 'Kenao';
          src: url('/fonts/Kenao.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .instagram-tile { transition: opacity 0.25s ease; }
        .instagram-tile:hover { opacity: 0.8; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1);   opacity: 0.45; }
          50%       { transform: scaleY(0.6); opacity: 0.15; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
