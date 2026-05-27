import Link from 'next/link';
import { ProfileTable } from '../../components/profiles/ProfileTable';
import { PlusIcon } from '../../components/ui/Icons';

export default function Page() {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="chip">Profiles</span>
          <h1 className="mt-2 text-3xl font-bold text-white">Fantasy profiles</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Manage fictional synthetic profiles, their tags, and active status.
          </p>
        </div>
        <Link href="/profiles/new" className="btn-primary">
          <PlusIcon className="h-4 w-4" />
          Create profile
        </Link>
      </div>
      <div className="mt-6">
        <ProfileTable />
      </div>
    </section>
  );
}
