import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { SectionHeading, SectionArticle, SectionCoverCTA } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Things to Do in Berry NSW | Restaurants, Beaches & Wineries | The Coastal",
  description:
    "Discover the best things to do near Berry NSW — Seven Mile Beach, Sara Dining, Silos Estate, Two Figs Winery, the Berry Donut Van, Kiama, and more. Stay at The Coastal, Berry's finest private accommodation.",
  keywords: [
    "things to do berry nsw",
    "things to do near berry nsw",
    "berry nsw attractions",
    "restaurants berry nsw",
    "berry nsw restaurants",
    "best restaurants berry nsw",
    "sara dining berry",
    "silos estate berry nsw",
    "two figs winery berry",
    "milkwood bakery berry",
    "berry donut van",
    "seven mile beach nsw",
    "berry nsw things to see",
    "what to do berry nsw",
    "berry nsw weekend",
    "south coast nsw restaurants",
    "berry nsw wineries",
    "berry museum",
    "queen street berry nsw",
  ],
  alternates: {
    canonical: "https://thecoastal.com.au/things-to-do-berry-nsw",
  },
  openGraph: {
    title: "Things to Do in Berry NSW | The Coastal",
    description:
      "The best restaurants, beaches, wineries and attractions near Berry NSW — and the finest private accommodation to come back to.",
    url: "https://thecoastal.com.au/things-to-do-berry-nsw",
  },
};


const HIGHLIGHTS = [
  {
    name: "Berry Donut Van",
    description:
      "The most famous stop on Queen Street and possibly the South Coast. Hot jam donuts made to order from a bright yellow van — cash only, gone by mid-morning on weekends. Get there before nine if you want to avoid the queue. Worth the early start.",
  },
  {
    name: "Milkwood Bakery",
    description:
      "Slow-fermented sourdough, laminated pastries, and honest filter coffee. A five-minute walk from The Coastal and the most reliable way to start any morning in Berry. The focaccia sells out early on weekends.",
  },
  {
    name: "Sara Dining",
    description:
      "The best restaurant in Berry by most measures — intimate, produce-led, and seasonally driven. The menu draws from farms and coast immediately surrounding the Shoalhaven. Bookings essential, especially on weekends. Most guests mention Sara when they check out.",
  },
  {
    name: "Silos Estate",
    description:
      "Berry's most distinctive dining address — a restaurant built inside converted grain silos with a menu that leans on local producers and a wine list worth exploring. Also produces its own Silos label wines. Long lunches are the reason to go.",
  },
  {
    name: "Two Figs Winery",
    description:
      "Eight minutes from the property in Jaspers Brush. An independent cellar door producing cool-climate wines with genuine character — skin-contact whites, earthy reds, and the occasional release that suggests careful attention to what this region can do. No tasting fee, no rush.",
  },
  {
    name: "Queen Street Boutiques",
    description:
      "Berry's main street holds its character better than most. Independent shops occupy nearly every building: antique dealers with genuine stock, homewares, clothing, galleries, food providores, and a produce shop with the local honey. Allow at least an hour.",
  },
  {
    name: "Seven Mile Beach",
    description:
      "Twelve minutes from The Coastal and entirely within its own national park — which is why it remains one of the least crowded long beaches in NSW. Pale wide sand, consistent surf, and a headland walk at Gerroa with views back along the full stretch. Sunrise here is something guests mention unprompted.",
  },
  {
    name: "Berry Museum",
    description:
      "Housed in the old Bank of New South Wales building on Queen Street — one of Berry's finest heritage facades. The museum covers the Wodi Wodi people, European settlement, and the social history of Berry township with more depth and care than its modest exterior suggests.",
  },
];

export default function ThingsToDoBerryNswPage() {
  return (
    <>
      <Hero title={"THINGS TO DO\nIN BERRY, NSW"} button={{ label: "Book now", href: "/book" }} cover={null} size="md" />
      <div className="builder">
        <SectionHeading suptitle="BERRY NSW · SOUTH COAST AUSTRALIA" title="Berry is two hours south of Sydney and one of the most well-rounded destinations on the NSW South Coast. Independent restaurants, cellar doors, a national park beach, and a main street that's been better preserved than most. Here are the places worth your time — and the accommodation worth coming back to." />
        <SectionArticle
          blocks={[
          { heading: "Berry Donut Van", paragraphs: ["The most famous stop on Queen Street and possibly the South Coast. Hot jam donuts made to order from a bright yellow van — cash only, gone by mid-morning on weekends. Get there before nine if you want to avoid the queue. Worth the early start."] },
          { heading: "Milkwood Bakery", paragraphs: ["Slow-fermented sourdough, laminated pastries, and honest filter coffee. A five-minute walk from The Coastal and the most reliable way to start any morning in Berry. The focaccia sells out early on weekends."] },
          { heading: "Sara Dining", paragraphs: ["The best restaurant in Berry by most measures — intimate, produce-led, and seasonally driven. The menu draws from farms and coast immediately surrounding the Shoalhaven. Bookings essential, especially on weekends. Most guests mention Sara when they check out."] },
          { heading: "Silos Estate", paragraphs: ["Berry's most distinctive dining address — a restaurant built inside converted grain silos with a menu that leans on local producers and a wine list worth exploring. Also produces its own Silos label wines. Long lunches are the reason to go."] },
          { heading: "Two Figs Winery", paragraphs: ["Eight minutes from the property in Jaspers Brush. An independent cellar door producing cool-climate wines with genuine character — skin-contact whites, earthy reds, and the occasional release that suggests careful attention to what this region can do. No tasting fee, no rush."] },
          { heading: "Queen Street Boutiques", paragraphs: ["Berry's main street holds its character better than most. Independent shops occupy nearly every building: antique dealers with genuine stock, homewares, clothing, galleries, food providores, and a produce shop with the local honey. Allow at least an hour."] },
          { heading: "Seven Mile Beach", paragraphs: ["Twelve minutes from The Coastal and entirely within its own national park — which is why it remains one of the least crowded long beaches in NSW. Pale wide sand, consistent surf, and a headland walk at Gerroa with views back along the full stretch. Sunrise here is something guests mention unprompted."] },
          { heading: "Berry Museum", paragraphs: ["Housed in the old Bank of New South Wales building on Queen Street — one of Berry's finest heritage facades. The museum covers the Wodi Wodi people, European settlement, and the social history of Berry township with more depth and care than its modest exterior suggests."] },
        ]}
        />
        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Plan a stay"
          title="The Coastal is Berry's finest private holiday accommodation — a four-bedroom house sleeping 8+ and three private boutique suites, set on 12 acres five minutes from Queen Street and 12 minutes from Seven Mile Beach."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
