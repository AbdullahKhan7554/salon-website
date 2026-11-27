import Link from "next/link";
import { ArrowRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-full font-sans font-medium tracking-[0.02em] no-underline cursor-pointer box-border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const sizes = {
  md: "h-[52px] text-[15px]",
  lg: "h-[58px] text-[16px]",
};

// tone="dark" is for buttons sitting on an ink background.
const variants = {
  primary: () => "px-7 border-0 bg-accent text-bone hover:bg-accent-hover",
  secondary: (dark) =>
    `px-7 border border-current bg-transparent ${
      dark ? "text-bone hover:bg-bone hover:text-ink" : "text-ink hover:bg-ink hover:text-bone"
    }`,
  link: (dark) =>
    `px-0 border-0 bg-transparent ${dark ? "text-bone hover:text-bone/80" : "text-accent hover:text-accent-hover"}`,
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
  const cls = `${base} ${sizes[size] ?? sizes.md} ${variants[variant](dark)} ${
    dark ? "focus-visible:ring-offset-ink" : "focus-visible:ring-offset-bone"
  } ${className}`.trim();

  const content = (
    <>
      {variant === "link" ? <span className="border-b border-current pb-0.5">{children}</span> : children}
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
