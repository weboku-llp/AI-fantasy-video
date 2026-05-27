import Link from 'next/link';
import { PRICE_INR } from '../lib/constants';
import { PLATFORM_STATS, PROFILE_HIGHLIGHTS, type PosterVariant } from '../lib/mock-data';
import { HeroMarquee } from '../components/layout/HeroMarquee';
import {
  ArrowRightIcon,
  CheckIcon,
  CrownIcon,
  ShieldIcon,
  SparkleIcon,
} from '../components/ui/Icons';

const featurePosters: PosterVariant[] = ['aurora', 'ember', 'tide'];

const features = [
  {
    title: 'Cinematic preview reels',
    description:
      'Scroll a curated feed of 30-second AI fantasy previews. Free for everyone, no signup needed.',
  },
  {
    title: 'Locked full episodes',
    description:
      'Premium 15 and 30 minute episodes unlock instantly after subscription with cinematic playback.',
  },
  {
    title: 'Synthetic-only profiles',
    description:
      'Every profile is fictional and synthetic. Strict moderation prevents real-likeness or unsafe content.',
  },
];

export default function Page() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-6 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="chip">
              <SparkleIcon className="h-3 w-3" />
              Fictional + Synthetic Platform
            </span>
            <h1 className="mt-5 font-bold leading-[1.05] tracking-tight text-5xl md:text-6xl">
              <span className="text-gradient">A new era of </span>
              <span className="text-gradient-aurora">cinematic AI fantasy.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-zinc-300 md:text-lg">
              Scroll 30-second cinematic previews for free. Subscribe to unlock the full 15 and
              30 minute episodes — all from fully synthetic, fictional profiles.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/feed" className="btn-primary">
                Enter the feed
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/subscribe" className="btn-gold">
                <CrownIcon className="h-4 w-4" />
                Go Premium • ₹{PRICE_INR}
              </Link>
              <Link href="/policy/age-gate" className="btn-ghost">
                <ShieldIcon className="h-4 w-4" />
                18+ Age gate
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 md:grid-cols-4">
              {PLATFORM_STATS.map((stat) => (
                <div key={stat.label} className="surface px-4 py-3">
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <HeroMarquee />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-200 shadow-[0_10px_30px_-10px_rgba(91,226,194,0.4)]">
                <ShieldIcon className="h-3.5 w-3.5" />
                Strict synthetic-only moderation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
              What you get
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Built for cinematic scrolling.
            </h2>
          </div>
          <Link href="/feed" className="hidden text-sm text-zinc-300 transition hover:text-white md:inline-flex">
            View feed →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature, idx) => (
            <article
              key={feature.title}
              className={`relative overflow-hidden rounded-3xl border border-white/[0.08] p-6 ${featurePosters[idx] === 'aurora' ? 'poster-aurora' : featurePosters[idx] === 'ember' ? 'poster-ember' : 'poster-tide'}`}
            >
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white">
                  <SparkleIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="surface-elevated relative overflow-hidden p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl" />

            <div className="relative">
              <span className="chip-gold">
                <CrownIcon className="h-3 w-3" /> Premium Monthly
              </span>
              <h2 className="mt-5 text-5xl font-bold text-gradient-gold">
                ₹{PRICE_INR}
                <span className="text-xl font-semibold text-amber-100/70"> / month</span>
              </h2>
              <p className="mt-2 max-w-md text-sm text-zinc-300">
                Unlock the cinematic full-length library and priority access to new releases. Cancel
                from your account settings anytime.
              </p>

              <ul className="mt-6 grid gap-2.5 text-sm">
                {[
                  'Full 15 and 30 minute episodes',
                  'New release priority access',
                  'Premium profile collections',
                  'Ad-free cinematic playback',
                  'Cancel anytime',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-zinc-200">
                    <CheckIcon className="h-4 w-4 text-amber-200" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/subscribe" className="btn-gold">
                  <CrownIcon className="h-4 w-4" />
                  Start subscription
                </Link>
                <Link href="/feed" className="btn-ghost">
                  Browse free previews
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {PROFILE_HIGHLIGHTS.map((profile) => (
              <article
                key={profile.id}
                className={`relative overflow-hidden rounded-3xl border border-white/[0.08] p-5 ${profile.poster === 'aurora' ? 'poster-aurora' : profile.poster === 'ember' ? 'poster-ember' : 'poster-tide'}`}
              >
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                      Featured synthetic profile
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{profile.name}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{profile.bio}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {profile.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/profile/${profile.id}`} className="btn-icon" aria-label="View profile">
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="surface-elevated relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="relative grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="chip">
                <ShieldIcon className="h-3 w-3" />
                Safety first
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Strict synthetic-only by design.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
                We do not support real-person likeness, celebrity likeness, deepfake,
                minor-looking, or non-consensual content. The platform enforces these rules at
                the moderation, profile, and content layer.
              </p>
            </div>
            <div className="flex flex-wrap justify-end gap-3 md:flex-nowrap">
              <Link href="/policy/content-policy" className="btn-ghost">
                Read content policy
              </Link>
              <Link href="/policy/age-gate" className="btn-primary">
                Verify 18+
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
