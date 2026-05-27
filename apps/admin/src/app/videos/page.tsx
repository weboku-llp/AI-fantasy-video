import Link from 'next/link';
import { VideoTable } from '../../components/videos/VideoTable';
import { PlusIcon } from '../../components/ui/Icons';

export default function Page() {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="chip">Videos</span>
          <h1 className="mt-2 text-3xl font-bold text-white">Video library</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Manage cinematic previews and premium full episodes.
          </p>
        </div>
        <Link href="/videos/upload" className="btn-primary">
          <PlusIcon className="h-4 w-4" />
          Upload video
        </Link>
      </div>
      <div className="mt-6">
        <VideoTable />
      </div>
    </section>
  );
}
