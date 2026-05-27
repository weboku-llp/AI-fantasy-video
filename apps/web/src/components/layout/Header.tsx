import Link from 'next/link';
import { APP_NAME } from '../../lib/constants';
import { BrandMark, SearchIcon, SparkleIcon } from '../ui/Icons';

const links = [
  { href: '/feed', label: 'Feed' },
  { href: '/profile/astra-nightwind', label: 'Profiles' },
  { href: '/subscribe', label: 'Premium' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#07060d]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark className="h-8 w-8" />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-wide text-white">{APP_NAME}</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Synthetic • Fictional</p>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400 transition focus-within:border-white/20">
            <SearchIcon className="h-4 w-4" />
            <input
              type="search"
              placeholder="Search synthetic profiles, episodes…"
              className="w-full bg-transparent outline-none placeholder:text-zinc-500"
            />
            <span className="hidden rounded border border-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-zinc-500 md:inline">
              ⌘ K
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden rounded-lg px-3 py-2 text-zinc-300 transition hover:bg-white/[0.06] hover:text-white md:inline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="hidden rounded-lg px-3 py-2 text-zinc-300 transition hover:bg-white/[0.06] hover:text-white sm:inline"
          >
            Login
          </Link>
          <Link href="/subscribe" className="btn-gold">
            <SparkleIcon className="h-4 w-4" />
            Go Premium
          </Link>
        </nav>
      </div>
    </header>
  );
}
