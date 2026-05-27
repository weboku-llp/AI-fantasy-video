import { VideoUploadForm } from '../../../components/videos/VideoUploadForm';

export default function Page() {
  return (
    <section>
      <span className="chip">Edit</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Edit video</h1>
      <p className="mt-1 text-sm text-zinc-400">Update the cinematic episode metadata.</p>
      <div className="mt-6">
        <VideoUploadForm />
      </div>
    </section>
  );
}
