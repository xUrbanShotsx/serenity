import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import StoryParagraphs from "@/components/StoryParagraphs";
import { PARAGRAPHS } from "@/lib/story";


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
  return (
    <main>
      <SiteHeader tone="dark" />
      <div className="page-top">
        <h1 className="display">Our story</h1>
      </div>

      <section style={{ padding: "clamp(24px, 4vw, 64px) 0 clamp(72px, 11vw, 180px)" }}>
        <div className="grid">
          <h2 className="label c-l start">The Land</h2>
          <div className="c-x">
            <StoryParagraphs paragraphs={PARAGRAPHS} />
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center", paddingTop: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, padding: "0 var(--gutter)" }}>
          <p className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", maxWidth: "14ch" }}>Come and see it</p>
          <ButtonLink href="/book" tone="sage">Plan your stay</ButtonLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
