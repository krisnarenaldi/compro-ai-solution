export default function ContactPage() {
  return (
    <main className="flex-grow pt-20">
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

      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <form className="grid gap-8 max-w-3xl mx-auto">
          <label className="flex flex-col text-sm text-on-surface-variant">
            Name
            <input
              placeholder="Your name"
              className="mt-2 rounded-xl border border-white/10 bg-[#141820] px-4 py-3 text-white outline-none focus:border-primary"
              type="text"
              name="name"
            />
          </label>
          <label className="flex flex-col text-sm text-on-surface-variant">
            Company
            <input
              placeholder="Company name"
              className="mt-2 rounded-xl border border-white/10 bg-[#141820] px-4 py-3 text-white outline-none focus:border-primary"
              type="text"
              name="company"
            />
          </label>
          <label className="flex flex-col text-sm text-on-surface-variant">
            Email
            <input
              placeholder="you@example.com"
              className="mt-2 rounded-xl border border-white/10 bg-[#141820] px-4 py-3 text-white outline-none focus:border-primary"
              type="email"
              name="email"
            />
          </label>
          <label className="flex flex-col text-sm text-on-surface-variant">
            What problem are you trying to solve?
            <textarea
              placeholder="Describe the workflow or process"
              className="mt-2 min-h-[160px] resize-none rounded-xl border border-white/10 bg-[#141820] px-4 py-3 text-white outline-none focus:border-primary"
              name="problem"
            />
          </label>
          <label className="flex flex-col text-sm text-on-surface-variant">
            Estimated budget
            <input
              placeholder="e.g. $10k - $50k"
              className="mt-2 rounded-xl border border-white/10 bg-[#141820] px-4 py-3 text-white outline-none focus:border-primary"
              type="text"
              name="budget"
            />
          </label>

          <button
            type="submit"
            className="btn-primary rounded-full px-8 py-4 text-sm font-medium w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
