import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  tone = "cream",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "cream" | "sage";
}) {
  return (
    <Link href={href} className={`btn${tone === "sage" ? " btn--sage" : ""}`}>
      <span className="btn__text">{children}</span>
      <span className="btn__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
