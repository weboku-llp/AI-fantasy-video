import { PreviewGeneratorButton } from './PreviewGeneratorButton';

export function VideoUploadForm() {
  return (
    <form className="surface grid gap-5 p-6 md:grid-cols-2">
      <div className="md:col-span-2">
        <label className="label" htmlFor="video-title">Title</label>
        <input id="video-title" className="input" placeholder="Cinematic episode title" />
      </div>
      <div>
        <label className="label" htmlFor="video-profile">Profile mapping</label>
        <input id="video-profile" className="input" placeholder="astra-nightwind" />
      </div>
      <div>
        <label className="label" htmlFor="video-type">Video type</label>
        <select id="video-type" className="input">
          <option>PREVIEW_30_SEC</option>
          <option>FULL_15_MIN</option>
          <option>FULL_30_MIN</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="video-duration">Duration (seconds)</label>
        <input id="video-duration" className="input" placeholder="30 / 900 / 1800" />
      </div>
      <div>
        <label className="label" htmlFor="video-poster">Poster variant</label>
        <select id="video-poster" className="input">
          <option>aurora</option>
          <option>ember</option>
          <option>tide</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="video-desc">Description</label>
        <textarea id="video-desc" className="input min-h-[120px]" placeholder="A short cinematic summary." />
      </div>
      <div className="md:col-span-2">
        <label className="label">Source upload</label>
        <div className="rounded-2xl border border-dashed border-white/15 bg-black/30 px-5 py-8 text-center">
          <p className="text-sm text-zinc-300">Drag and drop a video file, or browse to upload.</p>
          <p className="mt-1 text-xs text-zinc-500">MP4 • Max 2 GB • Synthetic content only</p>
          <button type="button" className="btn-ghost mt-4">Browse files</button>
        </div>
      </div>
      <div className="md:col-span-2 flex items-center justify-end gap-3">
        <PreviewGeneratorButton />
        <button type="button" className="btn-primary">Save video</button>
      </div>
    </form>
  );
}
