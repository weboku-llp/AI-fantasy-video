import { FlagIcon, ShieldIcon } from '../../components/ui/Icons';

const reports = [
  { id: 'report_421', target: 'video_premium-fifteen', reason: 'Off-topic flag', status: 'PENDING', time: '12m ago' },
  { id: 'report_417', target: 'profile_noctis-silverrun', reason: 'Policy review', status: 'ESCALATED', time: '46m ago' },
  { id: 'report_402', target: 'video_preview-one', reason: 'False positive', status: 'RESOLVED', time: '2h ago' },
];

const statusClass: Record<string, string> = {
  PENDING: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  ESCALATED: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
  RESOLVED: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
};

export default function Page() {
  return (
    <section>
      <span className="chip">Moderation</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Reports</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Review reports raised against profiles or videos. Prioritize real-likeness or
        non-consensual content risk signals first.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="surface-elevated p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Pending</p>
          <p className="mt-2 text-3xl font-bold text-amber-200">6</p>
        </div>
        <div className="surface-elevated p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Escalated</p>
          <p className="mt-2 text-3xl font-bold text-rose-200">2</p>
        </div>
        <div className="surface-elevated p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Resolved today</p>
          <p className="mt-2 text-3xl font-bold text-emerald-200">14</p>
        </div>
      </div>

      <div className="mt-6 surface overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-white/[0.06] bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
            <tr>
              <th className="px-5 py-3 font-medium">Report</th>
              <th className="px-5 py-3 font-medium">Target</th>
              <th className="px-5 py-3 font-medium">Reason</th>
              <th className="px-5 py-3 font-medium">Time</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((row) => (
              <tr key={row.id} className="border-t border-white/[0.06] transition hover:bg-white/[0.02]">
                <td className="px-5 py-3.5 font-mono text-zinc-100">{row.id}</td>
                <td className="px-5 py-3.5 text-zinc-300">{row.target}</td>
                <td className="px-5 py-3.5 text-zinc-300">
                  <span className="inline-flex items-center gap-2">
                    <FlagIcon className="h-3.5 w-3.5 text-rose-300" />
                    {row.reason}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-zinc-400">{row.time}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusClass[row.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-4 text-sm text-emerald-100">
        <div className="flex items-center gap-2 text-emerald-200">
          <ShieldIcon className="h-4 w-4" />
          <p className="font-semibold">Moderation priorities</p>
        </div>
        <p className="mt-1 text-emerald-100/80">
          Always prioritize real-likeness, deepfake, minor-looking, or non-consensual signals.
          Escalate immediately if matched.
        </p>
      </div>
    </section>
  );
}
