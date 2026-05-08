// Throwaway: verify EN title/description lengths and uniqueness
// across batch 1 posts and listing entries.
import fs from 'node:fs';

const FILES = [
  'data/blog/posts.js',
  'data/blog/posts2.js',
  'data/blog/posts3.js',
  'data/blog/posts4.js',
  'data/blog/posts5.js',
  'data/blog/posts6.js',
  'data/blog/posts7.js',
  'data/blog/posts8.js',
  'data/blog/posts9.js',
  'data/blog/posts10.js',
  'data/blog/posts11.js',
];

// Walk a JS source string, extracting consecutive title/description
// pairs from each `en: { ... }` literal. Handles single- and double-
// quoted strings with escaped quotes.
function extractEn(src) {
  const out = [];
  const re = /en:\s*\{\s*title:\s*(?<t>"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'),\s*description:\s*(?<d>"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g;
  for (const m of src.matchAll(re)) {
    out.push({
      title: unq(m.groups.t),
      desc: unq(m.groups.d),
    });
  }
  return out;
}
function unq(s) {
  return s.slice(1, -1).replace(/\\(['"\\])/g, '$1');
}

const all = [];
const dupTitles = new Map();
for (const f of FILES) {
  const src = fs.readFileSync(f, 'utf8');
  const list = extractEn(src);
  for (const e of list) {
    all.push({ ...e, file: f });
    dupTitles.set(e.title, (dupTitles.get(e.title) || 0) + 1);
  }
}

let warnT = 0, warnD = 0;
for (const e of all) {
  const tl = e.title.length;
  const dl = e.desc.length;
  const tflag = (tl < 60 || tl > 70) ? 'T!' : '  ';
  const dflag = (dl < 150 || dl > 160) ? 'D!' : '  ';
  if (tflag !== '  ') warnT++;
  if (dflag !== '  ') warnD++;
  console.log(
    `${tflag} ${tl.toString().padStart(2)}c ${dflag} ${dl.toString().padStart(3)}c | ${e.title}`
  );
}
console.log('---');
console.log(`total=${all.length} title-warns=${warnT} desc-warns=${warnD}`);
const dups = [...dupTitles.entries()].filter(([_, n]) => n > 1);
console.log(dups.length === 0 ? 'unique: OK' : 'duplicates: ' + JSON.stringify(dups));
