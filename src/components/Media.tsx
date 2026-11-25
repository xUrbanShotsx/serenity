"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type Props = {
  src: string;
  alt?: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  parallax?: number;
  priority?: boolean;
  quality?: number;
};

// Image frame whose picture is scaled up slightly and drifts vertically as the
// frame crosses the viewport (the reference's `useMediaParallax`, default 0.12).
export default function Media({ src, alt = "", sizes = "100vw", className = "", style, parallax = 0.12, priority = false, quality = 90 }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current || !target.current || !parallax) return;
      const t = parallax;
      const scale = 1 + Math.abs(t);
      const range = 100 * Math.abs(t);
      const lo = -(0.5 * range);
      const hi = 0.5 * range;
      const negative = t < 0;
      gsap.set(target.current, { scale, yPercent: negative ? hi : lo });
      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const y = negative
            ? gsap.utils.mapRange(0, 1, hi, lo, self.progress)
            : gsap.utils.mapRange(0, 1, lo, hi, self.progress);
          gsap.set(target.current, { yPercent: y });
        },
      });
    },
    { dependencies: [parallax], revertOnUpdate: true },
  );

  return (
    <div className={`media ${className}`} style={style}>
      <div ref={root} className="media__root">
        <div ref={target} className="media__target">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={quality} />
        </div>
      </div>
    </div>
  );
}
