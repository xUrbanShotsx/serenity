"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useIsDesktop } from "@/lib/hooks";
import { PROPERTIES } from "@/lib/properties";

// On desktop the footer is 502px tall and its content sits 80% above the fold;
// scrolling slides it down into place (a scrubbed parallax reveal).
export default function SiteFooter() {
  const footer = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  useGSAP(
    () => {
      if (!isDesktop || !inner.current) return;
      gsap.to(inner.current, {
        y: "80%",
        ease: "none",
        duration: 0.001,
        scrollTrigger: { trigger: footer.current, start: "top bottom", end: "bottom bottom", scrub: true, invalidateOnRefresh: true },
      });
    },
    { dependencies: [isDesktop], revertOnUpdate: true, scope: footer },
  );

  return (
    <footer ref={footer} className="footer">
      <div ref={inner} className="footer__inner">
        <div className="container footer__container">
          <div className="grid footer__groups">
            <div className="footer__group">
              <h3 className="footer__title">Stay</h3>
              <ul>
                {PROPERTIES.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.href}>{p.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__group">
              <h3 className="footer__title">Explore</h3>
              <ul>
                <li><Link href="/collection">Accommodation</Link></li>
                <li><Link href="/experiences">Experiences</Link></li>
                <li><Link href="/story">Our Story</Link></li>
                <li><Link href="/book">Plan Your Stay</Link></li>
              </ul>
            </div>
            <div className="footer__group">
              <h3 className="footer__title">The Coastal</h3>
              <div className="footer__content">
                <p className="footer__address">{"Berry, NSW 2535\nSouth Coast, Australia"}</p>
                <ul>
                  <li><a href="mailto:hello@thecoastal.com.au">hello@thecoastal.com.au</a></li>
                  <li>
                    <a href="https://instagram.com/thecoastal.berry" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__group">
              <h3 className="footer__title">Connect</h3>
              <div className="footer__content">
                <p>Share your contact details with us if you&rsquo;d like to hear about seasonal offers and news from the property.</p>
                <a className="wysiwyg" href="mailto:hello@thecoastal.com.au?subject=Subscribe" style={{ textDecoration: "underline" }}>
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="grid footer__meta">
            <p className="footer__copyright">&copy;{new Date().getFullYear()} The Coastal, Berry. All rights reserved.</p>
            <div className="footer__links">
              <Link href="/book">Book now</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
