import type { PosterVariant } from '../../lib/mock-data';
import { PlayIcon } from '../ui/Icons';

type Props = {
  variant?: PosterVariant;
  title?: string;
};

const variantClass: Record<PosterVariant, string> = {
  aurora: 'poster-aurora',
  ember: 'poster-ember',
  tide: 'poster-tide',
};

export function VideoPlayer({ variant = 'ember', title }: Props) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 ${variantClass[variant]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),transparent_55%)] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute inset-0 grid place-items-center">
        <button
          type="button"
          className="grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:scale-105 hover:border-white/60"
          aria-label="Play"
        >
          <PlayIcon className="ml-1 h-8 w-8" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        {title ? <p className="mb-3 text-lg font-semibold text-white drop-shadow">{title}</p> : null}
        <div className="flex items-center gap-3 text-xs text-zinc-300">
          <span className="font-semibold text-white">00:00</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-1/12 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500" />
          </div>
          <span>30:00</span>
        </div>
      </div>
    </div>
  );
}
