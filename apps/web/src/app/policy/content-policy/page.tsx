import { CheckIcon, ShieldIcon } from '../../../components/ui/Icons';

const rules = [
  'Only fictional and synthetic profiles are permitted on the platform.',
  'No real-person likeness or celebrity likeness in any content.',
  'No deepfake or impersonation workflows are supported.',
  'No minor-looking or non-consensual content is allowed under any condition.',
  'Profiles or videos found in violation are removed and logged internally.',
  'Strict moderation runs across uploads and AI generation jobs.',
];

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <div className="flex items-center gap-2">
        <span className="chip">
          <ShieldIcon className="h-3 w-3" /> Content policy
        </span>
      </div>
      <h1 className="mt-3 text-4xl font-bold text-white">
        Strict <span className="text-gradient-aurora">synthetic-only</span> rules.
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-zinc-300">
        AI Fantasy Video exists strictly as a fictional synthetic-content platform. These rules
        are enforced across moderation, AI generation, and content upload pipelines.
      </p>

      <div className="mt-8 grid gap-3">
        {rules.map((rule) => (
          <div key={rule} className="surface flex items-start gap-3 p-4">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-200">
              <CheckIcon className="h-4 w-4" />
            </span>
            <p className="text-sm text-zinc-200">{rule}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
