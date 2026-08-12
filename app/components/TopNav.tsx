import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
        <Link href="/" className="font-display-lg text-headline-lg tracking-tighter text-primary">
          Aetheris AI
        </Link>
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
