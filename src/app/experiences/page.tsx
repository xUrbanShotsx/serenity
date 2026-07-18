"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const EXPERIENCES = [
  {
    category: "AT THE COASTAL",
    title: "On Property",
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
    category: "THE VILLAGE",
    title: "Berry Township",
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
    category: "THE COAST",
    title: "Seven Mile Beach",
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
    category: "THE REGION",
    title: "Further Afield",
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function ExperiencesPage() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "calc(68px + 7rem)",
          paddingBottom: "7rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <FadeIn>
          <p style={{
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem",
            letterSpacing: "0.25em", color: "#111", opacity: 0.4, marginBottom: "2rem",
          }}>
            BERRY, NSW SOUTH COAST
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: SERIF, fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(3rem, 5vw, 5rem)", color: "#111", lineHeight: 1.05,
            marginBottom: "2.5rem",
          }}>
            Experiences
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: FUTURA, fontWeight: 400, fontSize: "0.75rem",
            letterSpacing: "0.03em", lineHeight: 1.95, color: "#111",
            opacity: 0.55, maxWidth: "50ch",
          }}>
            Between the property, the village, the beach, and the hills — there's
            more within reach than most people expect. This is a guide to making
            the most of it.
          </p>
        </FadeIn>
      </section>

      {/* ── Experience sections ──────────────────────────────────── */}
      {EXPERIENCES.map((exp, i) => (
        <section
          key={exp.category}
          style={{
            display: "flex",
            flexDirection: exp.flip ? "row-reverse" : "row",
            minHeight: "90vh",
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          {/* Image */}
          <FadeIn delay={0.05}>
            <div style={{
              width: "45vw",
              flexShrink: 0,
              overflow: "hidden",
              minHeight: "90vh",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={exp.image}
                alt={exp.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "5rem 4.5rem",
          }}>
            <FadeIn delay={0.1}>
              <p style={{
                fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem",
                letterSpacing: "0.25em", color: "#111", opacity: 0.35, marginBottom: "1.2rem",
              }}>
                {exp.category}
              </p>
              <h2 style={{
                fontFamily: SERIF, fontStyle: "italic", fontWeight: 400,
                fontSize: "clamp(2rem, 3vw, 3rem)", color: "#111", lineHeight: 1.1,
                marginBottom: "1.8rem",
              }}>
                {exp.title}
              </h2>
              <p style={{
                fontFamily: FUTURA, fontWeight: 400, fontSize: "0.7rem",
                letterSpacing: "0.03em", lineHeight: 1.95, color: "#111",
                opacity: 0.55, maxWidth: "38ch", marginBottom: "2.5rem",
              }}>
                {exp.description}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.07)", marginBottom: "2.5rem", maxWidth: "320px" }} />

              {/* List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {exp.items.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "18px", height: "1px", backgroundColor: "rgba(0,0,0,0.2)", flexShrink: 0 }} />
                    <span style={{
                      fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem",
                      letterSpacing: "0.04em", color: "#111", opacity: 0.6,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ── Closing CTA ─────────────────────────────────────────── */}
      <section style={{
        padding: "8rem 3rem",
        textAlign: "center",
        backgroundColor: "#faf9f7",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}>
        <FadeIn>
          <p style={{
            fontFamily: SERIF, fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(1.4rem, 2.2vw, 2rem)", color: "#111",
            lineHeight: 1.6, opacity: 0.85, marginBottom: "2.5rem", maxWidth: "44ch",
            margin: "0 auto 2.5rem",
          }}>
            Ready to plan your stay?
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <a
            href="/collection"
            style={{
              fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem",
              letterSpacing: "0.18em", color: "#111", textDecoration: "none",
              border: "1.5px solid #111", padding: "0.7rem 1.8rem",
              display: "inline-block", transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#111"; }}
          >
            VIEW THE COLLECTION
          </a>
        </FadeIn>
      </section>
    </main>
  );
}
