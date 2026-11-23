"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import { setLenis } from "@/lib/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    history.scrollRestoration = "manual";

    const lenis = new Lenis({
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      prevent: (node: HTMLElement) => node.closest(".no-lenis") !== null,
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenis.on("scroll", () => ScrollTrigger.update());
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}
