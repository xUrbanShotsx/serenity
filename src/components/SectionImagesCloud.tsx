"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import ButtonPill from "./ButtonPill";
import Media from "./Media";

const ANGLES = [325, 253, 220, 140, 68, 35];

// Six pictures start stacked in the centre; when the section enters the viewport
// they fan out onto an ellipse (power3.out over 2s, clip-path growing from the
// centre) and then keep orbiting slowly around the heading.
export default function SectionImagesCloud({
  suptitle,
  title,
  button,
  images,
}: {
  suptitle: string;
  title: string;
  button: { label: string; href: string };
  images: { src: string; alt?: string }[];
}) {
  const section = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const box = wrap.current;
      if (!box) return;
      const state = { value: 0 };
      const orbit = items.current
        .filter((el): el is HTMLDivElement => !!el)
        .map((el, i) => ({
          el,
          angle: (ANGLES[i % ANGLES.length] * Math.PI) / 180,
          rx: box.offsetWidth / 2 - el.offsetWidth / 2,
          ry: box.offsetHeight / 2 - el.offsetHeight / 2,
          acc: 0,
        }));

      const ro = new ResizeObserver(([entry]) => {
        const w = entry.contentRect.width / 2;
        const h = entry.contentRect.height / 2;
        orbit.forEach((o) => {
          o.rx = w - o.el.offsetWidth / 2;
          o.ry = h - o.el.offsetHeight / 2;
        });
      });
      ro.observe(box);

      const intro = gsap.to(state, { ease: "power3.out", value: 1, paused: true, duration: 2 });
      ScrollTrigger.create({
        trigger: section.current,
        start: "top bottom",
        end: "top top",
        onEnter: () => intro.play(),
        onLeaveBack: () => {
          intro.progress(0).pause();
          orbit.forEach((o) => (o.acc = 0));
        },
      });

      gsap.to({}, {
        repeat: -1,
        onUpdate: () => {
          if (state.value === 0) return;
          const step = 0.002 * gsap.ticker.deltaRatio(60) * state.value;
          orbit.forEach((o) => {
            o.acc += step;
            const a = o.angle * state.value + o.acc;
            gsap.set(o.el, {
              x: Math.cos(a) * o.rx,
              y: Math.sin(a) * o.ry,
              clipPath: `inset(${100 - 100 * state.value}%)`,
            });
          });
        },
      });

      return () => ro.disconnect();
    },
    { scope: section, revertOnUpdate: true },
  );

  return (
    <section ref={section} className="s-cloud">
      <div className="container grid s-cloud__container">
        <div className="s-cloud__content">
          <p className="suptitle">{suptitle}</p>
          <h2 className="t32">{title}</h2>
          <ButtonPill href={button.href} color="green">
            {button.label}
          </ButtonPill>
        </div>
        <div ref={wrap} className="s-cloud__medias">
          {images.slice(0, 6).map((img, i) => (
            <div
              key={img.src + i}
              ref={(el) => {
                items.current[i] = el;
              }}
              className="s-cloud__expander"
            >
              <Media src={img.src} alt={img.alt ?? ""} sizes="240px" parallax={0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
