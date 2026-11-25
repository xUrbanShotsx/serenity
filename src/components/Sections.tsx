import Link from "next/link";
import type { CSSProperties } from "react";
import ButtonPill, { ArrowRight } from "./ButtonPill";
import LodgifyWidget from "./LodgifyWidget";
import Media from "./Media";
import type { Property } from "@/lib/properties";

type Button = { label: string; href: string };
type MediaItem = { src: string; alt?: string; ratio?: string };

export function SectionHeading({ suptitle, title }: { suptitle?: string; title: string }) {
  return (
    <section>
      <div className="container">
        <header className="s-heading__header" role="group" aria-label={`Section: ${title.slice(0, 40)}`}>
          {suptitle && <h2 className="suptitle">{suptitle}</h2>}
          <div className="s-heading__content">
            <p className="t32 s-heading__title">{title}</p>
          </div>
        </header>
      </div>
    </section>
  );
}

export function SectionDoubleImages({ description, left, right }: { description: string; left: MediaItem[]; right: MediaItem[] }) {
  const frame = (m: MediaItem): CSSProperties => ({ aspectRatio: m.ratio ?? "4 / 5" });
  return (
    <section>
      <div className="container grid s-double">
        <div className="s-double__left">
          <div className="wysiwyg s-double__desc">
            <p>{description}</p>
          </div>
          {left.map((m) => (
            <Media key={m.src} src={m.src} alt={m.alt} style={frame(m)} sizes="(max-width: 1023px) 100vw, 40vw" />
          ))}
        </div>
        <div className="s-double__right">
          {right.map((m) => (
            <Media key={m.src} src={m.src} alt={m.alt} style={frame(m)} sizes="(max-width: 1023px) 100vw, 50vw" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeadingParagraph({ suptitle, title }: { suptitle?: string; title: string }) {
  return (
    <section className="s-paragraph">
      <div className="container">
        {suptitle && <h2 className="suptitle">{suptitle}</h2>}
        <p className="t48 s-paragraph__title">{title}</p>
      </div>
    </section>
  );
}

export function ActionCard({ stay, label }: { stay: Property; label: string }) {
  return (
    <div className="action">
      <Link className="action__button" href={stay.href}>
        <span className="action__hidden">{stay.name}</span>
      </Link>
      <div className="action__inner">
        <div className="action__overlay">
          <div className="pill-group action__label">
            <span className="pill pill--beige">{label}</span>
            <span className="pill pill--beige pill--rounded">
              <ArrowRight />
            </span>
          </div>
        </div>
        <Media src={stay.image} alt={stay.name} sizes="(max-width: 1023px) 100vw, 33vw" />
      </div>
      <h3 className="action__title">{stay.name}</h3>
    </div>
  );
}

export function SectionAccommodations({
  suptitle,
  description,
  stays,
  label,
  limitHeight = false,
}: {
  suptitle: string;
  description: string;
  stays: Property[];
  label: string;
  limitHeight?: boolean;
}) {
  return (
    <section className={`s-acc${limitHeight ? " s-acc--limit" : ""}`}>
      <div className="container">
        <header className="grid s-acc__header" role="group" aria-label={`Section: ${suptitle}`}>
          <div className="s-acc__side s-acc__left">
            <h2 className="suptitle">{suptitle}</h2>
            <div className="wysiwyg">
              <p>{description}</p>
            </div>
          </div>
          <div className="s-acc__side s-acc__right" />
        </header>
        <div className="s-acc__list">
          {stays.map((stay) => (
            <ActionCard key={stay.slug} stay={stay} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionQuote({ text, author, meta }: { text: string; author?: string; meta?: string }) {
  return (
    <section className="s-quote">
      <div className="container grid">
        <blockquote className="s-quote__quote">
          <p className="s-quote__text">{text}</p>
          {(author || meta) && (
            <cite className="s-quote__cite">
              {author && <span className="s-quote__author">{author}</span>}
              {meta && <span className="s-quote__meta">{meta}</span>}
            </cite>
          )}
        </blockquote>
      </div>
    </section>
  );
}

export function SectionStory({
  suptitle,
  title,
  medias,
  description,
  button,
}: {
  suptitle: string;
  title: string;
  medias: [MediaItem, MediaItem];
  description: string;
  button: Button;
}) {
  return (
    <section className="s-story">
      <div className="container">
        <header className="grid s-story__header" role="group" aria-label={`Section: ${title.slice(0, 40)}`}>
          <h2 className="suptitle">{suptitle}</h2>
          <p className="t32 s-story__title">{title}</p>
        </header>
        <div className="grid s-story__content">
          <Media className="s-story__media" src={medias[0].src} alt={medias[0].alt} sizes="25vw" />
          <Media className="s-story__media" src={medias[1].src} alt={medias[1].alt} sizes="25vw" />
          <div className="s-story__inner">
            <div className="wysiwyg">
              <p>{description}</p>
            </div>
            <ButtonPill href={button.href} color="green">
              {button.label}
            </ButtonPill>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionCoverCTA({
  cover,
  suptitle,
  title,
  button,
}: {
  cover: string;
  suptitle: string;
  title: string;
  button: Button;
}) {
  return (
    <section className="s-cover">
      <div className="s-cover__expander">
        <div className="container grid">
          <div className="s-cover__content">
            <h2 className="suptitle">{suptitle}</h2>
            <p className="t32">{title}</p>
            <ButtonPill href={button.href}>{button.label}</ButtonPill>
          </div>
        </div>
        <div className="s-cover__cover">
          <Media src={cover} alt="" sizes="100vw" />
        </div>
      </div>
    </section>
  );
}

export function SectionArticle({ blocks }: { blocks: { heading?: string; paragraphs: string[] }[] }) {
  return (
    <section>
      <div className="container grid">
        <div className="s-article__inner">
          {blocks.map((block, i) => (
            <div className="s-article__block" key={i}>
              {block.heading && <h2 className="t32">{block.heading}</h2>}
              <div className="wysiwyg">
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionRows({ rows }: { rows: { title: string; description: string; image: string; ratio?: string }[] }) {
  return (
    <section>
      <div className="container">
        {rows.map((row, i) => {
          const flip = i % 2 === 1;
          return (
            <article className={`grid s-rows__row${flip ? " is-flip" : ""}`} key={row.title} style={{ paddingBottom: "8rem" }}>
              <Media className="s-rows__img" src={row.image} alt={row.title} sizes="(max-width: 1023px) 100vw, 50vw" style={row.ratio ? { aspectRatio: row.ratio } : undefined} />
              <div className="s-rows__text">
                <h2 className="t32">{row.title}</h2>
                <div className="wysiwyg">
                  <p>{row.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function SectionFeatures({ suptitle, title, items }: { suptitle: string; title: string; items: { title: string; description: string }[] }) {
  return (
    <section className="s-features">
      <div className="container">
        <p className="suptitle" style={{ marginBottom: "2.4rem" }}>{suptitle}</p>
        <h2 className="t48 s-features__title">{title}</h2>
        <ul className="s-features__list">
          {items.map((f, i) => (
            <li key={f.title} className="s-features__item">
              <span className="s-features__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t32">{f.title}</h3>
              <p>{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function BookingPanel({ stay }: { stay: Property }) {
  return (
    <section id={stay.slug} className="s-book">
      <div className="container">
        <div className="s-book__head">
          <p className="suptitle" style={{ marginBottom: "2.4rem" }}>
            {stay.tag}
          </p>
          <h2 className="s-book__name">{stay.name}</h2>
        </div>
        <div className="grid">
          <div className="s-book__left">
            <div className="wysiwyg">
              <p>{stay.blurb}</p>
            </div>
            <ul className="s-book__specs">
              {stay.specs.map(([value, label]) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="s-book__right">
            <Media src={stay.image} alt={stay.name} sizes="(max-width: 1023px) 100vw, 55vw" style={{ aspectRatio: "16 / 10" }} />
            {stay.gallery && (
              <div className="s-book__gallery">
                {stay.gallery.map((g) => (
                  <Media key={g.src} src={g.src} alt={g.alt} sizes="(max-width: 1023px) 50vw, 27vw" style={{ aspectRatio: g.ratio }} />
                ))}
              </div>
            )}
            <div className="s-book__widget">
              <p className="suptitle s-book__widget-title">Check availability</p>
              <LodgifyWidget rentalId={stay.rentalId} name={stay.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
