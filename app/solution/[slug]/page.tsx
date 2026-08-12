import Link from "next/link";

// ─── Content types ────────────────────────────────────────────────────────────

type Capability = { title: string; description: string };
type Outcome = { title: string; description: string };

type SolutionContent = {
  title: string;
  tagline: string;
  subtitle: string;
  overviewTitle: string;
  overviewBody: string;
  capabilities: Capability[];
  howItWorks: string[];
  tools: string[];
  outcomes: Outcome[];
  ctaHeading: string;
  ctaSubtext: string;
  ctaLabel: string;
};

// ─── Content data ─────────────────────────────────────────────────────────────

const items: Record<string, SolutionContent> = {
  "ai-automation": {
    title: "AI Automation",
    tagline: "Automate the work your team shouldn't have to do manually.",
    subtitle:
      "Connect your existing tools, workflows, and business rules with AI to eliminate repetitive tasks and streamline day-to-day operations.",
    overviewTitle: "From Repetitive Tasks to Intelligent Workflows",
    overviewBody:
      "Many business processes still rely on people manually moving information between emails, spreadsheets, documents, and business applications. We connect your existing tools with AI, APIs, and workflow automation to make these processes faster, more consistent, and easier to manage.",
    capabilities: [
      {
        title: "Document & Data Processing",
        description:
          "Extract, classify, validate, and process information from documents and incoming data.",
      },
      {
        title: "Email & Request Handling",
        description:
          "Automatically classify incoming requests, extract relevant information, and route them to the right process or person.",
      },
      {
        title: "Lead & Customer Operations",
        description:
          "Automate lead qualification, customer follow-ups, notifications, and routine communication.",
      },
      {
        title: "Reporting & Recurring Tasks",
        description:
          "Collect data from multiple sources and automatically generate reports, summaries, or recurring updates.",
      },
      {
        title: "Data Synchronization",
        description:
          "Connect your existing systems and automatically move information between databases, spreadsheets, CRM, and other business tools.",
      },
      {
        title: "Approval Workflows",
        description:
          "Combine AI with business rules and human approval to handle processes that require both automation and oversight.",
      },
    ],
    howItWorks: [
      "Your Existing Tools",
      "Workflow Automation",
      "AI Processing",
      "Business Rules",
      "Automated Action",
      "Your Business Systems",
    ],
    tools: [
      "APIs",
      "Databases",
      "CRM",
      "Google Workspace",
      "Email",
      "Internal Systems",
      "AI Models",
    ],
    outcomes: [
      {
        title: "Less Manual Work",
        description:
          "Reduce repetitive tasks so your team can focus on higher-value activities.",
      },
      {
        title: "Faster Operations",
        description:
          "Move information and complete routine processes without waiting for manual intervention.",
      },
      {
        title: "Fewer Errors",
        description:
          "Apply consistent rules and automated checks across repetitive workflows.",
      },
      {
        title: "Better Scalability",
        description:
          "Handle growing operational workloads without increasing manual effort at the same rate.",
      },
      {
        title: "Connected Workflows",
        description:
          "Bring disconnected tools and systems together into a more efficient process.",
      },
    ],
    ctaHeading: "Ready to automate your workflow?",
    ctaSubtext:
      "Tell us about the process your team spends too much time doing manually.",
    ctaLabel: "Book an AI Assessment",
  },

  "ai-agents": {
    title: "AI Agents",
    tagline: "Give AI the ability to understand, decide, and act.",
    subtitle:
      "Build AI agents that can reason through tasks, use business tools, retrieve information, and execute multi-step workflows with the right level of human oversight.",
    overviewTitle: "AI That Doesn't Just Answer — It Acts",
    overviewBody:
      "Traditional chatbots are designed to respond to questions. AI agents can go further. They can understand a goal, gather information, use connected tools, make decisions based on defined rules, and execute a sequence of actions. We build agents around your actual business processes and the systems your team already uses.",
    capabilities: [
      {
        title: "Customer Service Agents",
        description:
          "Handle common customer requests, retrieve information, and escalate complex cases.",
      },
      {
        title: "Research Agents",
        description:
          "Collect information from multiple sources, analyze it, and produce structured reports.",
      },
      {
        title: "Sales Agents",
        description:
          "Qualify leads, retrieve product information, and assist with follow-ups.",
      },
      {
        title: "Operations Agents",
        description:
          "Execute repetitive multi-step tasks across your business systems.",
      },
      {
        title: "Internal AI Agents",
        description:
          "Help employees perform tasks using company data and internal tools.",
      },
    ],
    howItWorks: [
      "Business Goal",
      "AI Agent",
      "Reason & Retrieve",
      "Use Business Tools",
      "Execute Actions",
      "Human Approval (when needed)",
    ],
    tools: [],
    outcomes: [
      {
        title: "Reduce Manual Intervention",
        description:
          "Let agents handle the steps that currently require a person to move things forward.",
      },
      {
        title: "Accelerate Multi-Step Workflows",
        description:
          "Complete sequences of tasks end-to-end without waiting on manual handoffs.",
      },
      {
        title: "AI That Can Actually Perform Tasks",
        description:
          "Give teams an assistant that doesn't just answer questions — it gets things done.",
      },
      {
        title: "More Consistent Operations",
        description:
          "Apply the same logic and rules every time, across every instance of a process.",
      },
      {
        title: "Scale Without Scaling Headcount",
        description:
          "Handle growing operational volume without a proportional increase in manual effort.",
      },
    ],
    ctaHeading: "Have a process that requires too many manual steps?",
    ctaSubtext:
      "Let's explore whether an AI agent is the right solution.",
    ctaLabel: "Book an AI Assessment",
  },

  "ai-knowledge-assistant": {
    title: "AI Knowledge Assistant",
    tagline: "Turn your company's knowledge into an intelligent assistant.",
    subtitle:
      "Make documents, SOPs, policies, manuals, and internal knowledge instantly accessible through natural-language conversations.",
    overviewTitle: "Stop Searching. Start Asking.",
    overviewBody:
      "Important business knowledge is often scattered across PDFs, documents, spreadsheets, wikis, and internal systems. An AI Knowledge Assistant gives your team a single interface to find and understand that information. Instead of searching through dozens of documents, employees can simply ask a question and get an answer based on your company's knowledge.",
    capabilities: [
      {
        title: "Internal Knowledge Assistant",
        description:
          "Help employees find information across company documents and resources.",
      },
      {
        title: "SOP Assistant",
        description:
          "Answer questions about procedures, workflows, and operational guidelines.",
      },
      {
        title: "Policy Assistant",
        description:
          "Help teams understand company policies and requirements.",
      },
      {
        title: "Document Q&A",
        description:
          "Ask questions across contracts, manuals, reports, and other documents.",
      },
      {
        title: "Customer Knowledge Assistant",
        description:
          "Provide accurate answers based on approved product and service information.",
      },
    ],
    howItWorks: [
      "Your Documents & Knowledge",
      "Knowledge Base",
      "Retrieval / RAG",
      "AI",
      "Answer with Context",
    ],
    tools: [],
    outcomes: [
      {
        title: "Less Time Searching",
        description:
          "Reduce the time employees spend hunting through documents for answers.",
      },
      {
        title: "Easier Access to Internal Knowledge",
        description:
          "Make every document and resource findable through a single conversational interface.",
      },
      {
        title: "More Consistent Answers",
        description:
          "Ensure everyone gets the same accurate answer, sourced from approved content.",
      },
      {
        title: "Faster Onboarding",
        description:
          "Help new employees find procedures, policies, and guidelines without burdening colleagues.",
      },
      {
        title: "More Useful Company Knowledge",
        description:
          "Turn existing documents and knowledge bases into an active, accessible resource.",
      },
    ],
    ctaHeading: "Have valuable knowledge trapped in documents?",
    ctaSubtext:
      "Let's turn it into an AI-powered knowledge system.",
    ctaLabel: "Book an AI Assessment",
  },

  "ai-data-analytics": {
    title: "AI Data & Analytics",
    tagline: "Turn your business data into decisions, not spreadsheets.",
    subtitle:
      "Connect your business data with AI-powered analytics to uncover trends, anomalies, and insights that help your team make better decisions.",
    overviewTitle: "From Data to Decisions",
    overviewBody:
      "Businesses already have valuable data. The problem is often not a lack of data, but the time and expertise required to turn that data into useful decisions. We combine data pipelines, analytics, and AI to make business information easier to understand and act upon.",
    capabilities: [
      {
        title: "AI-Powered Dashboards",
        description: "Monitor important business metrics in one place.",
      },
      {
        title: "Natural Language Analytics",
        description:
          "Ask questions about your business data using everyday language — \"Which products had the biggest decline this month?\"",
      },
      {
        title: "Automated Reports",
        description:
          "Generate recurring business reports without manually preparing spreadsheets.",
      },
      {
        title: "Anomaly Detection",
        description:
          "Identify unusual changes in sales, transactions, or operational data.",
      },
      {
        title: "Trend & Forecasting",
        description:
          "Identify patterns and generate forecasts to support planning.",
      },
    ],
    howItWorks: [
      "Business Data",
      "Data Processing",
      "Analytics / ML",
      "AI Interpretation",
      "Business Insights",
      "Decision",
    ],
    tools: [],
    outcomes: [
      {
        title: "Faster Reporting",
        description:
          "Reduce time spent preparing reports so teams can act on information sooner.",
      },
      {
        title: "Easier to Understand Data",
        description:
          "Make business data accessible to everyone, not just analysts.",
      },
      {
        title: "Earlier Problem Detection",
        description:
          "Spot anomalies and issues before they grow into larger problems.",
      },
      {
        title: "Faster Access to Insights",
        description:
          "Give decision-makers the information they need without waiting on manual analysis.",
      },
      {
        title: "Less Spreadsheet Dependency",
        description:
          "Replace manual spreadsheet workflows with automated, always-up-to-date intelligence.",
      },
    ],
    ctaHeading: "You have the data. Let's make it useful.",
    ctaSubtext:
      "Let's turn data into an AI-powered insight information.",
    ctaLabel: "Book an AI Assessment",
  },

  "custom-ai-solutions": {
    title: "Custom AI Solutions",
    tagline: "AI solutions designed around problems that don't fit into a box.",
    subtitle:
      "Some business challenges require more than an automation workflow or an AI assistant. We combine AI, data, automation, and custom software to build solutions around your specific requirements.",
    overviewTitle: "Your Business Problem Comes First",
    overviewBody:
      "You don't need to decide which AI technology to use. Tell us what you're trying to improve. We'll identify the right combination of AI models, automation, data, integrations, and software to solve the problem.",
    capabilities: [
      {
        title: "AI-Powered Business Applications",
        description:
          "Custom applications that combine AI with your existing business processes.",
      },
      {
        title: "Document Intelligence",
        description:
          "Extract, classify, analyze, and validate information from complex documents.",
      },
      {
        title: "AI Decision Support",
        description:
          "Systems that analyze business information and help teams make better decisions.",
      },
      {
        title: "Intelligent Workflow Systems",
        description:
          "Combine AI, business rules, APIs, and human approval into a single workflow.",
      },
      {
        title: "AI + Existing Systems",
        description:
          "Connect AI capabilities to your CRM, ERP, database, or internal applications.",
      },
    ],
    howItWorks: [
      "Your Business Problem",
      "AI Assessment",
      "Solution Blueprint",
      "Build & Integrate",
      "Test & Deploy",
      "Optimize & Improve",
    ],
    tools: [],
    outcomes: [
      {
        title: "Reduced Operational Costs",
        description:
          "Automate the work that currently requires the most time and manual effort.",
      },
      {
        title: "Automated Complex Processes",
        description:
          "Handle multi-step, rule-heavy processes that are too complex for off-the-shelf tools.",
      },
      {
        title: "Better Decision-Making",
        description:
          "Give teams the information and recommendations they need to act with confidence.",
      },
      {
        title: "New Capabilities",
        description:
          "Build things your business couldn't do before — at speed and scale.",
      },
      {
        title: "Connected Systems",
        description:
          "Bring fragmented tools and data sources together into a unified, intelligent workflow.",
      },
      {
        title: "Scalable Operations",
        description:
          "Grow operational capacity without a proportional increase in cost or headcount.",
      },
    ],
    ctaHeading: "Have an AI use case that doesn't fit a standard solution?",
    ctaSubtext: "Tell us what you're trying to solve.",
    ctaLabel: "Book an AI Assessment",
  },
};

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(items).map((slug) => ({ slug }));
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = items[slug];

  if (!item) {
    return (
      <main className="flex-grow pt-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto py-24">
          <h1 className="font-display-lg text-display-lg text-primary">
            Solution not found
          </h1>
          <p className="text-on-surface-variant mt-4">
            The requested solution could not be found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-20">
      {/* ── Hero ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            Solution
          </p>
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            {item.title}
          </h1>
          <p className="text-tertiary text-body-md font-medium max-w-2xl mb-4">
            {item.tagline}
          </p>
          <p className="text-on-surface-variant text-body-md max-w-2xl">
            {item.subtitle}
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            {item.overviewTitle}
          </h2>
          <p className="text-on-surface-variant text-body-md leading-relaxed">
            {item.overviewBody}
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      {item.capabilities.length > 0 && (
        <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
            What We Can Automate
          </h2>
          <div className="grid gap-gutter grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {item.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bento-card rounded-xl p-7 border border-white/10"
              >
                <h3 className="text-primary font-semibold text-[17px] mb-3">
                  {cap.title}
                </h3>
                <p className="text-on-surface-variant text-body-md">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── How It Works + Tools ── */}
      {item.howItWorks.length > 0 && (
        <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className={`grid gap-gutter grid-cols-1 ${item.tools.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-lg"}`}>
            {/* Flow */}
            <div className="bento-card rounded-xl p-8 border border-white/10">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
                How It Works
              </h2>
              <ol className="flex flex-col gap-0">
                {item.howItWorks.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary text-sm font-semibold shrink-0">
                        {i + 1}
                      </div>
                      {i < item.howItWorks.length - 1 && (
                        <div className="w-px h-6 bg-white/10" />
                      )}
                    </div>
                    <span className="text-on-surface-variant text-body-md py-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tools — only rendered when data exists */}
            {item.tools.length > 0 && (
              <div className="bento-card rounded-xl p-8 border border-white/10 flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                    We work with the tools you already use
                  </h2>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-on-surface-variant bg-surface-container-high"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Outcomes ── */}
      {item.outcomes.length > 0 && (
        <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
            Business Outcomes
          </h2>
          <div className="grid gap-gutter grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {item.outcomes.map((outcome) => (
              <div key={outcome.title} className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0" />
                <div>
                  <h3 className="text-primary font-semibold text-[16px] mb-1">
                    {outcome.title}
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display-lg text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-primary max-w-2xl mx-auto mb-4">
            {item.ctaHeading}
          </h2>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto mb-10">
            {item.ctaSubtext}
          </p>
          <Link
            href="/contact"
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
          >
            {item.ctaLabel} →
          </Link>
        </div>
      </section>
    </main>
  );
}
