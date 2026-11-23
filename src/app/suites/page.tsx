import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ChaptersBar from "@/components/ChaptersBar";
import SectionLargeGallery from "@/components/SectionLargeGallery";
import { SectionHeading, SectionDoubleImages, SectionAccommodations, BookingPanel } from "@/components/Sections";
import { GALLERY } from "@/lib/site";
import { HOUSE, SUITES } from "@/lib/properties";


export const metadata: Metadata = {
  title: "The Suites | Private Boutique Suites Berry NSW | The Coastal",
  description:
    "Three private boutique suites in Berry NSW — The Olive, Shoreline, and Horizon. Each with a private bathroom and outdoor space. Ideal couples or solo accommodation on the NSW South Coast.",
  keywords: [
    "boutique suites berry nsw",
    "private suite berry nsw",
    "couples accommodation berry nsw",
    "romantic accommodation berry nsw",
    "private villa berry nsw",
    "south coast suite accommodation",
    "berry nsw bnb",
    "berry nsw bed and breakfast",
    "boutique accommodation south coast nsw",
    "olive suite berry",
    "horizon suite berry",
    "shoreline suite berry",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/suites",
  },
  openGraph: {
    title: "The Suites | The Coastal Berry NSW",
    description:
      "Three private boutique suites in Berry NSW. Olive, Shoreline, and Horizon — each with private outdoor space, full bathroom, NSW South Coast views.",
    url: "https://thecoastal.com.au/suites",
  },
};

export default function SuitesPage() {
  return (
    <>
      <Hero
        title={"THE\nSUITES"}
        description="Each different from the other. All of them entirely your own."
        button={{ label: "Book your stay", href: "#book" }}
        cover="/shorelinesuite.jpg"
      />
      <div className="builder">
        <div id="overview">
          <SectionHeading
            suptitle="Three Private Suites"
            title="The same care went into all three — the same materials, the same attention to light and proportion — but each arrived at its own character through where it sits on the property and what it looks towards."
          />
        </div>
        <SectionDoubleImages
          description="Each suite is one bedroom with a full bathroom and a private outdoor space. They can be booked individually or taken together — the three of them share the property without sharing any walls."
          left={[{ src: "/frame2.png", alt: "Gardens around the suites", ratio: "577 / 734" }]}
          right={[{ src: "/frame1.png", alt: "Grounds around the suites", ratio: "696 / 840" }]}
        />
        <div id="gallery">
          <SectionLargeGallery slides={GALLERY} />
        </div>
        <div id="book">
          {SUITES.map((s) => (
            <BookingPanel key={s.slug} stay={s} />
          ))}
        </div>
        <SectionAccommodations
          suptitle="Also at The Coastal"
          description="The main house sleeps eight and more, with a heated pool, fire pit and a terrace that faces the afternoon sun."
          stays={[HOUSE]}
          label="View house"
          limitHeight
        />
      </div>
      <ChaptersBar
        chapters={[
          { id: "overview", label: "Overview" },
          { id: "gallery", label: "Gallery" },
          { id: "book", label: "Book" },
        ]}
      />
    </>
  );
}
