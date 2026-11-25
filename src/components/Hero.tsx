"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useIsDesktop } from "@/lib/hooks";
import ButtonPill from "./ButtonPill";

type Props = {
  title: string;
  description?: string;
  button?: { label: string; href: string };
  // Cover image path. `undefined` = olive placeholder, `null` = no cover (page variant).
  cover?: string | null;
  priority?: boolean;
  size?: "md";
  // Background video (muted, looping). Takes the place of the cover image.
  video?: { src: string; poster: string };
};

function SplitTitle({ text }: { text: string }) {
  return (
    <span className="hero-title__text" aria-hidden="true">
      {text.split("\n").map((line, li) => (
        <span className="hero-title__line" key={li}>
          {line.split(" ").map((word, wi, words) => (
            <Fragment key={wi}>
              <span className="hero-title__word">
                {[...word].map((char, ci) => (
                  <span className="hero-title__char" key={ci} style={{ transitionDelay: `${ci * 50}ms` }}>
                    {char}
                  </span>
                ))}
              </span>
              {wi < words.length - 1 ? " " : null}
            </Fragment>
          ))}
        </span>
      ))}
    </span>
  );
}

// Full-height hero. The title is split into lines/words/chars: every character
// slides up from 100% (blurred) once the loader lifts, staggered 50ms. On scroll
// the lines drift apart horizontally and the text column lags behind the page.
export default function Hero({ title, description, button, cover, priority = true, size, video }: Props) {
  const hasCover = cover !== null;
  const root = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const height = el.offsetHeight;
      const lines = Array.from(el.querySelectorAll<HTMLElement>(".hero-title__line"));
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (isDesktop && lines.length) {
            const x = gsap.utils.mapRange(0, 1, 0, 5, p);
            gsap.set(lines[0], { xPercent: x });
            if (lines[1]) gsap.set(lines[1], { xPercent: -x });
            if (lines[2]) gsap.set(lines[2], { xPercent: x });
          }
          gsap.set(container.current, { y: gsap.utils.mapRange(0, 1, 0, height, 0.5 * p) });
        },
      });
      return () => {
        if (lines.length) gsap.set(lines, { clearProps: "all" });
        gsap.set(container.current, { clearProps: "all" });
      };
    },
    { dependencies: [isDesktop], revertOnUpdate: true, scope: root },
  );

  return (
    <div ref={root} className={`hero${hasCover ? " hero--cover" : ""}`}>
      <div ref={wrapper} className={`hero__wrapper${inView ? " in-view" : ""}`} data-in-view={inView ? "true" : "false"}>
        <div ref={container} className="container grid hero__container">
          <h1 className={`hero-title hero__title${size === "md" ? " hero-title--md" : ""}`} aria-label={title.replace(/\n/g, " ")}>
            <SplitTitle text={title} />
          </h1>
          {(description || button) && (
            <div className="hero__desc appear-blur-in">
              {description && (
                <div className="wysiwyg">
                  <p>{description}</p>
                </div>
              )}
              {button && <ButtonPill href={button.href}>{button.label}</ButtonPill>}
            </div>
          )}
        </div>

        {hasCover && (
          <div className="hero__cover appear-scale-in">
            <div className="hero__media">
              <div>
                {video ? (
                  <video
                    className="hero__video"
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                  />
                ) : cover ? (
                  <Image src={cover} alt="" fill sizes="100vw" priority={priority} style={{ objectFit: "cover" }} />
                ) : (
                  <div className="hero__placeholder" style={{ width: "100%", height: "100%" }} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
