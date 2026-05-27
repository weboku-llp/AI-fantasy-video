import { UserTable } from '../../components/users/UserTable';

export default function Page() {
  return (
    <section>
      <span className="chip">Users</span>
      <h1 className="mt-2 text-3xl font-bold text-white">User accounts</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Manage user roles and account status.
      </p>
      <div className="mt-6">
        <UserTable />
      </div>
    </section>
  );
}
