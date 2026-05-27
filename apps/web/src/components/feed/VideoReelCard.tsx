import Link from 'next/link';
import { ReelVideo } from '../../lib/mock-data';
import { PreviewPlayer } from '../video/PreviewPlayer';
import { BookmarkIcon, HeartIcon, ShareIcon, LockIcon, CrownIcon } from '../ui/Icons';

type Props = {
  video: ReelVideo;
};

export function VideoReelCard({ video }: Props) {
  return (
    <article
      className={`relative grid gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl md:grid-cols-[260px_1fr] ${video.isPremium ? 'ring-premium' : ''}`}
    >
      <div className="relative">
        <PreviewPlayer
          variant={video.poster}
          durationLabel={video.durationLabel}
          premium={video.isPremium}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              {video.isPremium ? (
                <span className="chip-gold">
                  <CrownIcon className="h-3 w-3" /> Premium
                </span>
              ) : (
                <span className="chip">Free preview</span>
              )}
              <span className="text-xs text-zinc-400">{video.views} views • {video.likes} likes</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">
              <Link href={`/video/${video.id}`} className="transition hover:text-fuchsia-200">
                {video.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              by{' '}
              <Link
                href={`/profile/${video.profileId}`}
                className="font-medium text-fuchsia-200 transition hover:text-white"
              >
                {video.profileName}
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-3 max-w-prose text-sm text-zinc-300">{video.previewSummary}</p>

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

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
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

          {video.isPremium ? (
            <Link href="/subscribe" className="btn-gold">
              <LockIcon className="h-4 w-4" />
              Unlock full episode
            </Link>
          ) : (
            <Link href={`/video/${video.id}`} className="btn-primary">
              Watch preview
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
