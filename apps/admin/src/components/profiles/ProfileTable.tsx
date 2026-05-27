import { PROFILE_ROWS } from '../../lib/mock-data';

const statusClass: Record<string, string> = {
  Active: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
  Review: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
};

export function ProfileTable() {
  return (
    <div className="surface overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06] bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">Name</th>
            <th className="px-5 py-3 font-medium">Slug</th>
            <th className="px-5 py-3 font-medium">Tags</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium">Videos</th>
          </tr>
        </thead>
        <tbody>
          {PROFILE_ROWS.map((row) => (
            <tr key={row.slug} className="border-t border-white/[0.06] transition hover:bg-white/[0.02]">
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 text-sm font-semibold text-white">
                    {row.name.slice(0, 1)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{row.name}</p>
                    <p className="text-xs text-zinc-500">Synthetic profile</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3.5 text-zinc-400">{row.slug}</td>
              <td className="px-5 py-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-5 py-3.5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusClass[row.status] ?? 'border-white/10 bg-white/5 text-zinc-300'}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {row.status}
                </span>
              </td>
              <td className="px-5 py-3.5 text-zinc-200">{row.videos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
