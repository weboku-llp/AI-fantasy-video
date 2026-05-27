import type { PosterVariant } from '../../lib/mock-data';
import { PlayIcon } from '../ui/Icons';

type Props = {
  variant?: PosterVariant;
  durationLabel?: string;
  title?: string;
  premium?: boolean;
};

const variantClass: Record<PosterVariant, string> = {
  aurora: 'poster-aurora',
  ember: 'poster-ember',
  tide: 'poster-tide',
};

export function PreviewPlayer({ variant = 'aurora', durationLabel = '0:30', title, premium }: Props) {
  return (
    <div
      className={`group relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 ${variantClass[variant]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),transparent_55%)] mix-blend-overlay" />

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
          Live preview
        </span>
        {premium ? <span className="chip-gold">Premium</span> : null}
      </div>

      <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
        {durationLabel}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          className="grid h-16 w-16 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition group-hover:scale-105 group-hover:border-white/60"
          aria-label="Play preview"
        >
          <PlayIcon className="ml-1 h-7 w-7" />
        </button>
      </div>

      {title ? (
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-base font-semibold text-white drop-shadow">{title}</p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="h-1 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500" />
          </div>
        </div>
      )}
    </div>
  );
}
