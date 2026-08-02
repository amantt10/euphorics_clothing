export function HoodieIcon(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M35 22c0-7 6-13 15-13s15 6 15 13" />
      <path d="M20 40c1-11 7-19 15-22l6 9h18l6-9c8 3 14 11 15 22l6 14-10 5v28a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V59l-10-5 6-14z" />
      <path d="M40 30c2 4 6 6 10 6s8-2 10-6" />
      <path d="M50 46v16" opacity="0.5" />
    </svg>
  );
}

export function TeeIcon(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M35 20 18 30l6 16 9-5v40a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V41l9 5 6-16-17-10-8 8h-14z" />
      <path d="M40 20a10 10 0 0 0 20 0" opacity="0.6" />
    </svg>
  );
}

export function PantsIcon(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M30 16h40l3 20-4 46-2 2h-9l-2-2-6-40-6 40-2 2h-9l-2-2-4-46 3-20z" />
      <path d="M30 16h40" />
      <path d="M22 34h9" opacity="0.5" />
      <path d="M69 34h9" opacity="0.5" />
      <path d="M50 30v14" opacity="0.5" />
    </svg>
  );
}

export function JacketIcon(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M38 18 25 26 14 44l9 8 6-8v38a3 3 0 0 0 3 3h36a3 3 0 0 0 3-3V44l6 8 9-8-11-18-13-8-6 8h-8z" />
      <path d="M44 26v58" opacity="0.6" />
      <path d="M56 26v58" opacity="0.6" />
      <path d="M44 40h12" opacity="0.4" />
      <path d="M44 54h12" opacity="0.4" />
    </svg>
  );
}

export function CapIcon(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" {...props}>
      <path d="M18 58c0-18 14-32 32-32s32 14 32 32" />
      <path d="M18 58h64c2 8-4 12-10 12H28c-6 0-12-4-10-12z" />
      <path d="M82 60c10-1 16 3 16 8s-8 7-16 6" />
      <path d="M50 26v-8" opacity="0.5" />
    </svg>
  );
}

export function iconFor(name) {
  switch (name) {
    case 'hoodie':
      return HoodieIcon;
    case 'tee':
      return TeeIcon;
    case 'pants':
      return PantsIcon;
    case 'jacket':
      return JacketIcon;
    case 'cap':
      return CapIcon;
    default:
      return TeeIcon;
  }
}
