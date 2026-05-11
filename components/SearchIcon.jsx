'use client';

import { useId } from 'react';

// Gold-metallic magnifier icon used across all search entry points
// (Cmd+K modal, navbar trigger, hero entry, /search page). The
// gradient mirrors .gold-metallic-nav in globals.css so the icon
// reads as part of the same metallic system. useId keeps each
// linearGradient id unique on pages that mount multiple search
// surfaces (e.g., home page has both the hero bar and the navbar).
export default function SearchIcon({ className = 'w-5 h-5 shrink-0', glow = true }) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      style={glow ? { filter: 'drop-shadow(0 0 4px rgba(244, 229, 168, 0.45))' } : undefined}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="25%" stopColor="#f4e5a8" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="75%" stopColor="#b8860b" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
      </defs>
      <circle
        cx="10.5"
        cy="10.5"
        r="6.5"
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="15.5"
        y1="15.5"
        x2="20.5"
        y2="20.5"
        stroke={`url(#${id})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
