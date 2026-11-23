import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionRevealText from "@/components/SectionRevealText";
import { SectionCoverCTA } from "@/components/Sections";
import { PARAGRAPHS } from "@/lib/story";


export const metadata: Metadata = {
  title: "Our Story | The Coastal Berry NSW",
  description:
    "The story behind The Coastal — a private retreat built by hand near Berry, NSW South Coast. How it came to be, and why it was built the way it was.",
  alternates: {
    canonical: "https://thecoastal.com.au/story",
  },
  openGraph: {
    title: "Our Story | The Coastal Berry NSW",
    description:
      "The story behind The Coastal — a private retreat built by hand near Berry, NSW South Coast.",
    url: "https://thecoastal.com.au/story",
  },
};

export default function StoryPage() {
  return (
    <>
      <Hero title={"OUR\nSTORY"} description="How a Sunday walk on a gravel track became a place to stay." cover={null} />
      <div className="builder">
        {PARAGRAPHS.map((text) => (
          <SectionRevealText key={text.slice(0, 40)} text={text} />
        ))}
        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Come and see it"
          title="Choose your stay, pick your dates and book direct."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
