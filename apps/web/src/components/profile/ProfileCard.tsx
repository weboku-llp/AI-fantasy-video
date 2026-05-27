import type { PosterVariant } from '../../lib/mock-data';
import { ShieldIcon, SparkleIcon } from '../ui/Icons';

const variantClass: Record<PosterVariant, string> = {
  aurora: 'poster-aurora',
  ember: 'poster-ember',
  tide: 'poster-tide',
};

type Props = {
  name: string;
  bio: string;
  tags: string[];
  poster?: PosterVariant;
  followers?: string;
  videos?: number;
};

export function ProfileCard({
  name,
  bio,
  tags,
  poster = 'aurora',
  followers = '128K',
  videos = 14,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.08]">
      <div className={`relative h-44 w-full ${variantClass[poster]}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_55%)] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
          <ShieldIcon className="h-3 w-3" />
          Synthetic-only
        </div>
      </div>

      <div className="relative -mt-12 px-6 pb-6">
        <div className={`relative grid h-24 w-24 place-items-center overflow-hidden rounded-2xl border border-white/15 ${variantClass[poster]}`}>
          <span className="text-2xl font-bold text-white drop-shadow">{name.slice(0, 1)}</span>
          <SparkleIcon className="absolute right-1.5 top-1.5 h-3 w-3 text-white/70" />
        </div>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">{name}</h1>
            <p className="mt-1 max-w-prose text-sm text-zinc-300">{bio}</p>
          </div>
          <div className="flex gap-3">
            <button type="button" className="btn-primary">
              Follow
            </button>
            <button type="button" className="btn-ghost">
              Share
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-zinc-300">
            <div>
              <p className="text-lg font-bold text-white">{followers}</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">{videos}</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Videos</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">Synthetic</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">Profile type</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
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
    </section>
  );
}
