"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";

type Phase = "covering" | "unveiling" | "idle";

// Olive curtain that covers the page on first load and on every route change.
// Ported from the reference site's behaviour: the curtain rises over the page,
// the logo draws in, and once the new route is ready it wipes away upward while
// `body.no-loader` switches on every entrance animation (hero title, blur-ins).
export default function PageTransition() {
  const overlay = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLImageElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const api = useRef<{ routeComplete: () => void } | null>(null);

  useEffect(() => {
    const el = overlay.current;
    const mark = logo.current;
    if (!el || !mark) return;
    el.dataset.ready = "true";

    let phase: Phase = "covering";
    let covered = false;
    let routeDone = true;
    let pending = false;
    let token = 0;
    let tl: gsap.core.Timeline | null = null;

    const stopScroll = () => getLenis()?.stop();

    const drawLogo = () =>
      gsap.fromTo(
        mark,
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "sine.out" },
      );

    const unveil = () => {
      pending = false;
      phase = "unveiling";
      const lenis = getLenis();
      const hash = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;
      const top = hash ? hash.getBoundingClientRect().top + window.scrollY : 0;
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(top, { immediate: true, force: true });
      } else {
        window.scrollTo(0, top);
      }
      ScrollTrigger.refresh();

      tl?.kill();
      tl = gsap.timeline({
        onComplete: () => {
          phase = "idle";
          gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)", visibility: "hidden" });
          getLenis()?.start();
        },
      });
      tl.to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.8, ease: "power2.inOut", delay: 0.05 }, 0);
      tl.call(() => document.body.classList.add("no-loader"), undefined, 0.29);
    };

    const maybeUnveil = () => {
      if (!covered || !routeDone || pending) return;
      pending = true;
      const mine = ++token;
      document.body.classList.remove("no-loader");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (mine === token) unveil();
        });
      });
    };

    const onCovered = () => {
      covered = true;
      maybeUnveil();
    };

    const cover = () => {
      phase = "covering";
      covered = false;
      window.dispatchEvent(new Event("menu-close"));
      gsap.set(el, { visibility: "visible" });
      tl?.kill();
      tl = gsap.timeline();
      tl.call(stopScroll, undefined, 0.05);
      tl.to(el, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power2.inOut" }, 0);
      tl.add(drawLogo(), 0.2);
      tl.call(onCovered);
    };

    const routeStart = () => {
      routeDone = false;
      pending = false;
      token += 1;
      if (phase !== "covering") cover();
    };

    api.current = {
      routeComplete: () => {
        if (phase === "covering") {
          routeDone = true;
          maybeUnveil();
        }
      },
    };

    // First load
    tl = gsap.timeline();
    tl.call(stopScroll, undefined, 0.05);
    tl.add(drawLogo(), 0.2);
    tl.call(onCovered);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      if (url.pathname === window.location.pathname) {
        if (url.hash) {
          const target = document.getElementById(url.hash.slice(1));
          const lenis = getLenis();
          if (target && lenis) {
            e.preventDefault();
            e.stopPropagation();
            lenis.scrollTo(target, { offset: -80, duration: 1.4 });
          }
        }
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      routeStart();
      router.push(url.pathname + url.search + url.hash);
    };

    // Failsafe: if the page is restored from bfcache, make sure the curtain is gone.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        covered = true;
        routeDone = true;
        maybeUnveil();
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pageshow", onPageShow);
      tl?.kill();
      api.current = null;
    };
  }, [router]);

  useEffect(() => {
    api.current?.routeComplete();
  }, [pathname]);

  return (
    <div ref={overlay} className="pt" aria-hidden="true">
      <Image ref={logo} className="pt__logo" src="/logo.svg" alt="" width={1215} height={743} priority unoptimized />
    </div>
  );
}
