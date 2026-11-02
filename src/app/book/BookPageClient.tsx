"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

// ── Replace these rental IDs with the ones from Lodgify External Widgets ──
const PROPERTIES = [
  {
    id: "house",
    name: "The House",
    tag: "THE MAIN HOUSE · 4 BEDROOMS · SLEEPS 8+",
    rentalId: "REPLACE_HOUSE_ID",
  },
  {
    id: "olive",
    name: "The Olive Suite",
    tag: "PRIVATE SUITE · 1 BEDROOM · 2 GUESTS",
    rentalId: "REPLACE_OLIVE_ID",
  },
  {
    id: "shoreline",
    name: "The Shoreline Suite",
    tag: "PRIVATE SUITE · 1 BEDROOM · 2 GUESTS",
    rentalId: "REPLACE_SHORELINE_ID",
  },
  {
    id: "horizon",
    name: "The Horizon Suite",
    tag: "PRIVATE SUITE · 1 BEDROOM · 2 GUESTS",
    rentalId: "863227", // ← current known ID (update once confirmed)
  },
];

const WEBSITE_ID = "686132";
const SLUG = "mark-spinelli-77adcb";

export default function BookPageClient() {
  useEffect(() => {
    const existing = document.getElementById("lodgify-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "lodgify-script";
    script.src = "https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("lodgify-script");
      if (s) s.remove();
    };
  }, []);

  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />

      <style>{`
        .ldg-widget-wrap { width: 100%; }
        :root {
          --ldg-bnb-background: #ffffff;
          --ldg-bnb-border-radius: 0px;
          --ldg-bnb-box-shadow: none;
          --ldg-bnb-padding: 20px;
          --ldg-bnb-input-background: #ffffff;
          --ldg-bnb-button-border-radius: 3.58em;
          --ldg-bnb-color-primary: ${INK};
          --ldg-bnb-color-primary-lighter: rgba(26,25,22,0.6);
          --ldg-bnb-color-primary-darker: #000000;
          --ldg-bnb-color-primary-contrast: ${CREAM};
          --ldg-component-calendar-cell-selection-bg-color: ${INK};
          --ldg-component-calendar-cell-selection-color: ${CREAM};
          --ldg-component-calendar-cell-selected-bg-color: rgba(26,25,22,0.12);
          --ldg-component-calendar-cell-selected-color: ${INK};
          --ldg-bnb-font-family: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
        }
      `}</style>

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "140px 2rem 8rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "0.8rem" }}>
            BERRY, NSW SOUTH COAST
          </p>
          <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: INK, lineHeight: 1.1, marginBottom: "1.2rem" }}>
            Reserve Your Stay
          </h1>
          <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.62rem", letterSpacing: "0.08em", color: INK, opacity: 0.45, lineHeight: 1.8 }}>
            Book direct for the best rate. Four private stays — choose yours below.
          </p>
        </div>

        {/* Property booking sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {PROPERTIES.map((property, i) => (
            <div key={property.id}>
              {/* Property label */}
              <div style={{ marginBottom: "1.8rem", paddingBottom: "1.4rem", borderBottom: "1px solid rgba(26,25,22,0.1)" }}>
                <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.48rem", letterSpacing: "0.26em", color: INK, opacity: 0.35, marginBottom: "0.5rem" }}>
                  {property.tag}
                </p>
                <p style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.4rem, 2vw, 1.8rem)", color: INK, lineHeight: 1.1 }}>
                  {property.name}
                </p>
              </div>

              {/* Lodgify widget */}
              <div
                className="ldg-widget-wrap"
                id={`lodgify-book-now-box-${property.id}`}
                data-rental-id={property.rentalId}
                data-website-id={WEBSITE_ID}
                data-slug={SLUG}
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
              />

              {i < PROPERTIES.length - 1 && (
                <div style={{ borderBottom: "1px solid rgba(26,25,22,0.06)", marginTop: "5rem" }} />
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ borderTop: "1px solid rgba(26,25,22,0.08)", marginTop: "6rem", paddingTop: "3rem", textAlign: "center" }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.1em", color: INK, opacity: 0.4, lineHeight: 2 }}>
            Questions? Email{" "}
            <a href="mailto:hello@thecoastal.com.au" style={{ color: INK, opacity: 1, textDecoration: "none", borderBottom: "1px solid rgba(26,25,22,0.3)" }}>
              hello@thecoastal.com.au
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
