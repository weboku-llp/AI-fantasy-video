export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <span className="chip">Terms of service</span>
      <h1 className="mt-3 text-4xl font-bold text-white">Terms</h1>
      <p className="mt-3 text-sm text-zinc-300">
        This MVP is a prototype of a fictional synthetic-content platform. Use of the platform is
        subject to age-gate acceptance, content policy compliance, and the conditions below.
      </p>

      <div className="mt-6 space-y-4 text-sm text-zinc-300">
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">1. Eligibility</p>
          <p className="mt-1">
            You must be 18 years or older and legally permitted to view fictional synthetic
            fantasy content in your region.
          </p>
        </div>
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">2. Content rules</p>
          <p className="mt-1">
            All content is fictional and synthetic. You may not upload or attempt to generate
            real-person likeness, celebrity likeness, deepfake, minor-looking, or non-consensual
            content.
          </p>
        </div>
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">3. Subscription</p>
          <p className="mt-1">
            The Premium plan is billed monthly. Cancel anytime from your account settings.
          </p>
        </div>
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">4. Moderation</p>
          <p className="mt-1">
            We may remove content or accounts that violate the content policy without notice.
          </p>
        </div>
      </div>
    </section>
  );
}
