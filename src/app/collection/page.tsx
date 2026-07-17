import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

const STAYS = [
  {
    slug: "the-residence",
    name: "The Residence",
    type: "Main House",
    image: "/frame3.png",
    beds: 4,
    baths: 2,
    guests: 8,
    description:
      "The main house at Serenity. Four bedrooms, two bathrooms, wide open living that spills onto a private terrace. Made for families and groups who want space without compromise.",
    featured: true,
  },
  {
    slug: "the-olive",
    name: "The Olive",
    type: "Suite",
    image: "/frame1.png",
    beds: 1,
    baths: 1,
    guests: 2,
    description:
      "Named for the grove that shades its terrace. A quiet, considered suite with one bedroom, a full bathroom, and a private outdoor area for slow starts.",
    featured: false,
  },
  {
    slug: "the-shoreline",
    name: "The Shoreline",
    type: "Suite",
    image: "/frame2.png",
    beds: 1,
    baths: 1,
    guests: 2,
    description:
      "Light-filled and easy, with a nod to the coast down the road. One bedroom, a full bathroom, and a deck that catches the afternoon sun.",
    featured: false,
  },
  {
    slug: "the-horizon",
    name: "The Horizon",
    type: "Suite",
    image: "/frame4.png",
    beds: 1,
    baths: 1,
    guests: 2,
    description:
      "The most open of the suites. Wide views, a clean interior, and a private outdoor space that earns its name at dusk.",
    featured: false,
  },
];

export default function CollectionPage() {
  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Page header ────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "68px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "calc(68px + 5rem) 2rem 4rem",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <p
          style={{
            fontFamily: FUTURA,
            fontWeight: 700,
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "#111",
            opacity: 0.4,
            marginBottom: "1.25rem",
          }}
        >
          BERRY, NSW SOUTH COAST
        </p>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            color: "#111",
            lineHeight: 1.1,
          }}
        >
          The Collection
        </h1>
        <p
          style={{
            fontFamily: FUTURA,
            fontWeight: 400,
            fontSize: "0.7rem",
            letterSpacing: "0.06em",
            lineHeight: 1.9,
            color: "#111",
            opacity: 0.5,
            maxWidth: "44ch",
            marginTop: "1.5rem",
          }}
        >
          One residence and three private suites — each with their own feel,
          all sharing the same stretch of Berry hillside.
        </p>
      </section>

      {/* ── The Residence — featured ────────────────────────────── */}
      {(() => {
        const stay = STAYS[0];
        return (
          <section
            key={stay.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "80vh",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stay.image}
              alt={stay.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />

            {/* Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "4rem 5rem",
                gap: "1.5rem",
              }}
            >
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.25em", color: "#111", opacity: 0.4 }}>
                {stay.type.toUpperCase()}
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  color: "#111",
                  lineHeight: 1.1,
                }}
              >
                {stay.name}
              </h2>
              <p
                style={{
                  fontFamily: FUTURA,
                  fontWeight: 400,
                  fontSize: "0.72rem",
                  letterSpacing: "0.04em",
                  lineHeight: 1.85,
                  color: "#111",
                  opacity: 0.6,
                  maxWidth: "38ch",
                }}
              >
                {stay.description}
              </p>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "0.5rem" }}>
                {[
                  [stay.beds, "Bedrooms"],
                  [stay.baths, "Bathrooms"],
                  [stay.guests, "Guests"],
                ].map(([n, label]) => (
                  <div key={String(label)}>
                    <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "1.1rem", color: "#111", marginBottom: "0.25rem" }}>{n}</p>
                    <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.55rem", letterSpacing: "0.18em", color: "#111", opacity: 0.4 }}>
                      {String(label).toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={`/collection/${stay.slug}`}
                style={{
                  fontFamily: FUTURA,
                  fontWeight: 700,
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  color: "#111",
                  textDecoration: "none",
                  border: "1.5px solid #111",
                  padding: "0.55rem 1.5rem",
                  marginTop: "0.5rem",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                VIEW RESIDENCE
              </a>
            </div>
          </section>
        );
      })()}

      {/* ── Three suites grid ───────────────────────────────────── */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {STAYS.slice(1).map((stay, i) => (
          <a
            key={stay.slug}
            href={`/collection/${stay.slug}`}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              borderRight: i < 2 ? "1px solid rgba(0,0,0,0.07)" : "none",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", overflow: "hidden", height: "55vh" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stay.image}
                alt={stay.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.7s ease",
                }}
                className="suite-img"
              />
            </div>

            {/* Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2.5rem 2rem",
                gap: "0.75rem",
                borderTop: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.55rem", letterSpacing: "0.22em", color: "#111", opacity: 0.4 }}>
                SUITE
              </p>
              <h3
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                  color: "#111",
                  lineHeight: 1.2,
                }}
              >
                {stay.name}
              </h3>
              <p
                style={{
                  fontFamily: FUTURA,
                  fontWeight: 400,
                  fontSize: "0.65rem",
                  letterSpacing: "0.03em",
                  lineHeight: 1.8,
                  color: "#111",
                  opacity: 0.55,
                  maxWidth: "32ch",
                }}
              >
                {stay.description}
              </p>
              <p
                style={{
                  fontFamily: FUTURA,
                  fontWeight: 700,
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  color: "#111",
                  opacity: 0.6,
                  marginTop: "0.5rem",
                }}
              >
                1 BED · 1 BATH · 2 GUESTS
              </p>
            </div>
          </a>
        ))}
      </section>

      <style>{`
        .suite-img:hover { transform: scale(1.04); }
        @media (prefers-reduced-motion: reduce) {
          .suite-img { transition: none !important; }
        }
      `}</style>
    </main>
  );
}
