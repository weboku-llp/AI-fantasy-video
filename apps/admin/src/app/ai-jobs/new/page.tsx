import { AiJobForm } from '../../../components/ai/AiJobForm';

export default function Page() {
  return (
    <section>
      <span className="chip">New</span>
      <h1 className="mt-2 text-3xl font-bold text-white">Create AI generation job</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Submit a generation request. All prompts pass strict synthetic-only moderation.
      </p>
      <div className="mt-6">
        <AiJobForm />
      </div>
    </section>
  );
}
