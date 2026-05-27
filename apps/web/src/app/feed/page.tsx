import { VideoReelCard } from '../../components/feed/VideoReelCard';
import { SubscribeCTA } from '../../components/feed/SubscribeCTA';
import { REEL_VIDEOS } from '../../lib/mock-data';
import { SparkleIcon } from '../../components/ui/Icons';

const filters = ['For you', 'New releases', 'Premium', 'Cinematic', 'Bards', 'Storms'];

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="chip">
            <SparkleIcon className="h-3 w-3" />
            Reels feed
          </span>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Fantasy <span className="text-gradient-aurora">previews</span> on tap.
          </h1>
          <p className="mt-1 max-w-xl text-sm text-zinc-400">
            30-second cinematic previews for everyone. Full episodes unlock with Premium.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((label, idx) => (
            <button
              key={label}
              type="button"
              className={
                idx === 0
                  ? 'rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white'
                  : 'rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300 transition hover:bg-white/[0.08]'
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {REEL_VIDEOS.map((video) => (
            <VideoReelCard key={video.id} video={video} />
          ))}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <SubscribeCTA />
          <div className="surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
              Reminder
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              All profiles are fictional and synthetic. No real-person likeness, deepfake, or
              minor-looking content is supported.
            </p>
          </div>
          <div className="surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Trending tags
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
              {['#cinematic', '#storms', '#emberglow', '#noir', '#mage', '#longform'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 transition hover:border-white/20 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
