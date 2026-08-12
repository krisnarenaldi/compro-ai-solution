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
            AI Solutions Built Around Your Business
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto mb-4">
            We help businesses automate repetitive work, turn scattered data into actionable insights, and build practical AI systems that fit the way they already work.
          </p>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto mb-10">
            From workflow automation to AI agents and intelligent knowledge systems, we design and implement solutions around your actual business processes — not one-size-fits-all software.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-8 py-4 text-sm font-medium"
            >
              Let's Find What You Can Automate →
            </Link>
          </div>
        </div>
      </section>

      {/* Intro section between Hero and Cards */}
      <section className="py-12 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold text-primary max-w-2xl mx-auto mb-4">
            Solutions That Solve<br />Real Problems
          </h2>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto mb-2">
            AI is most valuable when it becomes part of the way your business works.
          </p>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto">
            Explore how we can help you reduce manual work, improve decision-making, and make information easier to access.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
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
