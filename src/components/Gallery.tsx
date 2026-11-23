"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Gallery({ slides }: { slides: { src: string; alt: string }[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = () => {
    const el = track.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const go = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const next = (index + dir + slides.length) % slides.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="gallery" role="region" aria-roledescription="carousel" aria-label="Photo gallery">
      <div className="gallery__track" ref={track} onScroll={onScroll}>
        {slides.map((s, i) => (
          <div className="gallery__slide" key={s.src} aria-label={`${i + 1} of ${slides.length}`}>
            <Image src={s.src} alt={s.alt} fill sizes="100vw" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>
      <div className="gallery__ui">
        <div>
          <button type="button" onClick={() => go(-1)} aria-label="Previous photo">←</button>
          <button type="button" onClick={() => go(1)} aria-label="Next photo">→</button>
        </div>
        <span aria-live="polite">
          {index + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
