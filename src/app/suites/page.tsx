import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import StayPanel from "@/components/StayPanel";
import StayCards from "@/components/StayCards";
import { GALLERY } from "@/lib/site";
import { HOUSE, SUITES } from "@/lib/properties";


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
  return (
    <main>
      <SiteHeader tone="light" />

      <section className="hero hero--page">
        <Image className="hero__img" src="/shorelinesuite.jpg" alt="The Suites at The Coastal, Berry NSW" fill priority sizes="100vw" />
        <div className="hero__inner">
          <p className="label">Three private suites</p>
          <h1 className="display">The Suites</h1>
          <p className="hero__text">Each different from the other. All of them entirely your own.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <h2 className="label c-l start">About the suites</h2>
          <Reveal className="c-r">
            <p className="lead">
              The same care went into all three — the same materials, the same attention to light and proportion — but each arrived at its own character through where it sits on the property and what it looks towards.
            </p>
          </Reveal>
          <p className="small c-l r2 start">
            Each suite is one bedroom with a full bathroom and a private outdoor space. They can be booked individually or taken together — the three of them share the property without sharing any walls.
          </p>
          <div className="c-r r2 media ar-43">
            <Image src="/frame2.png" alt="Gardens around the suites" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <Gallery slides={GALLERY} />

      <section className="section--tight" style={{ paddingTop: "clamp(72px, 11vw, 180px)" }}>
        <div className="grid">
          <h2 className="label c-f">Book a suite</h2>
        </div>
        {SUITES.map((s) => (
          <StayPanel key={s.slug} stay={s} />
        ))}
      </section>

      <section className="section">
        <div className="grid" style={{ marginBottom: 40 }}>
          <h2 className="label c-f">Also at The Coastal</h2>
        </div>
        <div style={{ padding: "0 var(--gutter)", maxWidth: 720 }}>
          <StayCards stays={[HOUSE]} wide />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
