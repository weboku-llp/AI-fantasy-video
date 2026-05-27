import Link from 'next/link';
import { PRICE_INR } from '../../lib/constants';
import { CrownIcon, SparkleIcon } from '../ui/Icons';

type Props = {
  variant?: 'default' | 'compact';
};

export function SubscribeCTA({ variant = 'default' }: Props) {
  if (variant === 'compact') {
    return (
      <div className="surface-elevated relative overflow-hidden p-4">
        <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Premium Monthly
            </p>
            <p className="mt-1 text-lg font-bold text-gradient-gold">₹{PRICE_INR}/month</p>
          </div>
          <Link href="/subscribe" className="btn-gold">
            <CrownIcon className="h-4 w-4" />
            Upgrade
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-elevated relative overflow-hidden p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-rose-400/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="chip-gold">
            <SparkleIcon className="h-3 w-3" /> Premium Monthly
          </span>
        </div>
        <p className="mt-3 text-4xl font-bold text-gradient-gold">₹{PRICE_INR}<span className="text-base font-medium text-amber-100/70">/month</span></p>
        <p className="mt-2 text-sm text-zinc-300">
          Unlock the full 15 and 30 minute cinematic episodes from every synthetic profile.
        </p>
        <Link href="/subscribe" className="btn-gold mt-5">
          <CrownIcon className="h-4 w-4" />
          Start subscription
        </Link>
        <p className="mt-3 text-[11px] text-zinc-500">Billed monthly. Cancel from settings anytime.</p>
      </div>
    </div>
  );
}
