type IconProps = {
  className?: string;
};

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.14v13.72c0 .8.87 1.29 1.55.88l10.5-6.86a1.04 1.04 0 0 0 0-1.76L9.55 4.26A1.04 1.04 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="4" y="10.5" width="16" height="10" rx="2.5" />
      <path d="M8 10.5V7a4 4 0 1 1 8 0v3.5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5 13.6 9 20 10.5 13.6 12 12 18.5 10.4 12 4 10.5 10.4 9 12 2.5Z" />
      <path d="M19 16l.8 2.6L22.5 19l-2.7.8L19 22l-.8-2.2-2.7-.8 2.7-.4L19 16Z" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 3 4.5 6v6c0 4.7 3.2 8.5 7.5 9.5 4.3-1 7.5-4.8 7.5-9.5V6L12 3Z" strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15 10.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 7.5 7 12l3-5.5L12 4l2 2.5L17 12l4-4.5-1.5 11.5h-15L3 7.5Zm2.4 12h13.2v1.5H5.4v-1.5Z" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 20s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 10c0 5.65-7 10-7 10Z" strokeLinejoin="round" />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.7 7.6-4.4M8.2 13.3l7.6 4.4" />
    </svg>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M6 4h12v17l-6-3.5L6 21V4Z" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DotIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  );
}

export function BrandMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="afv-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8bbf" />
          <stop offset="55%" stopColor="#b08bff" />
          <stop offset="100%" stopColor="#7cc6ff" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="none" stroke="url(#afv-g)" strokeWidth="1.5" opacity="0.6" />
      <path
        d="M16 5.5 22 25M16 5.5 10 25M11.2 19h9.6"
        stroke="url(#afv-g)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
