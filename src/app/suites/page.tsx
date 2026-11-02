import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

const GRID_CELLS = [
  { col: "1/2", row: "1/3" },
  { col: "2/4", row: "1/2" },
  { col: "4/5", row: "1/3" },
  { col: "2/3", row: "2/3" },
  { col: "3/4", row: "2/4" },
  { col: "4/5", row: "3/5" },
  { col: "1/3", row: "3/4" },
  { col: "1/2", row: "4/6" },
  { col: "2/3", row: "4/5" },
  { col: "3/4", row: "4/6" },
  { col: "2/3", row: "5/6" },
  { col: "4/5", row: "5/6" },
];

export default function SuitesPage() {
  return (
    <main style={{ backgroundColor: CREAM }}>
      <Navbar />

      {/* ── Full-page image grid ─────────────────────────────────── */}
      <section
        style={{
          height: "100vh",
          padding: "120px 1.5rem 1.5rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            gap: "6px",
          }}
        >
          {GRID_CELLS.map((cell, i) => (
            <div
              key={i}
              style={{
                gridColumn: cell.col,
                gridRow: cell.row,
                backgroundColor: "rgba(26,25,22,0.07)",
                border: "1px dashed rgba(26,25,22,0.1)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Description ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: CREAM,
          padding: "8rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.52rem",
              letterSpacing: "0.28em",
              color: INK,
              opacity: 0.35,
              marginBottom: "1.4rem",
            }}
          >
            THREE PRIVATE SUITES
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              color: INK,
              lineHeight: 1.1,
              marginBottom: "2.5rem",
            }}
          >
            The Suites
          </h1>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: INK,
              lineHeight: 1.9,
              opacity: 0.7,
              marginBottom: "2rem",
            }}
          >
            Three suites, each different from the other. The same care went into all of them — the same materials, the same attention to light and proportion — but each one arrived at its own character through the particulars of where it sits on the property and what it looks towards. They were named in the order their names became obvious, not the order they were built.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: INK,
              lineHeight: 1.9,
              opacity: 0.7,
              marginBottom: "2rem",
            }}
          >
            The Olive Suite sits closest to the grove, shaded in the afternoons and quiet in a way that feels deliberate. The Shoreline Suite catches the morning light first and is the right choice for anyone who intends to be up before the rest of the property. The Horizon Suite is positioned at the edge of the hill with the longest view across the land — a suite that earns its name as soon as you step onto the private deck.
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: INK,
              lineHeight: 1.9,
              opacity: 0.7,
            }}
          >
            Each suite is one bedroom with a full bathroom and a private outdoor space. They can be booked individually or taken together — the three of them share the property without sharing any walls.
          </p>

          {/* Specs */}
          <div
            style={{
              display: "flex",
              gap: "4rem",
              justifyContent: "center",
              marginTop: "4rem",
              borderTop: "1px solid rgba(26,25,22,0.1)",
              borderBottom: "1px solid rgba(26,25,22,0.1)",
              padding: "2rem 0",
            }}
          >
            {[["3", "Suites"], ["1", "Bedroom each"], ["2", "Guests each"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "1.4rem", color: INK, marginBottom: "0.3rem" }}>{num}</p>
                <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.2em", color: INK, opacity: 0.4 }}>{label.toUpperCase()}</p>
              </div>
            ))}
          </div>

          <a
            href="/book"
            style={{
              display: "inline-block",
              marginTop: "3rem",
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: INK,
              textDecoration: "none",
              border: "1.5px solid rgba(26,25,22,0.4)",
              borderRadius: "50px",
              padding: "0.7rem 2rem",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = INK; e.currentTarget.style.color = CREAM; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = INK; }}
          >
            Book a Suite
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: INK, color: CREAM, padding: "5rem 3rem 3rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(242,237,229,0.1)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.28em", color: CREAM }}>THE COASTAL</p>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.04em", lineHeight: 1.8, color: "rgba(242,237,229,0.45)", maxWidth: "28ch" }}>Four private stays on the NSW South Coast. A short stroll from Berry, minutes from the beach.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>EXPLORE</p>
              {[["Story", "/story"], ["Collection", "/collection"], ["Experiences", "/experiences"]].map(([label, href]) => (
                <a key={label} href={href} style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none" }}>{label}</a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(242,237,229,0.35)", marginBottom: "0.4rem" }}>CONTACT</p>
              <a href="mailto:hello@thecoastal.com.au" style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.6)", textDecoration: "none" }}>hello@thecoastal.com.au</a>
              <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(242,237,229,0.45)", lineHeight: 1.7 }}>Berry, NSW 2535<br />South Coast, Australia</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "2rem" }}>
            <p style={{ fontFamily: FUTURA, fontWeight: 400, fontSize: "0.52rem", letterSpacing: "0.12em", color: "rgba(242,237,229,0.25)" }}>© {new Date().getFullYear()} THE COASTAL. ALL RIGHTS RESERVED.</p>
            <a href="/book" style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.18em", color: "rgba(242,237,229,0.35)", textDecoration: "none" }}>BOOK NOW</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
