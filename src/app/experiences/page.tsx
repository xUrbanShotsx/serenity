"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

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
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
    <main style={{ backgroundColor: CREAM }}>
      <Navbar />

      {EXPERIENCES.map((exp, i) => (
        <section
          key={exp.num}
          style={{
            display: "flex",
            flexDirection: exp.flip ? "row-reverse" : "row",
            minHeight: "65vh",
            backgroundColor: CREAM,
            paddingTop: i === 0 ? "120px" : 0,
          }}
        >
          {/* Image */}
          <div
            style={{
              width: "38%",
              flexShrink: 0,
              overflow: "hidden",
              position: "relative",
              margin: "2rem",
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
                minHeight: "65vh",
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
            {/* Ghost number */}
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
                color: "rgba(26,25,22,0.04)",
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
                    color: "rgba(26,25,22,0.3)",
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
                    color: INK,
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
                    color: "rgba(26,25,22,0.22)",
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
                    color: "rgba(26,25,22,0.5)",
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
                    backgroundColor: "rgba(26,25,22,0.08)",
                    maxWidth: "280px",
                    marginBottom: "2.2rem",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {exp.items.map((item, j) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.3 + j * 0.07, ease: [0.25, 0, 0.25, 1] }}
                      style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "1px",
                          backgroundColor: "rgba(26,25,22,0.18)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: FUTURA,
                          fontWeight: 400,
                          fontSize: "0.65rem",
                          letterSpacing: "0.04em",
                          color: "rgba(26,25,22,0.55)",
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

      {/* Footer */}
      <footer style={{ backgroundColor: INK, color: CREAM, padding: "5rem 3rem 3rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "3rem",
              paddingBottom: "4rem",
              borderBottom: "1px solid rgba(242,237,229,0.1)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.28em", color: CREAM }}>
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
                <a key={label} href={href} style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.6)")}
                >{label}</a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>
                CONTACT
              </p>
              <a href="mailto:hello@thecoastal.com.au" style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.6)")}
              >hello@thecoastal.com.au</a>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.45)", lineHeight: 1.7 }}>
                Berry, NSW 2535<br />South Coast, Australia
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem" }}>
            <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.12em", color: "rgba(242,237,229,0.25)" }}>
              © {new Date().getFullYear()} THE COASTAL. ALL RIGHTS RESERVED.
            </p>
            <a href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.18em", color: "rgba(242,237,229,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = CREAM)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,237,229,0.35)")}
            >BOOK NOW</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
