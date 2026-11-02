import type { Metadata } from "next";
import StoryPageClient from "./StoryPage";

export const metadata: Metadata = {
  title: "Our Story | The Coastal Berry NSW",
  description:
    "The story behind The Coastal — a private retreat built by hand on 12 acres near Berry, NSW South Coast. How it came to be, and why it was built the way it was.",
  alternates: {
    canonical: "https://thecoastal.com.au/story",
  },
  openGraph: {
    title: "Our Story | The Coastal Berry NSW",
    description:
      "The story behind The Coastal — a private retreat built by hand on 12 acres near Berry, NSW South Coast.",
    url: "https://thecoastal.com.au/story",
  },
};

export default function StoryPage() {
  return <StoryPageClient />;
}
