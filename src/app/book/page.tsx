import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeading, BookingPanel } from "@/components/Sections";
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
      "Reserve The Residence or one of three private suites at The Coastal, Berry NSW. Check availability and book direct.",
    url: "https://thecoastal.com.au/book",
  },
};

export default function BookPage() {
  return (
    <>
      <Hero
        title={"PLAN YOUR\nSTAY"}
        description="Four private stays, each with its own calendar. Book direct — every reservation comes straight to us."
        cover={null}
      />
      <div className="builder">
        <SectionHeading
          suptitle="Book direct"
          title="Choose your stay below, select your dates and reserve online. Questions before you book? Write to hello@thecoastal.com.au and we'll help shape the trip."
        />
        {PROPERTIES.map((p) => (
          <BookingPanel key={p.slug} stay={p} />
        ))}
      </div>
    </>
  );
}
