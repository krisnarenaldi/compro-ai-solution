export default function AboutPage() {
  return (
    <main className="flex-grow pt-20">
      <section className="py-24 page-hero-surface">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            About
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-6">
            We help companies make their work smarter with AI.
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            aliquet, purus at laoreet pretium, tellus justo semper augue, sit
            amet vehicula magna dolor id nulla.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid gap-gutter grid-cols-1 md:grid-cols-2">
        <div className="bento-card rounded-xl p-8 border border-white/10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Our Vision
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae risus eget mauris aliquam elementum.
          </p>
        </div>
        <div className="bento-card rounded-xl p-8 border border-white/10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Our Approach
          </h2>
          <p className="text-on-surface-variant text-body-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit nisi non dolor egestas, ut egestas urna aliquet.
          </p>
        </div>
      </section>
    </main>
  );
}
