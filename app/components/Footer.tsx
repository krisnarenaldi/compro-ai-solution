import Link from "next/link";

const solutionsLinks = [
  { label: "AI Automation", href: "/solution/ai-automation" },
  { label: "AI Agents", href: "/solution/ai-agents" },
  { label: "AI Knowledge Assistant", href: "/solution/ai-knowledge-assistant" },
  { label: "AI Data & Analytics", href: "/solution/ai-data-analytics" },
  { label: "Custom AI Solutions", href: "/solution/custom-ai-solutions" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[#FFEBE9] max-w-container-max mx-auto px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <img src="/no-bg-highres.png" alt="AIWorrk Logo" style={{ width: '200px', height: '200px', objectFit: 'contain' }} className="mr-2" />            
          </div>
          <p className="text-black/60 text-sm">
            © 2026 AIWorrk. Intelligence, evolved.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-black/70 uppercase tracking-[0.2em] mb-4">
            Solutions
          </p>
          <div className="space-y-3 text-sm">
            {solutionsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-black/70 hover:text-black/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-black/70 uppercase tracking-[0.2em] mb-4">
            Company
          </p>
          <div className="space-y-3 text-sm">
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-black/90 hover:text-black/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-black/70 uppercase tracking-[0.2em] mb-4">
            Legal
          </p>
          <div className="space-y-3 text-sm">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-black/90 hover:text-black/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
