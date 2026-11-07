"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

const GRID_CELLS = [
  { col: "1/3", row: "1/3" },
  { col: "3/5", row: "1/2" },
  { col: "3/5", row: "2/3" },
  { col: "1/2", row: "3/4" },
  { col: "2/3", row: "3/5" },
  { col: "3/4", row: "3/4" },
  { col: "4/5", row: "3/5" },
  { col: "1/2", row: "4/5" },
  { col: "3/4", row: "4/5" },
  { col: "1/3", row: "5/6" },
  { col: "3/4", row: "5/6" },
  { col: "4/5", row: "5/6" },
];

export default function HousePageClient() {
  useEffect(() => {
    const existing = document.getElementById("lodgify-script-house");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "lodgify-script-house";
    script.src = "https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ backgroundColor: CREAM }}>
      <Navbar />

      {/* ── Full-page image grid ─────────────────────────────────── */}
      <section
        className="r-img-section"
        style={{
          height: "100vh",
          paddingTop: "120px",
          padding: "128px 1.5rem 1.5rem",
          boxSizing: "border-box",
        }}
      >
        <div
          className="r-img-grid"
          style={{
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            gap: "6px",
          }}
        >
          {GRID_CELLS.map((cell, i) => (
            <div
              key={i}
              style={{
                gridColumn: cell.col,
                gridRow: cell.row,
                backgroundColor: "rgba(26,25,22,0.07)",
                border: "1px dashed rgba(26,25,22,0.1)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Description ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: CREAM,
          padding: "8rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.52rem",
              letterSpacing: "0.28em",
              color: INK,
              opacity: 0.35,
              marginBottom: "1.4rem",
            }}
          >
            THE MAIN HOUSE
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              color: INK,
              lineHeight: 1.1,
              marginBottom: "2.5rem",
            }}
          >
            The House
          </h1>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: INK,
              lineHeight: 1.9,
              opacity: 0.7,
              marginBottom: "2rem",
            }}
          >
            The main residence at The Coastal was built for the kind of stay where nobody needs to be anywhere. Four bedrooms across a single generous floor, a living area that connects without interruption to the outdoor terrace, and a kitchen designed to be used properly — not worked around. It comfortably sleeps eight, and the layout means a group of that size can share a space without spending every moment in each other's company.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: INK,
              lineHeight: 1.9,
              opacity: 0.7,
              marginBottom: "2rem",
            }}
          >
            The stone and timber came from the property and the surrounding region, which is why the house reads as something that grew from the land rather than something placed on it. The terrace faces west, which means the last hour of afternoon light is the best hour to be outside. There is a fire pit, a heated pool, and enough outdoor dining space for the whole group to eat together without anyone being on the wrong end of a long table.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: INK,
              lineHeight: 1.9,
              opacity: 0.7,
            }}
          >
            It is five minutes on foot to Berry township and twelve by car to Seven Mile Beach. The house has been designed so that neither of those facts feels urgent.
          </p>

          {/* Specs */}
          <div
            className="r-specs"
            style={{
              display: "flex",
              gap: "4rem",
              justifyContent: "center",
              marginTop: "4rem",
              borderTop: "1px solid rgba(26,25,22,0.1)",
              borderBottom: "1px solid rgba(26,25,22,0.1)",
              padding: "2rem 0",
            }}
          >
            {[["4", "Bedrooms"], ["2", "Bathrooms"], ["8+", "Guests"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "1.4rem", color: INK, marginBottom: "0.3rem" }}>{num}</p>
                <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.2em", color: INK, opacity: 0.4 }}>{label.toUpperCase()}</p>
              </div>
            ))}
          </div>

          {/* Lodgify booking widget */}
          <div style={{ marginTop: "3rem", width: "100%" }}>
            <div
              id="lodgify-book-now-box"
              data-rental-id="REPLACE_HOUSE_RENTAL_ID"
              data-website-id="686132"
              data-slug="mark-spinelli-77adcb"
              data-language-code="en"
              data-new-tab="true"
              data-version="stable"
              data-has-guests-breakdown=""
              data-check-in-label="Check-in"
              data-check-out-label="Check-out"
              data-guests-label="Guests"
              data-guests-singular-label="{{NumberOfGuests}} guest"
              data-guests-plural-label="{{NumberOfGuests}} guests"
              data-total-price-label="Total price:"
              data-select-dates-to-see-price-label="Select dates to see total price"
              data-minimum-price-per-night-first-label="From"
              data-minimum-price-per-night-second-label="per night"
              data-book-button-label="Book Now"
              data-guests-breakdown-label="Guests"
              data-adults-label='{"one":"adult","other":"adults"}'
              data-adults-description="Ages {minAge} or above"
              data-children-label='{"one":"child","other":"children"}'
              data-children-description="Ages {minAge}-{maxAge}"
              data-children-not-allowed-label="Not suitable for children"
              data-infants-label='{"one":"infant","other":"infants"}'
              data-infants-description="Under {maxAge}"
              data-infants-not-allowed-label="Not suitable for infants"
              data-pets-label='{"one":"pet","other":"pets"}'
              data-pets-not-allowed-label="Not allowed"
              data-done-label="Done"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: INK, color: CREAM, padding: "5rem 3rem 3rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="r-footer" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(242,237,229,0.1)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.28em", color: CREAM }}>THE COASTAL</p>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.04em", lineHeight: 1.8, color: "rgba(242,237,229,0.45)", maxWidth: "28ch" }}>Four private stays on the NSW South Coast. A short stroll from Berry, minutes from the beach.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>EXPLORE</p>
              {[["Story", "/story"], ["Collection", "/collection"], ["Experiences", "/experiences"]].map(([label, href]) => (
                <a key={label} href={href} style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none" }}>{label}</a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>CONTACT</p>
              <a href="mailto:hello@thecoastal.com.au" style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none" }}>hello@thecoastal.com.au</a>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.45)", lineHeight: 1.7 }}>Berry, NSW 2535<br />South Coast, Australia</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem" }}>
            <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.12em", color: "rgba(242,237,229,0.25)" }}>© {new Date().getFullYear()} THE COASTAL. ALL RIGHTS RESERVED.</p>
            <a href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.18em", color: "rgba(242,237,229,0.35)", textDecoration: "none" }}>BOOK NOW</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
