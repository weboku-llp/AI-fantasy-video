const rows = [
  { email: 'user_3814@example.com', plan: 'Premium Monthly', status: 'ACTIVE', since: 'May 12, 2026' },
  { email: 'user_2901@example.com', plan: 'Premium Monthly', status: 'ACTIVE', since: 'Apr 28, 2026' },
  { email: 'user_2102@example.com', plan: 'Premium Monthly', status: 'EXPIRED', since: 'Mar 04, 2026' },
  { email: 'user_1411@example.com', plan: 'Premium Monthly', status: 'CANCELLED', since: 'Feb 18, 2026' },
];

const statusClass: Record<string, string> = {
  ACTIVE: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
  EXPIRED: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  CANCELLED: 'border-white/10 bg-white/5 text-zinc-400',
};

export function SubscriptionTable() {
  return (
    <div className="surface overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06] bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">User</th>
            <th className="px-5 py-3 font-medium">Plan</th>
            <th className="px-5 py-3 font-medium">Since</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.email} className="border-t border-white/[0.06] transition hover:bg-white/[0.02]">
              <td className="px-5 py-3.5 text-zinc-100">{row.email}</td>
              <td className="px-5 py-3.5 text-zinc-300">{row.plan}</td>
              <td className="px-5 py-3.5 text-zinc-400">{row.since}</td>
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
