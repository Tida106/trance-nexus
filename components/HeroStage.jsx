// Decorative festival "stage" for the homepage hero: sweeping lasers,
// and soft light blooms. Pure CSS animation
// (styles in app/globals.css under "Hero stage"), no client JS. A seeded
// PRNG keeps the markup identical between prerender and hydration.

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const LASER_COLORS = ['255,236,170', '255,140,60', '205,190,255', '120,230,255', '255,120,200'];

function buildLasers(r) {
  const sources = [
    { x: '18%', n: 5, base: -15, spread: 45 },
    { x: '50%', n: 8, base: 0, spread: 70 },
    { x: '82%', n: 5, base: 15, spread: 45 },
  ];
  const pick = (a) => a[Math.floor(r() * a.length)];
  const between = (a, b) => a + r() * (b - a);
  return sources.map((s) => ({
    x: s.x,
    beams: Array.from({ length: s.n }, (_, i) => {
      const c = pick(LASER_COLORS);
      const a = s.base - s.spread + (2 * s.spread) * (i / (s.n - 1));
      return {
        style: {
          '--a1': `${(a - between(10, 22)).toFixed(1)}deg`,
          '--a2': `${(a + between(10, 22)).toFixed(1)}deg`,
          '--d': `${between(5, 11).toFixed(1)}s`,
          '--dl': `-${between(0, 10).toFixed(1)}s`,
          background: `linear-gradient(to top, rgba(${c},1), rgba(${c},.55) 45%, rgba(${c},0))`,
          boxShadow: `0 0 8px 2px rgba(${c},.55)`,
        },
      };
    }),
  }));
}

const r = rng(20261011);
const LASERS = buildLasers(r);

export default function HeroStage() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="hs-glow hs-glow-1" />
      <div className="hs-glow hs-glow-2" />
      {LASERS.map((src, i) => (
        <div key={i}>
          <div className="hs-src" style={{ left: src.x }}>
            {src.beams.map((b, j) => (
              <div key={j} className="hs-beam" style={b.style} />
            ))}
          </div>
          <div className="hs-flare" style={{ left: src.x }} />
        </div>
      ))}
    </div>
  );
}
