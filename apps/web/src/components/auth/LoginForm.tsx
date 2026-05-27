import { ArrowRightIcon } from '../ui/Icons';

export function LoginForm() {
  return (
    <form className="mt-6 space-y-5">
      <div>
        <label className="label" htmlFor="login-email">Email</label>
        <input id="login-email" type="email" placeholder="you@example.com" className="input" />
      </div>
      <div>
        <div className="flex items-end justify-between">
          <label className="label" htmlFor="login-password">Password</label>
          <a className="mb-1.5 text-xs text-zinc-400 transition hover:text-white" href="#">
            Forgot?
          </a>
        </div>
        <input id="login-password" type="password" placeholder="••••••••" className="input" />
      </div>
      <button type="button" className="btn-primary w-full">
        Continue
        <ArrowRightIcon className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-zinc-500">
        By continuing, you confirm you are 18+ and agree to the synthetic-only content policy.
      </p>
    </form>
  );
}
