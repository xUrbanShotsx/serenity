"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

// Small pinned bar on stay pages: ‹ current chapter › + "Book your stay".
export default function ChaptersBar({ chapters, bookHref = "#book" }: { chapters: { id: string; label: string }[]; bookHref?: string }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id));
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
      let current = 0;
      els.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapters]);

  const go = (i: number) => {
    const el = document.getElementById(chapters[(i + chapters.length) % chapters.length].id);
    if (el) getLenis()?.scrollTo(el, { offset: -80, duration: 1.4 });
  };

  return (
    <div className="chapters" style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transition: "opacity 0.3s" }}>
      <div className="chapters__bar">
        <div className="chapters__controls">
          <button type="button" className="chapters__btn chapters__btn--control" aria-label="Previous chapter" onClick={() => go(active - 1)}>
            ‹
          </button>
          <span className="chapters__btn chapters__btn--selected">{chapters[active]?.label}</span>
          <button type="button" className="chapters__btn chapters__btn--control" aria-label="Next chapter" onClick={() => go(active + 1)}>
            ›
          </button>
        </div>
        <a className="chapters__btn chapters__btn--link" href={bookHref}>
          Book your stay
        </a>
      </div>
    </div>
  );
}
