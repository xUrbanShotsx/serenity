"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

// Words start pale (#e3e1d4) and turn olive one after another as the section
// scrolls from the viewport centre to the top (scrubbed).
export default function SectionRevealText({ text }: { text: string }) {
  const section = useRef<HTMLElement>(null);
  const copy = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!copy.current) return;
      const split = SplitText.create(copy.current, { type: "words", aria: "hidden", autoSplit: true });
      gsap.fromTo(
        split.words,
        { color: "#e3e1d4" },
        {
          color: "#5c6e21",
          stagger: 0.1,
          scrollTrigger: { trigger: section.current, start: "top center", end: "top top", scrub: true },
        },
      );
      return () => split.revert();
    },
    { scope: section, revertOnUpdate: true },
  );

  return (
    <section ref={section} className="s-reveal">
      <div className="container grid">
        <p ref={copy} className="s-reveal__text" aria-label={text}>
          {text}
        </p>
      </div>
    </section>
  );
}
