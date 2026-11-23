import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeading, SectionArticle, SectionCoverCTA } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Accommodation Near Kiama NSW | 35 Min Drive | The Coastal Berry",
  description:
    "Luxury holiday accommodation 35 minutes from Kiama NSW. The Coastal in Berry offers a 4-bedroom holiday house and private suites on private grounds. South Coast NSW's finest private retreat. Book direct.",
  keywords: [
    "accommodation near kiama nsw",
    "kiama accommodation",
    "kiama holiday house",
    "holiday house near kiama nsw",
    "kiama nsw holiday rental",
    "south coast accommodation near kiama",
    "kiama weekend getaway",
    "accommodation between sydney and kiama",
    "kiama south coast holiday",
    "berry nsw accommodation kiama",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/kiama-accommodation",
  },
  openGraph: {
    title: "Accommodation Near Kiama NSW | The Coastal Berry",
    description:
      "35 minutes from Kiama, The Coastal in Berry NSW offers luxury private holiday accommodation — house sleeping 8+ and boutique suites.",
    url: "https://thecoastal.com.au/kiama-accommodation",
  },
};


export default function KiamaAccommodationPage() {
  return (
    <>
      <Hero title={"LUXURY ACCOMMODATION\nNEAR KIAMA, NSW"} button={{ label: "Book now", href: "/book" }} cover={null} size="md" />
      <div className="builder">
        <SectionHeading suptitle="35 MINUTES FROM KIAMA · BERRY NSW" title="If you're searching for accommodation near Kiama on the NSW South Coast, The Coastal in Berry is 35 minutes south — and worth every minute of the drive. A private estate with a four-bedroom holiday house sleeping 8+ guests and three intimate suites. The kind of place that anchors a longer South Coast trip, or stands completely on its own." />
        <SectionArticle
          blocks={[
          { heading: "Kiama + Berry — The Best of the South Coast", paragraphs: ["Staying at The Coastal puts you within easy reach of both Kiama and Berry. From the property, Kiama's blowhole, Cathedral Rocks, and scenic coastal walks are 35 minutes north on the Princes Highway. Berry township — with Sara Dining, Silos Estate, Two Figs Winery, Milkwood Bakery, and the iconic Berry Donut Van — is a five-minute walk. Seven Mile Beach National Park is 12 minutes south. The Illawarra and Kiama regions are natural day trips; The Coastal is where you come back to."] },
          { heading: "Better Than a Hotel Near Kiama", paragraphs: ["Most accommodation options around Kiama are hotels, motels, or managed apartments — shared facilities, thin walls, and checkout at 10am. The Coastal is different. The grounds to yourself. A heated pool. A fire pit. A kitchen worth cooking in. Private decks on every suite. The Illawarra and Kiama are easy day trips; The Coastal is the kind of accommodation that makes you want to stay in, too."] },
        ]}
        />
        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Plan a stay"
          title="Four private stays in Berry — a house sleeping 8+ and three private suites. Choose yours, pick your dates and book direct."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
