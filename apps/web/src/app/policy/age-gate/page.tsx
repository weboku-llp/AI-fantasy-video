import Link from 'next/link';
import { ShieldIcon, SparkleIcon } from '../../../components/ui/Icons';

export default function Page() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 md:px-6">
      <div className="surface-elevated relative overflow-hidden p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-fuchsia-200">
              <ShieldIcon className="h-6 w-6" />
            </div>
            <div>
              <span className="chip">Age verification</span>
              <h1 className="mt-1 text-3xl font-bold text-white">You must be 18+ to continue.</h1>
            </div>
          </div>

          <p className="mt-5 text-sm text-zinc-300">
            By entering, you confirm that you are 18 years or older and that viewing fictional
            synthetic fantasy content is legal in your region.
          </p>

          <div className="mt-6 grid gap-2 text-sm text-zinc-200">
            <div className="flex items-center gap-2.5">
              <SparkleIcon className="h-4 w-4 text-fuchsia-300" /> Synthetic and fictional profiles only.
            </div>
            <div className="flex items-center gap-2.5">
              <SparkleIcon className="h-4 w-4 text-fuchsia-300" /> No real-person or celebrity likeness.
            </div>
            <div className="flex items-center gap-2.5">
              <SparkleIcon className="h-4 w-4 text-fuchsia-300" /> No deepfake or impersonation workflows.
            </div>
            <div className="flex items-center gap-2.5">
              <SparkleIcon className="h-4 w-4 text-fuchsia-300" /> No minor-looking or non-consensual content.
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/feed" className="btn-primary">
              I am 18+ • Continue
            </Link>
            <Link href="/" className="btn-ghost">
              Exit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
