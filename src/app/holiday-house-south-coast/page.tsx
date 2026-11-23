import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeading, SectionArticle, SectionCoverCTA } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Holiday House South Coast NSW | Sleeps 8+ | The Coastal Berry",
  description:
    "Searching for a holiday house on the NSW South Coast? The Coastal in Berry offers a luxury 4-bedroom house sleeping 8+ guests and three private suites. Heated pool, 12 acres, 2hrs from Sydney.",
  keywords: [
    "holiday house south coast nsw",
    "holiday house south coast",
    "south coast nsw holiday rental",
    "holiday house sleeping 8 nsw",
    "large holiday house south coast",
    "group holiday house nsw",
    "holiday house berry nsw",
    "holiday home south coast nsw",
    "private holiday house nsw",
    "luxury holiday house nsw south coast",
    "south coast holiday accommodation",
    "south coast nsw house rental",
    "shoalhaven holiday house",
    "holiday house 2 hours sydney",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/holiday-house-south-coast",
  },
  openGraph: {
    title: "Holiday House South Coast NSW | The Coastal Berry",
    description:
      "Luxury 4-bedroom holiday house on the NSW South Coast. Sleeps 8+. Heated pool, fire pit, 12 acres. Berry NSW, 2 hours from Sydney.",
    url: "https://thecoastal.com.au/holiday-house-south-coast",
  },
};


export default function HolidayHouseSouthCoastPage() {
  return (
    <>
      <Hero title={"HOLIDAY HOUSE ON\nTHE NSW SOUTH COAST"} button={{ label: "Book now", href: "/book" }} cover={null} size="md" />
      <div className="builder">
        <SectionHeading suptitle="BERRY NSW · 2 HOURS FROM SYDNEY" title="The Coastal is a luxury South Coast NSW holiday house set on 12 private acres near Berry — two hours south of Sydney and minutes from Seven Mile Beach. The main house sleeps 8 or more across four bedrooms, with a heated pool, fire pit, fully equipped kitchen, and a terrace that faces the afternoon sun. It's the kind of South Coast holiday house that earns a return booking before check-out." />
        <SectionArticle
          blocks={[
          { heading: "Large Group Holiday House — South Coast NSW", paragraphs: ["If you're looking for a large holiday house on the South Coast of NSW for a group — a family gathering, a milestone birthday, a long weekend with friends — The Coastal's main house is designed exactly for that. Four bedrooms, two bathrooms, a kitchen built to cook in properly, outdoor dining for a full group, and enough land around the house that nobody feels on top of each other. The private pool and fire pit mean you rarely need to leave."] },
          { heading: "Also Available: Private Suites", paragraphs: ["Alongside the main holiday house, The Coastal offers three private one-bedroom suites — the Olive, Shoreline, and Horizon — each with a private outdoor space and full bathroom. Perfect for couples or smaller groups wanting boutique South Coast NSW accommodation with absolute privacy."] },
          { heading: "South Coast NSW — The Best of It", paragraphs: ["Set between Berry and Seven Mile Beach, The Coastal is placed at the heart of what makes the South Coast special. Seven Mile Beach National Park is 12 minutes away — one of the least crowded long beaches in NSW. Berry township is walkable from the property, with Sara Dining, Silos Estate, Two Figs Winery, Milkwood Bakery, the famous Berry Donut Van, and independent boutiques all within easy reach. Kiama is 35 minutes north. Jervis Bay is 45 minutes south."] },
        ]}
        />
        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Plan a stay"
          title="Four private stays on twelve acres in Berry — a house sleeping 8+ and three private suites. Choose yours, pick your dates and book direct."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
