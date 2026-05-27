import Link from 'next/link';
import { RegisterForm } from '../../components/auth/RegisterForm';
import { BrandMark, ShieldIcon, SparkleIcon } from '../../components/ui/Icons';

export default function Page() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-160px)] max-w-6xl items-stretch gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
      <div className="surface-elevated relative hidden overflow-hidden p-10 md:flex md:flex-col md:justify-between">
        <div className="absolute inset-0 poster-ember opacity-90" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9" />
            <p className="text-base font-bold text-white">AI Fantasy Video</p>
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-tight text-white">
            Step into a fully synthetic fantasy library.
          </h1>
          <p className="mt-3 max-w-md text-sm text-zinc-200">
            Create your account in seconds. Start scrolling free 30-second cinematic previews,
            unlock premium episodes whenever you are ready.
          </p>
        </div>

        <div className="relative space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-100">
            <ShieldIcon className="h-3.5 w-3.5" />
            Synthetic profiles only • Strict safety mode
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-xs text-amber-100">
            <SparkleIcon className="h-3.5 w-3.5" />
            Cinematic full episodes with Premium
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-full">
          <span className="chip">Create account</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Create your account.</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Free previews for everyone. Premium unlocks the full cinematic library.
          </p>
          <RegisterForm />
          <p className="mt-6 text-sm text-zinc-400">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-fuchsia-200 transition hover:text-white">
              Login →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
