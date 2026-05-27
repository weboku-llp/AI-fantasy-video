import { VIDEO_ROWS } from '../../lib/mock-data';

const statusClass: Record<string, string> = {
  READY: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
  PROCESSING: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  DRAFT: 'border-white/10 bg-white/5 text-zinc-300',
  FAILED: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
};

export function VideoTable() {
  return (
    <div className="surface overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06] bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">Title</th>
            <th className="px-5 py-3 font-medium">Type</th>
            <th className="px-5 py-3 font-medium">Duration</th>
            <th className="px-5 py-3 font-medium">Tier</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {VIDEO_ROWS.map((row) => (
            <tr key={row.title} className="border-t border-white/[0.06] transition hover:bg-white/[0.02]">
              <td className="px-5 py-3.5 font-semibold text-white">{row.title}</td>
              <td className="px-5 py-3.5 text-zinc-400">{row.type}</td>
              <td className="px-5 py-3.5 text-zinc-200">{row.duration}</td>
              <td className="px-5 py-3.5">
                {row.premium ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[11px] font-semibold text-amber-200">
                    Premium
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-300">
                    Free
                  </span>
                )}
              </td>
              <td className="px-5 py-3.5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusClass[row.status] ?? 'border-white/10 bg-white/5 text-zinc-300'}`}
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
