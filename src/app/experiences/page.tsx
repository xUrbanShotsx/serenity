import type { Metadata } from "next";
import ExperiencesPageClient from "./ExperiencesPage";

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
  return <ExperiencesPageClient />;
}
