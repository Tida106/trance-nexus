'use strict';

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://trance-nexus.com';

const C = {
  bg:     '#0d0d0d',
  bg2:    '#1a0a00',
  orange: '#f97316',
  red:    '#dc2626',
  amber:  '#f59e0b',
  white:  '#ffffff',
  muted:  '#9ca3af',
  dim:    '#4b5563',
};

const ARTICLES = [
  { slug: 'history-of-trance-music',              title: 'The History of Trance Music: From Frankfurt to the Global Stage' },
  { slug: 'top-10-trance-subgenres-explained',    title: 'Top 10 Trance Subgenres Explained' },
  { slug: 'essential-trance-labels-2026',         title: 'Essential Trance Labels You Should Know in 2026' },
  { slug: 'best-trance-festivals-worldwide',      title: 'The Best Trance Festivals Around the World' },
  { slug: 'how-to-dj-trance-beginners-guide',    title: "How to DJ Trance: A Beginner's Complete Guide" },
  { slug: 'iconic-trance-anthems-that-defined-an-era', title: 'Iconic Trance Anthems That Defined an Era' },
  { slug: 'rise-of-psytrance-goa-to-modern-day', title: 'The Rise of Psytrance: From Goa to a Global Movement' },
  { slug: 'trance-vs-house-vs-techno',           title: 'Trance vs House vs Techno: Understanding the Differences' },
  { slug: 'role-of-vocals-in-trance-music',      title: 'The Role of Vocals in Trance Music' },
  { slug: 'why-trance-music-endures',            title: 'Why Trance Music Endures: A Cultural Analysis' },
];

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Estimate wrapping — sans-serif avg char width ≈ 0.52 × fontSize
function wrapWords(text, maxPx, fontSize) {
  const cpl = Math.floor(maxPx / (fontSize * 0.52));
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const candidate = cur ? `${cur} ${w}` : w;
    if (candidate.length <= cpl) {
      cur = candidate;
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function makeSvg(opts = {}) {
  const W = 1200, H = 630;
  const px = 72; // horizontal padding

  const { title = null, label = 'TRANCE MUSIC PORTAL' } = opts;

  // Dynamic font sizing + wrapping
  let lines = [];
  let fs = 60;
  if (title) {
    lines = wrapWords(title, W - px * 2, fs);
    if (lines.length > 2) { fs = 48; lines = wrapWords(title, W - px * 2, fs); }
    if (lines.length > 3) { fs = 40; lines = wrapWords(title, W - px * 2, fs); }
    lines = lines.slice(0, 3);
  }

  const titleTop = title ? 220 : 300;
  const lineH    = Math.round(fs * 1.3);
  const titleSvg = lines.map((l, i) => `
    <text x="${px}" y="${titleTop + i * lineH}"
      font-family="Arial, Helvetica, Liberation Sans, sans-serif"
      font-size="${fs}" font-weight="bold" fill="${C.white}">${esc(l)}</text>`
  ).join('');

  const labelY = title ? titleTop + lines.length * lineH + 44 : 380;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gr" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stop-color="${C.red}"/>
      <stop offset="48%"  stop-color="${C.orange}"/>
      <stop offset="100%" stop-color="${C.amber}"/>
    </linearGradient>
    <radialGradient id="glow" cx="15%" cy="50%" r="55%">
      <stop offset="0%"   stop-color="${C.red}"    stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${C.bg}"      stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- subtle grid lines -->
  <line x1="0" y1="160" x2="${W}" y2="160" stroke="${C.dim}" stroke-width="0.5" opacity="0.3"/>
  <line x1="0" y1="${H - 80}" x2="${W}" y2="${H - 80}" stroke="${C.dim}" stroke-width="0.5" opacity="0.3"/>

  <!-- left accent bar -->
  <rect x="0" y="0" width="5" height="${H}" fill="${C.orange}" opacity="0.5"/>

  <!-- top gradient bar -->
  <rect x="0" y="0" width="${W}" height="9" fill="url(#gr)"/>

  <!-- TRANCE logo -->
  <text x="${px}" y="115"
    font-family="Arial Black, Impact, Helvetica, sans-serif"
    font-size="56" font-weight="900" letter-spacing="8"
    fill="${C.orange}">TRANCE</text>
  <!-- NEXUS logo -->
  <text x="${px + 340}" y="115"
    font-family="Arial Black, Impact, Helvetica, sans-serif"
    font-size="56" font-weight="900" letter-spacing="8"
    fill="${C.red}">NEXUS</text>

  <!-- underline -->
  <rect x="${px}" y="130" width="200" height="3" fill="${C.orange}" opacity="0.9"/>

  ${titleSvg}

  <!-- label -->
  <text x="${px}" y="${labelY}"
    font-family="Arial, Helvetica, Liberation Sans, sans-serif"
    font-size="20" letter-spacing="5" fill="${C.muted}">${esc(label)}</text>

  <!-- site url -->
  <text x="${W - px}" y="${H - 24}"
    font-family="Arial, Helvetica, Liberation Sans, sans-serif"
    font-size="18" fill="${C.dim}" text-anchor="end">${SITE_URL}</text>

  <!-- bottom gradient bar -->
  <rect x="0" y="${H - 9}" width="${W}" height="9" fill="url(#gr)"/>
</svg>`;
}

async function gen(svg, outPath) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
  console.log(`  ✅ ${path.relative(process.cwd(), outPath)}`);
}

async function main() {
  console.log('\n═══════════════════════════════════════');
  console.log('🖼  OG Image Generator');
  console.log('═══════════════════════════════════════');

  fs.mkdirSync('./public/og/blog', { recursive: true });

  // Default image (no article title)
  await gen(makeSvg({ label: 'TRANCE MUSIC PORTAL — JAPAN & WORLDWIDE' }), './public/og-default.png');

  // Per-article images
  for (const { slug, title } of ARTICLES) {
    await gen(
      makeSvg({ title, label: 'TRANCE NEXUS BLOG' }),
      `./public/og/blog/${slug}.png`
    );
  }

  console.log('\n✅ OG images complete — 11 images generated\n');
}

main().catch(err => {
  console.error('❌ OG image generation failed:', err.message);
  process.exit(1);
});
