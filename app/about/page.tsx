import Link from "next/link";

const principles = [
  {
    title: "Business First",
    description:
      "Technology is a means, not the objective. We start with your business process, bottlenecks, and goals before deciding what technology belongs in the solution.",
  },
  {
    title: "Practical Over Hype",
    description:
      "Not every problem needs AI. We focus on solutions that can create tangible improvements in how your team works — whether that means automation, better access to information, or faster decision-making.",
  },
  {
    title: "Human + AI",
    description:
      "AI should augment people, not blindly replace them. We design systems where AI handles repetitive work and assists with analysis, while people remain in control of decisions that require judgment and accountability.",
  },
];

const services = [
  {
    title: "AI Automation",
    description:
      "Connect workflows, tools, and business rules to reduce repetitive manual work.",
    href: "/solution/ai-automation",
  },
  {
    title: "AI Agents",
    description:
      "Build AI systems that can reason, use tools, and execute multi-step tasks.",
    href: "/solution/ai-agents",
  },
  {
    title: "AI Knowledge Assistant",
    description:
      "Turn company documents and internal knowledge into an intelligent, accessible assistant.",
    href: "/solution/ai-knowledge-assistant",
  },
  {
    title: "AI Data & Analytics",
    description:
      "Help businesses turn their data into insights and better decisions.",
    href: "/solution/ai-data-analytics",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Combine AI, automation, data, and software to solve problems that don't fit a standard solution.",
    href: "/solution/custom-ai-solutions",
  },
];

const workflowSteps = [
  { label: "Workflow", description: "How does the work happen today?" },
  { label: "Data", description: "What information does the system need?" },
  { label: "AI", description: "Where can intelligence improve the process?" },
  { label: "Integration", description: "How does it connect to existing systems?" },
  { label: "Human Oversight", description: "Where should people remain in control?" },
  { label: "Outcome", description: "What changes for the business?" },
];

const approachPoints = [
  "Direct communication",
  "Focused scope",
  "Practical architecture",
  "Iterative development",
  "Clear business objectives",
];

export default function AboutPage() {
  return (
    <main className="flex-grow pt-20">

      {/* ── Hero ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            About
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-3xl mb-6">
            Building AI That Works for Business
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-2xl mb-4">
            Aetheris AI is an independent AI engineering studio helping businesses turn repetitive work, scattered information, and complex processes into intelligent workflows.
          </p>
          <p className="text-on-surface-variant text-body-md max-w-2xl mb-10">
            We combine AI engineering, automation, data, and software integration to build practical solutions around the way your business actually works.
          </p>
          <Link
            href="/solutions"
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
          >
            Explore Our Solutions →
          </Link>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/60 mb-4">
            Who We Are
          </p>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            AI Engineering With a Business-First Mindset
          </h2>
          <p className="text-on-surface-variant text-body-md mb-4">
            AI is changing how businesses operate — but adopting AI isn't about adding a chatbot to every process. The real opportunity is finding the right problems to solve.
          </p>
          <p className="text-on-surface-variant text-body-md mb-4">
            At Aetheris AI, we work with businesses to identify where AI can create meaningful value, then design and implement solutions that fit their existing workflows, systems, and constraints.
          </p>
          <p className="text-on-surface-variant text-body-md mb-2">
            Our focus is simple:
          </p>
          <p className="text-primary font-semibold text-body-md italic">
            "Build AI that solves a real problem."
          </p>
          <p className="text-on-surface-variant text-body-md mt-4">
            That means we don't start with a technology and look for somewhere to use it. We start with the business problem, then determine whether AI is actually the right tool.
          </p>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/60 mb-4">
          What We Believe
        </p>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
          Our Principles
        </h2>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="bento-card rounded-xl p-8 border border-white/10">
              <h3 className="text-primary font-semibold text-[18px] mb-3">
                {p.title}
              </h3>
              <p className="text-on-surface-variant text-body-md">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/60 mb-4">
          What We Do
        </p>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
          From AI Automation to Intelligent Systems
        </h2>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bento-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-primary font-semibold text-[18px] mb-3">
                  {s.title}
                </h3>
                <p className="text-on-surface-variant text-body-md">
                  {s.description}
                </p>
              </div>
              <span className="mt-6 text-primary font-medium text-sm">
                View details →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center text-primary font-medium"
          >
            Explore all solutions →
          </Link>
        </div>
      </section>

      {/* ── How We Think About AI ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/60 mb-4">
          How We Think About AI
        </p>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
          The Right AI Is the AI That Fits the Workflow
        </h2>
        <div className="max-w-sm">
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <p className="text-on-surface-variant text-body-md mb-8">
              A powerful AI model is not enough to solve a business problem. A useful solution also needs the right combination of:
            </p>
            <ol className="flex flex-col gap-0">
              {workflowSteps.map((step, i) => (
                <li key={step.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary text-sm font-semibold shrink-0">
                      {i + 1}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="w-px h-6 bg-white/10" />
                    )}
                  </div>
                  <div className="py-1">
                    <p className="text-primary font-semibold text-[15px]">{step.label}</p>
                    <p className="text-on-surface-variant text-sm">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/60 mb-4">
          Our Approach
        </p>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
          Small, Focused, and Engineering-Led
        </h2>
        <p className="text-on-surface-variant text-body-md max-w-2xl mb-6">
          We believe good AI solutions don't require unnecessary layers of complexity. A focused team allows us to work closely with clients, move quickly, and stay involved from problem discovery through implementation.
        </p>
        <p className="text-on-surface-variant text-body-md max-w-2xl mb-8">
          We keep the process collaborative and transparent:
        </p>
        <ul className="flex flex-col gap-3 max-w-sm mb-6">
          {approachPoints.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
              <span className="text-on-surface-variant text-body-md">{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-primary font-semibold italic text-body-md">
          "You work directly with the people building your solution."
        </p>
      </section>

      {/* ── Built by ── side by side ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/60 mb-10">
          Built by an AI Engineer
        </p>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          {/* Left — story */}
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <p className="text-on-surface-variant text-body-md mb-4">
              Aetheris AI was founded with a simple idea: businesses should be able to use AI without having to navigate unnecessary complexity.
            </p>
            <p className="text-on-surface-variant text-body-md">
              We bring together experience in AI engineering, data, automation, and software development to turn business problems into practical AI solutions.
            </p>
          </div>

          {/* Right — founder card */}
          <div className="bento-card rounded-xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <b>Krisna Renaldi</b>
              <p className="text-primary font-semibold text-[18px] mb-2">
                Founder &amp; AI Engineer
              </p>
              <p className="text-on-surface-variant text-body-md mb-6">
                AI Engineering · Data · Automation · Intelligent Systems
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/krisna-renaldi-9b739b29/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-tertiary transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display-lg text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-primary max-w-2xl mx-auto mb-4">
            Let's Build Something Useful
          </h2>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto mb-10">
            Have a business process that feels too manual, too complex, or too difficult to scale? Tell us what you're trying to solve. We'll explore whether AI can make a meaningful difference.
          </p>
          <Link
            href="/contact"
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
          >
            Book an AI Assessment →
          </Link>
        </div>
      </section>

    </main>
  );
}
