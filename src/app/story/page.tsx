import Navbar from "@/components/Navbar";

const SERIF = "Georgia, 'Times New Roman', serif";

const TIMELINE = [
  {
    year: "2019",
    title: "The Land",
    detail:
      "It was a Sunday in late autumn. They weren't looking for land — they were looking for lunch. But somewhere between Berry township and the coast road, they turned down a gravel track and found twelve acres of gentle hills, old olive trees, and a quiet that felt earned. They pulled over and sat in the car for a long time without saying anything.",
  },
  {
    year: "2020",
    title: "The Decision",
    detail:
      "The world went quiet, and so did they. Months of stillness gave the idea room to grow into something real. The brief they gave themselves was simple: build something that feels like it belongs here. No shortcuts on materials, no room that didn't earn its place. If it couldn't be done properly, it wouldn't be done at all.",
  },
  {
    year: "2021",
    title: "Breaking Ground",
    detail:
      "They hired tradespeople from Berry and the surrounding towns. A builder who had worked in the region for twenty years. A carpenter who took three weeks on the kitchen joinery alone. The structural decisions were made on-site, walking the land in the mornings, adjusting to what the ground and light asked for rather than what the drawings assumed.",
  },
  {
    year: "2022",
    title: "The Details",
    detail:
      "Stone sourced from a nearby quarry. Timber milled from fallen trees on the property. The olive grove that had been here long before them gave the first suite its name. The way afternoon light fell across the deck of the second suggested its own. The third suite sat at the edge of the hill, looking out — its name came last, and felt obvious the moment they said it aloud.",
  },
  {
    year: "2023",
    title: "First Guests",
    detail:
      "There was no launch. No event. A family from Melbourne arrived on a Tuesday in April — two parents, three children, and a dog who immediately claimed the terrace. They stayed for four nights. On the last morning, one of the kids left a drawing on the kitchen table. It's still there, tucked inside a drawer.",
  },
  {
    year: "Now",
    title: "The Ongoing",
    detail:
      "The olive trees are producing. The garden is filling in the way gardens do — unhurried and without instruction. Guests come back, sometimes with the same people, sometimes with different ones. Some stay for one night. Some stay for two weeks and lose track of the days. That was always the hope.",
  },
];

export default function StoryPage() {
  return (
    <main style={{ backgroundColor: "#f2ede5", minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          paddingTop: "140px",
          paddingBottom: "10rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        {TIMELINE.map((entry, i) => (
          <div
            key={entry.year}
            style={{
              marginBottom: i < TIMELINE.length - 1 ? "6rem" : 0,
            }}
          >
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "0.95rem",
                color: "#1a1916",
                opacity: 0.35,
                marginBottom: "0.6rem",
              }}
            >
              {entry.year}
            </p>
            <h2
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#1a1916",
                lineHeight: 1.1,
                marginBottom: "1.4rem",
              }}
            >
              {entry.title}
            </h2>
            <p
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                color: "#1a1916",
                lineHeight: 1.85,
                opacity: 0.7,
              }}
            >
              {entry.detail}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
