export function AiJobForm() {
  return (
    <form className="surface grid gap-5 p-6 md:grid-cols-2">
      <div>
        <label className="label" htmlFor="ai-profile">Profile</label>
        <input id="ai-profile" className="input" placeholder="astra-nightwind" />
      </div>
      <div>
        <label className="label" htmlFor="ai-provider">Provider</label>
        <select id="ai-provider" className="input">
          <option>provider-abstract</option>
          <option>provider-stub</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="ai-duration">Duration (seconds)</label>
        <input id="ai-duration" className="input" placeholder="30 / 900 / 1800" />
      </div>
      <div>
        <label className="label" htmlFor="ai-poster">Poster variant</label>
        <select id="ai-poster" className="input">
          <option>aurora</option>
          <option>ember</option>
          <option>tide</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="ai-prompt">Prompt</label>
        <textarea
          id="ai-prompt"
          className="input min-h-[140px]"
          placeholder="Synthetic cinematic prompt — fictional character description only."
        />
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="ai-negative">Negative prompt</label>
        <textarea
          id="ai-negative"
          className="input min-h-[80px]"
          placeholder="Things to avoid (always: real-person likeness, deepfake, minor-looking, non-consensual)."
        />
      </div>
      <div className="md:col-span-2 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-4 text-xs text-amber-100">
        Reminder: Only fictional and synthetic content. Prompts referencing real people, celebrities,
        or any non-consensual / minor-looking content will be rejected automatically.
      </div>
      <div className="md:col-span-2 flex items-center justify-end gap-3">
        <button type="button" className="btn-ghost">Cancel</button>
        <button type="button" className="btn-primary">Queue job</button>
      </div>
    </form>
  );
}
