import type { Metadata } from "next";
import HomePageClient from "./HomePage";

export const metadata: Metadata = {
  title: "The Coastal | Luxury Holiday Accommodation Berry NSW South Coast",
  description:
    "The Coastal — luxury private holiday accommodation in Berry, NSW South Coast. One 4-bedroom house sleeping 8+ and three private boutique suites on 12 acres. Minutes from Seven Mile Beach, Kiama, and Jervis Bay.",
  alternates: {
    canonical: "https://thecoastal.com.au",
  },
  openGraph: {
    title: "The Coastal | Luxury Holiday Accommodation Berry NSW",
    description:
      "Private holiday house and boutique suites in Berry NSW. 12 acres, heated pool, minutes from Seven Mile Beach. 2hrs from Sydney.",
    url: "https://thecoastal.com.au",
  },
};

export default function Page() {
  return <HomePageClient />;
}
