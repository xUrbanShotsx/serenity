import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeading, SectionArticle, SectionCoverCTA } from "@/components/Sections";

export const metadata: Metadata = {
  title: "South Coast NSW Accommodation | Berry, Kiama, Nowra | The Coastal",
  description:
    "Luxury South Coast NSW accommodation near Berry. A private holiday house sleeping 8+ and three boutique suites. Close to Kiama, Nowra, Jervis Bay and Seven Mile Beach. 2 hrs from Sydney.",
  keywords: [
    "south coast nsw accommodation",
    "south coast accommodation",
    "south coast holiday accommodation",
    "south coast nsw holiday",
    "accommodation near kiama nsw",
    "accommodation near nowra nsw",
    "accommodation near jervis bay",
    "shoalhaven accommodation",
    "illawarra accommodation",
    "NSW south coast getaway",
    "south coast retreat nsw",
    "luxury south coast accommodation",
    "south coast nsw private rental",
    "weekend away south coast nsw",
    "holiday near seven mile beach",
    "berry nsw south coast",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/south-coast-accommodation",
  },
  openGraph: {
    title: "South Coast NSW Accommodation | The Coastal Berry",
    description:
      "Private luxury accommodation on the NSW South Coast. Near Berry, Kiama, Nowra and Jervis Bay. Holiday house + boutique suites.",
    url: "https://thecoastal.com.au/south-coast-accommodation",
  },
};


export default function SouthCoastAccommodationPage() {
  return (
    <>
      <Hero title={"SOUTH COAST NSW\nACCOMMODATION"} button={{ label: "Book now", href: "/book" }} cover={null} size="md" />
      <div className="builder">
        <SectionHeading suptitle="NSW SOUTH COAST · BERRY · SHOALHAVEN" title="The Coastal is a private holiday retreat on the NSW South Coast — set on 12 acres near Berry, Shoalhaven, within easy reach of Kiama, Nowra and Jervis Bay. Four distinct stays: a main house sleeping 8+ and three private boutique suites. Two hours from Sydney, and exactly the kind of South Coast accommodation that earns a return." />
        <SectionArticle
          blocks={[
          { heading: "Close to Kiama, Nowra, and Jervis Bay", paragraphs: ["The Coastal sits at the geographic heart of the best of the NSW South Coast. Kiama — famous for its blowhole, rock pools, and one of the most scenic coastal walks in NSW — is 35 minutes north. Nowra and the Shoalhaven are 30 minutes south. Jervis Bay, with its world-renowned white sand beaches, is 45 minutes away. Seven Mile Beach National Park is a 12-minute drive. Berry township — with its restaurants, wineries, and boutiques — is five minutes on foot."] },
          { heading: "Private Accommodation — South Coast NSW", paragraphs: ["Unlike hotels and motels on the South Coast, The Coastal offers complete privacy. No shared facilities. No lobby. No noise from neighbouring rooms. The main house is entirely self-contained across four bedrooms, with a heated pool, fire pit, and terrace. Each of the three private suites has its own entrance, outdoor space, and bathroom. Whether you're booking for a group or for two, you'll have the property to yourselves."] },
          { heading: "The South Coast Experience", paragraphs: ["The NSW South Coast is one of Australia's most visited and most loved domestic holiday regions for good reason — the beaches are genuinely world-class, the hinterland is lush, and the food and wine scene has grown considerably in the last decade. Berry sits at the intersection of all of it. From The Coastal, you can be walking on Seven Mile Beach within 15 minutes, sitting down to lunch at Sara Dining or Silos Estate within 10, or tasting at Two Figs Winery within 8. The Illawarra escarpment provides the backdrop; the Shoalhaven coast is the destination."] },
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
