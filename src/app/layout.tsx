import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const BASE_URL = "https://thecoastal.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The Coastal | Luxury Holiday Accommodation Berry NSW South Coast",
    template: "%s | The Coastal Berry NSW",
  },
  description:
    "Luxury holiday accommodation in Berry, NSW South Coast. One private house sleeping 8+ and three boutique suites on 12 acres. Minutes from Seven Mile Beach, Kiama, and Jervis Bay. Book your South Coast escape.",
  keywords: [
    "accommodation berry nsw",
    "holiday house berry nsw",
    "holiday accommodation south coast nsw",
    "luxury accommodation berry",
    "holiday rental berry nsw",
    "beach house south coast nsw",
    "kiama accommodation",
    "kiama holiday house",
    "south coast nsw accommodation",
    "illawarra accommodation",
    "seven mile beach accommodation",
    "berry nsw hotel",
    "berry nsw motel",
    "berry nsw bed and breakfast",
    "berry nsw bnb",
    "south coast getaway nsw",
    "country retreat berry nsw",
    "private villa nsw",
    "holiday house nsw south coast",
    "berry accommodation 4 bedrooms",
    "berry accommodation groups",
    "nowra accommodation",
    "shoalhaven accommodation",
    "jervis bay accommodation",
    "berry nsw things to do",
    "restaurants berry nsw",
    "silos estate berry",
    "sara dining berry",
    "berry donut van",
    "two figs winery berry",
    "weekend getaway sydney",
    "2 hour drive sydney accommodation",
    "holiday house sleeping 8",
    "private estate nsw",
    "boutique accommodation south coast",
  ],
  authors: [{ name: "The Coastal" }],
  creator: "The Coastal",
  publisher: "The Coastal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: BASE_URL,
    siteName: "The Coastal",
    title: "The Coastal | Luxury Holiday Accommodation Berry NSW South Coast",
    description:
      "Luxury holiday accommodation in Berry, NSW South Coast. One private house sleeping 8+ and three boutique suites on 12 acres. Minutes from Seven Mile Beach, Kiama, and Jervis Bay.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Coastal — Luxury Holiday Accommodation Berry NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Coastal | Luxury Holiday Accommodation Berry NSW",
    description:
      "Private holiday house and boutique suites in Berry, NSW South Coast. 12 acres, 4 stays, minutes from the beach.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Berry, New South Wales, Australia" />
        <meta name="geo.position" content="-34.7749;150.6942" />
        <meta name="ICBM" content="-34.7749, 150.6942" />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
