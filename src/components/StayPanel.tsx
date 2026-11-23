import Image from "next/image";
import type { Property } from "@/lib/properties";
import LodgifyWidget from "./LodgifyWidget";
import Reveal from "./Reveal";

export default function StayPanel({ stay, showImage = true }: { stay: Property; showImage?: boolean }) {
  return (
    <section id={stay.slug} className="stay">
      <div className="grid">
        <div className="c-l start">
          <Reveal>
            <p className="label" style={{ marginBottom: 20 }}>{stay.tag}</p>
            <h2 className="stay__name">{stay.name}</h2>
            <p className="small" style={{ margin: "24px 0 32px" }}>{stay.blurb}</p>
            <ul className="specs">
              {stay.specs.map(([value, label]) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="c-r start">
          {showImage && (
            <div className="media ar-1610">
              <Image src={stay.image} alt={stay.name} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          )}
          <div className="booking">
            <p className="label booking__title">Check availability — {stay.name}</p>
            <LodgifyWidget rentalId={stay.rentalId} name={stay.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
