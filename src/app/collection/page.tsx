import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeadingParagraph, SectionAccommodations, SectionCoverCTA } from "@/components/Sections";
import { HOUSE, SUITES } from "@/lib/properties";


export const metadata: Metadata = {
  title: "The Collection | Holiday House & Suites Berry NSW | The Coastal",
  description:
    "Browse The Coastal's full collection — one 4-bedroom private holiday house sleeping 8+ and three boutique suites. Luxury private accommodation in Berry, NSW South Coast.",
  keywords: [
    "the coastal berry collection",
    "holiday house and suites berry nsw",
    "private accommodation berry nsw",
    "south coast nsw accommodation collection",
    "berry nsw where to stay",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/collection",
  },
  openGraph: {
    title: "The Collection | The Coastal Berry NSW",
    description:
      "One 4-bedroom house and three boutique suites. Browse The Coastal's full collection of private holiday accommodation in Berry NSW.",
    url: "https://thecoastal.com.au/collection",
  },
};

export default function CollectionPage() {
  return (
    <>
      <Hero
        title="ACCOMMODATION"
        description="One house and three private suites, set across twelve acres on the edge of Berry."
        button={{ label: "Plan your stay", href: "/book" }}
        cover={null}
      />
      <div className="builder">
        <SectionHeadingParagraph
          suptitle="Our stays"
          title="Each stay offers a distinct expression of the property — from the generous proportions of the main house to the quiet intimacy of the suites. Every one is entirely your own."
        />
        <SectionAccommodations
          suptitle="The House"
          description="Four bedrooms, an open living area that runs onto a west-facing terrace, a heated pool and a fire pit. It sleeps eight and more."
          stays={[HOUSE]}
          label="View house"
          limitHeight
        />
        <SectionAccommodations
          suptitle="The Suites"
          description="Three private suites, each with one bedroom, a full bathroom and its own outdoor space."
          stays={SUITES}
          label="View suite"
        />
        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Plan a stay"
          title="Choose your stay, pick your dates and book direct — every reservation comes straight to us."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
