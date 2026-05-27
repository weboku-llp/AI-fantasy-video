import { ShieldIcon, SparkleIcon } from '../../components/ui/Icons';

export default function Page() {
  return (
    <section>
      <span className="chip">Settings</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Platform settings</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Configure platform-wide controls. Safety and synthetic-only enforcement is always on.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="surface-elevated p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Strict safety mode</p>
              <p className="text-xs text-zinc-400">Always enabled for MVP. Not user-toggleable.</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
            <li>• Synthetic profiles only</li>
            <li>• No real-person or celebrity likeness</li>
            <li>• No deepfake or impersonation workflows</li>
            <li>• No minor-looking or non-consensual content</li>
          </ul>
        </div>

        <div className="surface-elevated p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-amber-300/30 bg-amber-300/10 text-amber-200">
              <SparkleIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Subscription plan</p>
              <p className="text-xs text-zinc-400">Premium Monthly • ₹499 • INR</p>
            </div>
          </div>
          <div className="mt-4 grid gap-2 text-xs text-zinc-300">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
              <span>Razorpay key configured</span>
              <span className="text-amber-200">Pending</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
              <span>Webhook secret</span>
              <span className="text-amber-200">Pending</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 surface p-6">
        <h2 className="text-base font-semibold text-white">Storage and streaming</h2>
        <p className="mt-1 text-xs text-zinc-400">
          The platform uses provider-abstracted storage and streaming. Configure the active providers below.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Storage</p>
            <p className="mt-1 font-semibold text-white">Cloudflare R2 / S3-compatible</p>
            <p className="text-xs text-zinc-500">Configured via R2_* env vars.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Streaming</p>
            <p className="mt-1 font-semibold text-white">Bunny Stream / Mux / Cloudflare Stream</p>
            <p className="text-xs text-zinc-500">Provider-abstracted at the API layer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
