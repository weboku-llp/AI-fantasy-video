import { PROFILE_HIGHLIGHTS, type PosterVariant } from '../../lib/mock-data';

const variantClass: Record<PosterVariant, string> = {
  aurora: 'poster-aurora',
  ember: 'poster-ember',
  tide: 'poster-tide',
};

const tiles = [...PROFILE_HIGHLIGHTS, ...PROFILE_HIGHLIGHTS, ...PROFILE_HIGHLIGHTS];

export function HeroMarquee() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#07060d] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#07060d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#07060d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#07060d] to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="flex animate-marquee gap-4 px-4">
          {tiles.map((profile, idx) => (
            <article
              key={`${profile.id}-${idx}`}
              className={`relative h-[360px] w-[220px] flex-none overflow-hidden rounded-2xl border border-white/10 ${variantClass[profile.poster]}`}
            >
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  {profile.tags[0]}
                </p>
                <p className="mt-0.5 text-base font-semibold text-white drop-shadow">{profile.name}</p>
                <p className="mt-0.5 text-[11px] text-zinc-300">{profile.followers} followers</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
