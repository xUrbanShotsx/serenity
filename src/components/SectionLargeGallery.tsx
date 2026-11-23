"use client";

import { useCallback, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useIsDesktop } from "@/lib/hooks";
import Media from "./Media";

type Slide = { src: string; alt?: string };

const Caret = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
    <path d={dir === "left" ? "M13.5,8.5l-3.5,3.5,3.5,3.5-.7.7L8.6,12l4.2-4.2Z" : "M10.5,8.5l3.5,3.5-3.5,3.5.7.7L15.4,12l-4.2-4.2Z"} />
  </svg>
);

// Wide 16:9 gallery. On desktop the frame starts clipped to the centre and widens
// to full width as it scrolls into view; slides change with a width wipe while the
// incoming picture scales 1.2 → 1, and a "Next/Prev" chip follows the cursor.
export default function SectionLargeGallery({ slides, animate = true }: { slides: Slide[]; animate?: boolean }) {
  const [index, setIndex] = useState(0);
  const section = useRef<HTMLElement>(null);
  const expander = useRef<HTMLDivElement>(null);
  const slidesEl = useRef<HTMLDivElement>(null);
  const slideEls = useRef<(HTMLDivElement | null)[]>([]);
  const label = useRef<HTMLSpanElement>(null);
  const busy = useRef(false);
  const isDesktop = useIsDesktop();

  useGSAP(
    () => {
      if (!animate || !isDesktop || !expander.current) return;
      gsap.set(expander.current, { clipPath: "inset(0% 36% 0%)" });
      gsap.to(expander.current, {
        ease: "power2.inOut",
        clipPath: "inset(0% 0% 0%)",
        duration: 0.8,
        scrollTrigger: { trigger: expander.current, start: "top bottom", end: "bottom bottom", scrub: true },
      });
    },
    { dependencies: [animate, isDesktop], revertOnUpdate: true, scope: section },
  );

  const goTo = useCallback(
    (next: number, dir: "prev" | "next") => {
      if (busy.current || next === index) return;
      const current = slideEls.current[index];
      const incoming = slideEls.current[next];
      const frame = slidesEl.current;
      if (!current || !incoming || !frame) return;
      busy.current = true;

      slideEls.current.forEach((el, i) => {
        if (el && i !== next && i !== index) gsap.set(el, { zIndex: 1, display: "none" });
      });
      gsap.set(current, { zIndex: 2, display: "block" });

      const inner = incoming.querySelector<HTMLElement>(".s-gallery__slide-inner");
      const w = frame.offsetWidth;
      const h = frame.offsetHeight;
      gsap.set([incoming, inner], {
        left: dir === "prev" ? 0 : "auto",
        right: dir === "next" ? 0 : "auto",
        width: w,
        height: h,
        zIndex: 3,
      });
      gsap.fromTo(
        incoming,
        { display: "none", width: 0 },
        {
          display: "block",
          width: w,
          ease: "power4.inOut",
          duration: 0.8,
          onComplete: () => {
            gsap.set(current, { zIndex: 1, display: "none" });
            gsap.set(incoming, { zIndex: 2 });
          },
        },
      );
      gsap.fromTo(
        inner,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "power3.inOut",
          duration: 0.8,
          onComplete: () => {
            busy.current = false;
            gsap.set(inner, { clearProps: "all" });
          },
        },
      );
      setIndex(next);
    },
    [index],
  );

  const onMove = (e: React.MouseEvent) => {
    if (label.current) gsap.set(label.current, { position: "fixed", x: e.clientX + 15, y: e.clientY + 15 });
  };

  const total = slides.length;

  return (
    <section ref={section} className="s-gallery">
      <div className="container s-gallery__container" onMouseMove={onMove}>
        <div ref={expander} className="s-gallery__expander">
          <div ref={slidesEl} className="s-gallery__slides">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                ref={(el) => {
                  slideEls.current[i] = el;
                }}
                className={`s-gallery__slide${i === index ? " is-active" : ""}`}
              >
                <div className="s-gallery__slide-inner">
                  <Media src={slide.src} alt={slide.alt} sizes="100vw" priority={i === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {total > 1 && (
          <div className="s-gallery__controls" role="group" aria-label={`Gallery controls (${total} images)`}>
            <button
              type="button"
              className="s-gallery__button s-gallery__button--prev"
              aria-label="Previous"
              onClick={() => goTo(index - 1 < 0 ? total - 1 : index - 1, "prev")}
            >
              <Caret dir="left" />
            </button>
            <span className="s-gallery__counter">
              {index + 1} / {total}
            </span>
            <button
              type="button"
              className="s-gallery__button s-gallery__button--next"
              aria-label="Next"
              onClick={() => goTo(index + 1 >= total ? 0 : index + 1, "next")}
            >
              <Caret dir="right" />
            </button>
            <span ref={label} className="s-gallery__label" aria-hidden="true">
              <span className="s-gallery__label-inner">
                <span className="s-gallery__label-text">Next</span>
                <span className="s-gallery__label-text">Prev</span>
              </span>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
