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
      "The Berry Donut Van has been an institution on Queen Street for longer than most locals can remember — a bright yellow van, a short queue, and hot jam donuts made to order. They are the kind of thing that sounds unremarkable until you're standing in the morning cool holding one, and then it makes complete sense why people drive from Sydney specifically for them. Cash only, gone by mid-morning on weekends, and worth every minute of the wait. Get there before nine if you want a clear run at it. Bring the kids, or don't — either way, buy more than you think you'll need.",
    image: "/Arielshot.jpg",
    flip: false,
  },
  {
    title: "Milkwood Bakery",
    description:
      "Milkwood is what a neighbourhood bakery should be — slow-fermented sourdough with a proper crust, laminated pastries that hold their shape, and filter coffee that doesn't require an explanation. The space is small and unhurried, the kind of place where it's easy to sit longer than you meant to. A five-minute walk from the property, it's the most reliable way to start a morning in Berry. The focaccia sells out early on weekends, and the seasonal tarts are worth building the afternoon around. If you're self-catering, the loaves travel well and keep for two days.",
    image: "/Olivesuite.jpg",
    flip: true,
  },
  {
    title: "Two Figs Winery",
    description:
      "Two Figs sits just outside Berry in Jaspers Brush, a small and genuinely independent winery producing cool-climate wines from estate and regional fruit. The cellar door is the kind that doesn't require an occasion — pull up, pour a glass, and take your time. The wines lean towards the more textural end: skin-contact whites, earthy reds, and the occasional release that suggests someone is paying close attention to what this region is capable of. No tasting fee, no music policy, no rush. The drive there takes eight minutes and the drive back tends to take longer.",
    image: "/shorelinesuite.jpg",
    flip: false,
  },
  {
    title: "Silos Estate",
    description:
      "Built inside a cluster of converted grain silos on the edge of Berry, Silos Estate is one of the most distinctive dining addresses on the South Coast. The restaurant is confident and well-paced — a menu that draws heavily on local producers, a wine list that stretches into the interesting, and a room that rewards a long lunch. The stone and timber fit-out softens what might otherwise be an industrial space into something warm and considered. They also produce their own wine under the Silos label, which is available by the glass and worth trying before you buy a bottle to take home.",
    image: "/horizonsuite.jpg",
    flip: true,
  },
  {
    title: "Sara Dining",
    description:
      "Sara is the kind of restaurant that earns a return visit before you've finished your first. Intimate and unhurried, it operates with the confidence of somewhere that has thought carefully about every element — the menu, the light, the pace at which things arrive. The kitchen is produce-led and seasonally driven, drawing from the farms and coast immediately surrounding Berry, and the result is food that is specific to where you are in a way that can't be replicated anywhere else. The wine list is short and well-chosen. Bookings are essential and fill quickly on weekends, so plan ahead — it's the meal most guests mention when they check out.",
    image: "/Arielshot.jpg",
    flip: false,
  },
  {
    title: "Queen Street Boutiques",
    description:
      "Queen Street is Berry's main strip, and unlike most main strips, it has held its character. Independent shops occupy nearly every building — antique dealers with genuine stock, homewares stores that lean into the regional aesthetic without being precious about it, clothing boutiques, galleries, food providores, and a few places that are harder to categorise but worth stepping into anyway. The pace here is different to a city shopping street: nobody is trying to turn you over quickly, and browsing without buying is perfectly acceptable. Allow at least an hour, more if the produce shop near the top of the street still has the local honey in stock.",
    image: "/Olivesuite.jpg",
    flip: true,
  },
  {
    title: "7 Mile Beach",
    description:
      "Seven Mile Beach is twelve minutes from the property and sits entirely within its own national park, which is most of the reason it remains one of the least crowded long beaches in New South Wales. The sand is wide and pale, the water is clear, and on a mid-week morning in autumn or spring you can walk the full length without passing more than a handful of people. The surf is consistent enough to be worth bringing a board, and the headland at Gerroa at the southern end rewards the walk with views back along the full stretch of coast. Sunrise here is something guests mention unprompted. The national park entry is self-registration at the gate and costs a few dollars — bring coins.",
    image: "/shorelinesuite.jpg",
    flip: false,
  },
  {
    title: "Berry Museum",
    description:
      "Housed in the old Bank of New South Wales building on Queen Street — one of the best-preserved heritage facades in the town — the Berry Museum holds the history of the Shoalhaven region with considerably more care and depth than its modest exterior suggests. The collection covers the original Wodi Wodi people of the area, the European settlement of the land grant, the development of the dairy and agricultural industries that shaped the district, and the social history of Berry township itself. It's staffed by volunteers who tend to know more than the plaques do. Worth an hour on a slower afternoon, particularly with children, or on a day when the beach can wait.",
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

export default function ExperiencesPageClient() {
  return (
    <main style={{ backgroundColor: CREAM }}>
      <Navbar />

      {EXPERIENCES.map((exp, i) => (
        <section
          key={exp.title}
          className="r-exp-section"
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
            className="r-exp-img"
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
            className="r-exp-text"
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
            className="r-footer"
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
