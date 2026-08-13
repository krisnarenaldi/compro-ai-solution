import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  /** Controls which corner the radial bloom originates from */
  variant?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
  /** Align text left (default) or center */
  align?: "left" | "center";
  maxWidth?: "max-w-3xl" | "max-w-4xl" | "max-w-5xl";
}

const variantStyles: Record<string, string> = {
  "top-right":
    "radial-gradient(ellipse 70% 55% at 92% -5%, rgba(160,195,230,0.38) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 85% 10%, rgba(180,160,220,0.22) 0%, transparent 55%), linear-gradient(160deg, #eef2f8 0%, #ede8f4 50%, #e8eef5 100%)",
  "bottom-left":
    "radial-gradient(ellipse 65% 60% at -8% 108%, rgba(150,190,220,0.36) 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 5% 95%, rgba(175,155,215,0.20) 0%, transparent 55%), linear-gradient(160deg, #edeaf5 0%, #e8edf6 50%, #eff2f7 100%)",
  "top-left":
    "radial-gradient(ellipse 70% 55% at -8% -5%, rgba(155,190,225,0.36) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 8% 12%, rgba(175,155,215,0.20) 0%, transparent 55%), linear-gradient(160deg, #eef2f8 0%, #ede9f5 50%, #e8eef5 100%)",
  "bottom-right":
    "radial-gradient(ellipse 65% 60% at 105% 110%, rgba(145,185,225,0.35) 0%, transparent 62%), radial-gradient(ellipse 40% 35% at 92% 98%, rgba(180,160,220,0.20) 0%, transparent 55%), linear-gradient(160deg, #edeaf5 0%, #e8ecf6 50%, #eef2f7 100%)",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  variant = "top-right",
  align = "left",
  maxWidth = "max-w-4xl",
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section
      className="page-hero-gradient relative pt-32 pb-24 overflow-hidden"
      style={{ background: variantStyles[variant] }}
    >
      {/* Subtle noise overlay */}
      <div className="page-hero-gradient__noise" aria-hidden />

      {/* Soft inner glow ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.45) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div
        className={`relative z-10 ${maxWidth} mx-auto px-margin-mobile md:px-margin-desktop ${isCenter ? "text-center" : ""}`}
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.35em] text-primary/50 mb-5 font-medium">
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-display-lg text-display-lg text-primary mb-6 ${isCenter ? "mx-auto" : ""}`}
          style={{ maxWidth: isCenter ? "820px" : undefined }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-on-surface-variant text-body-md leading-relaxed ${isCenter ? "mx-auto" : "max-w-2xl"}`}
            style={{ maxWidth: isCenter ? "640px" : undefined }}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
