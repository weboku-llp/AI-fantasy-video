import Link from 'next/link';
import '../styles/globals.css';
import {
  BrandMark,
  CardIcon,
  DashboardIcon,
  FlagIcon,
  GearIcon,
  ProfilesIcon,
  ShieldIcon,
  SparkleIcon,
  UsersIcon,
  VideosIcon,
} from '../components/ui/Icons';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
  { href: '/profiles', label: 'Profiles', icon: ProfilesIcon },
  { href: '/videos', label: 'Videos', icon: VideosIcon },
  { href: '/ai-jobs', label: 'AI Jobs', icon: SparkleIcon },
  { href: '/subscriptions', label: 'Subscriptions', icon: CardIcon },
  { href: '/users', label: 'Users', icon: UsersIcon },
  { href: '/reports', label: 'Reports', icon: FlagIcon },
  { href: '/settings', label: 'Settings', icon: GearIcon },
];

export const metadata = {
  title: 'AI Fantasy Video — Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
          <aside className="hidden border-r border-white/[0.06] bg-black/30 backdrop-blur-xl lg:flex lg:flex-col">
            <div className="border-b border-white/[0.06] px-5 py-4">
              <Link href="/dashboard" className="flex items-center gap-2.5">
                <BrandMark className="h-8 w-8" />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-white">AI Fantasy Video</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Admin</p>
                </div>
              </Link>
            </div>

            <nav className="flex-1 space-y-1 p-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-zinc-400" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="m-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-3 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4" />
                <p className="font-semibold">Strict safety mode</p>
              </div>
              <p className="mt-1 text-emerald-100/80">
                Synthetic-only • No real-person likeness • No deepfake
              </p>
            </div>
          </aside>

          <div>
            <header className="border-b border-white/[0.06] bg-black/30 backdrop-blur-xl lg:hidden">
              <div className="flex items-center justify-between px-4 py-3">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <BrandMark className="h-7 w-7" />
                  <p className="text-sm font-bold text-white">AFV Admin</p>
                </Link>
              </div>
              <div className="flex gap-2 overflow-x-auto px-4 pb-3 text-xs">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex-none rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-zinc-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </header>

            <main className="mx-auto max-w-6xl px-4 py-8 md:px-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
