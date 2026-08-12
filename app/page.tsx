import Link from "next/link";
import HeroCanvas from "./components/HeroCanvas";

export default function Home() {
  return (
    <main className="flex-grow pt-20">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#edeaf5]">
        <div className="absolute inset-0 hero-wave-fallback pointer-events-none"></div>
        <div className="absolute inset-0 w-full h-full z-0">
          <HeroCanvas />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary max-w-4xl mb-6">
            Turn Repetitive Work Into Intelligent Workflows
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-12">
            We design and implement AI automation, agents, and intelligent
            workflows that help businesses reduce manual work, improve
            efficiency, and make better decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-8 py-4 text-sm font-medium"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/solutions"
              className="glass-panel rounded-full px-8 py-4 text-sm font-medium text-primary hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
