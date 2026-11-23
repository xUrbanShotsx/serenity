import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeading, SectionArticle, SectionCoverCTA } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Accommodation Berry NSW | Luxury Holiday House & Suites | The Coastal",
  description:
    "Looking for accommodation in Berry NSW? The Coastal offers a luxury 4-bedroom holiday house sleeping 8+ and three private boutique suites on 12 acres. Berry's finest private retreat. Book direct.",
  keywords: [
    "accommodation berry nsw",
    "berry nsw accommodation",
    "holiday house berry nsw",
    "berry nsw holiday rental",
    "luxury accommodation berry nsw",
    "berry nsw where to stay",
    "private accommodation berry",
    "4 bedroom holiday house berry nsw",
    "group accommodation berry nsw",
    "couples accommodation berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/accommodation-berry-nsw",
  },
  openGraph: {
    title: "Accommodation Berry NSW | The Coastal",
    description:
      "Luxury holiday house and private suites in Berry NSW. 4 bedrooms, heated pool, 12 acres — Berry's finest private retreat.",
    url: "https://thecoastal.com.au/accommodation-berry-nsw",
  },
};


export default function AccommodationBerryNswPage() {
  return (
    <>
      <Hero title={"ACCOMMODATION\nIN BERRY, NSW"} button={{ label: "Book now", href: "/book" }} cover={null} size="md" />
      <div className="builder">
        <SectionHeading suptitle="BERRY NSW · SOUTH COAST AUSTRALIA" title="The Coastal is Berry's premier private holiday accommodation — a 12-acre retreat set between the hills of Berry township and the wild stretch of Seven Mile Beach on the NSW South Coast. Whether you're looking for a large holiday house in Berry for a family or group, or a private boutique suite for two, The Coastal has four distinct stays to choose from." />
        <SectionArticle
          blocks={[
          { heading: "The House — 4-Bedroom Holiday House, Berry NSW", paragraphs: ["Our main residence is a four-bedroom holiday house in Berry sleeping 8 or more guests. Built from local stone and timber, it features open-plan living connecting to a western-facing terrace, a fully equipped kitchen, heated pool, and fire pit. The best group accommodation in Berry, NSW — just five minutes on foot to Berry's famous Queen Street and 12 minutes to Seven Mile Beach."] },
          { heading: "Three Private Suites — Couples Accommodation Berry NSW", paragraphs: ["The Olive Suite, Shoreline Suite, and Horizon Suite are three intimate one-bedroom retreats, each with a private bathroom and outdoor space. Ideal for couples or solo travellers seeking boutique accommodation in Berry NSW without the noise of a hotel or motel. Each suite can be booked individually, or all three together for a group getaway."] },
          { heading: "Berry NSW — Where to Stay", paragraphs: ["Berry is a two-hour drive from Sydney and one of the most loved weekend destinations on the NSW South Coast. Famous for its donut van, independent Queen Street boutiques, Silos Estate winery, and proximity to Seven Mile Beach National Park. The Coastal is the most private and spacious accommodation Berry NSW has to offer — no shared facilities, no check-in desk, just 12 acres of gardens and sky."] },
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
