import HeroCanvas from "./components/HeroCanvas";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#353839] backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
          {/* Brand */}
          <a
            className="font-display-lg text-headline-lg tracking-tighter text-primary"
            href="#"
          >
            Aetheris AI
          </a>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#"
            >
              Solutions
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#"
            >
              Vision
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#"
            >
              Enterprise
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#"
            >
              Connect
            </a>
          </div>
          {/* Trailing Action */}
          <button className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full btn-primary font-medium text-sm">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <HeroCanvas />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
            <h1 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary max-w-4xl mb-6">
              Evolving Human Potential with Fluid AI
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-12">
              Experience the next generation of intelligence that adapts,
              learns, and flows with your enterprise.
            </p>
            <button className="glass-panel px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-white/5 transition-all duration-300 group">
              <span className="font-medium text-primary">
                Explore Solutions
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </section>

        {/* Solutions (Bento Grid) */}
        <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Core Intelligence
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Modular solutions designed to seamlessly integrate into your
              operational architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[280px]">
            {/* Card 1: NLP */}
            <div className="bento-card rounded-xl p-8 md:col-span-8 flex flex-col justify-end group hover:border-white/20 transition-colors">
              <div className="mb-auto">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 font-light">
                  language
                </span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Neural Dynamics
                </h3>
                <p className="text-on-surface-variant">
                  Advanced Natural Language Processing for intuitive
                  human-machine interaction.
                </p>
              </div>
            </div>
            {/* Card 2: Vision */}
            <div className="bento-card rounded-xl p-8 md:col-span-4 flex flex-col justify-end group hover:border-white/20 transition-colors">
              <div className="mb-auto">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 font-light">
                  visibility
                </span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Cognitive Vision
                </h3>
                <p className="text-on-surface-variant">
                  Real-time spatial and object analysis.
                </p>
              </div>
            </div>
            {/* Card 3: Analytics */}
            <div className="bento-card rounded-xl p-8 md:col-span-4 flex flex-col justify-end group hover:border-white/20 transition-colors">
              <div className="mb-auto">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 font-light">
                  timeline
                </span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Predictive Pathways
                </h3>
                <p className="text-on-surface-variant">
                  Anticipatory data modeling and forecasting.
                </p>
              </div>
            </div>
            {/* Card 4: RPA */}
            <div className="bento-card rounded-xl p-8 md:col-span-8 flex flex-col justify-end group hover:border-white/20 transition-colors">
              <div className="mb-auto">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 font-light">
                  account_tree
                </span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Autonomous Flow
                </h3>
                <p className="text-on-surface-variant">
                  Self-optimizing robotic process automation for complex
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-32 bg-surface-container-low border-y border-white/5">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <p className="font-headline-lg text-headline-lg leading-relaxed text-primary/90">
              &ldquo;We build AI not to replace human capability, but to
              elevate it. Fluid intelligence means technology that molds to
              your ethos, ensuring ethical, transparent, and symbiotic
              progress.&rdquo;
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-surface-container-lowest z-0"></div>
          {/* Subtle gradient orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
            <h2 className="font-headline-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-8">
              Connect with the Future
            </h2>
            <button className="btn-primary px-10 py-4 rounded-full font-medium text-lg flex items-center space-x-2">
              <span>Initialize Partnership</span>
              <span className="material-symbols-outlined text-lg">bolt</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-[#353839] grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col space-y-4">
          <span className="font-display-lg text-headline-lg text-primary">
            Aetheris AI
          </span>
          <p className="text-on-surface-variant text-sm">
            © 2024 Aetheris AI. Intelligence, evolved.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-center space-y-2 md:space-y-0 md:space-x-8 md:flex-row text-sm">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            AI Ethics
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Global Offices
          </a>
        </div>
      </footer>
    </>
  );
}