"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const SERIF = "Georgia, 'Times New Roman', serif";
const INK = "#1a1916";

const PARAGRAPHS = [
  "It was a Sunday in late autumn, the light low and gold the way it gets on the South Coast in May. They weren't looking for land — they were looking for lunch, somewhere between Berry township and the coast road, the kind of drive that doesn't require a reason. They turned down a gravel track without much thought, following a handwritten sign that may or may not have been directing them somewhere relevant. What they found instead was twelve acres of gentle hills, old olive trees, a dam that caught the sky, and a quiet that felt like it had been accumulating for a long time. They pulled over and sat in the car without saying anything. The engine ticked. A bird they couldn't identify called from the tree line. They stayed until the light changed.",
  "The world went quiet not long after, and so did they. The idea that had started on that gravel track had nowhere particular to go, which turned out to be exactly what it needed. They talked about it over dinners that stretched late, on weekends when there was nothing more pressing, on the long drives back from the property when neither of them wanted to go home. The brief they gave themselves was simple enough to say out loud: build something that belongs here. Not something imported, not something that required the landscape to explain it. Something that had clearly come from the same ground it was sitting on. No shortcuts on materials. No room that didn't earn its place. Nothing added because it seemed expected. If it couldn't be done properly, it wouldn't be done at all — and they were prepared to wait.",
  "They hired tradespeople from Berry and the surrounding towns because it seemed right that the people who built it should be people who knew the region. A builder who had worked the South Coast for twenty years and could tell you which direction the prevailing wind came from on each part of the block. A stonemason who sourced from a quarry forty minutes north and who had an opinion about depth of coursing that he expressed without being asked. A carpenter who took three weeks on the kitchen joinery alone, and who came back twice after he'd finished to sand a edge that was troubling him. Decisions were made on-site, walking the land in the early mornings before the day warmed up, adjusting to what the ground and the light were asking for rather than what the original drawings had assumed. The drawings changed often. The land didn't.",
  "The stone came from a quarry near Nowra — the same formation that runs through the hills behind the property, which meant the walls looked like they had always been there. Timber was milled from trees that had come down on the block over the years, dried slowly, and used where the grain was interesting rather than where it was convenient. The olive grove had been here long before any of them, planted by someone whose name they never found, and it gave the first suite something to be named for. The way afternoon light fell across the deck of the second suite, at a particular angle in late summer, suggested its own name without much discussion. The third suite sat at the edge of the hill with the longest view — they'd known it would be special when they first walked the boundary, but its name came slowly, considered over months, and felt completely obvious the moment it was said aloud. Some things take their time.",
  "There was no launch, no media, no event of any kind. The first guests arrived on a Tuesday in April — a family from Melbourne, two parents and three children, with a dog who stepped out of the car and immediately claimed the terrace as though this had been arranged in advance. They'd found the listing through someone who knew someone, the way the best places tend to travel. They stayed four nights, longer than they'd originally booked, and spent most of their time doing not much in particular: morning swims, afternoon fires, long dinners that nobody was in a hurry to finish. On the last morning, before they loaded the car, one of the children left a drawing on the kitchen table — a house, four stick figures, a dog, a hill, the sun. It's still there. Tucked inside a drawer in the kitchen, exactly where it was left.",
  "The olive trees are producing now, enough for oil each year, pressed locally and used in the kitchens of the property. The garden has filled in the way gardens do when left to their own logic — unhurried, slightly unpredictable, better for it. There are things growing that nobody planted. Guests leave notes sometimes, short ones, tucked under a stone or left on the kitchen bench. Some come back the following year with different people. Some come back with the same people and don't need to explain why. A few have come every season since the first. Some stay one night. Some stay two weeks and lose track of the days entirely. When that happens — when the days stop being distinguishable from each other in the way they are at home — that is when the place is doing what it was always meant to do. That was the hope from the beginning. It still is.",
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
