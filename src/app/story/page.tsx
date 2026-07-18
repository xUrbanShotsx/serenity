"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const TIMELINE = [
  {
    year: "2019",
    title: "The Land",
    short: "A chance drive through Berry.",
    detail:
      "It was a Sunday in late autumn. They weren't looking for land — they were looking for lunch. But somewhere between Berry township and the coast road, they turned down a gravel track and found twelve acres of gentle hills, old olive trees, and a quiet that felt earned. They pulled over and sat in the car for a long time without saying anything.",
    image: "/Arielshot.jpg",
  },
  {
    year: "2020",
    title: "The Decision",
    short: "Something intentional. Or nothing at all.",
    detail:
      "The world went quiet, and so did they. Months of stillness gave the idea room to grow into something real. The brief they gave themselves was simple: build something that feels like it belongs here. No shortcuts on materials, no room that didn't earn its place. If it couldn't be done properly, it wouldn't be done at all.",
    image: "/theresidence.jpg",
  },
  {
    year: "2021",
    title: "Breaking Ground",
    short: "Local hands. Slow work. No apologies.",
    detail:
      "They hired tradespeople from Berry and the surrounding towns. A builder who had worked in the region for twenty years. A carpenter who took three weeks on the kitchen joinery alone. The structural decisions were made on-site, walking the land in the mornings, adjusting to what the ground and light asked for rather than what the drawings assumed.",
    image: "/theresidence.jpg",
  },
  {
    year: "2022",
    title: "The Details",
    short: "Every material had to earn its place.",
    detail:
      "Stone sourced from a nearby quarry. Timber milled from fallen trees on the property. The olive grove that had been here long before them gave the first suite its name. The way afternoon light fell across the deck of the second suggested its own. The third suite sat at the edge of the hill, looking out — its name came last, and felt obvious the moment they said it aloud.",
    image: "/Olivesuite.jpg",
  },
  {
    year: "2023",
    title: "First Guests",
    short: "A Tuesday in April. No fanfare.",
    detail:
      "There was no launch. No event. A family from Melbourne arrived on a Tuesday in April — two parents, three children, and a dog who immediately claimed the terrace. They stayed for four nights. On the last morning, one of the kids left a drawing on the kitchen table. It's still there, tucked inside a drawer.",
    image: "/shorelinesuite.jpg",
  },
  {
    year: "Now",
    title: "The Ongoing",
    short: "Returning guests. A filling garden.",
    detail:
      "The olive trees are producing. The garden is filling in the way gardens do — unhurried and without instruction. Guests come back, sometimes with the same people, sometimes with different ones. Some stay for one night. Some stay for two weeks and lose track of the days. That was always the hope.",
    image: "/horizonsuite.jpg",
  },
];

const WIPE_DURATION = 0.65;
const WIPE_EASE = [0.76, 0, 0.24, 1] as [number, number, number, number];

export default function StoryPage() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const [locked, setLocked] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Measure progress line height to current dot
  useEffect(() => {
    const update = () => {
      const sidebar = sidebarRef.current;
      const dot = dotRefs.current[idx];
      if (!sidebar || !dot) return;
      const sTop = sidebar.getBoundingClientRect().top;
      const dRect = dot.getBoundingClientRect();
      setLineHeight(dRect.top + dRect.height / 2 - sTop);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [idx]);

  const goTo = useCallback(
    (next: number) => {
      if (locked || next < 0 || next >= TIMELINE.length || next === idx) return;
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

  const entry = TIMELINE[idx];

  return (
    <main style={{ height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#fff" }}>
      <Navbar />

      {/* ── Previous slide — static underneath ── */}
      {prevIdx !== null && (
        <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "#fff" }}>
          <SlideContent entry={TIMELINE[prevIdx]} idx={prevIdx} dotRefs={dotRefs} sidebarRef={null} lineHeight={lineHeight} total={TIMELINE.length} goTo={goTo} isBackground />
        </div>
      )}

      {/* ── Current slide — wipes in ── */}
      <motion.div
        key={idx}
        initial={hasNavigated ? { x: dir > 0 ? "100%" : "-100%" } : false}
        animate={{ x: "0%" }}
        transition={{ duration: WIPE_DURATION, ease: WIPE_EASE }}
        onAnimationComplete={() => setPrevIdx(null)}
        style={{ position: "absolute", inset: 0, zIndex: 2, backgroundColor: "#fff" }}
      >
        <SlideContent
          entry={entry}
          idx={idx}
          dotRefs={dotRefs}
          sidebarRef={sidebarRef}
          lineHeight={lineHeight}
          total={TIMELINE.length}
          goTo={goTo}
        />
      </motion.div>

      {/* ── Scroll hint ── */}
      {idx < TIMELINE.length - 1 && (
        <div
          style={{
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
          }}
        >
          <span style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.48rem", letterSpacing: "0.22em", color: "#111", opacity: 0.3 }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ width: "1px", height: "28px", backgroundColor: "rgba(0,0,0,0.2)" }}
          />
        </div>
      )}

      {/* ── Arrow nav ── */}
      {idx > 0 && (
        <button
          onClick={() => goTo(idx - 1)}
          style={{
            position: "fixed", left: "1.5rem", top: "50%", transform: "translateY(-50%)",
            zIndex: 100, background: "none", border: "none", cursor: "pointer",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.7rem", color: "#111", opacity: 0.2,
            transition: "opacity 0.2s", padding: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.2")}
        >←</button>
      )}
      {idx < TIMELINE.length - 1 && (
        <button
          onClick={() => goTo(idx + 1)}
          style={{
            position: "fixed", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
            zIndex: 100, background: "none", border: "none", cursor: "pointer",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.7rem", color: "#111", opacity: 0.2,
            transition: "opacity 0.2s", padding: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.2")}
        >→</button>
      )}
    </main>
  );
}

// ── Slide content component ────────────────────────────────────────────
function SlideContent({
  entry,
  idx,
  dotRefs,
  sidebarRef,
  lineHeight,
  total,
  goTo,
  isBackground = false,
}: {
  entry: typeof TIMELINE[0];
  idx: number;
  dotRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  sidebarRef: React.MutableRefObject<HTMLDivElement | null> | null;
  lineHeight: number;
  total: number;
  goTo: (n: number) => void;
  isBackground?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        paddingTop: "68px",
        display: "flex",
      }}
    >
      {/* ── Left: Timeline sidebar ── */}
      <div
        ref={sidebarRef ?? undefined}
        style={{
          width: "220px",
          flexShrink: 0,
          borderRight: "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 2.5rem",
          position: "relative",
          gap: 0,
        }}
      >
        {/* Background line */}
        <div style={{ position: "absolute", left: "2.5rem", top: "50%", transform: "translateY(-50%)", height: "60%", width: "1px", backgroundColor: "rgba(0,0,0,0.1)" }} />
        {/* Progress line */}
        {!isBackground && (
          <div
            style={{
              position: "absolute",
              left: "2.5rem",
              top: `calc(50% - 30%)`,
              width: "1px",
              height: `${Math.min(lineHeight, 999)}px`,
              backgroundColor: "#111",
              transition: "height 0.55s cubic-bezier(0.76,0,0.24,1)",
              maxHeight: "60%",
            }}
          />
        )}

        {TIMELINE.map((item, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              padding: "0.7rem 0",
              position: "relative",
            }}
          >
            <div
              ref={(el) => { if (!isBackground) dotRefs.current[i] = el; }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: i === idx ? "#111" : "transparent",
                border: `1.5px solid ${i <= idx ? "#111" : "rgba(0,0,0,0.2)"}`,
                flexShrink: 0,
                transition: "all 0.35s ease",
                zIndex: 1,
              }}
            />
            <div>
              <p style={{
                fontFamily: FUTURA,
                fontWeight: 700,
                fontSize: "0.48rem",
                letterSpacing: "0.2em",
                color: i === idx ? "#111" : "rgba(0,0,0,0.3)",
                marginBottom: "0.15rem",
                transition: "color 0.3s",
              }}>
                {item.year}
              </p>
              <p style={{
                fontFamily: FUTURA,
                fontWeight: i === idx ? 700 : 400,
                fontSize: "0.6rem",
                letterSpacing: "0.04em",
                color: i === idx ? "#111" : "rgba(0,0,0,0.3)",
                transition: "color 0.3s",
                whiteSpace: "nowrap",
              }}>
                {item.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* ── Centre: Text ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem 4rem",
        }}
      >
        <motion.div
          key={idx}
          initial={isBackground ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.25, 0, 0.25, 1] }}
        >
          <p style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.52rem",
            letterSpacing: "0.25em",
            color: "#111",
            opacity: 0.35,
            marginBottom: "1.2rem",
          }}>
            {entry.year}
          </p>
          <h2 style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            color: "#111",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}>
            {entry.title}
          </h2>
          <p style={{
            fontFamily: FUTURA,
            fontWeight: 400,
            fontSize: "0.73rem",
            letterSpacing: "0.03em",
            lineHeight: 2,
            color: "#111",
            opacity: 0.55,
            maxWidth: "44ch",
          }}>
            {entry.detail}
          </p>

          {/* Step counter */}
          <p style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.52rem",
            letterSpacing: "0.18em",
            color: "#111",
            opacity: 0.2,
            marginTop: "3rem",
          }}>
            {idx + 1} / {total}
          </p>
        </motion.div>
      </div>

      {/* ── Right: Image ── */}
      <div style={{ width: "38%", flexShrink: 0, overflow: "hidden" }}>
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
