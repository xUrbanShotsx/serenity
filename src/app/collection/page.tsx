import type { Metadata } from "next";
import CollectionPageClient from "./CollectionPage";

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
  return <CollectionPageClient />;
}
