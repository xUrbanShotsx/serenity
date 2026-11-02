import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accommodation Near Kiama NSW | 35 Min Drive | The Coastal Berry",
  description:
    "Luxury holiday accommodation 35 minutes from Kiama NSW. The Coastal in Berry offers a 4-bedroom holiday house and private suites on 12 acres. South Coast NSW's finest private retreat. Book direct.",
  keywords: [
    "accommodation near kiama nsw",
    "kiama accommodation",
    "kiama holiday house",
    "holiday house near kiama nsw",
    "kiama nsw holiday rental",
    "south coast accommodation near kiama",
    "kiama weekend getaway",
    "accommodation between sydney and kiama",
    "kiama south coast holiday",
    "berry nsw accommodation kiama",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/kiama-accommodation",
  },
  openGraph: {
    title: "Accommodation Near Kiama NSW | The Coastal Berry",
    description:
      "35 minutes from Kiama, The Coastal in Berry NSW offers luxury private holiday accommodation — house sleeping 8+ and boutique suites.",
    url: "https://thecoastal.com.au/kiama-accommodation",
  },
};

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function KiamaAccommodationPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "160px 2rem 8rem" }}>
        <p style={{ fontFamily: FUTURA, fontSize: "0.52rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "1.2rem" }}>
          35 MINUTES FROM KIAMA · BERRY NSW
        </p>
        <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: INK, lineHeight: 1.1, marginBottom: "2.5rem" }}>
          Luxury Accommodation Near Kiama, NSW
        </h1>

        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          If you're searching for accommodation near Kiama on the NSW South Coast, The Coastal in Berry is 35 minutes south — and worth every minute of the drive. A private 12-acre estate with a four-bedroom holiday house sleeping 8+ guests and three intimate suites. The kind of place that anchors a longer South Coast trip, or stands completely on its own.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Kiama + Berry — The Best of the South Coast
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Staying at The Coastal puts you within easy reach of both Kiama and Berry. From the property, Kiama's blowhole, Cathedral Rocks, and scenic coastal walks are 35 minutes north on the Princes Highway. Berry township — with Sara Dining, Silos Estate, Two Figs Winery, Milkwood Bakery, and the iconic Berry Donut Van — is a five-minute walk. Seven Mile Beach National Park is 12 minutes south. The Illawarra and Kiama regions are natural day trips; The Coastal is where you come back to.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Better Than a Hotel Near Kiama
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Most accommodation options around Kiama are hotels, motels, or managed apartments — shared facilities, thin walls, and checkout at 10am. The Coastal is different. Twelve acres to yourself. A heated pool. A fire pit. A kitchen worth cooking in. Private decks on every suite. The Illawarra and Kiama are easy day trips; The Coastal is the kind of accommodation that makes you want to stay in, too.
        </p>

        <div style={{ marginTop: "4rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: CREAM, textDecoration: "none", backgroundColor: INK, borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
            BOOK NOW
          </Link>
          <Link href="/collection" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", color: INK, textDecoration: "none", border: "1.5px solid rgba(26,25,22,0.4)", borderRadius: "50px", padding: "0.85rem 2.2rem" }}>
            VIEW ALL STAYS
          </Link>
        </div>
      </article>
    </main>
  );
}
