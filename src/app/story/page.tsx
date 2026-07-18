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

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#fff" }}>
      <Navbar />

      {/* Previous slide — static underneath */}
      {prevIdx !== null && (
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "#fff" }}>
          <Slide entry={TIMELINE[prevIdx]} />
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
        <Slide entry={TIMELINE[idx]} />
      </motion.div>

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
function Slide({ entry }: { entry: typeof TIMELINE[0] }) {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      paddingTop: "68px",
      display: "flex",
      backgroundColor: "#fff",
    }}>
      {/* Text panel */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem 5rem",
        gap: "1.5rem",
      }}>
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
