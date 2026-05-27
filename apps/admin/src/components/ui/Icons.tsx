type IconProps = { className?: string };

export function BrandMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="afv-admin-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8bbf" />
          <stop offset="55%" stopColor="#b08bff" />
          <stop offset="100%" stopColor="#7cc6ff" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="none" stroke="url(#afv-admin-g)" strokeWidth="1.5" opacity="0.6" />
      <path
        d="M16 5.5 22 25M16 5.5 10 25M11.2 19h9.6"
        stroke="url(#afv-admin-g)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="9" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="5" rx="1.5" />
      <rect x="3.5" y="15.5" width="7" height="5" rx="1.5" />
      <rect x="13.5" y="11.5" width="7" height="9" rx="1.5" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="3.5" />
      <path d="M3 20c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M15 14c2 0 5 1.5 5 4.5" />
    </svg>
  );
}

export function VideosIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="m17 11 4-2v6l-4-2v-2Z" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5 13.6 9 20 10.5 13.6 12 12 18.5 10.4 12 4 10.5 10.4 9 12 2.5Z" />
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

export function ProfilesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20.5c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
    </svg>
  );
}

export function CardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M5 4v17" />
      <path d="M5 4h11l-2 4 2 4H5" strokeLinejoin="round" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15 21 13.2v-2.4L19.4 9l.5-2.3-2.1-1.2-2.1.9-2-1.4h-2.4l-2 1.4-2.1-.9L5.1 6.7 5.6 9 4 10.8v2.4L5.6 15l-.5 2.3 2.1 1.2 2.1-.9 2 1.4h2.4l2-1.4 2.1.9 2.1-1.2-.5-2.3Z" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function TrendUpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="m4 16 5-5 4 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
