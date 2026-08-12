import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discover",
    headline: "Understand the Problem Before Building the Solution",
    body: "We learn how your business works today — the processes, tools, data, bottlenecks, and goals behind the problem.",
    lookAt: [
      "Current business workflow",
      "Repetitive and manual tasks",
      "Existing tools and systems",
      "Data sources and availability",
      "Operational bottlenecks",
      "Business goals and constraints",
    ],
    goal: "Identify where AI and automation can create meaningful business value.",
    output: "AI Opportunity Assessment",
  },
  {
    number: "02",
    title: "Design",
    headline: "Turn Opportunities Into a Practical Solution",
    body: "Once we understand the problem, we design a solution around your actual workflow. We determine what should be automated, where AI adds value, where human judgment is still needed, and how the solution connects with your existing systems.",
    lookAt: [
      "Solution architecture",
      "AI capabilities",
      "Automation workflow",
      "System integrations",
      "Human approval points",
      "Data requirements",
      "Success criteria",
    ],
    goal: "Create a solution that is technically feasible, commercially sensible, and aligned with your business process.",
    output: "Solution Blueprint",
  },
  {
    number: "03",
    title: "Build",
    headline: "Build, Integrate, and Validate",
    body: "We turn the solution design into a working system. AI models, automation workflows, APIs, databases, and business systems are integrated into one solution.",
    lookAt: [
      "AI implementation",
      "Workflow automation",
      "API & system integration",
      "Data processing",
      "Application development",
      "Testing & validation",
      "Deployment",
    ],
    goal: "Deliver a solution that works reliably in the context of your actual business.",
    output: "Working AI Solution",
  },
  {
    number: "04",
    title: "Optimize",
    headline: "Improve the System as Your Business Evolves",
    body: "Deployment is not the end. Real-world usage reveals new requirements, edge cases, and opportunities for improvement. We monitor how the solution performs and identify where it can be refined.",
    lookAt: [
      "Performance monitoring",
      "Workflow improvements",
      "Prompt & AI optimization",
      "New integrations",
      "Additional automation",
      "Model improvements",
      "Ongoing support",
    ],
    goal: "Keep the solution useful as your business, data, and processes evolve.",
    output: "Continuous Improvement",
  },
];

const humanAiColumns = [
  {
    label: "AI Handles",
    items: ["Repetitive tasks", "Data processing", "Information retrieval", "Pattern detection"],
  },
  {
    label: "AI Assists",
    items: ["Analysis", "Recommendations", "Classification", "Decision support"],
  },
  {
    label: "Humans Decide",
    items: ["Critical decisions", "Exceptions", "Approvals", "Accountability"],
  },
];

const deliverables = [
  {
    title: "AI Opportunity Assessment",
    description: "A clear view of where AI can create value in your business.",
  },
  {
    title: "Solution Blueprint",
    description:
      "A practical design covering workflow, AI capabilities, integrations, and implementation requirements.",
  },
  {
    title: "Working AI Solution",
    description:
      "A deployed solution integrated into your existing business process.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "Continuous improvements as your needs and workflows evolve.",
  },
];

export default function HowWeWorkPage() {
  return (
    <main className="flex-grow pt-20">

      {/* ── Hero ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            How We Work
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-3xl mb-6">
            From Business Problem to AI Solution
          </h1>
          <p className="text-tertiary font-medium text-body-md max-w-2xl mb-4">
            We start with your business problem — not the technology.
          </p>
          <p className="text-on-surface-variant text-body-md max-w-2xl mb-10">
            We understand your workflow, identify where AI can create real value, and build a solution around the way your business actually works.
          </p>
          <Link
            href="/contact"
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
          >
            Book an AI Assessment →
          </Link>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            AI Should Fit Your Business, Not the Other Way Around
          </h2>
          <p className="text-on-surface-variant text-body-md mb-4">
            Every business has different workflows, systems, constraints, and goals. That's why we don't start by asking, "Which AI technology do you want?"
          </p>
          <p className="text-on-surface-variant text-body-md">
            We start by asking:{" "}
            <span className="text-primary font-medium italic">
              "What are you trying to improve?"
            </span>
          </p>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
          The Process
        </h2>
        <div className="flex flex-col gap-gutter">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bento-card rounded-xl p-8 md:p-10 border border-white/10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8"
            >
              {/* Left */}
              <div>
                <p className="text-tertiary font-bold text-[13px] tracking-[0.2em] uppercase mb-2">
                  {step.number}
                </p>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                  {step.title}
                </h3>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-on-surface-variant/70 uppercase tracking-[0.15em]">
                  Output: {step.output}
                </span>
              </div>

              {/* Right */}
              <div>
                <p className="text-primary font-semibold text-[18px] mb-3">
                  {step.headline}
                </p>
                <p className="text-on-surface-variant text-body-md mb-6">
                  {step.body}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/60 mb-3">
                      What we look at
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.lookAt.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                          <span className="text-on-surface-variant text-body-md">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/60 mb-3">
                      The goal
                    </p>
                    <p className="text-on-surface-variant text-body-md">
                      {step.goal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Visual process flow ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bento-card rounded-xl p-10 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
            {["DISCOVER", "DESIGN", "BUILD", "OPTIMIZE"].map((phase, i) => (
              <div key={phase} className="flex flex-col md:flex-row items-center">
                <div className="text-center px-6 py-4">
                  <p className="text-tertiary font-bold text-[12px] tracking-[0.25em] uppercase mb-1">
                    {phase}
                  </p>
                  <p className="text-on-surface-variant text-sm">
                    {["Understand the problem", "Define the solution", "Make it work", "Make it better"][i]}
                  </p>
                </div>
                {i < 3 && (
                  <>
                    <span className="hidden md:block text-on-surface-variant/30 text-xl px-2">→</span>
                    <span className="md:hidden text-on-surface-variant/30 text-xl py-1">↓</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Where It Helps — 3 columns ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          AI Where It Helps. Humans Where They Matter.
        </h2>
        <p className="text-on-surface-variant text-body-md max-w-2xl mb-10">
          Not every process should be fully automated. Some decisions require human judgment, approval, or accountability. We design AI systems with the right balance between automation and human oversight.
        </p>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-3">
          {humanAiColumns.map((col) => (
            <div
              key={col.label}
              className="bento-card rounded-xl p-8 border border-white/10"
            >
              <p className="text-tertiary font-bold text-[12px] tracking-[0.25em] uppercase mb-6">
                {col.label}
              </p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                    <span className="text-on-surface-variant text-body-md">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          What We Deliver
        </h2>
        <p className="text-on-surface-variant text-body-md max-w-xl mb-10">
          From Assessment to Working Solution
        </p>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="bento-card rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-primary font-semibold text-[18px] mb-3">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-body-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bento-card rounded-xl p-10 border border-white/10 max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            How Is the Project Priced?
          </h2>
          <p className="text-on-surface-variant text-body-md mb-4">
            Every AI project is different.
          </p>
          <p className="text-on-surface-variant text-body-md">
            The scope depends on the complexity of your workflow, required integrations, data, AI capabilities, and deployment requirements. That's why we first understand the problem before proposing an implementation scope and investment.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display-lg text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-primary max-w-2xl mx-auto mb-4">
            Have a Business Problem in Mind?
          </h2>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto mb-10">
            You don't need to know which AI technology you need. Tell us what you're trying to improve. We'll help you identify where AI can make a practical difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
            >
              Book an AI Assessment →
            </Link>
            <Link
              href="/solutions"
              className="rounded-full px-8 py-4 text-sm font-medium border border-white/20 text-primary hover:border-white/40 transition-colors inline-flex items-center gap-2"
            >
              Explore Our Solutions →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
