// Creamfields — the long-running British dance festival operated by
// Cream (the Liverpool club brand), held annually in late August at
// Daresbury, Cheshire. Trance has been a fixture since the festival's
// 1998 founding, with a dedicated stage typically curated around the
// ASOT / Anjuna axis.

const creamfields = {
  slug: 'creamfields',
  name: 'Creamfields',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'GB',

  dates: {
    typicalMonth: 'August',
    cadence: 'annual',
    note: 'Four-day festival, August Bank Holiday weekend',
  },

  venue: {
    name: 'Daresbury Estate',
    address: 'Daresbury, Cheshire WA4 4AG',
    country: 'GB',
    lat: 53.3460,
    lng: -2.6500,
    capacity: 70000,
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'tiesto',
    'paul-van-dyk',
    'aly-and-fila',
  ],
  labels: ['Armada Music', 'Anjunabeats'],

  editions: [
    { year: 2024, dates: 'August 22–25' },
    { year: 2023, dates: 'August 24–27' },
    { year: 2022, dates: 'August 25–28' },
    { year: 2019, dates: 'August 22–25' },
    { year: 2006, note: 'Festival relocated to Daresbury Estate, Cheshire' },
    { year: 1999, note: 'Moved to Liverpool Airfield (Speke), Merseyside' },
    { year: 1998, note: 'Inaugural edition at Matterley Estate, Winchester, Hampshire (Cream 5th-anniversary one-off; May 2)' },
  ],

  official_url: 'https://www.creamfields.com',
  ticket_url: 'https://www.creamfields.com/tickets',
  og_image: '/og/events/creamfields.png',

  en: {
    description:
      "Creamfields is the long-running British dance festival operated by Cream, the Liverpool superclub brand, held annually over the August Bank Holiday weekend at the Daresbury Estate in Cheshire since 2006. Originally launched in 1998 as a one-off to mark Cream's fifth anniversary, it has grown into a four-day, multi-stage festival drawing more than 70,000 attendees per day. Trance has been a fixture since the founding edition, with a dedicated stage typically curated around the ASOT / Anjuna axis and Armin van Buuren, Above & Beyond, and Paul van Dyk as recurring headliners.",
  },
  ja: {
    description:
      'CreamfieldsはCream（リヴァプールのスーパー・クラブ・ブランド）が運営する英国の長期ダンス・フェスティバルで、2006年以来毎年8月のバンク・ホリデー週末にチェシャーのDaresbury Estateで開催される。1998年にCream創立5周年の単発として発足したが、1日7万人以上を集める4日間マルチステージのフェスティバルへと成長した。創設エディション以来トランスが定番となっており、典型的にASOT／Anjuna軸を中心にキュレーションされた専用ステージとともに、Armin van Buuren、Above & Beyond、Paul van Dykが反復のヘッドライナーだ。',
  },
};

export default creamfields;
