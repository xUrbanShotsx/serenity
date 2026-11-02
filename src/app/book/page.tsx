import Navbar from "@/components/Navbar";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const CREAM = "#f2ede5";
const INK = "#1a1916";

export default function BookPage() {
  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "140px 2rem 8rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              color: INK,
              opacity: 0.4,
              marginBottom: "0.8rem",
            }}
          >
            BERRY, NSW SOUTH COAST
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: INK,
              lineHeight: 1.1,
            }}
          >
            Reserve Your Stay
          </h1>
        </div>

        {/* Lodgify widget placeholder */}
        <div
          style={{
            width: "100%",
            minHeight: "560px",
            backgroundColor: "rgba(26,25,22,0.04)",
            border: "1px dashed rgba(26,25,22,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.55rem",
              letterSpacing: "0.24em",
              color: INK,
              opacity: 0.22,
            }}
          >
            LODGIFY BOOKING WIDGET
          </p>
          <p
            style={{
              fontFamily: FUTURA,
              fontWeight: 400,
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: INK,
              opacity: 0.15,
              textAlign: "center",
              lineHeight: 2,
            }}
          >
            The House · The Olive Suite · The Shoreline Suite · The Horizon Suite
          </p>
        </div>
      </div>
    </main>
  );
}
