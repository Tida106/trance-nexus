// Decorative festival "stage" for the homepage hero: sweeping lasers,
// soft light blooms and a dancing crowd silhouette. Pure CSS animation
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
const BACK = ['#7C6CC4', '#4F8FB8', '#B8678F', '#C98A4B', '#5FA39A'];
const FRONT = ['#FF6FB5', '#3FD6E8', '#FF9A3C', '#F4D35E', '#B28DFF', '#5EE6A8', '#FF5E62'];
const BODY = ['hs-bob', 'hs-sway', 'hs-jump', 'hs-shuffle', 'hs-groove'];
const ARMS = ['hs-pump', 'hs-wave', 'hs-swing'];

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

function buildCrowd(r) {
  const pick = (a) => a[Math.floor(r() * a.length)];
  const f = (a, b) => (a + r() * (b - a)).toFixed(2);
  const people = [];
  const add = (x, s, col) => {
    const pose = r();
    const tip = (side) =>
      pose < 0.33 ? [side * 17 * s, -68 * s] : pose < 0.66 ? [side * 24 * s, -58 * s] : [side * 6 * s, -72 * s];
    const arms = [-1, 1]
      .filter(() => r() < 0.85)
      .map((side) => ({
        cls: pick(ARMS),
        style: { '--a': `${f(0.6, 1.4)}s`, animationDelay: `-${f(0, 1.4)}s` },
        x1: x + side * 8 * s, y1: 100 - 32 * s,
        x2: x + tip(side)[0], y2: 100 + tip(side)[1],
      }));
    people.push({
      x, s, col, arms,
      cls: pick(BODY),
      style: { '--d': `${f(0.7, 1.6)}s`, animationDelay: `-${f(0, 1.6)}s` },
    });
  };
  for (let x = 20; x < 800; x += 48 + r() * 18) add(x, 0.82 + r() * 0.16, pick(BACK));
  for (let x = 0; x < 820; x += 58 + r() * 22) add(x, 1.08 + r() * 0.18, pick(FRONT));
  return people;
}

const r = rng(20261011);
const LASERS = buildLasers(r);
const CROWD = buildCrowd(r);

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
      <svg className="hs-crowd" viewBox="0 0 800 100" preserveAspectRatio="xMidYMax slice" focusable="false">
        {CROWD.map((p, i) => (
          <g key={i} className={`hs-p ${p.cls}`} style={p.style}>
            <path
              d={`M${p.x - 11 * p.s},100 Q${p.x - 12 * p.s},${100 - 34 * p.s} ${p.x},${100 - 37 * p.s} Q${p.x + 12 * p.s},${100 - 34 * p.s} ${p.x + 11 * p.s},100 Z`}
              fill={p.col}
            />
            <circle cx={p.x} cy={100 - 45 * p.s} r={8 * p.s} fill={p.col} />
            {p.arms.map((a, j) => (
              <g key={j} className={`hs-arm ${a.cls}`} style={a.style}>
                <line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={p.col} strokeWidth={4.5 * p.s} strokeLinecap="round" />
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
