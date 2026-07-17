"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

// ── Data ────────────────────────────────────────────────────────────
const STAYS = [
  {
    slug: "the-residence",
    name: "The Residence",
    type: "MAIN HOUSE",
    image: "/frame3.png",
    beds: 4, baths: 2, guests: 8,
    description:
      "The main house at Serenity. Four bedrooms, two bathrooms, wide open living that spills onto a private terrace. Made for families and groups who want space without compromise.",
    amenities: ["Heated pool", "BBQ terrace", "Full kitchen", "Washer & dryer", "Smart TV", "Air conditioning", "High-speed WiFi", "Outdoor dining"],
  },
  {
    slug: "the-olive",
    name: "The Olive",
    type: "SUITE",
    image: "/frame1.png",
    beds: 1, baths: 1, guests: 2,
    description:
      "Named for the grove that shades its terrace. A quiet, considered suite with one bedroom, a full bathroom, and a private outdoor area for slow starts.",
    amenities: ["Private terrace", "Kitchenette", "Outdoor shower", "Smart TV", "Air conditioning", "WiFi", "Garden access"],
  },
  {
    slug: "the-shoreline",
    name: "The Shoreline",
    type: "SUITE",
    image: "/frame2.png",
    beds: 1, baths: 1, guests: 2,
    description:
      "Light-filled and easy, with a nod to the coast down the road. One bedroom, a full bathroom, and a deck that catches the afternoon sun.",
    amenities: ["Private deck", "Kitchenette", "Outdoor bath", "Smart TV", "Air conditioning", "WiFi", "Beach towels"],
  },
  {
    slug: "the-horizon",
    name: "The Horizon",
    type: "SUITE",
    image: "/frame4.png",
    beds: 1, baths: 1, guests: 2,
    description:
      "The most open of the suites. Wide views, a clean interior, and a private outdoor space that earns its name at dusk.",
    amenities: ["Open views", "Kitchenette", "Outdoor shower", "Smart TV", "Air conditioning", "WiFi", "Binoculars"],
  },
];

// ── Floor plans ─────────────────────────────────────────────────────
function ResidenceFloorPlan() {
  return (
    <svg viewBox="0 0 280 200" fill="none" style={{ width: "100%", maxWidth: "200px" }}>
      <rect x="10" y="10" width="260" height="160" stroke="#111" strokeWidth="1.8" />
      <line x1="10" y1="85" x2="170" y2="85" stroke="#111" strokeWidth="1.2" />
      <line x1="170" y1="10" x2="170" y2="170" stroke="#111" strokeWidth="1.2" />
      <line x1="10" y1="130" x2="170" y2="130" stroke="#111" strokeWidth="1.2" />
      <line x1="90" y1="85" x2="90" y2="170" stroke="#111" strokeWidth="1.2" />
      <line x1="170" y1="55" x2="270" y2="55" stroke="#111" strokeWidth="1.2" />
      <text x="90" y="52" textAnchor="middle" fontSize="6.5" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">LIVING & DINING</text>
      <text x="220" y="36" textAnchor="middle" fontSize="6.5" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">KITCHEN</text>
      <text x="220" y="118" textAnchor="middle" fontSize="6.5" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">MASTER</text>
      <text x="50" y="112" textAnchor="middle" fontSize="6.5" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BED 2</text>
      <text x="50" y="154" textAnchor="middle" fontSize="6.5" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BED 3</text>
      <text x="130" y="154" textAnchor="middle" fontSize="6.5" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BED 4</text>
      <line x1="10" y1="174" x2="270" y2="174" stroke="#111" strokeWidth="0.5" strokeDasharray="5,3" />
      <text x="140" y="184" textAnchor="middle" fontSize="5.5" fill="#111" opacity="0.35" fontFamily="Futura,sans-serif">TERRACE & POOL</text>
    </svg>
  );
}

function SuiteFloorPlan() {
  return (
    <svg viewBox="0 0 180 220" fill="none" style={{ width: "100%", maxWidth: "130px" }}>
      <rect x="20" y="10" width="140" height="185" stroke="#111" strokeWidth="1.8" />
      <line x1="20" y1="100" x2="160" y2="100" stroke="#111" strokeWidth="1.2" />
      <line x1="100" y1="100" x2="100" y2="195" stroke="#111" strokeWidth="1.2" />
      <text x="90" y="58" textAnchor="middle" fontSize="7" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BEDROOM</text>
      <text x="58" y="152" textAnchor="middle" fontSize="7" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">LIVING</text>
      <text x="130" y="152" textAnchor="middle" fontSize="7" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BATH</text>
      <line x1="20" y1="198" x2="160" y2="198" stroke="#111" strokeWidth="0.5" strokeDasharray="5,3" />
      <text x="90" y="208" textAnchor="middle" fontSize="5.5" fill="#111" opacity="0.35" fontFamily="Futura,sans-serif">TERRACE</text>
    </svg>
  );
}

// ── Hero intro ───────────────────────────────────────────────────────
function HeroPage({ onContinue }: { onContinue: () => void }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
        paddingTop: "68px",
      }}
    >
      <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.25em", color: "#111", opacity: 0.4 }}>
        BERRY, NSW SOUTH COAST
      </p>
      <h1
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "clamp(3rem, 5vw, 5rem)",
          color: "#111",
          lineHeight: 1.05,
        }}
      >
        The Collection
      </h1>
      <p
        style={{
          fontFamily: FUTURA,
          fontWeight: 400,
          fontSize: "0.7rem",
          letterSpacing: "0.06em",
          lineHeight: 1.9,
          color: "#111",
          opacity: 0.5,
          maxWidth: "40ch",
        }}
      >
        One residence and three private suites. Scroll to explore each stay.
      </p>
      <button
        onClick={onContinue}
        style={{
          marginTop: "1rem",
          fontFamily: FUTURA,
          fontWeight: 700,
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "#111",
          background: "none",
          border: "1.5px solid #111",
          padding: "0.6rem 1.5rem",
          cursor: "pointer",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111"; }}
      >
        BEGIN
      </button>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "#111", opacity: 0.35 }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ width: "1px", height: "30px", backgroundColor: "rgba(0,0,0,0.2)" }}
        />
      </div>
    </div>
  );
}

// ── Stay page ────────────────────────────────────────────────────────
function StayPage({ stay }: { stay: typeof STAYS[0] }) {
  const isResidence = stay.slug === "the-residence";

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", backgroundColor: "#fff", paddingTop: "68px" }}>

      {/* Left — image */}
      <div style={{ width: "48%", flexShrink: 0, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stay.image}
          alt={stay.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Right — details */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem 3.5rem 2rem 3.5rem",
          overflowY: "auto",
          gap: "1.1rem",
        }}
      >
        {/* Type */}
        <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem", letterSpacing: "0.25em", color: "#111", opacity: 0.4 }}>
          {stay.type}
        </p>

        {/* Name */}
        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2rem, 2.8vw, 3rem)",
            color: "#111",
            lineHeight: 1.1,
          }}
        >
          {stay.name}
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: FUTURA,
            fontWeight: 400,
            fontSize: "0.7rem",
            letterSpacing: "0.03em",
            lineHeight: 1.85,
            color: "#111",
            opacity: 0.6,
            maxWidth: "38ch",
          }}
        >
          {stay.description}
        </p>

        {/* Specs */}
        <div style={{ display: "flex", gap: "2rem", paddingTop: "0.25rem" }}>
          {[
            [stay.beds, stay.beds === 1 ? "Bedroom" : "Bedrooms"],
            [stay.baths, stay.baths === 1 ? "Bathroom" : "Bathrooms"],
            [stay.guests, "Guests"],
          ].map(([n, label]) => (
            <div key={String(label)}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "1.1rem", color: "#111", marginBottom: "0.2rem" }}>{n}</p>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.18em", color: "#111", opacity: 0.4 }}>
                {String(label).toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.08)", width: "100%", maxWidth: "320px" }} />

        {/* Floor plan */}
        <div>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.22em", color: "#111", opacity: 0.35, marginBottom: "0.75rem" }}>
            FLOOR PLAN
          </p>
          {isResidence ? <ResidenceFloorPlan /> : <SuiteFloorPlan />}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.08)", width: "100%", maxWidth: "320px" }} />

        {/* Amenities */}
        <div>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.22em", color: "#111", opacity: 0.35, marginBottom: "0.75rem" }}>
            AMENITIES
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem 1.2rem", maxWidth: "360px" }}>
            {stay.amenities.map((a) => (
              <span
                key={a}
                style={{
                  fontFamily: FUTURA,
                  fontWeight: 400,
                  fontSize: "0.62rem",
                  letterSpacing: "0.04em",
                  color: "#111",
                  opacity: 0.55,
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Book CTA */}
        <a
          href="#"
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            color: "#111",
            textDecoration: "none",
            border: "1.5px solid #111",
            padding: "0.55rem 1.4rem",
            display: "inline-block",
            marginTop: "0.25rem",
            width: "fit-content",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111"; }}
        >
          ENQUIRE
        </a>
      </div>
    </div>
  );
}

// ── Wipe variants ────────────────────────────────────────────────────
const makeVariants = (dir: number) => ({
  initial: { x: dir > 0 ? "100%" : "-100%" },
  animate: { x: "0%" },
  exit:    { x: "0%" }, // stays put — incoming page wipes over it
});

const flipTransition = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
};

// ── Collection page ──────────────────────────────────────────────────
const PAGES = [null, ...STAYS]; // null = hero

export default function CollectionPage() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [locked, setLocked] = useState(false);

  const goTo = useCallback((next: number) => {
    if (locked || next < 0 || next >= PAGES.length || next === idx) return;
    setDir(next > idx ? 1 : -1);
    setLocked(true);
    setIdx(next);
    setTimeout(() => setLocked(false), 700);
  }, [locked, idx]);

  useEffect(() => {
    let lastT = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastT < 750) return;
      lastT = now;
      if (e.deltaY > 0) goTo(idx + 1);
      else goTo(idx - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goTo, idx]);

  const variants = makeVariants(dir);

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <Navbar />

      <AnimatePresence mode="sync" custom={dir}>
        <motion.div
          key={idx}
          custom={dir}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={flipTransition}
          style={{ position: "absolute", inset: 0, backgroundColor: "#fff" }}
        >
          {PAGES[idx] === null ? (
            <HeroPage onContinue={() => goTo(1)} />
          ) : (
            <StayPage stay={PAGES[idx] as typeof STAYS[0]} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Side dots */}
      <div
        style={{
          position: "fixed",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          alignItems: "center",
        }}
      >
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to page ${i}`}
            style={{
              width: "5px",
              height: i === idx ? "18px" : "5px",
              borderRadius: "3px",
              backgroundColor: "#111",
              opacity: i === idx ? 0.7 : 0.18,
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>

      {/* Arrow nav hint */}
      {idx > 0 && (
        <button
          onClick={() => goTo(idx - 1)}
          style={{
            position: "fixed", left: "1.5rem", top: "50%", transform: "translateY(-50%)",
            zIndex: 100, background: "none", border: "none", cursor: "pointer",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.7rem", color: "#111", opacity: 0.25,
            transition: "opacity 0.2s", padding: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.25")}
        >
          ←
        </button>
      )}
      {idx < PAGES.length - 1 && (
        <button
          onClick={() => goTo(idx + 1)}
          style={{
            position: "fixed", right: "3.5rem", bottom: "2rem",
            zIndex: 100, background: "none", border: "none", cursor: "pointer",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.7rem", color: "#111", opacity: 0.25,
            transition: "opacity 0.2s", padding: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.25")}
        >
          →
        </button>
      )}

      {/* Page counter — top right, only on stay pages */}
      {idx > 0 && (
        <div
          style={{
            position: "fixed", right: "2rem", top: "84px", zIndex: 100,
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem",
            letterSpacing: "0.15em", color: "#111", opacity: 0.35,
          }}
        >
          {idx}/{PAGES.length - 1}
        </div>
      )}
    </main>
  );
}
