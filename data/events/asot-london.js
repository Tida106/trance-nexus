// A State of Trance London — a one-night A State of Trance event at
// Drumsheds, London, on 14 November 2026.

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
    note: 'One-night A State of Trance event in London',
  },

  venue: {
    name: 'Drumsheds',
    address: 'London, UK',
    country: 'GB',
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance'],
  labels: ['Armada Music', 'A State of Trance'],

  editions: [
    { year: 2026, dates: 'November 14', note: 'Drumsheds, London' },
  ],

  official_url: 'https://festival.astateoftrance.com/london/',
  ticket_url: 'https://festival.astateoftrance.com/london/',
  og_image: '/og/events/asot-london.png',

  en: {
    description:
      "A State of Trance London takes place on 14 November 2026 at Drumsheds in London, UK. It is a live event from A State of Trance, the brand built around Armin van Buuren's weekly ASOT radio show, which first aired on 1 June 2001. The main Dutch festival edition is held each year in Rotterdam; this London date brings the ASOT format to the UK.\n\nSee the official A State of Trance festival site for the latest information on this event.",
  },
  ja: {
    description:
      'A State of Trance Londonは、2026年11月14日にイギリス・ロンドンのDrumshedsで開催される。Armin van Buurenの週刊ASOTラジオ番組（2001年6月1日初放送）を軸にしたA State of Tranceブランドによるライヴ・イベントだ。オランダのメイン・フェスティバルは毎年ロッテルダムで開催されており、このロンドン公演はASOTのフォーマットを英国に届ける。\n\nこのイベントの最新情報はA State of Tranceフェスティバルの公式サイトを参照。',
  },
};

export default asotLondon;
