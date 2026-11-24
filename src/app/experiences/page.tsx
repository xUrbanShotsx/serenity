import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeadingParagraph, SectionRows, SectionCoverCTA } from "@/components/Sections";
import { EXPERIENCES } from "@/lib/experiences";


export const metadata: Metadata = {
  title: "Experiences Near Berry NSW | Restaurants, Beaches & Wineries | The Coastal",
  description:
    "Explore the best of Berry NSW and the South Coast — Sara Dining, Silos Estate, Two Figs Winery, Seven Mile Beach, the Berry Donut Van, and more. All within minutes of The Coastal.",
  keywords: [
    "things to do berry nsw",
    "restaurants berry nsw",
    "sara dining berry",
    "silos estate berry",
    "two figs winery berry",
    "milkwood bakery berry",
    "berry donut van",
    "seven mile beach national park",
    "queen street berry",
    "berry museum",
    "south coast experiences",
    "things to do near kiama nsw",
    "south coast nsw day trips",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/experiences",
  },
  openGraph: {
    title: "Experiences Near Berry NSW | The Coastal",
    description:
      "Sara Dining, Silos Estate, Two Figs Winery, Seven Mile Beach and more — the best of Berry and the NSW South Coast.",
    url: "https://thecoastal.com.au/experiences",
  },
};

export default function ExperiencesPage() {
  return (
    <>
      <Hero
        title="EXPERIENCES"
        description="Where we would eat, drink and wander with a few days in Berry and the South Coast."
        cover={null}
      />
      <div className="builder">
        <SectionHeadingParagraph
          suptitle="In and around Berry"
          title="Berry and the South Coast reward the unhurried. Here is what we would do with a few days — and where we would eat."
        />
        <SectionRows rows={EXPERIENCES.map((e) => ({ title: e.title, description: e.description, image: e.image, ratio: e.ratio }))} />
        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Stay close to all of it"
          title="Choose your stay, pick your dates and book direct — Berry's best is a short walk from your door."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
