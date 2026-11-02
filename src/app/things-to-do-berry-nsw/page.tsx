import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Things to Do in Berry NSW | Restaurants, Beaches & Wineries | The Coastal",
  description:
    "Discover the best things to do near Berry NSW — Seven Mile Beach, Sara Dining, Silos Estate, Two Figs Winery, the Berry Donut Van, Kiama, and more. Stay at The Coastal, Berry's finest private accommodation.",
  keywords: [
    "things to do berry nsw",
    "things to do near berry nsw",
    "berry nsw attractions",
    "restaurants berry nsw",
    "berry nsw restaurants",
    "best restaurants berry nsw",
    "sara dining berry",
    "silos estate berry nsw",
    "two figs winery berry",
    "milkwood bakery berry",
    "berry donut van",
    "seven mile beach nsw",
    "berry nsw things to see",
    "what to do berry nsw",
    "berry nsw weekend",
    "south coast nsw restaurants",
    "berry nsw wineries",
    "berry museum",
    "queen street berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/things-to-do-berry-nsw",
  },
  openGraph: {
    title: "Things to Do in Berry NSW | The Coastal",
    description:
      "The best restaurants, beaches, wineries and attractions near Berry NSW — and the finest private accommodation to come back to.",
    url: "https://thecoastal.com.au/things-to-do-berry-nsw",
  },
};

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

const HIGHLIGHTS = [
  {
    name: "Berry Donut Van",
    description:
      "The most famous stop on Queen Street and possibly the South Coast. Hot jam donuts made to order from a bright yellow van — cash only, gone by mid-morning on weekends. Get there before nine if you want to avoid the queue. Worth the early start.",
  },
  {
    name: "Milkwood Bakery",
    description:
      "Slow-fermented sourdough, laminated pastries, and honest filter coffee. A five-minute walk from The Coastal and the most reliable way to start any morning in Berry. The focaccia sells out early on weekends.",
  },
  {
    name: "Sara Dining",
    description:
      "The best restaurant in Berry by most measures — intimate, produce-led, and seasonally driven. The menu draws from farms and coast immediately surrounding the Shoalhaven. Bookings essential, especially on weekends. Most guests mention Sara when they check out.",
  },
  {
    name: "Silos Estate",
    description:
      "Berry's most distinctive dining address — a restaurant built inside converted grain silos with a menu that leans on local producers and a wine list worth exploring. Also produces its own Silos label wines. Long lunches are the reason to go.",
  },
  {
    name: "Two Figs Winery",
    description:
      "Eight minutes from the property in Jaspers Brush. An independent cellar door producing cool-climate wines with genuine character — skin-contact whites, earthy reds, and the occasional release that suggests careful attention to what this region can do. No tasting fee, no rush.",
  },
  {
    name: "Queen Street Boutiques",
    description:
      "Berry's main street holds its character better than most. Independent shops occupy nearly every building: antique dealers with genuine stock, homewares, clothing, galleries, food providores, and a produce shop with the local honey. Allow at least an hour.",
  },
  {
    name: "Seven Mile Beach",
    description:
      "Twelve minutes from The Coastal and entirely within its own national park — which is why it remains one of the least crowded long beaches in NSW. Pale wide sand, consistent surf, and a headland walk at Gerroa with views back along the full stretch. Sunrise here is something guests mention unprompted.",
  },
  {
    name: "Berry Museum",
    description:
      "Housed in the old Bank of New South Wales building on Queen Street — one of Berry's finest heritage facades. The museum covers the Wodi Wodi people, European settlement, and the social history of Berry township with more depth and care than its modest exterior suggests.",
  },
];

export default function ThingsToDoPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "160px 2rem 8rem" }}>
        <p style={{ fontFamily: FUTURA, fontSize: "0.52rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "1.2rem" }}>
          BERRY NSW · SOUTH COAST AUSTRALIA
        </p>
        <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: INK, lineHeight: 1.1, marginBottom: "2.5rem" }}>
          Things to Do in Berry, NSW
        </h1>

        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "3.5rem" }}>
          Berry is two hours south of Sydney and one of the most well-rounded destinations on the NSW South Coast. Independent restaurants, cellar doors, a national park beach, and a main street that's been better preserved than most. Here are the places worth your time — and the accommodation worth coming back to.
        </p>

        {HIGHLIGHTS.map((item) => (
          <div key={item.name} style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(26,25,22,0.08)" }}>
            <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)", color: INK, marginBottom: "1rem" }}>
              {item.name}
            </h2>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: INK, lineHeight: 1.85, opacity: 0.7 }}>
              {item.description}
            </p>
          </div>
        ))}

        <div style={{ background: "rgba(26,25,22,0.04)", border: "1px solid rgba(26,25,22,0.08)", padding: "3rem", marginTop: "4rem", marginBottom: "3rem" }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.25em", color: INK, opacity: 0.4, marginBottom: "1rem" }}>
            WHERE TO STAY IN BERRY NSW
          </p>
          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: INK, lineHeight: 1.8, opacity: 0.8, marginBottom: "2rem" }}>
            The Coastal is Berry's finest private holiday accommodation — a four-bedroom house sleeping 8+ and three private boutique suites, set on 12 acres five minutes from Queen Street and 12 minutes from Seven Mile Beach.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: CREAM, textDecoration: "none", backgroundColor: INK, borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
              BOOK NOW
            </Link>
            <Link href="/experiences" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: INK, textDecoration: "none", border: "1.5px solid rgba(26,25,22,0.4)", borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
              MORE EXPERIENCES
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
