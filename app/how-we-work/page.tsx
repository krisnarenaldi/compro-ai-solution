export default function HowWeWorkPage() {
  return (
    <main className="flex-grow pt-20">
      <section className="py-24 page-hero-surface">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            How We Work
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-6">
            Practical AI delivered with clarity, speed, and strong governance.
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto">
            We partner closely with teams to understand business processes,
            design the right AI architecture, and deploy automation that is
            measurable, secure, and easy to operate.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid gap-gutter grid-cols-1 md:grid-cols-3">
        <div className="bento-card rounded-xl p-8 border border-white/10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Discover
          </h2>
          <p className="text-on-surface-variant text-body-md">
            We start with interviews, process mapping, and data discovery to
            prioritize the highest-value automation opportunities.
          </p>
        </div>
        <div className="bento-card rounded-xl p-8 border border-white/10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Build
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Our teams design intelligent workflows, integrate APIs and systems,
            and test solutions with real business scenarios.
          </p>
        </div>
        <div className="bento-card rounded-xl p-8 border border-white/10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Scale
          </h2>
          <p className="text-on-surface-variant text-body-md">
            We deploy the solution, monitor performance, and help teams adopt
            new ways of working with confidence.
          </p>
        </div>
      </section>
    </main>
  );
}
