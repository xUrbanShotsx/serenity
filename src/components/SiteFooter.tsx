import Link from "next/link";
import { PROPERTIES } from "@/lib/properties";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__cols">
        <div>
          <h3 className="label">Explore</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/collection">Accommodation</Link></li>
            <li><Link href="/experiences">Experiences</Link></li>
            <li><Link href="/story">Our Story</Link></li>
            <li><Link href="/book">Plan Your Stay</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="label">Stay</h3>
          <ul>
            {PROPERTIES.map((p) => (
              <li key={p.slug}><Link href={p.href}>{p.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="label">The Coastal</h3>
          <ul>
            <li>Berry, NSW 2535</li>
            <li>South Coast, Australia</li>
            <li><a href="mailto:hello@thecoastal.com.au">hello@thecoastal.com.au</a></li>
            <li>
              <a href="https://instagram.com/thecoastal.berry" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="label">Connect</h3>
          <p className="small" style={{ marginBottom: 18 }}>
            Share your contact details with us if you&rsquo;d like to hear about seasonal offers and news from the property.
          </p>
          <a className="text-link" href="mailto:hello@thecoastal.com.au?subject=Subscribe">
            Subscribe
          </a>
        </div>
      </div>
      <div className="footer__base">
        <span>&copy;{new Date().getFullYear()} The Coastal, Berry. All rights reserved.</span>
        <Link href="/book">Book now</Link>
      </div>
    </footer>
  );
}
