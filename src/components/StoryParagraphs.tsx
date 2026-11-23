"use client";

import { useEffect, useRef } from "react";

function Paragraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
      const maxDist = window.innerHeight * 0.55;
      el.style.opacity = String(Math.max(0.15, 1 - (distance / maxDist) * 0.85));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <p ref={ref} className="story-p">
      {text}
    </p>
  );
}

export default function StoryParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((text) => (
        <Paragraph key={text.slice(0, 40)} text={text} />
      ))}
    </>
  );
}
