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
  return (
    <main>
      <SiteHeader tone="light" />

      <section className="hero hero--page">
        <Image className="hero__img" src={HOUSE.image} alt="The House at The Coastal, Berry NSW" fill priority sizes="100vw" />
        <div className="hero__inner">
          <p className="label">The main house</p>
          <h1 className="display">The House</h1>
          <p className="hero__text">Four bedrooms, a heated pool and a terrace that faces the afternoon sun.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <h2 className="label c-l start">About the house</h2>
          <Reveal className="c-r">
            <p className="lead">
              Built for the kind of stay where nobody needs to be anywhere. Four bedrooms across a single generous floor, a living area that connects without interruption to the outdoor terrace, and a kitchen designed to be used properly — not worked around.
            </p>
          </Reveal>
          <div className="c-l r2 start stack">
            <p className="small">
              The stone and timber came from the property and the surrounding region, which is why the house reads as something that grew from the land. The terrace faces west, so the last hour of afternoon light is the best hour to be outside.
            </p>
            <p className="small">
              There is a fire pit, a heated pool and enough outdoor dining space for the whole group to eat together. It is five minutes on foot to Berry township and twelve by car to Seven Mile Beach — and the house has been designed so that neither of those facts feels urgent.
            </p>
          </div>
          <div className="c-r r2 media ar-43">
            <Image src="/frame1.png" alt="Grounds around The House" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <Gallery slides={GALLERY} />

      <section className="section--tight" style={{ paddingTop: "clamp(72px, 11vw, 180px)" }}>
        <div className="grid">
          <h2 className="label c-f">Book the house</h2>
        </div>
        <StayPanel stay={HOUSE} showImage={false} />
      </section>

      <section className="section">
        <div className="grid" style={{ marginBottom: 40 }}>
          <h2 className="label c-f">Also at The Coastal</h2>
        </div>
        <div style={{ padding: "0 var(--gutter)" }}>
          <StayCards stays={SUITES} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
