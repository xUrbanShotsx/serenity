import type { Metadata } from "next";
import HousePageClient from "./HousePage";

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
  return <HousePageClient />;
}
