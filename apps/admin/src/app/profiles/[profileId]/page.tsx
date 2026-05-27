import { ProfileForm } from '../../../components/profiles/ProfileForm';

export default function Page() {
  return (
    <section>
      <span className="chip">Edit</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Edit profile</h1>
      <p className="mt-1 text-sm text-zinc-400">Update the fictional synthetic profile details.</p>
      <div className="mt-6">
        <ProfileForm />
      </div>
    </section>
  );
}
