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
    title: "Famous Berry Donut Van",
    description:
      "No visit to Berry is complete without it. The donut van has been parked on Queen Street for decades — hot, sugar-dusted, and gone by mid-morning on weekends. Get there early, bring cash, and don't plan anything too ambitious for the hour that follows.",
    image: "/Arielshot.jpg",
    flip: false,
  },
  {
    title: "Milkwood Bakery",
    description:
      "A proper bakery in the best sense — slow-fermented sourdough, pastries worth getting out of bed for, and coffee that earns its reputation. A short walk from the property and the most reliable way to start the day in Berry.",
    image: "/Olivesuite.jpg",
    flip: true,
  },
  {
    title: "Two Figs Winery",
    description:
      "A small, well-regarded winery a short drive from Berry, producing cool-climate wines from the Southern Highlands. The cellar door is unhurried and genuinely welcoming — the kind of place where one glass becomes three without anyone rushing you.",
    image: "/shorelinesuite.jpg",
    flip: false,
  },
  {
    title: "Silos Estate",
    description:
      "Set in a converted railway silo on the edge of Berry, Silos Estate is one of the region's most loved destinations for lunch or a long dinner. The wine list leans local, the kitchen is confident, and the setting is unlike anything else on the South Coast.",
    image: "/horizonsuite.jpg",
    flip: true,
  },
  {
    title: "Sara Dining",
    description:
      "Intimate, considered, and quietly exceptional. Sara is the kind of restaurant that earns a return visit before you've finished your first. A tasting-focused menu that takes the produce of the South Coast seriously — book ahead.",
    image: "/Arielshot.jpg",
    flip: false,
  },
  {
    title: "Queen Street Boutiques",
    description:
      "Berry's main street is lined with independently owned shops that reward a slow walk — homewares, antiques, design, clothing, and food stores that reflect the character of the town. Better browsing than most city strips, without the pressure.",
    image: "/Olivesuite.jpg",
    flip: true,
  },
  {
    title: "7 Mile Beach",
    description:
      "Twelve minutes from the property, Seven Mile Beach sits inside its own national park — one of NSW's longest and least visited stretches of coast. Arrive early on a weekday and you may have the whole thing to yourself. The headland at Gerroa is worth the extra walk.",
    image: "/shorelinesuite.jpg",
    flip: false,
  },
  {
    title: "Berry Museum",
    description:
      "Housed in a heritage building on Queen Street, the Berry Museum tells the story of the town and the wider Shoalhaven region with more depth than you'd expect. Worth an hour on a rainy afternoon or a quieter day when the beach can wait.",
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
          key={exp.title}
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
            <div style={{ position: "relative", zIndex: 1 }}>
              <FadeIn delay={0.1}>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(2.5rem, 3.5vw, 4rem)",
                    color: INK,
                    lineHeight: 1.05,
                    marginBottom: "2rem",
                  }}
                >
                  {exp.title}
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                    lineHeight: 1.8,
                    color: "rgba(26,25,22,0.6)",
                    maxWidth: "100%",
                  }}
                >
                  {exp.description}
                </p>
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
