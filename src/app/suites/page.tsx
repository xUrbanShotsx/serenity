import type { Metadata } from "next";
import SuitesPageClient from "./SuitesPage";

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
  return <SuitesPageClient />;
}
