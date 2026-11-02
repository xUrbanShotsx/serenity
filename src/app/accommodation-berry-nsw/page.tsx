import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accommodation Berry NSW | Luxury Holiday House & Suites | The Coastal",
  description:
    "Looking for accommodation in Berry NSW? The Coastal offers a luxury 4-bedroom holiday house sleeping 8+ and three private boutique suites on 12 acres. Berry's finest private retreat. Book direct.",
  keywords: [
    "accommodation berry nsw",
    "berry nsw accommodation",
    "holiday house berry nsw",
    "berry nsw holiday rental",
    "luxury accommodation berry nsw",
    "berry nsw where to stay",
    "private accommodation berry",
    "4 bedroom holiday house berry nsw",
    "group accommodation berry nsw",
    "couples accommodation berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/accommodation-berry-nsw",
  },
  openGraph: {
    title: "Accommodation Berry NSW | The Coastal",
    description:
      "Luxury holiday house and private suites in Berry NSW. 4 bedrooms, heated pool, 12 acres — Berry's finest private retreat.",
    url: "https://thecoastal.com.au/accommodation-berry-nsw",
  },
};

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function AccommodationBerryPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "160px 2rem 8rem" }}>
        <p style={{ fontFamily: FUTURA, fontSize: "0.52rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "1.2rem" }}>
          BERRY NSW · SOUTH COAST AUSTRALIA
        </p>
        <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: INK, lineHeight: 1.1, marginBottom: "2.5rem" }}>
          Accommodation in Berry, NSW
        </h1>

        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          The Coastal is Berry's premier private holiday accommodation — a 12-acre retreat set between the hills of Berry township and the wild stretch of Seven Mile Beach on the NSW South Coast. Whether you're looking for a large holiday house in Berry for a family or group, or a private boutique suite for two, The Coastal has four distinct stays to choose from.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          The House — 4-Bedroom Holiday House, Berry NSW
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Our main residence is a four-bedroom holiday house in Berry sleeping 8 or more guests. Built from local stone and timber, it features open-plan living connecting to a western-facing terrace, a fully equipped kitchen, heated pool, and fire pit. The best group accommodation in Berry, NSW — just five minutes on foot to Berry's famous Queen Street and 12 minutes to Seven Mile Beach.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Three Private Suites — Couples Accommodation Berry NSW
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          The Olive Suite, Shoreline Suite, and Horizon Suite are three intimate one-bedroom retreats, each with a private bathroom and outdoor space. Ideal for couples or solo travellers seeking boutique accommodation in Berry NSW without the noise of a hotel or motel. Each suite can be booked individually, or all three together for a group getaway.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Berry NSW — Where to Stay
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Berry is a two-hour drive from Sydney and one of the most loved weekend destinations on the NSW South Coast. Famous for its donut van, independent Queen Street boutiques, Silos Estate winery, and proximity to Seven Mile Beach National Park. The Coastal is the most private and spacious accommodation Berry NSW has to offer — no shared facilities, no check-in desk, just 12 acres of gardens and sky.
        </p>

        <div style={{ marginTop: "4rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: CREAM, textDecoration: "none", backgroundColor: INK, borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
            BOOK NOW
          </Link>
          <Link href="/collection" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: INK, textDecoration: "none", border: "1.5px solid rgba(26,25,22,0.4)", borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
            VIEW THE COLLECTION
          </Link>
        </div>
      </article>
    </main>
  );
}
