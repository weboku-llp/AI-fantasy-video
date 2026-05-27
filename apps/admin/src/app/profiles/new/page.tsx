import { ProfileForm } from '../../../components/profiles/ProfileForm';

export default function Page() {
  return (
    <section>
      <span className="chip">Create</span>
      <h1 className="mt-2 text-3xl font-bold text-white">New profile</h1>
      <p className="mt-1 text-sm text-zinc-400">
        All fields define a fictional synthetic profile. Real-person likeness is never permitted.
      </p>
      <div className="mt-6">
        <ProfileForm />
      </div>
    </section>
  );
}
