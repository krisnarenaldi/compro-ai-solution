"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-on-background outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-colors placeholder:text-black/25 w-full";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      problem: (form.elements.namedItem("problem") as HTMLTextAreaElement).value.trim(),
      budget: (form.elements.namedItem("budget") as HTMLInputElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Submission failed.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="flex-grow pt-20">

      {/* ── Hero ── */}
      <section className="py-24 page-hero-surface">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary/70 mb-6">
            Contact
          </p>
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mx-auto mb-6">
            Tell us what you want to automate.
          </h1>
          <p className="text-on-surface-variant text-body-md max-w-3xl mx-auto">
            Share the challenge and let us help you turn repetitive processes
            into intelligent workflows.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <form onSubmit={handleSubmit} className="grid gap-8 max-w-3xl mx-auto">

          <label className="flex flex-col text-sm text-on-surface-variant">
            Name <span className="text-tertiary inline">*</span>
            <input
              className={inputClass}
              type="text"
              name="name"
              placeholder="Your name"
              required
              disabled={state === "submitting"}
            />
          </label>

          <label className="flex flex-col text-sm text-on-surface-variant">
            Company
            <input
              className={inputClass}
              type="text"
              name="company"
              placeholder="Company name"
              disabled={state === "submitting"}
            />
          </label>

          <label className="flex flex-col text-sm text-on-surface-variant">
            Email <span className="text-tertiary inline">*</span>
            <input
              className={inputClass}
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              disabled={state === "submitting"}
            />
          </label>

          <label className="flex flex-col text-sm text-on-surface-variant">
            What problem are you trying to solve? <span className="text-tertiary inline">*</span>
            <textarea
              className={`${inputClass} min-h-[160px] resize-none`}
              name="problem"
              placeholder="Describe the workflow or process"
              required
              disabled={state === "submitting"}
            />
          </label>

          <label className="flex flex-col text-sm text-on-surface-variant">
            Estimated budget
            <input
              className={inputClass}
              type="text"
              name="budget"
              placeholder="e.g. IDR10mio – IDR50mio"
              disabled={state === "submitting"}
            />
          </label>

          {/* Error message */}
          {state === "error" && (
            <p className="text-error text-sm">{errorMsg}</p>
          )}

          {/* Success message */}
          {state === "success" && (
            <div className="rounded-xl border border-white/10 bg-surface-container p-6">
              <p className="text-primary font-semibold mb-1">Message sent.</p>
              <p className="text-on-surface-variant text-sm">
                Thanks for reaching out. We'll get back to you shortly.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={state === "submitting" || state === "success"}
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {state === "submitting" ? "Sending…" : "Submit"}
          </button>

        </form>
      </section>

    </main>
  );
}
