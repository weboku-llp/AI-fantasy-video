const users = [
  { name: 'Platform Admin', email: 'admin@aifantasy.video', role: 'ADMIN', joined: 'Jan 02, 2026' },
  { name: 'Demo User One', email: 'user1@example.com', role: 'USER', joined: 'Feb 18, 2026' },
  { name: 'Demo User Two', email: 'user2@example.com', role: 'USER', joined: 'Mar 22, 2026' },
  { name: 'Demo User Three', email: 'user3@example.com', role: 'USER', joined: 'May 04, 2026' },
];

const roleClass: Record<string, string> = {
  ADMIN: 'border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200',
  SUPER_ADMIN: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  USER: 'border-white/10 bg-white/[0.04] text-zinc-300',
};

export function UserTable() {
  return (
    <div className="surface overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06] bg-white/[0.02] text-[11px] uppercase tracking-[0.14em] text-zinc-400">
          <tr>
            <th className="px-5 py-3 font-medium">User</th>
            <th className="px-5 py-3 font-medium">Email</th>
            <th className="px-5 py-3 font-medium">Joined</th>
            <th className="px-5 py-3 font-medium">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} className="border-t border-white/[0.06] transition hover:bg-white/[0.02]">
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-sm font-semibold text-white">
                    {user.name.slice(0, 1)}
                  </div>
                  <p className="font-semibold text-white">{user.name}</p>
                </div>
              </td>
              <td className="px-5 py-3.5 text-zinc-400">{user.email}</td>
              <td className="px-5 py-3.5 text-zinc-400">{user.joined}</td>
              <td className="px-5 py-3.5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${roleClass[user.role] ?? 'border-white/10 bg-white/[0.04] text-zinc-300'}`}
                >
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
