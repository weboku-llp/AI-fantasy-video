import Link from 'next/link';
import { REEL_VIDEOS, type PosterVariant } from '../../lib/mock-data';
import { CrownIcon, PlayIcon } from '../ui/Icons';

const variantClass: Record<PosterVariant, string> = {
  aurora: 'poster-aurora',
  ember: 'poster-ember',
  tide: 'poster-tide',
};

const tabs = ['All', 'Previews', 'Premium', 'Collections'];

export function ProfileVideoGrid() {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-xl font-semibold text-white">Episodes</h2>
        <div className="flex flex-wrap gap-2">
          {tabs.map((label, idx) => (
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

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REEL_VIDEOS.map((video) => (
          <Link
            key={video.id}
            href={`/video/${video.id}`}
            className="group relative block overflow-hidden rounded-3xl border border-white/[0.08] transition hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className={`relative aspect-[4/5] w-full ${variantClass[video.poster]}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15),transparent_55%)] mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="absolute left-3 top-3">
                {video.isPremium ? (
                  <span className="chip-gold">
                    <CrownIcon className="h-3 w-3" />
                    Premium
                  </span>
                ) : (
                  <span className="chip">Preview</span>
                )}
              </div>
              <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white">
                {video.durationLabel}
              </div>

              <div className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md">
                  <PlayIcon className="ml-1 h-5 w-5" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-semibold text-white drop-shadow">{video.title}</p>
                <p className="mt-1 text-xs text-zinc-300">
                  {video.views} views • {video.likes} likes
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
