import Link from 'next/link';
import { PRICE_INR } from '../../lib/constants';
import { PLAN_FEATURES } from '../../lib/mock-data';
import { CheckIcon, CrownIcon, ShieldIcon, SparkleIcon } from '../../components/ui/Icons';

const faqs = [
  {
    q: 'How does the 30-second preview model work?',
    a: 'Every video has a free 30-second cinematic preview. Premium subscribers unlock the full 15 or 30 minute episode.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel directly from your account settings. Your premium access remains active until the current billing period ends.',
  },
  {
    q: 'Is the content real or AI-generated?',
    a: 'All profiles and content are fictional and synthetic. We do not support real-person likeness, celebrity likeness, deepfake, or non-consensual content.',
  },
];

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="text-center">
        <span className="chip-gold">
          <CrownIcon className="h-3 w-3" /> Premium Monthly
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          <span className="text-gradient">Unlock every </span>
          <span className="text-gradient-gold">cinematic episode</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          One simple plan. Full library access. Cancel anytime. Built strictly for synthetic
          fictional content with strong safety controls.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="surface-elevated relative overflow-hidden p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                  Premium
                </p>
                <p className="mt-2 text-6xl font-bold text-gradient-gold">
                  ₹{PRICE_INR}
                  <span className="text-xl font-semibold text-amber-100/70"> /mo</span>
                </p>
                <p className="mt-1 text-xs text-zinc-400">Billed monthly • INR</p>
              </div>
              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/10 text-amber-200 md:inline-flex">
                <CrownIcon className="h-7 w-7" />
              </div>
            </div>

            <ul className="mt-6 grid gap-2.5 text-sm">
              {PLAN_FEATURES.map((feature) => (
                <li key={feature.label} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-amber-200/10 text-amber-200">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-zinc-200">{feature.label}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="btn-gold mt-7 w-full">
              <CrownIcon className="h-4 w-4" />
              Continue with Razorpay
            </button>
            <div className="mt-4 flex flex-col items-start justify-between gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center">
              <p>Secure payment by Razorpay</p>
              <Link href="/policy/terms" className="text-zinc-400 transition hover:text-white">
                Review terms before subscribing →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="surface p-6">
            <div className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-emerald-300" />
              <p className="text-sm font-semibold text-white">Strict safety</p>
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              We do not support real-person likeness, celebrity likeness, deepfake, minor-looking
              or non-consensual content. Strict moderation is always on.
            </p>
          </div>
          <div className="surface p-6">
            <div className="flex items-center gap-2">
              <SparkleIcon className="h-4 w-4 text-fuchsia-300" />
              <p className="text-sm font-semibold text-white">Fictional + synthetic</p>
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Every profile and storyline is fully synthetic and fictional. Built for cinematic
              storytelling, not impersonation.
            </p>
          </div>
          <div className="surface p-6">
            <div className="flex items-center gap-2">
              <CrownIcon className="h-4 w-4 text-amber-300" />
              <p className="text-sm font-semibold text-white">Premium-only experiences</p>
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Premium subscribers receive the full library, priority releases, and ad-free playback.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-white">Frequently asked</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="surface p-5">
              <p className="text-sm font-semibold text-white">{faq.q}</p>
              <p className="mt-2 text-sm text-zinc-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
