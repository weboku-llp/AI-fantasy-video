import Link from 'next/link';
import { CrownIcon, LockIcon, SparkleIcon } from '../ui/Icons';

export function LockedVideoOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/55 p-6 backdrop-blur-sm">
      <div className="surface-elevated relative w-full max-w-md overflow-hidden p-6 text-center">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl" />

        <div className="relative">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/30 bg-amber-300/10 text-amber-200">
            <LockIcon className="h-6 w-6" />
          </div>
          <p className="mt-4 text-lg font-semibold text-white">This episode is premium</p>
          <p className="mt-2 text-sm text-zinc-300">
            Watch 30-second previews freely. Subscribe to unlock full 15 and 30 minute episodes.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 text-left text-[11px] text-zinc-400">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <SparkleIcon className="mb-1.5 h-3.5 w-3.5 text-amber-200" />
              Full episodes
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <CrownIcon className="mb-1.5 h-3.5 w-3.5 text-amber-200" />
              Priority access
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <LockIcon className="mb-1.5 h-3.5 w-3.5 text-amber-200" />
              Ad-free
            </div>
          </div>

          <Link href="/subscribe" className="btn-gold mt-5 w-full">
            <CrownIcon className="h-4 w-4" />
            Unlock Premium
          </Link>
        </div>
      </div>
    </div>
  );
}
