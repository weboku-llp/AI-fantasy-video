export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <span className="chip">Privacy policy</span>
      <h1 className="mt-3 text-4xl font-bold text-white">Privacy</h1>
      <p className="mt-3 text-sm text-zinc-300">
        This prototype stores minimal account and subscription metadata. Payment data is handled
        by Razorpay and is not stored on our servers.
      </p>

      <div className="mt-6 grid gap-3 text-sm text-zinc-300">
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">What we store</p>
          <p className="mt-1">
            Account email, display name, hashed password, subscription status, and watch
            progress.
          </p>
        </div>
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">What we do not store</p>
          <p className="mt-1">
            Full card numbers or sensitive payment information — these are processed by Razorpay
            directly.
          </p>
        </div>
        <div className="surface p-5">
          <p className="text-base font-semibold text-white">Your controls</p>
          <p className="mt-1">
            You may request account deletion or data export by contacting support from your
            account settings.
          </p>
        </div>
      </div>
    </section>
  );
}
