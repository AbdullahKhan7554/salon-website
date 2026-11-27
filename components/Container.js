/**
 * Shared page-width wrapper: every section, the header and the footer use it,
 * so content starts on the same left line across the site.
 */
export const containerClass = "w-full max-w-[1240px] mx-auto px-[clamp(20px,5vw,48px)]";

export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={className ? `${containerClass} ${className}` : containerClass} {...rest}>
      {children}
    </Tag>
  );
}
