import Link from "next/link";

const caseStudies = [
  {
    title: "ADM Copilot",
    description:
      "AI-powered travel audit system that helps identify anomalies and reduce manual auditing effort.",
    tags: ["AI Agent", "Document Intelligence", "Automation"],
    href: "/case-studies/adm-copilot",
  },
  {
    title: "AI News Tracking",
    description:
      "Real-time intelligence that monitors news and surfaces business-critical insights.",
    tags: ["Monitoring", "AI Insight", "Automation"],
    href: "/case-studies/ai-news-tracking",
  },
  {
    title: "CV Screening",
    description:
      "Automated resume assessment that helps talent teams shortlist the best candidates faster.",
    tags: ["HR Automation", "AI Screening", "Workflow"],
    href: "/case-studies/cv-screening",
  },
  {
    title: "Retail AI",
    description:
      "Smart retail insights that optimize inventory, pricing, and customer experiences.",
    tags: ["Retail", "Analytics", "Automation"],
    href: "/case-studies/retail-ai",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="flex-grow pt-20">
      <section className="py-24 page-hero-surface">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            Case Studies
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-6">
            Real-world AI solutions with measurable impact.
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto">
            Explore examples of how intelligent automation, agents, and analytics
            are helping businesses work faster and smarter.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.href}
              className="bento-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="mb-8">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                  {study.title}
                </h2>
                <p className="text-on-surface-variant text-body-md">
                  {study.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-[0.2em] text-on-surface-variant/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={study.href}
                className="inline-flex items-center text-primary font-medium"
              >
                Read case study →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
