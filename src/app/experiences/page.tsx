import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import { EXPERIENCES } from "@/lib/experiences";


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
  return (
    <main>
      <SiteHeader tone="dark" />
      <div className="page-top">
        <h1 className="display">Experiences</h1>
      </div>

      <section style={{ paddingBottom: "clamp(40px, 6vw, 96px)" }}>
        <div className="grid">
          <h2 className="label c-l start">In and around Berry</h2>
          <Reveal className="c-r">
            <p className="lead">
              Berry and the South Coast reward the unhurried. Here is what we would do with a few days — and where we would eat.
            </p>
          </Reveal>
        </div>
      </section>

      {EXPERIENCES.map((e, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={e.title} className="exp grid">
            <div className="media ar-43" style={{ gridColumn: flip ? "7 / 13" : "1 / 7", gridRow: 1 }}>
              <Image src={e.image} alt={e.title} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div style={{ gridColumn: flip ? "1 / 6" : "8 / 13", gridRow: 1 }}>
              <Reveal>
                <h2 className="exp__title" style={{ marginBottom: 24 }}>{e.title}</h2>
                <p className="exp__text">{e.description}</p>
              </Reveal>
            </div>
          </article>
        );
      })}

      <section className="section" style={{ textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, padding: "0 var(--gutter)" }}>
          <p className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", maxWidth: "14ch" }}>Stay close to all of it</p>
          <ButtonLink href="/book" tone="sage">Plan your stay</ButtonLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
