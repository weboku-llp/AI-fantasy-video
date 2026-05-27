import { ArrowRightIcon } from '../ui/Icons';

export function RegisterForm() {
  return (
    <form className="mt-6 space-y-5">
      <div>
        <label className="label" htmlFor="register-name">Display name</label>
        <input id="register-name" type="text" placeholder="Your display name" className="input" />
      </div>
      <div>
        <label className="label" htmlFor="register-email">Email</label>
        <input id="register-email" type="email" placeholder="you@example.com" className="input" />
      </div>
      <div>
        <label className="label" htmlFor="register-password">Password</label>
        <input id="register-password" type="password" placeholder="At least 8 characters" className="input" />
      </div>
      <label className="flex items-start gap-2.5 text-xs text-zinc-400">
        <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-white/20 bg-black/40" />
        I confirm I am 18+ and agree to the strict synthetic-only content policy.
      </label>
      <button type="button" className="btn-primary w-full">
        Create account
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
