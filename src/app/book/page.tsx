import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ButtonLink from "@/components/ButtonLink";
import Reveal from "@/components/Reveal";
import StayPanel from "@/components/StayPanel";
import { PROPERTIES } from "@/lib/properties";


export const metadata: Metadata = {
  title: "Book | Reserve Your Stay | The Coastal Berry NSW",
  description:
    "Book your stay at The Coastal — luxury private holiday accommodation in Berry, NSW South Coast. Reserve the 4-bedroom house or one of three boutique suites. Check availability online.",
  keywords: [
    "book accommodation berry nsw",
    "holiday house booking berry nsw",
    "south coast accommodation booking",
    "reserve holiday house nsw",
    "book private suite berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/book",
  },
  openGraph: {
    title: "Book Your Stay | The Coastal Berry NSW",
    description:
      "Reserve the house or one of three private suites at The Coastal, Berry NSW. Check availability and book direct.",
    url: "https://thecoastal.com.au/book",
  },
};

export default function BookPage() {
  return (
    <main>
      <SiteHeader tone="dark" />
      <div className="page-top">
        <h1 className="display">
          Plan your
          <br />
          stay
        </h1>
      </div>

      <section style={{ paddingBottom: "clamp(40px, 6vw, 96px)" }}>
        <div className="grid">
          <h2 className="label c-l start">Book direct</h2>
          <Reveal className="c-r">
            <p className="lead">
              Four private stays, each with its own calendar. Choose your stay below, select your dates and book direct — every reservation comes straight to us.
            </p>
          </Reveal>
        </div>
      </section>

      {PROPERTIES.map((p) => (
        <StayPanel key={p.slug} stay={p} />
      ))}

      <section className="section--tight">
        <div className="grid">
          <p className="small c-l">
            Questions before you book? Email{" "}
            <a className="text-link" href="mailto:hello@thecoastal.com.au">hello@thecoastal.com.au</a> and we&rsquo;ll help shape the trip.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
