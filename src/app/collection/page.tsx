import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import StaysOverview from "@/components/StaysOverview";


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
  return (
    <main>
      <SiteHeader tone="dark" />
      <div className="page-top">
        <h1 className="display">Accommodation</h1>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid" style={{ marginBottom: "clamp(48px, 7vw, 110px)" }}>
          <h2 className="label c-l start">Our stays</h2>
          <Reveal className="c-r">
            <p className="lead">
              One house and three private suites, set across twelve acres on the edge of Berry. Each stay offers a distinct expression of the property — from the generous proportions of the main house to the quiet intimacy of the suites.
            </p>
          </Reveal>
        </div>
        <StaysOverview />
        <div style={{ padding: "clamp(48px, 7vw, 110px) var(--gutter) 0" }}>
          <ButtonLink href="/book" tone="sage">Plan your stay</ButtonLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
