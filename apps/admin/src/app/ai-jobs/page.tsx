import Link from 'next/link';
import { AiJobTable } from '../../components/ai/AiJobTable';
import { PlusIcon } from '../../components/ui/Icons';

export default function Page() {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="chip">AI generation</span>
          <h1 className="mt-2 text-3xl font-bold text-white">AI jobs</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Track provider-abstracted generation jobs for synthetic profiles.
          </p>
        </div>
        <Link href="/ai-jobs/new" className="btn-primary">
          <PlusIcon className="h-4 w-4" />
          Create AI job
        </Link>
      </div>
      <div className="mt-6">
        <AiJobTable />
      </div>
    </section>
  );
}
