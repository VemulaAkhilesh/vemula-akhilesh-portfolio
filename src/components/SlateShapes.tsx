export function SlateShapes() {
  return (
    <svg className="slate-shapes" viewBox="0 0 520 640" aria-hidden="true">
      <defs>
        <linearGradient id="slate-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#253745" />
          <stop offset="100%" stopColor="#06141B" />
        </linearGradient>
        <linearGradient id="slate-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A5C6A" />
          <stop offset="100%" stopColor="#11212D" />
        </linearGradient>
        <linearGradient id="slate-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9BA8AB" />
          <stop offset="100%" stopColor="#4A5C6A" />
        </linearGradient>
        <linearGradient id="slate-d" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#CCD0CF" />
          <stop offset="100%" stopColor="#9BA8AB" />
        </linearGradient>
      </defs>
      <rect x="70" y="36" width="360" height="92" rx="46" fill="url(#slate-a)" />
      <rect x="40" y="150" width="400" height="92" rx="46" fill="url(#slate-b)" />
      <rect x="86" y="264" width="340" height="92" rx="46" fill="#253745" />
      <rect x="24" y="378" width="430" height="92" rx="46" fill="url(#slate-c)" />
      <rect x="58" y="492" width="390" height="92" rx="46" fill="url(#slate-d)" opacity="0.85" />
    </svg>
  )
}
