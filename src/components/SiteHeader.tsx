"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { useLenis } from "@/lib/lenis";
import SiteMenu from "./SiteMenu";

// Pages that open on a full-bleed cover image use the light (cream) header.
const LIGHT_HEADER = new Set(["/", "/house", "/suites"]);

export default function SiteHeader() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shown, setShown] = useState(true);
  const [transitions, setTransitions] = useState(false);
  const last = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const tone = LIGHT_HEADER.has(pathname) ? "light" : "dark";

  useEffect(() => {
    if (!lenis) return;
    const onScroll = (l: Lenis) => {
      const y = l.scroll;
      const delta = y - last.current;
      if (y > 120) {
        setScrolled(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setTransitions(true), 300);
      } else {
        clearTimeout(timer.current);
        setScrolled(false);
        setTransitions(false);
      }
      if (y > 120 && delta > 0) setShown(false);
      else if (delta < 0) setShown(true);
      last.current = y;
    };
    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
      clearTimeout(timer.current);
    };
  }, [lenis]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("menu-close", close);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keyup", onKey);
    return () => {
      window.removeEventListener("menu-close", close);
      window.removeEventListener("keyup", onKey);
    };
  }, []);

  const cls = [
    "hdr site-header",
    `hdr--${tone}`,
    scrolled ? "is-scrolled" : "",
    !shown ? "is-hidden" : "",
    transitions ? "has-transitions" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header role="banner" aria-label="Site header" className={cls}>
        <div className="container hdr__container">
          <button
            type="button"
            className="hdr__link hdr__toggle"
            aria-expanded={menuOpen}
            aria-controls="header-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
          <Link href="/" className="hdr__logo" aria-label="The Coastal, Berry — home">
            <Image src="/logo.svg" alt="The Coastal" width={1215} height={743} priority unoptimized />
          </Link>
          <Link href="/book" className="hdr__link">
            Book
          </Link>
        </div>
      </header>
      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
