import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/lib/properties";

export default function StayCards({ stays, wide = false }: { stays: Property[]; wide?: boolean }) {
  return (
    <ul className="cards" style={wide ? { gridTemplateColumns: "1fr" } : undefined}>
      {stays.map((s) => (
        <li key={s.slug}>
          <Link href={s.href} className="card">
            <div className={`card__media${wide ? " card__media--wide" : ""}`}>
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes={wide ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 100vw, 33vw"}
              />
            </div>
            <h3 className="serif-name">{s.name}</h3>
            <p className="card__meta">{s.meta}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
