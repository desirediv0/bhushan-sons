/**
 * The editorial "kicker" style (.overline) now carries its own short
 * leading rule via a ::before pseudo-element (see globals.css), so a
 * separate divider line under it would double up. This component is kept
 * as a no-op so the many existing <GoldDivider /> call sites don't need
 * to be touched — it simply renders nothing.
 */
export function GoldDivider() {
  return null;
}

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionLabel({
  children,
  className,
  align = "left",
}: SectionLabelProps) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center" : ""} ${className ?? ""}`}>
      <p className="overline">{children}</p>
    </div>
  );
}
