"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const EXPERIENCES = [
  {
    num: "01",
    category: "AT THE COASTAL",
    title: "On Property",
    distance: "Right here",
    description:
      "The land itself is worth slowing down for. Twelve acres of gardens, olive groves, and open sky — with everything you need to make the most of it.",
    items: [
      "Heated pool & sun terrace",
      "Outdoor kitchen & fire pit",
      "Morning garden walks",
      "Breakfast basket service",
      "Private outdoor dining",
      "Stargazing from the hill",
    ],
    image: "/Arielshot.jpg",
    flip: false,
    dark: false,
  },
  {
    num: "02",
    category: "THE VILLAGE",
    title: "Berry Township",
    distance: "5 min walk",
    description:
      "A short stroll from the property, Berry is one of the South Coast's most beloved towns — small enough to cover in a morning, good enough to spend a week in.",
    items: [
      "Berry Farmers Market (Sat)",
      "The Silos restaurant",
      "Berry Sourdough Bakery",
      "Local antique & design stores",
      "Berry Hotel & wine bar",
      "Produce stores & providores",
    ],
    image: "/Olivesuite.jpg",
    flip: true,
    dark: false,
  },
  {
    num: "03",
    category: "THE COAST",
    title: "Seven Mile Beach",
    distance: "12 min drive",
    description:
      "Minutes down the road, one of NSW's longest and least crowded beaches. Arrive early and you may have it to yourself.",
    items: [
      "Seven Mile Beach National Park",
      "Surfing & bodyboarding",
      "Sunrise coastal walks",
      "Gerroa headland lookout",
      "Shoalhaven River mouth",
      "Rock platform fishing",
    ],
    image: "/shorelinesuite.jpg",
    flip: false,
    dark: true,
  },
  {
    num: "04",
    category: "THE REGION",
    title: "Further Afield",
    distance: "Under 1 hour",
    description:
      "The NSW South Coast rewards those who venture beyond the beach. Within an hour, you'll find wine country, ancient rainforest, and one of Australia's clearest bays.",
    items: [
      "Kangaroo Valley & gorge walks",
      "Jervis Bay — Hyams Beach",
      "Southern Highlands wineries",
      "Fitzroy Falls lookout",
      "Nowra & Shoalhaven arts",
      "Budderoo National Park",
    ],
    image: "/horizonsuite.jpg",
    flip: true,
    dark: false,
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.25, 0, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ExperiencesPage() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      <Navbar />

      {/* ── Experience sections ──────────────────────────────────── */}
      {EXPERIENCES.map((exp, i) => (
        <section
          key={exp.num}
          style={{
            display: "flex",
            flexDirection: exp.flip ? "row-reverse" : "row",
            minHeight: "95vh",
            backgroundColor: exp.dark ? "#111" : "#fff",
            paddingTop: i === 0 ? "88px" : 0,
          }}
        >
          {/* Image — fills full section height */}
          <div
            style={{
              width: "52%",
              flexShrink: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={exp.image}
              alt={exp.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                minHeight: "95vh",
              }}
            />
          </div>

          {/* Text panel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "5rem 4rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ghost number behind content */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-2rem",
                right: exp.flip ? "auto" : "-1rem",
                left: exp.flip ? "-1rem" : "auto",
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(12rem, 20vw, 22rem)",
                lineHeight: 1,
                color: exp.dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.045)",
                userSelect: "none",
                pointerEvents: "none",
                letterSpacing: "-0.05em",
              }}
            >
              {exp.num}
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <FadeIn>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 700,
                    fontSize: "0.5rem",
                    letterSpacing: "0.28em",
                    color: exp.dark
                      ? "rgba(255,255,255,0.35)"
                      : "rgba(0,0,0,0.3)",
                    marginBottom: "1rem",
                  }}
                >
                  {exp.num} — {exp.category}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(2.5rem, 3.5vw, 4rem)",
                    color: exp.dark ? "#fff" : "#111",
                    lineHeight: 1.05,
                    marginBottom: "0.7rem",
                  }}
                >
                  {exp.title}
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 700,
                    fontSize: "0.5rem",
                    letterSpacing: "0.22em",
                    color: exp.dark
                      ? "rgba(255,255,255,0.28)"
                      : "rgba(0,0,0,0.22)",
                    marginBottom: "2.2rem",
                  }}
                >
                  {exp.distance}
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 400,
                    fontSize: "0.72rem",
                    letterSpacing: "0.03em",
                    lineHeight: 1.95,
                    color: exp.dark
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(0,0,0,0.5)",
                    maxWidth: "38ch",
                    marginBottom: "2.5rem",
                  }}
                >
                  {exp.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: exp.dark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.07)",
                    maxWidth: "280px",
                    marginBottom: "2.2rem",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                  }}
                >
                  {exp.items.map((item, j) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: 0.3 + j * 0.07,
                        ease: [0.25, 0, 0.25, 1],
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "1px",
                          backgroundColor: exp.dark
                            ? "rgba(255,255,255,0.2)"
                            : "rgba(0,0,0,0.18)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FUTURA,
                          fontWeight: 400,
                          fontSize: "0.65rem",
                          letterSpacing: "0.04em",
                          color: exp.dark
                            ? "rgba(255,255,255,0.55)"
                            : "rgba(0,0,0,0.55)",
                        }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── Closing CTA — image-backed ───────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "65vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/horizonsuite.jpg"
          alt="The Coastal"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.48)",
          }}
        />
        <div
          style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}
        >
          <FadeIn>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#fff",
                lineHeight: 1.5,
                marginBottom: "2.5rem",
              }}
            >
              Ready to plan your stay?
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
                color: "#fff",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.65)",
                padding: "0.8rem 2.2rem",
                display: "inline-block",
                transition: "background 0.25s, color 0.25s, border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#111";
                e.currentTarget.style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)";
              }}
            >
              VIEW THE COLLECTION
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
