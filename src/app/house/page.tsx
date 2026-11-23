import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ChaptersBar from "@/components/ChaptersBar";
import SectionLargeGallery from "@/components/SectionLargeGallery";
import { SectionHeading, SectionDoubleImages, SectionAccommodations, BookingPanel } from "@/components/Sections";
import { GALLERY } from "@/lib/site";
import { HOUSE, SUITES } from "@/lib/properties";


export const metadata: Metadata = {
  title: "The House | 4-Bedroom Private Holiday House Berry NSW",
  description:
    "The House at The Coastal — a four-bedroom private holiday residence in Berry NSW sleeping 8+ guests. Heated pool, fire pit, outdoor terrace, fully equipped kitchen. The finest group accommodation on the NSW South Coast.",
  keywords: [
    "4 bedroom holiday house berry nsw",
    "group accommodation berry nsw",
    "private house berry nsw",
    "holiday house sleeping 8 nsw",
    "holiday house sleeping 10 nsw",
    "berry nsw large house rental",
    "south coast holiday house groups",
    "family accommodation berry nsw",
    "luxury house berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/house",
  },
  openGraph: {
    title: "The House | The Coastal Berry NSW",
    description:
      "Four bedrooms, heated pool, fire pit. Private holiday house in Berry NSW sleeping 8+ guests on the NSW South Coast.",
    url: "https://thecoastal.com.au/house",
  },
};

export default function HousePage() {
  return (
    <>
      <Hero
        title={"THE\nHOUSE"}
        description="Four bedrooms, a heated pool and a terrace that faces the afternoon sun."
        button={{ label: "Book your stay", href: "#book" }}
        cover={HOUSE.image}
      />
      <div className="builder">
        <div id="overview">
          <SectionHeading
            suptitle="The Main House"
            title="Built for the kind of stay where nobody needs to be anywhere. Four bedrooms across a single generous floor, a living area that connects without interruption to the outdoor terrace, and a kitchen designed to be used properly — not worked around."
          />
        </div>
        <SectionDoubleImages
          description="The stone and timber came from the property and the surrounding region, which is why the house reads as something that grew from the land. The terrace faces west, so the last hour of afternoon light is the best hour to be outside. There is a fire pit, a heated pool and enough outdoor dining space for the whole group to eat together."
          left={[{ src: "/frame2.png", alt: "Gardens around The House", ratio: "577 / 734" }]}
          right={[{ src: "/frame1.png", alt: "Grounds around The House", ratio: "696 / 840" }]}
        />
        <div id="gallery">
          <SectionLargeGallery slides={GALLERY} />
        </div>
        <div id="book">
          <BookingPanel stay={HOUSE} />
        </div>
        <SectionAccommodations
          suptitle="Also at The Coastal"
          description="Three private suites sit across the property — the Olive, the Shoreline and the Horizon — each with a bedroom, bathroom and private outdoor space."
          stays={SUITES}
          label="View suite"
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
