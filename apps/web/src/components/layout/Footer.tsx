import Link from 'next/link';
import { BrandMark, ShieldIcon } from '../ui/Icons';

const sections = [
  {
    title: 'Platform',
    links: [
      { href: '/feed', label: 'Feed' },
      { href: '/subscribe', label: 'Premium' },
      { href: '/login', label: 'Login' },
      { href: '/register', label: 'Register' },
    ],
  },
  {
    title: 'Safety',
    links: [
      { href: '/policy/age-gate', label: 'Age Gate' },
      { href: '/policy/content-policy', label: 'Content Policy' },
      { href: '/policy/terms', label: 'Terms' },
      { href: '/policy/privacy', label: 'Privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/[0.06] bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-9 w-9" />
              <div>
                <p className="text-base font-bold text-white">AI Fantasy Video</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Synthetic • Fictional</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-zinc-400">
              A fictional synthetic platform. We do not support real-person likeness, celebrity
              likeness, deepfake, minor-looking, or non-consensual content.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 text-xs font-medium text-emerald-200">
              <ShieldIcon className="h-3.5 w-3.5" />
              Strict safety mode • Always on
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {section.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AI Fantasy Video. All synthetic. All fictional.</p>
          <p>Made for cinematic synthetic storytelling.</p>
        </div>
      </div>
    </footer>
  );
}
