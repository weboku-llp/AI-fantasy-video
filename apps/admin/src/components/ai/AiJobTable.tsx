import { AI_JOB_ROWS } from '../../lib/mock-data';

const statusClass: Record<string, string> = {
  QUEUED: 'border-white/10 bg-white/5 text-zinc-300',
  PROCESSING: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  COMPLETED: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
  FAILED: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
  CANCELLED: 'border-white/10 bg-white/5 text-zinc-400',
};

export function AiJobTable() {
  return (
    <div className="surface overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06] bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">Job ID</th>
            <th className="px-5 py-3 font-medium">Provider</th>
            <th className="px-5 py-3 font-medium">Duration</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {AI_JOB_ROWS.map((row) => (
            <tr key={row.id} className="border-t border-white/[0.06] transition hover:bg-white/[0.02]">
              <td className="px-5 py-3.5 font-mono text-zinc-100">{row.id}</td>
              <td className="px-5 py-3.5 text-zinc-400">{row.provider}</td>
              <td className="px-5 py-3.5 text-zinc-200">{row.duration}</td>
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
  );
}
