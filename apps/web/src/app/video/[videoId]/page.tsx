import Link from 'next/link';
import { LockedVideoOverlay } from '../../../components/feed/LockedVideoOverlay';
import { VideoPlayer } from '../../../components/video/VideoPlayer';
import { SubscribeCTA } from '../../../components/feed/SubscribeCTA';
import { REEL_VIDEOS, type PosterVariant } from '../../../lib/mock-data';
import {
  BookmarkIcon,
  CrownIcon,
  HeartIcon,
  ShareIcon,
  ShieldIcon,
} from '../../../components/ui/Icons';

const variantClass: Record<PosterVariant, string> = {
  aurora: 'poster-aurora',
  ember: 'poster-ember',
  tide: 'poster-tide',
};

type Params = { videoId: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { videoId } = await params;
  const video = REEL_VIDEOS.find((v) => v.id === videoId) ?? REEL_VIDEOS[1];
  const hasActiveSubscription = false;
  const showLock = video.isPremium && !hasActiveSubscription;

  const related = REEL_VIDEOS.filter((v) => v.id !== video.id).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {video.isPremium ? (
              <span className="chip-gold">
                <CrownIcon className="h-3 w-3" /> Premium episode
              </span>
            ) : (
              <span className="chip">Free preview</span>
            )}
            <Link
              href={`/profile/${video.profileId}`}
              className="text-xs text-zinc-400 transition hover:text-white"
            >
              by <span className="text-fuchsia-200">{video.profileName}</span>
            </Link>
            <span className="text-xs text-zinc-500">•</span>
            <span className="text-xs text-zinc-400">{video.views} views</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">{video.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">{video.previewSummary}</p>

          <div className="relative mt-6">
            <VideoPlayer variant={video.poster} title={video.title} />
            {showLock ? <LockedVideoOverlay /> : null}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button type="button" className="btn-icon" aria-label="Like">
                <HeartIcon className="h-4 w-4" />
              </button>
              <button type="button" className="btn-icon" aria-label="Bookmark">
                <BookmarkIcon className="h-4 w-4" />
              </button>
              <button type="button" className="btn-icon" aria-label="Share">
                <ShareIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 text-xs text-emerald-200">
              <ShieldIcon className="h-3.5 w-3.5" />
              Strict safety mode active
            </div>
          </div>

          <div className="mt-6 surface p-5">
            <h2 className="text-lg font-semibold text-white">About this episode</h2>
            <p className="mt-2 text-sm text-zinc-300">
              This content belongs to a fictional synthetic profile and follows our strict
              content policy. No real-person likeness, deepfake, minor-looking, or non-consensual
              content is permitted.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] uppercase tracking-wider text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          {video.isPremium ? <SubscribeCTA /> : <SubscribeCTA variant="compact" />}

          <div className="surface p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Up next
            </p>
            <div className="mt-3 grid gap-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/video/${item.id}`}
                  className="group flex items-center gap-3 rounded-2xl border border-transparent p-2 transition hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div
                    className={`relative h-16 w-24 flex-none overflow-hidden rounded-xl border border-white/10 ${variantClass[item.poster]}`}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-1 right-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {item.durationLabel}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white group-hover:text-fuchsia-200">
                      {item.title}
                    </p>
                    <p className="truncate text-xs text-zinc-400">
                      {item.profileName} • {item.views} views
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
