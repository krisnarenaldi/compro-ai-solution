import Link from "next/link";

const services = [
  {
    label: "AI Automation",
    description:
      "Automate repetitive business processes using AI, APIs, and workflow automation.",
    href: "/solution/ai-automation",
  },
  {
    label: "AI Agents",
    description:
      "Build AI agents that can reason, use tools, retrieve information, and execute business tasks.",
    href: "/solution/ai-agents",
  },
  {
    label: "AI Knowledge Assistant",
    description:
      "Turn company documents, SOPs, and knowledge bases into an AI assistant.",
    href: "/solution/ai-knowledge-assistant",
  },
  {
    label: "AI Data & Analytics",
    description:
      "Connect your business data with AI to generate insights, reports, and recommendations.",
    href: "/solution/ai-data-analytics",
  },
  {
    label: "Custom AI Solutions",
    description: "For problems that don't fit an off-the-shelf solution.",
    href: "/solution/custom-ai-solutions",
  },
];

export default function SolutionsPage() {
  return (
    <main className="flex-grow pt-20">
      <section className="py-24 page-hero-surface">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            Solutions
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-6">
            Intelligent services built to automate, accelerate, and augment work.
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto">
            Our suite of AI solutions helps teams reduce manual work, improve
            operational efficiency, and unlock smarter decision-making.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bento-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                  {service.label}
                </h2>
                <p className="text-on-surface-variant text-body-md">
                  {service.description}
                </p>
              </div>
              <span className="mt-8 inline-flex text-primary font-medium">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
