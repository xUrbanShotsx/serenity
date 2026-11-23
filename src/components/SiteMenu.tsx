"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { PROPERTIES } from "@/lib/properties";

const PRIMARY = [
  { label: "The House", href: "/house" },
  { label: "The Suites", href: "/suites" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Story", href: "/story" },
];

const SECONDARY = [
  { label: "Accommodation", href: "/collection" },
  { label: "Plan Your Stay", href: "/book" },
  { label: "Contact", href: "mailto:hello@thecoastal.com.au" },
  { label: "Instagram", href: "https://instagram.com/thecoastal.berry" },
];

// A cream panel grows out of the top-left corner (0 → full size), the dimming
// backdrop fades in, then primary links, secondary links and stay cards
// stagger in with a blur — the reference menu's GSAP timeline.
export default function SiteMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const mounted = useRef(false);
  const openRef = useRef(open);
  openRef.current = open;

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        panel.current,
        { width: 0, height: 0 },
        {
          ease: "power3.inOut",
          width: () => container.current?.offsetWidth ?? 0,
          height: () => container.current?.offsetHeight ?? 0,
          duration: 0.7,
        },
        "start",
      );
      tl.fromTo(backdrop.current, { opacity: 0 }, { ease: "power3.inOut", opacity: 1, duration: 0.7 }, "start");
      tl.fromTo(
        q("[data-menu-primary]"),
        { filter: "blur(10px)", opacity: 0 },
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.1,
          clearProps: "filter",
          duration: 0.5,
        },
        "-=0.2",
      );
      tl.fromTo(
        q("[data-menu-card]"),
        { y: 20, filter: "blur(10px)", opacity: 0 },
        { y: 0, filter: "blur(0px)", opacity: 1, ease: "power2.out", stagger: 0.05, duration: 0.3 },
        "<+=0.2",
      );
      tl.fromTo(q("[data-menu-secondary]"), { yPercent: 100 }, { yPercent: 0, ease: "power2.out", stagger: 0.05, duration: 0.3 }, "<+=0.2");
      timeline.current = tl;

      const onResize = () => {
        if (openRef.current && panel.current && container.current) {
          gsap.set(panel.current, { width: container.current.offsetWidth, height: container.current.offsetHeight });
        }
        tl.invalidate();
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    },
    { scope: root },
  );

  useEffect(() => {
    const tl = timeline.current;
    if (!tl) return;
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      tl.timeScale(1).play();
    } else {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      lenis?.start();
      tl.timeScale(1.25).reverse();
    }
    document.documentElement.classList.toggle("lock-scroll", open);
    return () => {
      document.documentElement.classList.remove("lock-scroll");
    };
  }, [open]);

  return (
    <div
      ref={root}
      id="header-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`menu${open ? " is-visible" : ""}`}
      inert={!open}
    >
      <div ref={backdrop} className="menu__backdrop" onClick={onClose} />
      <div ref={panel} className="menu__panel" aria-hidden={!open}>
        <div ref={container} className="menu__container">
          <button type="button" className="menu__close" onClick={onClose} aria-label="Close menu">
            Close
          </button>
          <div className="menu__wrapper no-lenis">
            <div className="menu__content no-lenis">
              <nav className="menu__nav menu__primary" aria-label="Main navigation">
                <ul>
                  {PRIMARY.map((item) => (
                    <li key={item.href} data-menu-primary>
                      <Link href={item.href} onClick={onClose}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav className="menu__nav menu__secondary" aria-label="Secondary navigation">
                <ul>
                  {SECONDARY.map((item) => (
                    <li key={item.href}>
                      <span data-menu-secondary>
                        {/^(mailto:|https?:)/.test(item.href) ? (
                          <a href={item.href}>{item.label}</a>
                        ) : (
                          <Link href={item.href} onClick={onClose}>
                            {item.label}
                          </Link>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="menu__rail no-lenis">
              {PROPERTIES.map((p) => (
                <div className="menu__card" key={p.slug} data-menu-card>
                  <div className="action">
                    <Link className="action__button" href={p.href} onClick={onClose}>
                      <span className="action__hidden">{p.name}</span>
                    </Link>
                    <div className="action__inner">
                      <div className="media">
                        <div className="media__root">
                          <div className="media__target">
                            <Image src={p.image} alt={p.name} fill sizes="340px" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="action__title">{p.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
