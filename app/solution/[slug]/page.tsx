import Link from "next/link";

const items: Record<string, { title: string; description: string }> = {
  "ai-automation": {
    title: "AI Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at libero a velit pharetra aliquet.",
  },
  "ai-agents": {
    title: "AI Agents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt metus non laoreet iaculis.",
  },
  "ai-knowledge-assistant": {
    title: "AI Knowledge Assistant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nibh in ipsum malesuada luctus.",
  },
  "ai-data-analytics": {
    title: "AI Data & Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis sapien nec sapien vehicula.",
  },
  "custom-ai-solutions": {
    title: "Custom AI Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisl ac enim convallis gravida.",
  },
};

export function generateStaticParams() {
  return Object.keys(items).map((slug) => ({ slug }));
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const item = items[params.slug];

  if (!item) {
    return (
      <main className="flex-grow pt-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto py-24">
          <h1 className="font-display-lg text-display-lg text-primary">Solution not found</h1>
          <p className="text-on-surface-variant mt-4">The requested solution could not be found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-20">
      <section className="py-24 bg-[#0c111b]">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">Solution</p>
          <h1 className="font-display-lg text-display-lg text-primary mb-6">{item.title}</h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl">{item.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Overview</h2>
            <p className="text-on-surface-variant text-body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed a neque sed tortor scelerisque placerat.
            </p>
          </div>
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Outcome</h2>
            <p className="text-on-surface-variant text-body-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium felis nec facilisis faucibus.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full btn-primary px-8 py-4 font-medium"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
