"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

// ── Data ────────────────────────────────────────────────────────────
const STAYS = [
  {
    slug: "the-residence",
    name: "The Residence",
    type: "MAIN HOUSE",
    image: "/theresidence.jpg",
    beds: 4, baths: 2, guests: 8,
    description:
      "The main house at Serenity. Four bedrooms, two bathrooms, wide open living that spills onto a private terrace. Made for families and groups who want space without compromise.",
    amenities: ["Heated pool", "BBQ terrace", "Full kitchen", "Washer & dryer", "Smart TV", "Air conditioning", "High-speed WiFi", "Outdoor dining"],
  },
  {
    slug: "the-olive",
    name: "The Olive",
    type: "SUITE",
    image: "/Olivesuite.jpg",
    beds: 1, baths: 1, guests: 2,
    description:
      "Named for the grove that shades its terrace. A quiet, considered suite with one bedroom, a full bathroom, and a private outdoor area for slow starts.",
    amenities: ["Private terrace", "Kitchenette", "Outdoor shower", "Smart TV", "Air conditioning", "WiFi", "Garden access"],
  },
  {
    slug: "the-shoreline",
    name: "The Shoreline",
    type: "SUITE",
    image: "/shorelinesuite.jpg",
    beds: 1, baths: 1, guests: 2,
    description:
      "Light-filled and easy, with a nod to the coast down the road. One bedroom, a full bathroom, and a deck that catches the afternoon sun.",
    amenities: ["Private deck", "Kitchenette", "Outdoor bath", "Smart TV", "Air conditioning", "WiFi", "Beach towels"],
  },
  {
    slug: "the-horizon",
    name: "The Horizon",
    type: "SUITE",
    image: "/horizonsuite.jpg",
    beds: 1, baths: 1, guests: 2,
    description:
      "The most open of the suites. Wide views, a clean interior, and a private outdoor space that earns its name at dusk.",
    amenities: ["Open views", "Kitchenette", "Outdoor shower", "Smart TV", "Air conditioning", "WiFi", "Binoculars"],
  },
];


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

// ── Floor plan modal ─────────────────────────────────────────────────
function FloorPlanModal({ isResidence, onClose }: { isResidence: boolean; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          style={{
            backgroundColor: "#fff",
            padding: "3.5rem",
            maxWidth: "560px",
            width: "90%",
            position: "relative",
          }}
        >
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.22em", color: "#111", opacity: 0.35, marginBottom: "2rem" }}>
            FLOOR PLAN
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {isResidence
              ? <svg viewBox="0 0 280 200" fill="none" style={{ width: "100%", maxWidth: "380px" }}>
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
              : <svg viewBox="0 0 180 220" fill="none" style={{ width: "100%", maxWidth: "260px" }}>
                  <rect x="20" y="10" width="140" height="185" stroke="#111" strokeWidth="1.8" />
                  <line x1="20" y1="100" x2="160" y2="100" stroke="#111" strokeWidth="1.2" />
                  <line x1="100" y1="100" x2="100" y2="195" stroke="#111" strokeWidth="1.2" />
                  <text x="90" y="58" textAnchor="middle" fontSize="7" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BEDROOM</text>
                  <text x="58" y="152" textAnchor="middle" fontSize="7" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">LIVING</text>
                  <text x="130" y="152" textAnchor="middle" fontSize="7" fill="#111" opacity="0.5" fontFamily="Futura,sans-serif">BATH</text>
                  <line x1="20" y1="198" x2="160" y2="198" stroke="#111" strokeWidth="0.5" strokeDasharray="5,3" />
                  <text x="90" y="208" textAnchor="middle" fontSize="5.5" fill="#111" opacity="0.35" fontFamily="Futura,sans-serif">TERRACE</text>
                </svg>
            }
          </div>
          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "1.5rem", right: "1.5rem",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem",
              letterSpacing: "0.18em", color: "#111", opacity: 0.35,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.35")}
          >
            CLOSE ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Stay page ────────────────────────────────────────────────────────
function StayPage({ stay }: { stay: typeof STAYS[0] }) {
  const isResidence = stay.slug === "the-residence";
  const [floorPlanOpen, setFloorPlanOpen] = useState(false);

  return (
    <>
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
            padding: "2rem 4rem",
            gap: "1.6rem",
          }}
        >
          {/* Type */}
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem", letterSpacing: "0.25em", color: "#111", opacity: 0.35 }}>
            {stay.type}
          </p>

          {/* Name */}
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 3vw, 3.2rem)",
              color: "#111",
              lineHeight: 1.05,
              margin: 0,
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
              lineHeight: 1.9,
              color: "#111",
              opacity: 0.55,
              maxWidth: "36ch",
              margin: 0,
            }}
          >
            {stay.description}
          </p>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", maxWidth: "340px" }} />

          {/* Specs */}
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {[
              [stay.beds, stay.beds === 1 ? "Bedroom" : "Bedrooms"],
              [stay.baths, stay.baths === 1 ? "Bathroom" : "Bathrooms"],
              [stay.guests, "Guests"],
            ].map(([n, label]) => (
              <div key={String(label)}>
                <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "1.15rem", color: "#111", marginBottom: "0.3rem" }}>{n}</p>
                <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.5rem", letterSpacing: "0.2em", color: "#111", opacity: 0.38 }}>
                  {String(label).toUpperCase()}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", maxWidth: "340px" }} />

          {/* Amenities */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem 1rem", maxWidth: "340px" }}>
            {stay.amenities.map((a) => (
              <span
                key={a}
                style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.04em", color: "#111", opacity: 0.5 }}
              >
                {a}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", maxWidth: "340px" }} />

          {/* Actions */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href="#"
              style={{
                fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em",
                color: "#fff", textDecoration: "none", backgroundColor: "#111",
                padding: "0.65rem 1.6rem", display: "inline-block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              ENQUIRE
            </a>
            <button
              onClick={() => setFloorPlanOpen(true)}
              style={{
                fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em",
                color: "#111", background: "none", border: "1.5px solid rgba(0,0,0,0.2)",
                padding: "0.65rem 1.6rem", cursor: "pointer",
                transition: "border-color 0.2s, opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)")}
            >
              FLOOR PLAN
            </button>
          </div>
        </div>
      </div>

      {floorPlanOpen && (
        <FloorPlanModal isResidence={isResidence} onClose={() => setFloorPlanOpen(false)} />
      )}
    </>
  );
}

const WIPE_DURATION = 0.6;
const WIPE_EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

// ── Collection page ──────────────────────────────────────────────────
const PAGES = [null, ...STAYS]; // null = hero

function PageContent({ pageIdx, onContinue }: { pageIdx: number; onContinue: () => void }) {
  return PAGES[pageIdx] === null
    ? <HeroPage onContinue={onContinue} />
    : <StayPage stay={PAGES[pageIdx] as typeof STAYS[0]} />;
}

export default function CollectionPage() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [locked, setLocked] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  const goTo = useCallback((next: number) => {
    if (locked || next < 0 || next >= PAGES.length || next === idx) return;
    setDir(next > idx ? 1 : -1);
    setLocked(true);
    setHasNavigated(true);
    setPrevIdx(idx);
    setIdx(next);
    setTimeout(() => setLocked(false), 1300);
  }, [locked, idx]);

  useEffect(() => {
    let lastT = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastT < 1400) return;
      lastT = now;
      if (e.deltaY > 0) goTo(idx + 1);
      else goTo(idx - 1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goTo, idx]);

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <Navbar />

      {/* Previous page — static underneath, cleared once new page lands */}
      {prevIdx !== null && (
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "#fff" }}>
          <PageContent pageIdx={prevIdx} onContinue={() => goTo(1)} />
        </div>
      )}

      {/* Current page — slides in on top (no animation on first load) */}
      <motion.div
        key={idx}
        initial={hasNavigated ? { x: dir > 0 ? "100%" : "-100%" } : false}
        animate={{ x: "0%" }}
        transition={{ duration: WIPE_DURATION, ease: WIPE_EASE }}
        onAnimationComplete={() => setPrevIdx(null)}
        style={{ position: "absolute", inset: 0, zIndex: 2, backgroundColor: "#fff" }}
      >
        <PageContent pageIdx={idx} onContinue={() => goTo(1)} />
      </motion.div>

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
