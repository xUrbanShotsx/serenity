"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
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
  },
  {
    year: "2020",
    title: "The Decision",
    short: "Something intentional. Or nothing at all.",
    detail:
      "The world went quiet, and so did they. Months of stillness gave the idea room to grow into something real. The brief they gave themselves was simple: build something that feels like it belongs here. No shortcuts on materials, no room that didn't earn its place. If it couldn't be done properly, it wouldn't be done at all.",
  },
  {
    year: "2021",
    title: "Breaking Ground",
    short: "Local hands. Slow work. No apologies.",
    detail:
      "They hired tradespeople from Berry and the surrounding towns. A builder who had worked in the region for twenty years. A carpenter who took three weeks on the kitchen joinery alone. The structural decisions were made on-site, walking the land in the mornings, adjusting to what the ground and light asked for rather than what the drawings assumed.",
  },
  {
    year: "2022",
    title: "The Details",
    short: "Every material had to earn its place.",
    detail:
      "Stone sourced from a nearby quarry. Timber milled from fallen trees on the property. The olive grove that had been here long before them gave the first suite its name. The way afternoon light fell across the deck of the second suggested its own. The third suite sat at the edge of the hill, looking out — its name came last, and felt obvious the moment they said it aloud.",
  },
  {
    year: "2023",
    title: "First Guests",
    short: "A Tuesday in April. No fanfare.",
    detail:
      "There was no launch. No event. A family from Melbourne arrived on a Tuesday in April — two parents, three children, and a dog who immediately claimed the terrace. They stayed for four nights. On the last morning, one of the kids left a drawing on the kitchen table. It's still there, tucked inside a drawer.",
  },
  {
    year: "Now",
    title: "The Ongoing",
    short: "Returning guests. A filling garden.",
    detail:
      "The olive trees are producing. The garden is filling in the way gardens do — unhurried and without instruction. Guests come back, sometimes with the same people, sometimes with different ones. Some stay for one night. Some stay for two weeks and lose track of the days. That was always the hope.",
  },
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.25, 0, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function StoryPage() {
  const [active, setActive] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const updateLine = () => {
      const container = timelineRef.current;
      const activeDot = dotRefs.current[active];
      if (!container || !activeDot) return;
      const containerTop = container.getBoundingClientRect().top;
      const dotCenter =
        activeDot.getBoundingClientRect().top +
        activeDot.getBoundingClientRect().height / 2;
      setLineHeight(dotCenter - containerTop);
    };
    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, [active]);

  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "calc(68px + 8rem)",
          paddingBottom: "8rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <FadeIn>
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
            THE STORY
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              color: "#111",
              lineHeight: 1.1,
              marginBottom: "3rem",
            }}
          >
            Built slowly,
            <br />
            on purpose.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.78rem",
              letterSpacing: "0.03em",
              lineHeight: 2,
              color: "#111",
              opacity: 0.6,
              maxWidth: "52ch",
            }}
          >
            The Coastal wasn't designed for a market or a trend. It came from a
            piece of land, a long pause, and the kind of conviction that only
            arrives when you stop trying to be practical about it.
          </p>
        </FadeIn>
      </section>

      {/* ── Divider ────────────────────────────────────────────── */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", maxWidth: "1200px", margin: "0 auto 0 3rem", marginRight: "3rem" }} />

      {/* ── Prose ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "8rem 3rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        <FadeIn>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.3rem, 1.8vw, 1.7rem)",
              lineHeight: 1.65,
              color: "#111",
              opacity: 0.85,
            }}
          >
            "There's a version of this place that's a weekend rental with good
            WiFi. We were never interested in that version."
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.6rem",
            }}
          >
            <p
              style={{
                fontFamily: FUTURA,
                fontWeight: 400,
                fontSize: "0.72rem",
                letterSpacing: "0.03em",
                lineHeight: 1.95,
                color: "#111",
                opacity: 0.6,
              }}
            >
              The Coastal sits on twelve acres between Berry and the coast — close
              enough to both that neither feels like an effort, far enough from
              each that you can forget they exist. The Residence, the main house,
              came first. It was built for people who want space without formality:
              four bedrooms, a living area that doesn't know the meaning of the
              word intimate, and a terrace that faces the right direction.
            </p>
            <p
              style={{
                fontFamily: FUTURA,
                fontWeight: 400,
                fontSize: "0.72rem",
                letterSpacing: "0.03em",
                lineHeight: 1.95,
                color: "#111",
                opacity: 0.6,
              }}
            >
              The three suites came later, each shaped by what the site offered.
              The Olive is shaded by trees that were here before anyone. The
              Shoreline faces east and catches the light first. The Horizon sits
              at the highest point of the property and earns its name twice a
              day — at dawn and again, more quietly, at dusk.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#faf9f7",
          padding: "8rem 3rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <p
              style={{
                fontFamily: FUTURA,
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#111",
                opacity: 0.4,
                marginBottom: "5rem",
              }}
            >
              THE JOURNEY
            </p>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left — vertical timeline */}
            <div ref={timelineRef} style={{ position: "relative" }}>
              {/* Filled progress line */}
              <div
                style={{
                  position: "absolute",
                  left: "7px",
                  top: 0,
                  width: "1px",
                  height: `${lineHeight}px`,
                  backgroundColor: "#111",
                  transition: "height 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
              />
              {/* Background line */}
              <div
                style={{
                  position: "absolute",
                  left: "7px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "rgba(0,0,0,0.1)",
                }}
              />

              {TIMELINE.map((item, i) => (
                <button
                  key={i}
                  ref={(el) => { dotRefs.current[i] = el; }}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.4rem",
                    padding: "0 0 2.8rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: i === active ? "#111" : "#fff",
                      border: `1.5px solid ${i <= active ? "#111" : "rgba(0,0,0,0.2)"}`,
                      flexShrink: 0,
                      marginTop: "1px",
                      transition: "all 0.35s ease",
                      zIndex: 1,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: FUTURA,
                        fontWeight: 700,
                        fontSize: "0.52rem",
                        letterSpacing: "0.2em",
                        color: i === active ? "#111" : "rgba(0,0,0,0.3)",
                        marginBottom: "0.3rem",
                        transition: "color 0.3s",
                      }}
                    >
                      {item.year}
                    </p>
                    <p
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "1rem",
                        color: i === active ? "#111" : "rgba(0,0,0,0.35)",
                        lineHeight: 1.2,
                        marginBottom: "0.4rem",
                        transition: "color 0.3s",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontFamily: FUTURA,
                        fontWeight: 400,
                        fontSize: "0.6rem",
                        letterSpacing: "0.02em",
                        color: i === active ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.25)",
                        lineHeight: 1.6,
                        transition: "color 0.3s",
                      }}
                    >
                      {item.short}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right — detail panel */}
            <div style={{ paddingTop: "0.1rem" }}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0, 0.25, 1] }}
              >
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 700,
                    fontSize: "0.52rem",
                    letterSpacing: "0.22em",
                    color: "#111",
                    opacity: 0.35,
                    marginBottom: "1.5rem",
                  }}
                >
                  {TIMELINE[active].year}
                </p>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    color: "#111",
                    lineHeight: 1.1,
                    marginBottom: "2rem",
                  }}
                >
                  {TIMELINE[active].title}
                </h2>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 400,
                    fontSize: "0.75rem",
                    letterSpacing: "0.03em",
                    lineHeight: 2,
                    color: "#111",
                    opacity: 0.6,
                    maxWidth: "48ch",
                  }}
                >
                  {TIMELINE[active].detail}
                </p>

                {/* Prev / Next */}
                <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
                  {active > 0 && (
                    <button
                      onClick={() => setActive(active - 1)}
                      style={{
                        fontFamily: FUTURA,
                        fontWeight: 700,
                        fontSize: "0.55rem",
                        letterSpacing: "0.18em",
                        color: "#111",
                        opacity: 0.35,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.35")}
                    >
                      ← PREVIOUS
                    </button>
                  )}
                  {active < TIMELINE.length - 1 && (
                    <button
                      onClick={() => setActive(active + 1)}
                      style={{
                        fontFamily: FUTURA,
                        fontWeight: 700,
                        fontSize: "0.55rem",
                        letterSpacing: "0.18em",
                        color: "#111",
                        opacity: 0.6,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                    >
                      NEXT →
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "10rem 3rem",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              color: "#111",
              lineHeight: 1.6,
              opacity: 0.85,
              marginBottom: "3rem",
            }}
          >
            Four stays. One piece of land. The same view it's always been.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href="/collection"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "#111",
              textDecoration: "none",
              border: "1.5px solid #111",
              padding: "0.7rem 1.8rem",
              display: "inline-block",
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
            VIEW THE COLLECTION
          </a>
        </FadeIn>
      </section>
    </main>
  );
}
