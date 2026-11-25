import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionLargeGallery from "@/components/SectionLargeGallery";
import SectionImagesCloud from "@/components/SectionImagesCloud";
import SectionImagesMarquee from "@/components/SectionImagesMarquee";
import {
  SectionHeading,
  SectionDoubleImages,
  SectionHeadingParagraph,
  SectionAccommodations,
  SectionQuote,
  SectionStory,
  SectionCoverCTA,
} from "@/components/Sections";
import { HOUSE, SUITES } from "@/lib/properties";
import { GALLERY, HERO_IMAGE } from "@/lib/site";


export const metadata: Metadata = {
  title: "The Coastal | Luxury Holiday Accommodation Berry NSW South Coast",
  description:
    "The Coastal — luxury private holiday accommodation in Berry, NSW South Coast. One 4-bedroom house sleeping 8+ and three private boutique suites on private grounds. Minutes from Seven Mile Beach, Kiama, and Jervis Bay.",
  alternates: {
    canonical: "https://thecoastal.com.au",
  },
  openGraph: {
    title: "The Coastal | Luxury Holiday Accommodation Berry NSW",
    description:
      "Private holiday house and boutique suites in Berry NSW. Heated pool, private grounds, minutes from Seven Mile Beach. 2hrs from Sydney.",
    url: "https://thecoastal.com.au",
  },
};

export default function Page() {
  return (
    <>
      <Hero
        title={"COASTAL\nSTILLNESS"}
        description="Four private stays set among gardens and open sky, where the hills of Berry meet the long, quiet sweep of Seven Mile Beach."
        button={{ label: "Explore Collection", href: "/collection" }}
        cover={HERO_IMAGE ?? undefined}
        video={{ src: "/video/hero.mp4", poster: "/video/hero-poster.jpg" }}
      />

      <div className="builder">
        <SectionHeading
          suptitle="A Place to Slow Down"
          title="Welcome to The Coastal — a private retreat on the NSW South Coast, tucked between the hills of Berry township and the wild stretch of Seven Mile Beach. Four stays, each with their own character: a main residence built for families and groups, and three intimate suites for those who come to slow down."
        />

        <SectionDoubleImages
          description="Gardens, open sky, and nothing you need to rush back for. Berry's cafés, cellar doors and Queen Street are a short stroll away; Seven Mile Beach is twelve minutes by car."
          left={[{ src: "/aerial-property.webp", alt: "Aerial view of The Coastal and its gardens", ratio: "1122 / 1402" }]}
          right={[{ src: "/frame1.png", alt: "The grounds at The Coastal", ratio: "696 / 840" }]}
        />

        <SectionHeadingParagraph
          suptitle="Accommodation"
          title="Each of our four stays offers a distinct expression of the property — a family-sized house for groups who want room to spread out, and three private suites for those who come to slow down. Every one is entirely your own, with outdoor space, no shared walls and the quiet of the grounds around you."
        />

        <SectionAccommodations
          suptitle="The Residence"
          description="Four bedrooms, an open living area that runs onto a west-facing terrace, a heated pool and a fire pit. Made for families and groups who want space to spread out — it sleeps eight and more."
          stays={[HOUSE]}
          label="View house"
          limitHeight
        />

        <SectionAccommodations
          suptitle="The Suites"
          description="Three private suites — the Olive, the Shoreline and the Horizon — each with one bedroom, a full bathroom and its own outdoor space. Intimate by design, with nothing missing, and no shared walls between them."
          stays={SUITES}
          label="View suite"
        />

        <SectionQuote text="“Four stays, one quiet corner of the coast, and nothing you need to rush back for.”" author="The Coastal" meta="Berry NSW" />

        <SectionLargeGallery slides={GALLERY} />

        <SectionStory
          suptitle="Our story"
          title="The Coastal wasn't planned so much as stumbled upon — a Sunday walk, a gravel track, and a view that refused to be forgotten."
          medias={[
            { src: "/frame2.png", alt: "Gardens at The Coastal" },
            { src: "/frame4.png", alt: "Berry, NSW South Coast" },
          ]}
          description="Built slowly, by hand, with tradespeople from Berry and stone from a quarry near Nowra — a place meant to feel as though it grew from the land rather than being placed on it."
          button={{ label: "Read about our story", href: "/story" }}
        />

        <SectionImagesCloud
          suptitle="The Land"
          title="Gardens, Gently Tended"
          button={{ label: "Learn about the property", href: "/story" }}
          images={[
            { src: "/frame1.png" },
            { src: "/Olivesuite.jpg" },
            { src: "/frame2.png" },
            { src: "/horizonsuite.jpg" },
            { src: "/frame4.png" },
            { src: "/shorelinesuite.jpg" },
          ]}
        />

        <SectionImagesMarquee
          suptitle="Berry"
          title="Berry is the reason people come and the reason they return — a main street of independent shops, a bakery with a queue, cellar doors minutes out of town, and a beach that never seems to fill."
          description="From the Berry Donut Van to long lunches at Silos Estate, the town is a short walk from your door — and Seven Mile Beach is twelve minutes away."
          button={{ label: "Explore experiences", href: "/experiences" }}
          items={[
            { src: "/frame1.png", ratio: "464 / 383" },
            { src: "/theresidence.jpg", ratio: "464 / 546" },
            { src: "/frame2.png", ratio: "464 / 568" },
            { src: "/Olivesuite.jpg", ratio: "464 / 568" },
            { src: "/frame4.png", ratio: "464 / 546" },
            { src: "/horizonsuite.jpg", ratio: "464 / 569" },
            { src: "/Arielshot.jpg", ratio: "464 / 568" },
            { src: "/shorelinesuite.jpg", ratio: "464 / 647" },
          ]}
        />

        <SectionCoverCTA
          cover="/frame3.png"
          suptitle="Plan a stay"
          title="Choose your stay, pick your dates and book direct — every reservation comes straight to us. Questions first? Write to us and we'll help shape the trip."
          button={{ label: "Plan your stay", href: "/book" }}
        />
      </div>
    </>
  );
}
