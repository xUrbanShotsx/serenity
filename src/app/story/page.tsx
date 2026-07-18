"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const TIMELINE = [
  {
    year: "2019",
    title: "The Land",
    detail:
      "It was a Sunday in late autumn. They weren't looking for land — they were looking for lunch. But somewhere between Berry township and the coast road, they turned down a gravel track and found twelve acres of gentle hills, old olive trees, and a quiet that felt earned. They pulled over and sat in the car for a long time without saying anything.",
    image: "/Arielshot.jpg",
  },
  {
    year: "2020",
    title: "The Decision",
    detail:
      "The world went quiet, and so did they. Months of stillness gave the idea room to grow into something real. The brief they gave themselves was simple: build something that feels like it belongs here. No shortcuts on materials, no room that didn't earn its place. If it couldn't be done properly, it wouldn't be done at all.",
    image: "/theresidence.jpg",
  },
  {
    year: "2021",
    title: "Breaking Ground",
    detail:
      "They hired tradespeople from Berry and the surrounding towns. A builder who had worked in the region for twenty years. A carpenter who took three weeks on the kitchen joinery alone. The structural decisions were made on-site, walking the land in the mornings, adjusting to what the ground and light asked for rather than what the drawings assumed.",
    image: "/theresidence.jpg",
  },
  {
    year: "2022",
    title: "The Details",
    detail:
      "Stone sourced from a nearby quarry. Timber milled from fallen trees on the property. The olive grove that had been here long before them gave the first suite its name. The way afternoon light fell across the deck of the second suggested its own. The third suite sat at the edge of the hill, looking out — its name came last, and felt obvious the moment they said it aloud.",
    image: "/Olivesuite.jpg",
  },
  {
    year: "2023",
    title: "First Guests",
    detail:
      "There was no launch. No event. A family from Melbourne arrived on a Tuesday in April — two parents, three children, and a dog who immediately claimed the terrace. They stayed for four nights. On the last morning, one of the kids left a drawing on the kitchen table. It's still there, tucked inside a drawer.",
    image: "/shorelinesuite.jpg",
  },
  {
    year: "Now",
    title: "The Ongoing",
    detail:
      "The olive trees are producing. The garden is filling in the way gardens do — unhurried and without instruction. Guests come back, sometimes with the same people, sometimes with different ones. Some stay for one night. Some stay for two weeks and lose track of the days. That was always the hope.",
    image: "/horizonsuite.jpg",
  },
];

const DURATION = 0.65;
const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];
const TOTAL = TIMELINE.length;

export default function StoryPage() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [locked, setLocked] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (locked || next < 0 || next >= TOTAL || next === idx) return;
      setDir(next > idx ? 1 : -1);
      setLocked(true);
      setHasNavigated(true);
      setPrevIdx(idx);
      setIdx(next);
      setTimeout(() => setLocked(false), 1300);
    },
    [locked, idx]
  );

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

  // Progress ratio (0 → 1) for the dot position
  const progress = idx / (TOTAL - 1);

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#fff" }}>
      <Navbar />

      {/* Previous slide — static underneath */}
      {prevIdx !== null && (
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "#fff" }}>
          <Slide entry={TIMELINE[prevIdx]} idx={prevIdx} isBackground />
        </div>
      )}

      {/* Current slide — slides in vertically */}
      <motion.div
        key={idx}
        initial={hasNavigated ? { y: dir > 0 ? "100%" : "-100%" } : false}
        animate={{ y: "0%" }}
        transition={{ duration: DURATION, ease: EASE }}
        onAnimationComplete={() => setPrevIdx(null)}
        style={{ position: "absolute", inset: 0, zIndex: 2, backgroundColor: "#fff" }}
      >
        <Slide entry={TIMELINE[idx]} idx={idx} />
      </motion.div>

      {/* ── Minimal timeline sidebar (fixed, above slides) ── */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: "68px",
          bottom: 0,
          width: "80px",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          pointerEvents: "none",
        }}
      >
        {/* Track line */}
        <div style={{
          position: "absolute",
          top: "15%",
          bottom: "15%",
          left: "50%",
          width: "1px",
          backgroundColor: "rgba(0,0,0,0.1)",
          transform: "translateX(-50%)",
        }} />

        {/* Filled progress line */}
        <div style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          width: "1px",
          height: `${progress * 70}%`,
          backgroundColor: "#111",
          transform: "translateX(-50%)",
          transition: "height 0.6s cubic-bezier(0.76,0,0.24,1)",
        }} />

        {/* Travelling dot */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: `calc(15% + ${progress * 70}%)`,
          transform: "translate(-50%, -50%)",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#111",
          transition: "top 0.6s cubic-bezier(0.76,0,0.24,1)",
        }} />

        {/* Current year label */}
        <motion.p
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(15% + ${progress * 70}%)`,
            transform: "translate(12px, -50%)",
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.48rem",
            letterSpacing: "0.18em",
            color: "#111",
            opacity: 0.45,
            whiteSpace: "nowrap",
          }}
        >
          {TIMELINE[idx].year}
        </motion.p>
      </div>

      {/* ── Scroll cue ── */}
      {idx < TOTAL - 1 && (
        <div style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          pointerEvents: "none",
        }}>
          <span style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.48rem", letterSpacing: "0.22em", color: "#111", opacity: 0.25 }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ width: "1px", height: "28px", backgroundColor: "rgba(0,0,0,0.18)" }}
          />
        </div>
      )}

      {/* ── Up / down arrows ── */}
      {idx > 0 && (
        <button
          onClick={() => goTo(idx - 1)}
          style={{
            position: "fixed", right: "2rem", bottom: "5rem",
            zIndex: 100, background: "none", border: "none", cursor: "pointer",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.7rem", color: "#111", opacity: 0.2,
            transition: "opacity 0.2s", padding: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.2")}
        >↑</button>
      )}
      {idx < TOTAL - 1 && (
        <button
          onClick={() => goTo(idx + 1)}
          style={{
            position: "fixed", right: "2rem", bottom: "2.5rem",
            zIndex: 100, background: "none", border: "none", cursor: "pointer",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.7rem", color: "#111", opacity: 0.2,
            transition: "opacity 0.2s", padding: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.2")}
        >↓</button>
      )}
    </main>
  );
}

// ── Individual slide ───────────────────────────────────────────────────
function Slide({
  entry,
  idx,
  isBackground = false,
}: {
  entry: typeof TIMELINE[0];
  idx: number;
  isBackground?: boolean;
}) {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      paddingTop: "68px",
      paddingLeft: "80px",
      display: "flex",
    }}>
      {/* Text panel */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem 5rem",
      }}>
        {!isBackground && (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 0, 0.25, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <p style={{
              fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem",
              letterSpacing: "0.25em", color: "#111", opacity: 0.35,
            }}>
              {entry.year}
            </p>
            <h2 style={{
              fontFamily: SERIF, fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(2.5rem, 4vw, 4.2rem)", color: "#111", lineHeight: 1.05,
            }}>
              {entry.title}
            </h2>
            <p style={{
              fontFamily: FUTURA, fontWeight: 400, fontSize: "0.73rem",
              letterSpacing: "0.03em", lineHeight: 2, color: "#111",
              opacity: 0.55, maxWidth: "42ch",
            }}>
              {entry.detail}
            </p>
            <p style={{
              fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem",
              letterSpacing: "0.18em", color: "#111", opacity: 0.18, marginTop: "1rem",
            }}>
              {idx + 1} / {TOTAL}
            </p>
          </motion.div>
        )}

        {isBackground && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.25em", color: "#111", opacity: 0.35 }}>{entry.year}</p>
            <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2.5rem, 4vw, 4.2rem)", color: "#111", lineHeight: 1.05 }}>{entry.title}</h2>
            <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.73rem", letterSpacing: "0.03em", lineHeight: 2, color: "#111", opacity: 0.55, maxWidth: "42ch" }}>{entry.detail}</p>
          </div>
        )}
      </div>

      {/* Image */}
      <div style={{ width: "42%", flexShrink: 0, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={entry.image}
          alt={entry.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
}
