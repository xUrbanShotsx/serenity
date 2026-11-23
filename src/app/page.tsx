import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import StaysOverview from "@/components/StaysOverview";
import { GALLERY, HERO_IMAGE, HERO_VIDEO_URL } from "@/lib/site";


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
  return (
    <main>
      <SiteHeader tone="light" />

      <section className="hero">
        {HERO_IMAGE && <Image className="hero__img" src={HERO_IMAGE} alt="" fill priority sizes="100vw" />}
        <div className="hero__inner">
          <h1 className="display">
            Slow down
            <br />
            in Berry
          </h1>
          <p className="hero__text">
            Four private stays on twelve acres, between the hills of Berry and the long, quiet sweep of Seven Mile Beach.
          </p>
          <div className="hero__actions">
            <ButtonLink href="/collection">Explore Stays</ButtonLink>
            {HERO_VIDEO_URL && (
              <a className="text-link" href={HERO_VIDEO_URL} target="_blank" rel="noopener noreferrer">
                WATCH FILM
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <h2 className="label c-l start">A place to slow down</h2>
          <Reveal className="c-r">
            <p className="lead">
              Welcome to The Coastal — a private retreat on the NSW South Coast, tucked between the hills of Berry township and the wild stretch of Seven Mile Beach. Four stays, each with their own character: a main residence built for families and groups, and three intimate suites for those who come to slow down.
            </p>
          </Reveal>
          <p className="small c-l r2 start">
            Twelve acres of gardens, open sky, and nothing you need to rush back for. Berry&rsquo;s cafés, cellar doors and Queen Street are a short stroll away; Seven Mile Beach is twelve minutes by car.
          </p>
          <div className="c-r r2 media ar-43">
            <Image src="/frame1.png" alt="The grounds at The Coastal" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section" id="accommodation" style={{ paddingTop: 0 }}>
        <div className="grid" style={{ marginBottom: "clamp(48px, 7vw, 110px)" }}>
          <h2 className="label c-f">Accommodation</h2>
          <Reveal className="c-w">
            <p className="lead">
              Each of our four stays offers a distinct expression of the property — a family-sized house for groups who want room to spread out, and three private suites for those who come to slow down. Every one is entirely your own, with outdoor space, no shared walls and the quiet of the grounds around you.
            </p>
          </Reveal>
        </div>
        <StaysOverview />
      </section>

      <section className="section--tight" style={{ paddingBottom: "clamp(72px, 11vw, 180px)" }}>
        <div className="grid">
          <Reveal className="c-m">
            <p className="quote__text">&ldquo;Four stays, twelve acres, and nothing you need to rush back for.&rdquo;</p>
            <p className="quote__by">
              The Coastal, <span>Berry NSW</span>
            </p>
          </Reveal>
        </div>
      </section>

      <Gallery slides={GALLERY} />

      <section className="section">
        <div className="grid">
          <h2 className="label c-l start">Our story</h2>
          <Reveal className="c-r">
            <p className="lead">
              The Coastal wasn&rsquo;t planned so much as stumbled upon — a Sunday walk, a gravel track, and a view that refused to be forgotten.
            </p>
          </Reveal>
          <div className="c-l r2 media ar-45" style={{ gridColumn: "1 / 6" }}>
            <Image src="/frame2.png" alt="Gardens at The Coastal" fill sizes="(max-width: 800px) 100vw, 40vw" />
          </div>
          <div className="c-r r2 start stack">
            <div className="media ar-43">
              <Image src="/frame4.png" alt="Berry, NSW South Coast" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <p className="small">
              Built slowly, by hand, with tradespeople from Berry and stone from a quarry near Nowra — a place meant to feel as though it grew from the land rather than being placed on it.
            </p>
            <ButtonLink href="/story" tone="sage">Read about our story</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, padding: "0 var(--gutter)" }}>
          <h2 className="label">The land</h2>
          <Reveal>
            <p className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)", maxWidth: "14ch" }}>
              Twelve acres, gently tended
            </p>
          </Reveal>
          <ButtonLink href="/story" tone="sage">Learn about the property</ButtonLink>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid" style={{ marginBottom: "clamp(40px, 6vw, 90px)" }}>
          <h2 className="label c-l start">Berry</h2>
          <Reveal className="c-r">
            <p className="lead">
              Berry is the reason people come and the reason they return — a main street of independent shops, a bakery with a queue, cellar doors minutes out of town, and a beach that never seems to fill.
            </p>
          </Reveal>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...GALLERY, ...GALLERY].map((g, i) => (
              <div className="marquee__item" key={i}>
                <Image src={g.src} alt="" fill sizes="28vw" />
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "clamp(28px, 4vw, 56px) var(--gutter) 0" }}>
          <ButtonLink href="/experiences" tone="sage">Explore Berry</ButtonLink>
        </div>
      </section>

      <section className="cover">
        <Image className="cover__img" src="/frame3.png" alt="" fill sizes="100vw" />
        <div className="cover__inner">
          <h2 className="label">Plan a trip</h2>
          <p className="lead">
            Choose your stay, pick your dates and book direct — every reservation comes straight to us. Questions first? Write to us and we&rsquo;ll help shape the trip.
          </p>
          <div>
            <ButtonLink href="/book">Plan your stay</ButtonLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
