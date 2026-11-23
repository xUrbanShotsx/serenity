"use client";

import { useMemo, useState } from "react";
import { useMediaQuery } from "@/lib/hooks";
import ButtonPill from "./ButtonPill";
import Media from "./Media";

type Item = { src: string; alt?: string; ratio: string };

// Endless strip of pictures, driven by a CSS animation. The first few pictures are
// repeated at the end so the loop is seamless, and the strip pauses on hover.
export default function SectionImagesMarquee({
  suptitle,
  title,
  description,
  button,
  items,
}: {
  suptitle: string;
  title: string;
  description: string;
  button: { label: string; href: string };
  items: Item[];
}) {
  const [paused, setPaused] = useState(false);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 700px)");

  const { duration, list } = useMemo(() => {
    if (items.length < 2) return { duration: 0, list: items };
    if (mobile) return { duration: 10 * items.length, list: [...items, ...items.slice(0, 2)] };
    if (desktop && items.length > 3) return { duration: 10 * items.length, list: [...items, ...items.slice(0, 3)] };
    return { duration: 0, list: items };
  }, [items, desktop, mobile]);

  return (
    <section className="s-marquee">
      <div className="container grid s-marquee__container">
        <h2 className="suptitle">{suptitle}</h2>
        <p className="t32 s-marquee__title">{title}</p>
        <div className="s-marquee__content">
          <div className="wysiwyg">
            <p>{description}</p>
          </div>
          <ButtonPill href={button.href} color="green">
            {button.label}
          </ButtonPill>
        </div>
      </div>
      <div
        className={`s-marquee__marquee${paused ? " is-paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="s-marquee__scrollable"
          style={{ "--duration": `${duration}s`, animation: duration ? undefined : "none" } as React.CSSProperties}
          aria-hidden="true"
        >
          {list.map((item, i) => (
            <div className="s-marquee__item" key={`${item.src}-${i}`}>
              <Media src={item.src} alt="" sizes="34vw" parallax={0} style={{ aspectRatio: item.ratio }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
