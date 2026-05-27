export function ProfileForm() {
  return (
    <form className="surface grid gap-5 p-6 md:grid-cols-2">
      <div>
        <label className="label" htmlFor="profile-name">Profile name</label>
        <input id="profile-name" className="input" placeholder="Astra Nightwind" />
      </div>
      <div>
        <label className="label" htmlFor="profile-slug">Slug</label>
        <input id="profile-slug" className="input" placeholder="astra-nightwind" />
      </div>
      <div>
        <label className="label" htmlFor="profile-tags">Tags</label>
        <input id="profile-tags" className="input" placeholder="mage, arcane, synthetic-only" />
      </div>
      <div>
        <label className="label" htmlFor="profile-cover">Cover variant</label>
        <select id="profile-cover" className="input">
          <option>aurora</option>
          <option>ember</option>
          <option>tide</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="label" htmlFor="profile-bio">Bio</label>
        <textarea id="profile-bio" className="input min-h-[120px]" placeholder="A short fictional persona description." />
      </div>
      <div className="md:col-span-2 flex items-center justify-end gap-3">
        <button type="button" className="btn-ghost">Cancel</button>
        <button type="button" className="btn-primary">Save profile</button>
      </div>
    </form>
  );
}
