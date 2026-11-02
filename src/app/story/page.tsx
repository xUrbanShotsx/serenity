"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const SERIF = "Georgia, 'Times New Roman', serif";
const INK = "#1a1916";

const PARAGRAPHS = [
  "It was a Sunday in late autumn. They weren't looking for land — they were looking for lunch. But somewhere between Berry township and the coast road, they turned down a gravel track and found twelve acres of gentle hills, old olive trees, and a quiet that felt earned. They pulled over and sat in the car for a long time without saying anything.",
  "The world went quiet, and so did they. Months of stillness gave the idea room to grow into something real. The brief they gave themselves was simple: build something that feels like it belongs here. No shortcuts on materials, no room that didn't earn its place. If it couldn't be done properly, it wouldn't be done at all.",
  "They hired tradespeople from Berry and the surrounding towns. A builder who had worked in the region for twenty years. A carpenter who took three weeks on the kitchen joinery alone. The structural decisions were made on-site, walking the land in the mornings, adjusting to what the ground and light asked for rather than what the drawings assumed.",
  "Stone sourced from a nearby quarry. Timber milled from fallen trees on the property. The olive grove that had been here long before them gave the first suite its name. The way afternoon light fell across the deck of the second suggested its own. The third suite sat at the edge of the hill, looking out — its name came last, and felt obvious the moment they said it aloud.",
  "There was no launch. No event. A family from Melbourne arrived on a Tuesday in April — two parents, three children, and a dog who immediately claimed the terrace. They stayed for four nights. On the last morning, one of the kids left a drawing on the kitchen table. It's still there, tucked inside a drawer.",
  "The olive trees are producing. The garden is filling in the way gardens do — unhurried and without instruction. Guests come back, sometimes with the same people, sometimes with different ones. Some stay for one night. Some stay for two weeks and lose track of the days. That was always the hope.",
];

function Paragraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const vpCenter = window.innerHeight / 2;
      const distance = Math.abs(elCenter - vpCenter);
      const maxDist = window.innerHeight * 0.55;
      const opacity = Math.max(0.15, 1 - (distance / maxDist) * 0.85);
      el.style.opacity = String(opacity);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <p
      ref={ref}
      style={{
        fontFamily: SERIF,
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
        color: INK,
        lineHeight: 1.9,
        opacity: 0.15,
        transition: "opacity 0.25s ease",
        marginBottom: "4rem",
      }}
    >
      {text}
    </p>
  );
}

export default function StoryPage() {
  return (
    <main style={{ backgroundColor: "#f2ede5", minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          padding: "140px 2rem 20vh",
        }}
      >
        {PARAGRAPHS.map((text, i) => (
          <Paragraph key={i} text={text} />
        ))}
      </div>
    </main>
  );
}
