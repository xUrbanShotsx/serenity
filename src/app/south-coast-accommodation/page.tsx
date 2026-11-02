import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "South Coast NSW Accommodation | Berry, Kiama, Nowra | The Coastal",
  description:
    "Luxury South Coast NSW accommodation near Berry. A private holiday house sleeping 8+ and three boutique suites. Close to Kiama, Nowra, Jervis Bay and Seven Mile Beach. 2 hrs from Sydney.",
  keywords: [
    "south coast nsw accommodation",
    "south coast accommodation",
    "south coast holiday accommodation",
    "south coast nsw holiday",
    "accommodation near kiama nsw",
    "accommodation near nowra nsw",
    "accommodation near jervis bay",
    "shoalhaven accommodation",
    "illawarra accommodation",
    "NSW south coast getaway",
    "south coast retreat nsw",
    "luxury south coast accommodation",
    "south coast nsw private rental",
    "weekend away south coast nsw",
    "holiday near seven mile beach",
    "berry nsw south coast",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/south-coast-accommodation",
  },
  openGraph: {
    title: "South Coast NSW Accommodation | The Coastal Berry",
    description:
      "Private luxury accommodation on the NSW South Coast. Near Berry, Kiama, Nowra and Jervis Bay. Holiday house + boutique suites.",
    url: "https://thecoastal.com.au/south-coast-accommodation",
  },
};

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function SouthCoastAccommodationPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "160px 2rem 8rem" }}>
        <p style={{ fontFamily: FUTURA, fontSize: "0.52rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "1.2rem" }}>
          NSW SOUTH COAST · BERRY · SHOALHAVEN
        </p>
        <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: INK, lineHeight: 1.1, marginBottom: "2.5rem" }}>
          South Coast NSW Accommodation
        </h1>

        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          The Coastal is a private holiday retreat on the NSW South Coast — set on 12 acres near Berry, Shoalhaven, within easy reach of Kiama, Nowra and Jervis Bay. Four distinct stays: a main house sleeping 8+ and three private boutique suites. Two hours from Sydney, and exactly the kind of South Coast accommodation that earns a return.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Close to Kiama, Nowra, and Jervis Bay
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          The Coastal sits at the geographic heart of the best of the NSW South Coast. Kiama — famous for its blowhole, rock pools, and one of the most scenic coastal walks in NSW — is 35 minutes north. Nowra and the Shoalhaven are 30 minutes south. Jervis Bay, with its world-renowned white sand beaches, is 45 minutes away. Seven Mile Beach National Park is a 12-minute drive. Berry township — with its restaurants, wineries, and boutiques — is five minutes on foot.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          Private Accommodation — South Coast NSW
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          Unlike hotels and motels on the South Coast, The Coastal offers complete privacy. No shared facilities. No lobby. No noise from neighbouring rooms. The main house is entirely self-contained across four bedrooms, with a heated pool, fire pit, and terrace. Each of the three private suites has its own entrance, outdoor space, and bathroom. Whether you're booking for a group or for two, you'll have the property to yourselves.
        </p>

        <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, marginBottom: "1.2rem", marginTop: "3rem" }}>
          The South Coast Experience
        </h2>
        <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: INK, lineHeight: 1.9, opacity: 0.75, marginBottom: "2rem" }}>
          The NSW South Coast is one of Australia's most visited and most loved domestic holiday regions for good reason — the beaches are genuinely world-class, the hinterland is lush, and the food and wine scene has grown considerably in the last decade. Berry sits at the intersection of all of it. From The Coastal, you can be walking on Seven Mile Beach within 15 minutes, sitting down to lunch at Sara Dining or Silos Estate within 10, or tasting at Two Figs Winery within 8. The Illawarra escarpment provides the backdrop; the Shoalhaven coast is the destination.
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
