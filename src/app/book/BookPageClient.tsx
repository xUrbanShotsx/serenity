"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function BookPageClient() {
  useEffect(() => {
    // Remove any previously injected Lodgify script
    const existing = document.getElementById("lodgify-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "lodgify-script";
    script.src = "https://app.lodgify.com/v2/book-now-box.min.js";
    script.async = true;
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
        :root {
          --ldg-bnb-background: ${CREAM};
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
          --ldg-component-calendar-cell-selected-bg-color: rgba(26,25,22,0.15);
          --ldg-component-calendar-cell-selected-color: ${INK};
          --ldg-bnb-font-family: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
        }
        #lodgify-book-now-box { width: 100%; }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "140px 2rem 8rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem", letterSpacing: "0.28em", color: INK, opacity: 0.4, marginBottom: "0.8rem" }}>
            BERRY, NSW SOUTH COAST
          </p>
          <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: INK, lineHeight: 1.1, marginBottom: "1.2rem" }}>
            Reserve Your Stay
          </h1>
          <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.62rem", letterSpacing: "0.08em", color: INK, opacity: 0.45, lineHeight: 1.8 }}>
            Select your dates and property below. Book direct for the best rate.
          </p>
        </div>

        {/* Lodgify Booking Widget */}
        <div
          id="lodgify-book-now-box"
          data-rental-id="863227"
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
          data-location-input-label="Location"
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

        {/* Footer note */}
        <div style={{ borderTop: "1px solid rgba(26,25,22,0.08)", marginTop: "5rem", paddingTop: "3rem", textAlign: "center" }}>
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
