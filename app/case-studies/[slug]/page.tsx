import Link from "next/link";

const studies: Record<string, { title: string; description: string; tags: string[] }> = {
  "adm-copilot": {
    title: "ADM Copilot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor urna eu auctor feugiat.",
    tags: ["AI Agent", "Document Intelligence", "Automation"],
  },
  "ai-news-tracking": {
    title: "AI News Tracking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies libero vitae tellus pharetra.",
    tags: ["Monitoring", "AI Insight", "Automation"],
  },
  "cv-screening": {
    title: "CV Screening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id erat quis leo vestibulum consequat.",
    tags: ["HR Automation", "AI Screening", "Workflow"],
  },
  "retail-ai": {
    title: "Retail AI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ex a efficitur sagittis.",
    tags: ["Retail", "Analytics", "Automation"],
  },
};

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = studies[params.slug];

  if (!study) {
    return (
      <main className="flex-grow pt-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto py-24">
          <h1 className="font-display-lg text-display-lg text-primary">Case study not found</h1>
          <p className="text-on-surface-variant mt-4">The requested case study could not be found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-20">
      <section className="py-24 bg-[#0c111b]">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">Case Study</p>
          <h1 className="font-display-lg text-display-lg text-primary mb-6">{study.title}</h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl">{study.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bento-card rounded-xl p-8 border border-white/10 mb-8">
          <div className="flex flex-wrap gap-3">
            {study.tags.map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-[0.2em] text-on-surface-variant/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Challenge</h2>
            <p className="text-on-surface-variant text-body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              mi at leo dignissim convallis.
            </p>
          </div>
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Impact</h2>
            <p className="text-on-surface-variant text-body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pulvinar neque vitae lectus elementum, vel luctus ligula consectetur.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full btn-primary px-8 py-4 font-medium"
        >
          Book a Free Consultation
        </Link>
      </div>
    </main>
  );
}
