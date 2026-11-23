import Link from "next/link";

export const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
    <path d="M12.52,15.48l-.6-.59,2.46-2.46h-6.38v-.86h6.38l-2.46-2.46.6-.6,3.48,3.48-3.48,3.48Z" />
  </svg>
);

export default function ButtonPill({
  href,
  children,
  color = "beige",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  color?: "beige" | "green";
  className?: string;
}) {
  const cls = `btn btn--${color} ${className}`.trim();
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__icon">
        <ArrowRight />
      </span>
    </>
  );
  if (/^(mailto:|https?:)/.test(href)) {
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
