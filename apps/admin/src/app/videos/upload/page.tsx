import { VideoUploadForm } from '../../../components/videos/VideoUploadForm';

export default function Page() {
  return (
    <section>
      <span className="chip">Upload</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Upload video</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Add a cinematic preview or premium full episode. Only synthetic fictional content.
      </p>
      <div className="mt-6">
        <VideoUploadForm />
      </div>
    </section>
  );
}
