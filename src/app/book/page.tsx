import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

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
  return <BookPageClient />;
}
