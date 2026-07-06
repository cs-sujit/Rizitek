export type StatIconName = 'shield' | 'users' | 'pin' | 'truck' | 'wrench';

export default function StatIcon({ name }: { name: StatIconName | string }) {
  const common = {
    viewBox: '0 0 24 24',
    className: 'h-5 w-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const paths: Record<string, JSX.Element> = {
    shield: (
      <svg {...common} aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    users: (
      <svg {...common} aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 15.2c2.7.4 4.5 2.1 4.5 4.8" />
      </svg>
    ),
    pin: (
      <svg {...common} aria-hidden="true">
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    ),
    truck: (
      <svg {...common} aria-hidden="true">
        <rect x="2" y="7" width="12" height="9" rx="1" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
      </svg>
    ),
    wrench: (
      <svg {...common} aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5V21h3.5l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
      </svg>
    ),
  };

  return (
    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-signal">
      {paths[name] ?? paths.shield}
    </span>
  );
}
