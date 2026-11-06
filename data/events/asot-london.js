// A State of Trance London — a one-day A State of Trance festival at
// Drumsheds, London, on 14 November 2026. Billed as the first indoor ASOT
// festival in the UK and part of the brand's 25th-anniversary year.

const asotLondon = {
  slug: 'asot-london',
  name: 'A State of Trance London',
  status: 'upcoming',
  category: 'specialty',
  region: 'EU',
  country: 'GB',

  dates: {
    next: { start: '2026-11-14', end: '2026-11-14' },
    cadence: 'series',
    note: 'One-day A State of Trance festival in London (13:00–22:30, 18+, three rooms)',
  },

  venue: {
    name: 'Drumsheds',
    address: '6 Glover Drive, Meridian Water, London N18 3HF',
    country: 'GB',
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance'],
  headliners: [
    'armin-van-buuren',
    'giuseppe-ottaviani',
    'ferry-corsten',
    'cosmic-gate',
    'andrew-rayel',
    'ruben-de-ronde',
    'will-atkinson',
  ],
  labels: ['Armada Music', 'A State of Trance'],

  editions: [
    { year: 2026, dates: 'November 14', note: 'First indoor ASOT festival in the UK, 25 years of A State of Trance (Drumsheds)' },
    { year: 2025, dates: 'July 13', note: 'Silverworks Island, East London' },
    { year: 2023, dates: 'July 2', note: 'Dockyards London (open-air)' },
  ],

  guide_post: { slug: 'asot-london-drumsheds-2026', en: 'Read our ASOT London 2026 guide', ja: 'ASOT London 2026 ガイドを読む' },
  official_url: 'https://festival.astateoftrance.com/london/',
  ticket_url: 'https://festival.astateoftrance.com/london/',
  og_image: '/og/events/asot-london.png',

  en: {
    description:
      "A State of Trance London takes place on Saturday 14 November 2026 at Drumsheds in north London, from 13:00 to 22:30 (18+). It is billed as the first indoor ASOT festival in the UK and marks 25 years of A State of Trance, the brand built around Armin van Buuren's weekly radio show, which first aired on 1 June 2001. The event runs across three rooms (X, Y and Z) and follows outdoor London editions in 2023 (Dockyards) and 2025 (Silverworks Island).\n\nArmin van Buuren headlines, including a special F2F set with Giuseppe Ottaviani. The billing also includes Ferry Corsten, Cosmic Gate, Ben Hemsley, Andrew Rayel presents Extasia, Ruben de Ronde, Will Atkinson, Funk Tribu, Pegassi, Amber Broos b2b Lawton, Sophie Sugar and more. See our ASOT London 2026 guide for the full lineup, access and venue rules.",
  },
  ja: {
    description:
      'A State of Trance Londonは、2026年11月14日（土）にロンドン北部のDrumshedsで13:00〜22:30（18歳以上）に開催される。英国初の屋内ASOTフェスティバルとして告知されており、Armin van Buurenの週刊ラジオ番組（2001年6月1日初放送）を軸にしたA State of Tranceブランドの25周年を記念する公演だ。X・Y・Zの3ルーム構成で、ロンドンでは2023年（Dockyards）、2025年（Silverworks Island）の屋外開催に続く。\n\nArmin van Buurenがヘッドライナーを務め、Giuseppe OttavianiとのスペシャルF2Fセットも予定。Ferry Corsten、Cosmic Gate、Ben Hemsley、Andrew Rayel presents Extasia、Ruben de Ronde、Will Atkinson、Funk Tribu、Pegassi、Amber Broos b2b Lawton、Sophie Sugarほかが出演する。ラインナップ全体、アクセス、会場ルールはASOT London 2026ガイドを参照。',
  },
};

export default asotLondon;
