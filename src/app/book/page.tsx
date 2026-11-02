import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Book | Reserve Your Stay | The Coastal Berry NSW",
  description:
    "Book your stay at The Coastal — luxury private holiday accommodation in Berry, NSW South Coast. Reserve the 4-bedroom house or one of three boutique suites. Check availability online.",
  keywords: [
    "book accommodation berry nsw",
    "holiday house booking berry nsw",
    "south coast accommodation booking",
    "reserve holiday house nsw",
    "book private suite berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/book",
  },
  openGraph: {
    title: "Book Your Stay | The Coastal Berry NSW",
    description:
      "Reserve the house or one of three private suites at The Coastal, Berry NSW. Check availability and book direct.",
    url: "https://thecoastal.com.au/book",
  },
};

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function BookPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "140px 2rem 8rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              color: INK,
              opacity: 0.4,
              marginBottom: "0.8rem",
            }}
          >
            BERRY, NSW SOUTH COAST
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: INK,
              lineHeight: 1.1,
            }}
          >
            Reserve Your Stay
          </h1>
        </div>

        {/* Lodgify widget placeholder */}
        <div
          style={{
            width: "100%",
            minHeight: "560px",
            backgroundColor: "rgba(26,25,22,0.04)",
            border: "1px dashed rgba(26,25,22,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.55rem",
              letterSpacing: "0.24em",
              color: INK,
              opacity: 0.22,
            }}
          >
            LODGIFY BOOKING WIDGET
          </p>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: INK,
              opacity: 0.15,
              textAlign: "center",
              lineHeight: 2,
            }}
          >
            The House · The Olive Suite · The Shoreline Suite · The Horizon Suite
          </p>
        </div>
      </div>
    </main>
  );
}
