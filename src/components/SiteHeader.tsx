"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header site-header--${tone}`}>
        <button
          type="button"
          className="site-header__btn"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          Menu
        </button>
        <Link href="/" className="site-header__logo" aria-label="The Coastal, Berry — home">
          <Image src="/logo.svg" alt="The Coastal" width={76} height={46} priority unoptimized />
        </Link>
        <Link href="/book" className="site-header__btn site-header__btn--right">
          Book
        </Link>
      </header>

      <div id="site-menu" className={`menu${open ? " is-open" : ""}`} inert={!open}>
        <div className="menu__top">
          <button type="button" className="site-header__btn" onClick={() => setOpen(false)}>
            Close
          </button>
          <Link href="/book" className="site-header__btn" onClick={() => setOpen(false)}>
            Book
          </Link>
        </div>
        <ul className="menu__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu__foot">
          <a href="mailto:hello@thecoastal.com.au">hello@thecoastal.com.au</a>
          <a href="https://instagram.com/thecoastal.berry" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <span>Berry, NSW 2535</span>
        </div>
      </div>
    </>
  );
}
