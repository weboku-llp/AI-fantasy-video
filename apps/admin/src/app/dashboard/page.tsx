import Link from 'next/link';
import { DASHBOARD_STATS, RECENT_ACTIVITY } from '../../lib/mock-data';
import {
  PlusIcon,
  ShieldIcon,
  SparkleIcon,
  TrendUpIcon,
  VideosIcon,
} from '../../components/ui/Icons';

const quickActions = [
  { href: '/profiles/new', label: 'New profile', icon: PlusIcon },
  { href: '/videos/upload', label: 'Upload video', icon: VideosIcon },
  { href: '/ai-jobs/new', label: 'Create AI job', icon: SparkleIcon },
];

export default function Page() {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="chip">Overview</span>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Admin <span className="text-gradient-aurora">dashboard</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            Monitor platform health, subscribers, content readiness, and AI generation pipeline.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} href={action.href} className="btn-ghost">
                <Icon className="h-4 w-4" />
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => (
          <div key={stat.label} className="surface-elevated p-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
              {stat.label}
            </p>
            <div className="mt-3 flex items-baseline justify-between">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-2 py-0.5 text-[11px] text-emerald-200">
                <TrendUpIcon className="h-3 w-3" />
                {stat.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Pipeline this week</h2>
            <span className="chip">Last 7 days</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Uploads</p>
              <p className="mt-2 text-2xl font-bold text-white">128</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Previews</p>
              <p className="mt-2 text-2xl font-bold text-white">412</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">AI jobs</p>
              <p className="mt-2 text-2xl font-bold text-white">86</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-amber-300 to-rose-400" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-4 text-sm text-emerald-100">
            <div className="flex items-center gap-2 text-emerald-200">
              <ShieldIcon className="h-4 w-4" />
              <p className="font-semibold">Compliance reminder</p>
            </div>
            <p className="mt-1 text-emerald-100/80">
              Allow only fictional synthetic profiles. Reject real-person likeness, celebrity
              likeness, deepfake, minor-looking, and non-consensual content.
            </p>
          </div>
        </div>

        <div className="surface p-6">
          <h2 className="text-lg font-semibold text-white">Recent activity</h2>
          <ul className="mt-4 space-y-3">
            {RECENT_ACTIVITY.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border-b border-white/[0.06] pb-3 last:border-b-0 last:pb-0">
                <div>
                  <p className="text-sm font-semibold text-white">{item.type}</p>
                  <p className="text-xs text-zinc-400">{item.detail}</p>
                </div>
                <span className="text-xs text-zinc-500">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
