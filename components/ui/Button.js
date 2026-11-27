import Link from "next/link";
import { ArrowRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-full font-sans font-medium tracking-[0.02em] no-underline cursor-pointer box-border transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-[ease] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:hover:translate-none motion-reduce:active:scale-none";

const sizes = {
  md: "h-[52px] text-[15px]",
  lg: "h-[58px] text-[16px]",
};

// tone="dark" is for buttons sitting on an ink background.
const variants = {
  primary: () =>
    "px-7 border-0 bg-accent text-bone hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(140,47,31,0.35)]",
  secondary: (dark) =>
    `px-7 border bg-transparent hover:-translate-y-0.5 ${
      dark
        ? "border-bone text-bone hover:bg-bone hover:text-ink"
        : "border-ink text-ink hover:bg-ink hover:text-bone"
    }`,
};

/**
 * Site button. Renders next/link for internal hrefs, <a target="_blank"> for external
 * ones (http, tel, mailto), and <button> when there is no href.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  tone = "light",
  arrow = false,
  className = "",
  children,
  type = "button",
  ...rest
}) {
  const dark = tone === "dark";
  const cls = `${base} ${sizes[size] ?? sizes.md} ${(variants[variant] ?? variants.primary)(dark)} ${
    dark ? "focus-visible:ring-offset-ink" : "focus-visible:ring-offset-bone"
  } ${className}`.trim();

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          size={18}
          strokeWidth={1.75}
          className="flex-none transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </>
  );

  if (!href) {
    return (
      <button type={type} className={cls} {...rest}>
        {content}
      </button>
    );
  }

  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
