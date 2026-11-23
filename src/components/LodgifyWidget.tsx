"use client";

import { useEffect } from "react";
import { LODGIFY } from "@/lib/site";

const SCRIPT_ID = "lodgify-render-script";
let timer: number | undefined;

// Lodgify's script mounts a widget on every element whose id is exactly
// "lodgify-book-now-box", once, when the script runs. It is therefore
// (re)injected after mount, debounced so several widgets on one page
// trigger a single run.
function loadLodgify() {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    document.getElementById(SCRIPT_ID)?.remove();
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = LODGIFY.scriptSrc;
    script.defer = true;
    document.body.appendChild(script);
  }, 80);
}

const LABELS: Record<string, string> = {
  "data-language-code": "en",
  "data-new-tab": "true",
  "data-version": "stable",
  "data-has-guests-breakdown": "",
  "data-check-in-label": "Check-in",
  "data-check-out-label": "Check-out",
  "data-guests-label": "Guests",
  "data-guests-singular-label": "{{NumberOfGuests}} guest",
  "data-guests-plural-label": "{{NumberOfGuests}} guests",
  "data-location-input-label": "Location",
  "data-total-price-label": "Total price:",
  "data-select-dates-to-see-price-label": "Select dates to see total price",
  "data-minimum-price-per-night-first-label": "From",
  "data-minimum-price-per-night-second-label": "per night",
  "data-book-button-label": "Book Now",
  "data-guests-breakdown-label": "Guests",
  "data-adults-label": '{"one":"adult","other":"adults"}',
  "data-adults-description": "Ages {minAge} or above",
  "data-children-label": '{"one":"child","other":"children"}',
  "data-children-description": "Ages {minAge}-{maxAge}",
  "data-children-not-allowed-label": "Not suitable for children",
  "data-infants-label": '{"one":"infant","other":"infants"}',
  "data-infants-description": "Under {maxAge}",
  "data-infants-not-allowed-label": "Not suitable for infants",
  "data-pets-label": '{"one":"pet","other":"pets"}',
  "data-pets-not-allowed-label": "Not allowed",
  "data-done-label": "Done",
};

export default function LodgifyWidget({
  rentalId,
  name,
}: {
  rentalId: string | null;
  name: string;
}) {
  useEffect(() => {
    if (rentalId) loadLodgify();
  }, [rentalId]);

  if (!rentalId) {
    return (
      <div className="s-book__fallback">
        <p>
          Online booking for {name} is opening soon. Send us your dates and we&rsquo;ll confirm availability directly.
        </p>
        <a
          className="btn btn--green"
          href={`mailto:hello@thecoastal.com.au?subject=${encodeURIComponent(`Enquiry — ${name}`)}`}
        >
          <span className="btn__label">Enquire about {name}</span>
          <span className="btn__icon" aria-hidden="true">→</span>
        </a>
      </div>
    );
  }

  return (
    <div
      id="lodgify-book-now-box"
      data-rental-id={rentalId}
      data-website-id={LODGIFY.websiteId}
      data-slug={LODGIFY.slug}
      suppressHydrationWarning
      {...LABELS}
    />
  );
}
