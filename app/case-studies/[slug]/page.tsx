import Link from "next/link";

// ─── Content types ─────────────────────────────────────────────────────────────

type Step = string;
type Capability = { title: string; description: string };
type TechItem = { title: string; description: string };
type OutcomeItem = string;

type CaseStudyContent = {
  title: string;
  subtitle: string;
  tagline: string;
  tags: string[];
  challengeTitle: string;
  challengeBody: string;
  challengePoints?: string[];
  approachTitle: string;
  approachBody: string;
  howItWorks: Step[];
  capabilities: Capability[];
  technology: TechItem[];
  outcomeTitle: string;
  outcomeIntro: string;
  outcomes: OutcomeItem[];
  ctaHeading: string;
  ctaSubtext: string;
  ctaLabel: string;
};

// ─── Content data ──────────────────────────────────────────────────────────────

const studies: Record<string, CaseStudyContent> = {
  "adm-copilot": {
    title: "ADM Copilot",
    subtitle: "AI-Powered Travel Audit & Document Intelligence",
    tagline:
      "An AI-powered assistant designed to help audit teams analyze travel-related documents, identify potential anomalies, and reduce manual review effort.",
    tags: ["AI Agent", "Document Intelligence", "Automation"],
    challengeTitle: "Travel auditing involves a lot of manual review.",
    challengeBody:
      "Auditors may need to review multiple documents, compare information, check rules, and identify inconsistencies before reaching a conclusion. When this process is performed manually, it can be time-consuming and difficult to scale.",
    approachTitle: "An AI copilot for travel audit workflows.",
    approachBody:
      "ADM Copilot combines document processing, AI reasoning, and business rules to assist auditors throughout the review process. Instead of replacing the auditor, the system acts as a copilot — surfacing relevant information and potential issues so human reviewers can focus on decisions that require their expertise.",
    howItWorks: [
      "Travel Documents",
      "Document Processing",
      "Information Extraction",
      "AI Analysis",
      "Business Rules",
      "Potential Issues / Insights",
      "Human Review",
    ],
    capabilities: [
      {
        title: "Document Intelligence",
        description: "Extract relevant information from travel-related documents.",
      },
      {
        title: "AI-Powered Analysis",
        description:
          "Analyze extracted information and identify potential inconsistencies.",
      },
      {
        title: "Rule-Based Validation",
        description: "Apply predefined business rules alongside AI analysis.",
      },
      {
        title: "Audit Assistance",
        description:
          "Present relevant findings to help auditors review cases more efficiently.",
      },
      {
        title: "Human-in-the-Loop",
        description: "Keep the final decision with the human auditor.",
      },
    ],
    technology: [
      {
        title: "AI / LLM",
        description: "Intelligent document analysis and reasoning.",
      },
      {
        title: "Document Processing",
        description: "Structured extraction from unstructured information.",
      },
      {
        title: "Automation",
        description: "Workflow orchestration and process automation.",
      },
      {
        title: "Custom Application",
        description: "Interface designed around the audit workflow.",
      },
    ],
    outcomeTitle: "From manual document review to AI-assisted auditing.",
    outcomeIntro: "The system demonstrates how AI can support audit teams by:",
    outcomes: [
      "Reducing repetitive document review",
      "Surfacing potential issues earlier",
      "Structuring information from unstructured documents",
      "Supporting more consistent review processes",
      "Keeping human expertise at the center of the decision",
    ],
    ctaHeading: "Have a document-heavy process?",
    ctaSubtext:
      "Let's explore how AI can help your team work through documents more efficiently.",
    ctaLabel: "Book an AI Assessment",
  },

  "ai-news-tracking": {
    title: "AI News Tracking",
    subtitle: "From Thousands of Articles to the Stories That Matter",
    tagline:
      "An AI-powered news intelligence system that groups related articles, tracks stories over time, and turns fragmented news coverage into structured insights.",
    tags: ["AI", "Embeddings", "Clustering", "NLP", "Automation"],
    challengeTitle: "The problem isn't finding news. It's understanding what's actually happening.",
    challengeBody:
      "The same event can be reported by multiple publications with different headlines and perspectives. Without intelligent grouping, monitoring the news can result in information overload and time-consuming manual work.",
    challengePoints: [
      "Duplicate stories across sources",
      "Information overload",
      "Difficult-to-track developments",
      "Time-consuming manual monitoring",
    ],
    approachTitle: "Track stories, not just articles.",
    approachBody:
      "Instead of treating every article as an independent piece of information, the system uses semantic similarity to identify articles that are talking about the same underlying event or story. Related articles are grouped together and tracked as a single evolving story.",
    howItWorks: [
      "RSS / News Sources",
      "Article Collection",
      "Text Embeddings",
      "Semantic Clustering",
      "Story Matching",
      "Story Timeline",
      "AI Summary & Insights",
    ],
    capabilities: [
      {
        title: "Automated News Collection",
        description: "Continuously collect articles from multiple news sources.",
      },
      {
        title: "Semantic Clustering",
        description:
          "Group articles based on meaning rather than simple keyword matching.",
      },
      {
        title: "Story Tracking",
        description: "Connect new articles to previously identified stories.",
      },
      {
        title: "AI Summarization",
        description: "Generate concise summaries of developing stories.",
      },
      {
        title: "Source & Article Analysis",
        description: "Track how many articles and sources are covering a story.",
      },
      {
        title: "Story Timeline",
        description: "Follow how a story develops over time.",
      },
    ],
    technology: [
      {
        title: "Embeddings",
        description: "Represent article content as semantic vectors.",
      },
      {
        title: "Vector Search",
        description: "Compare new articles against existing stories.",
      },
      {
        title: "Clustering",
        description: "Group semantically related articles.",
      },
      {
        title: "LLM",
        description:
          "Generate story names, summaries, entities, and keywords.",
      },
      {
        title: "PostgreSQL + pgvector",
        description:
          "Store and query vector representations and story history.",
      },
      {
        title: "RSS + Automation",
        description:
          "Continuously ingest new articles from multiple sources.",
      },
    ],
    outcomeTitle: "A shift from article monitoring to story intelligence.",
    outcomeIntro: "The system makes it possible to:",
    outcomes: [
      "Reduce duplicate news",
      "Identify related coverage automatically",
      "Track stories as they evolve",
      "Understand the entities and topics involved",
      "Create structured intelligence from continuously changing news",
    ],
    ctaHeading: "Need to monitor information at scale?",
    ctaSubtext:
      "Let's build an intelligence system around the information your business depends on.",
    ctaLabel: "Book an AI Assessment",
  },

  "cv-screening": {
    title: "CV Screening",
    subtitle: "Screen Candidates Faster with AI",
    tagline:
      "An AI-powered recruitment workflow that analyzes resumes against job requirements and helps recruiters identify relevant candidates faster.",
    tags: ["AI Screening", "HR Automation", "Workflow Automation"],
    challengeTitle:
      "Recruiters often spend significant time reviewing resumes before reaching the shortlist.",
    challengeBody:
      "For roles receiving many applications, manually comparing each candidate against job requirements can become repetitive and time-consuming. The challenge is not simply reading resumes — it's consistently evaluating how well each candidate matches the role.",
    approachTitle: "Automate the first layer of candidate screening.",
    approachBody:
      "The system uses AI to process candidate resumes, compare candidate information against job requirements, and produce a structured assessment for recruiters. AI handles the repetitive first-pass analysis while recruiters remain responsible for the final decision.",
    howItWorks: [
      "Job Description",
      "Candidate CVs",
      "AI Resume Analysis",
      "Requirement Matching",
      "Candidate Assessment",
      "Structured Results",
      "Recruiter Review",
    ],
    capabilities: [
      {
        title: "Resume Parsing",
        description: "Extract relevant information from candidate resumes.",
      },
      {
        title: "Requirement Matching",
        description:
          "Compare candidate experience and skills against the job requirements.",
      },
      {
        title: "AI Assessment",
        description:
          "Generate a structured evaluation of candidate relevance.",
      },
      {
        title: "Candidate Ranking",
        description:
          "Help recruiters prioritize candidates for further review.",
      },
      {
        title: "Automated Workflow",
        description:
          "Move candidate information through the screening process automatically.",
      },
      {
        title: "Recruiter-in-the-Loop",
        description: "Keep final candidate selection under human control.",
      },
    ],
    technology: [
      {
        title: "LLM / Generative AI",
        description: "Analyze and interpret resume content.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate the movement of candidate data through the screening process.",
      },
      {
        title: "Google Sheets / Structured Data",
        description: "Store and organize screening results.",
      },
      {
        title: "AI Integration",
        description: "Connect recruitment inputs with AI analysis.",
      },
    ],
    outcomeTitle: "Less time spent on repetitive resume review.",
    outcomeIntro: "The workflow helps recruitment teams:",
    outcomes: [
      "Process large numbers of resumes more efficiently",
      "Apply a consistent initial screening process",
      "Quickly identify candidates worth reviewing",
      "Reduce repetitive manual data processing",
      "Keep recruiters focused on interviews and final evaluation",
    ],
    ctaHeading: "Want to automate part of your recruitment workflow?",
    ctaSubtext:
      "Let's explore how AI can help your team screen candidates more efficiently.",
    ctaLabel: "Book an AI Assessment",
  },

  "retail-ai": {
    title: "Retail AI",
    subtitle: "Ask Your Business Data. Get Actionable Insights.",
    tagline:
      "An AI-powered analytics solution that helps retail teams interact with business data, uncover insights, and make faster decisions.",
    tags: ["AI Analytics", "Natural Language", "Business Intelligence"],
    challengeTitle: "Business data is valuable — but accessing it isn't always easy.",
    challengeBody:
      "Retail teams often rely on dashboards, spreadsheets, and manually prepared reports to answer everyday questions. Simple questions can require analysts or technical teams to prepare queries and reports before the answer becomes available.",
    approachTitle: "Make business data accessible through natural language.",
    approachBody:
      "Instead of requiring users to understand SQL or navigate complex dashboards, the system allows users to ask questions using everyday language — \"Which products had the highest sales last month?\" or \"Which stores experienced a significant decline in sales?\" The AI translates the business question into a data query, retrieves the relevant information, and presents the result in a human-readable form.",
    howItWorks: [
      "Business Question",
      "Natural Language Understanding",
      "Query Generation",
      "Database",
      "Query Result",
      "AI Interpretation",
      "Business Insight",
    ],
    capabilities: [
      {
        title: "Natural Language Querying",
        description: "Ask questions about business data without writing SQL.",
      },
      {
        title: "Text-to-SQL",
        description:
          "Translate natural-language questions into database queries.",
      },
      {
        title: "Business Insights",
        description: "Turn raw query results into understandable answers.",
      },
      {
        title: "Data Exploration",
        description:
          "Explore sales, products, customers, and other business metrics conversationally.",
      },
      {
        title: "Decision Support",
        description:
          "Help teams get answers faster when making operational decisions.",
      },
    ],
    technology: [
      {
        title: "LLM",
        description:
          "Understand business questions and generate structured queries.",
      },
      {
        title: "Text-to-SQL",
        description: "Translate natural language into SQL.",
      },
      {
        title: "Relational Database",
        description: "Query structured business data.",
      },
      {
        title: "AI Analytics Layer",
        description:
          "Interpret query results and provide business context.",
      },
    ],
    outcomeTitle: "From \"I need a report\" to \"Just ask.\"",
    outcomeIntro:
      "The system demonstrates how AI can make business data more accessible by:",
    outcomes: [
      "Reducing dependency on manual SQL queries",
      "Shortening the path from question to answer",
      "Making data exploration accessible to non-technical users",
      "Helping teams explore business information conversationally",
      "Supporting faster data-driven decisions",
    ],
    ctaHeading: "Have data your team struggles to use?",
    ctaSubtext:
      "Let's turn your business data into something your team can actually talk to.",
    ctaLabel: "Book an AI Assessment",
  },
};

// ─── Static params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studies[slug];

  if (!study) {
    return (
      <main className="flex-grow pt-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto py-24">
          <h1 className="font-display-lg text-display-lg text-primary">
            Case study not found
          </h1>
          <p className="text-on-surface-variant mt-4">
            The requested case study could not be found.
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
            Case Study
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/10 text-on-surface-variant/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display-lg text-display-lg text-primary mb-3">
            {study.title}
          </h1>
          <p className="text-tertiary font-medium text-body-md mb-6">
            {study.subtitle}
          </p>
          <p className="text-on-surface-variant text-body-md max-w-2xl">
            {study.tagline}
          </p>
        </div>
      </section>

      {/* ── Challenge & Approach ── */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2">
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/60 mb-4">
              The Challenge
            </p>
            <h2 className="text-primary font-semibold text-[20px] leading-snug mb-4">
              {study.challengeTitle}
            </h2>
            <p className="text-on-surface-variant text-body-md mb-4">
              {study.challengeBody}
            </p>
            {study.challengePoints && study.challengePoints.length > 0 && (
              <ul className="flex flex-col gap-2 mt-2">
                {study.challengePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                    <span className="text-on-surface-variant text-body-md">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bento-card rounded-xl p-8 border border-white/10">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/60 mb-4">
              The Approach
            </p>
            <h2 className="text-primary font-semibold text-[20px] leading-snug mb-4">
              {study.approachTitle}
            </h2>
            <p className="text-on-surface-variant text-body-md">
              {study.approachBody}
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-sm">
          <div className="bento-card rounded-xl p-8 border border-white/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">
              How It Works
            </h2>
            <ol className="flex flex-col gap-0">
              {study.howItWorks.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high border border-white/10 flex items-center justify-center text-primary text-sm font-semibold shrink-0">
                      {i + 1}
                    </div>
                    {i < study.howItWorks.length - 1 && (
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
        </div>
      </section>

      {/* ── Key Capabilities ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
          Key Capabilities
        </h2>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {study.capabilities.map((cap) => (
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

      {/* ── Technology ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
          Technology
        </h2>
        <div className="grid gap-gutter grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {study.technology.map((tech) => (
            <div
              key={tech.title}
              className="bento-card rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-primary font-semibold text-[16px] mb-2">
                {tech.title}
              </h3>
              <p className="text-on-surface-variant text-body-md">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bento-card rounded-xl p-10 border border-white/10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
            {study.outcomeTitle}
          </h2>
          <p className="text-on-surface-variant text-body-md mb-8">
            {study.outcomeIntro}
          </p>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {study.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                <span className="text-on-surface-variant text-body-md">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display-lg text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-primary max-w-2xl mx-auto mb-4">
            {study.ctaHeading}
          </h2>
          <p className="text-on-surface-variant text-body-md max-w-xl mx-auto mb-10">
            {study.ctaSubtext}
          </p>
          <Link
            href="/contact"
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium inline-flex items-center gap-2"
          >
            {study.ctaLabel} →
          </Link>
        </div>
      </section>
    </main>
  );
}
