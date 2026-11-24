export const SITE_URL = "https://thecoastal.com.au";

// Set to an image path in /public (e.g. "/hero.jpg") once the hero photo is ready.
export const HERO_IMAGE: string | null = null;
// Set to a video URL to show a "Watch film" link in the hero.
export const HERO_VIDEO_URL: string | null = null;

export const LODGIFY = {
  websiteId: "686132",
  slug: "mark-spinelli-77adcb",
  scriptSrc: "https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Accommodation", href: "/collection" },
  { label: "The Residence", href: "/house" },
  { label: "The Suites", href: "/suites" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Story", href: "/story" },
  { label: "Plan Your Stay", href: "/book" },
] as const;

export const GALLERY = [
  { src: "/frame1.png", alt: "The Coastal grounds" },
  { src: "/theresidence.jpg", alt: "The Residence at The Coastal" },
  { src: "/frame2.png", alt: "Gardens at The Coastal" },
  { src: "/Olivesuite.jpg", alt: "The Olive Suite" },
  { src: "/frame4.png", alt: "Berry, NSW South Coast" },
  { src: "/horizonsuite.jpg", alt: "The Horizon Suite" },
];
