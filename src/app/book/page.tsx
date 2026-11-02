import type { Metadata } from "next";
import Script from "next/script";
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

      {/* Lodgify widget styles */}
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
        #lodgify-book-now-box {
          width: 100%;
        }
      `}</style>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "140px 2rem 8rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              marginBottom: "1.2rem",
            }}
          >
            Reserve Your Stay
          </h1>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              color: INK,
              opacity: 0.45,
              lineHeight: 1.8,
            }}
          >
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
          data-has-guests-breakdown
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

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(26,25,22,0.08)",
            marginTop: "5rem",
            paddingTop: "3rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: INK,
              opacity: 0.4,
              lineHeight: 2,
            }}
          >
            Questions? Email us at{" "}
            <a
              href="mailto:hello@thecoastal.com.au"
              style={{ color: INK, opacity: 1, textDecoration: "none", borderBottom: "1px solid rgba(26,25,22,0.3)" }}
            >
              hello@thecoastal.com.au
            </a>
          </p>
        </div>
      </div>

      {/* Lodgify widget script */}
      <Script
        src="https://app.lodgify.com/v2/book-now-box.min.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
