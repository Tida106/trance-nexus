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
      "Creamfields is the long-running British dance festival operated by Cream, the Liverpool superclub brand founded in October 1992 by James Barton, Darren Hughes, and Andy Carroll at the Nation nightclub on Wolstenholme Square. The inaugural Creamfields was held on Saturday 2 May 1998 at the Matterley Estate in Winchester, Hampshire — a one-day event with roughly 25,000 attendees and a line-up including Sasha, Paul van Dyk, Daft Punk, Tony De Vit, The Chemical Brothers, Paul Oakenfold, and Carl Cox. The festival relocated to Liverpool's old Speke Airfield in 1999, then settled at the Daresbury Estate in Cheshire in 2006, where it has run on the August Bank Holiday weekend ever since.\n\nIt now operates as a four-day multi-stage event with a per-day capacity in the 70,000+ range, making it one of the largest dance-music festivals in the UK. The official A State of Trance stage debuted on Saturday 23 August 2014 — the first dedicated <a href=\"/glossary/asot\">ASOT</a> programming in the festival's history at that point — hosted by Armin van Buuren with Aly &amp; Fila, Cosmic Gate, Andrew Rayel, Ørjan Nilsen, Jochen Miller, and MaRLo on the bill. Trance has remained part of the regular Creamfields rotation since, with Armin van Buuren, Above &amp; Beyond, and Paul van Dyk as recurring headliners.",
  },
  ja: {
    description:
      'Creamfieldsは英国の長期ダンス・フェスティバルで、1992年10月にJames Barton、Darren Hughes、Andy CarrollがリヴァプールのWolstenholme SquareにあるNationクラブで創設したスーパー・クラブ・ブランドCreamが運営する。初回Creamfieldsは1998年5月2日（土）にハンプシャー州Winchesterのマターリー・エステートで開催された——1日限りのイベントで、約25,000人を集め、ラインナップにはSasha、Paul van Dyk、Daft Punk、Tony De Vit、The Chemical Brothers、Paul Oakenfold、Carl Coxが含まれた。フェスティバルは1999年にリヴァプールの旧Speke Airfieldへ移転し、その後2006年にチェシャー州のDaresbury Estateに落ち着き、それ以来毎年8月のバンク・ホリデー週末に開催されている。\n\n現在は1日あたり70,000人以上の収容能力を持つ4日間マルチステージのイベントとして運営されており、英国で最大級のダンス・ミュージック・フェスティバルのひとつだ。公式の<a href="/glossary/asot">A State of Trance</a>ステージは2014年8月23日（土）にデビュー——その時点までのフェスティバルの歴史において最初の専用ASOTプログラミング——Armin van Buurenがホスト、Aly &amp; Fila、Cosmic Gate、Andrew Rayel、Ørjan Nilsen、Jochen Miller、MaRLoがビルに名を連ねた。それ以来トランスはCreamfieldsの定番ローテーションの一部であり続け、Armin van Buuren、Above &amp; Beyond、Paul van Dykが反復のヘッドライナーだ。',
  },
};

export default creamfields;
