export type Property = {
  slug: "house" | "olive" | "shoreline" | "horizon";
  name: string;
  kind: "house" | "suite";
  tag: string;
  meta: string;
  blurb: string;
  specs: [string, string][];
  image: string;
  href: string;
  // Lodgify rental id (the data-rental-id from Settings > Website > External widgets).
  // Leave null until known; the booking panel then shows an enquiry fallback.
  rentalId: string | null;
};

export const PROPERTIES: Property[] = [
  {
    slug: "house",
    name: "The Residence",
    kind: "house",
    tag: "The Residence",
    meta: "4 Bedrooms · Sleeps 8+",
    blurb:
      "Four bedrooms across a single generous floor, an open living area that runs onto a west-facing terrace, and a kitchen built to be used. A heated pool and fire pit keep a full group happy without anyone needing to leave.",
    specs: [
      ["4", "Bedrooms"],
      ["2", "Bathrooms"],
      ["8+", "Guests"],
      ["Heated", "Pool"],
    ],
    image: "/theresidence.jpg",
    href: "/house",
    rentalId: null,
  },
  {
    slug: "olive",
    name: "The Olive Suite",
    kind: "suite",
    tag: "Private Suite",
    meta: "1 Bedroom · 2 Guests",
    blurb:
      "Closest to the olive grove, shaded in the afternoons and quiet in a way that feels deliberate. One bedroom, a full bathroom and a private outdoor space.",
    specs: [
      ["1", "Bedroom"],
      ["1", "Bathroom"],
      ["2", "Guests"],
      ["Private", "Outdoor space"],
    ],
    image: "/Olivesuite.jpg",
    href: "/suites#olive",
    // Lodgify "Studio 1" — confirm this is the Olive Suite.
    rentalId: "863227",
  },
  {
    slug: "shoreline",
    name: "The Shoreline Suite",
    kind: "suite",
    tag: "Private Suite",
    meta: "1 Bedroom · 2 Guests",
    blurb:
      "Catches the morning light first — the right choice for anyone who intends to be up before the rest of the property. One bedroom, a full bathroom and a private outdoor space.",
    specs: [
      ["1", "Bedroom"],
      ["1", "Bathroom"],
      ["2", "Guests"],
      ["Private", "Outdoor space"],
    ],
    image: "/shorelinesuite.jpg",
    href: "/suites#shoreline",
    rentalId: null,
  },
  {
    slug: "horizon",
    name: "The Horizon Suite",
    kind: "suite",
    tag: "Private Suite",
    meta: "1 Bedroom · 2 Guests",
    blurb:
      "Set at the edge of the hill with the longest view across the land — a suite that earns its name the moment you step onto the private deck.",
    specs: [
      ["1", "Bedroom"],
      ["1", "Bathroom"],
      ["2", "Guests"],
      ["Private", "Deck"],
    ],
    image: "/horizonsuite.jpg",
    href: "/suites#horizon",
    rentalId: null,
  },
];

export const HOUSE = PROPERTIES[0];
export const SUITES = PROPERTIES.slice(1);
