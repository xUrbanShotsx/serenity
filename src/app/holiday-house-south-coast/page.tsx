import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holiday House South Coast NSW | Sleeps 8+ | The Coastal Berry",
  description:
    "Searching for a holiday house on the NSW South Coast? The Coastal in Berry offers a luxury 4-bedroom house sleeping 8+ guests and three private suites. Heated pool, 12 acres, 2hrs from Sydney.",
  keywords: [
    "holiday house south coast nsw",
    "holiday house south coast",
    "south coast nsw holiday rental",
    "holiday house sleeping 8 nsw",
    "large holiday house south coast",
    "group holiday house nsw",
    "holiday house berry nsw",
    "holiday home south coast nsw",
    "private holiday house nsw",
    "luxury holiday house nsw south coast",
    "south coast holiday accommodation",
    "south coast nsw house rental",
    "shoalhaven holiday house",
    "holiday house 2 hours sydney",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/holiday-house-south-coast",
  },
  openGraph: {
    title: "Holiday House South Coast NSW | The Coastal Berry",
    description:
      "Luxury 4-bedroom holiday house on the NSW South Coast. Sleeps 8+. Heated pool, fire pit, 12 acres. Berry NSW, 2 hours from Sydney.",
    url: "https://thecoastal.com.au/holiday-house-south-coast",
  },
};

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function HolidayHouseSouthCoastPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "160px 2rem 8rem" }}>
        <p style={{ fontFamily: FUTURA, fontSize: "0.52rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "1.2rem" }}>
          BERRY NSW · 2 HOURS FROM SYDNEY
        </p>
        <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: INK, lineHeight: 1.1, marginBottom: "2.5rem" }}>
          Holiday House on the NSW South Coast
        </h1>

        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          The Coastal is a luxury South Coast NSW holiday house set on 12 private acres near Berry — two hours south of Sydney and minutes from Seven Mile Beach. The main house sleeps 8 or more across four bedrooms, with a heated pool, fire pit, fully equipped kitchen, and a terrace that faces the afternoon sun. It's the kind of South Coast holiday house that earns a return booking before check-out.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Large Group Holiday House — South Coast NSW
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          If you're looking for a large holiday house on the South Coast of NSW for a group — a family gathering, a milestone birthday, a long weekend with friends — The Coastal's main house is designed exactly for that. Four bedrooms, two bathrooms, a kitchen built to cook in properly, outdoor dining for a full group, and enough land around the house that nobody feels on top of each other. The private pool and fire pit mean you rarely need to leave.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Also Available: Private Suites
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Alongside the main holiday house, The Coastal offers three private one-bedroom suites — the Olive, Shoreline, and Horizon — each with a private outdoor space and full bathroom. Perfect for couples or smaller groups wanting boutique South Coast NSW accommodation with absolute privacy.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          South Coast NSW — The Best of It
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Set between Berry and Seven Mile Beach, The Coastal is placed at the heart of what makes the South Coast special. Seven Mile Beach National Park is 12 minutes away — one of the least crowded long beaches in NSW. Berry township is walkable from the property, with Sara Dining, Silos Estate, Two Figs Winery, Milkwood Bakery, the famous Berry Donut Van, and independent boutiques all within easy reach. Kiama is 35 minutes north. Jervis Bay is 45 minutes south.
        </p>

        <div style={{ marginTop: "4rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: CREAM, textDecoration: "none", backgroundColor: INK, borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
            BOOK NOW
          </Link>
          <Link href="/house" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: INK, textDecoration: "none", border: "1.5px solid rgba(26,25,22,0.4)", borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
            VIEW THE HOUSE
          </Link>
        </div>
      </article>
    </main>
  );
}
