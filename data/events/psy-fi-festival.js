// Psy-Fi Festival — the Dutch psytrance festival held annually in
// late August at the De Groene Ster outdoor recreation area near
// Leeuwarden in the northern Netherlands. The festival has run
// continuously since 2013 (with covid pauses) and serves as the
// Benelux centre of gravity for psytrance scene gathering.

const psyFiFestival = {
  slug: 'psy-fi-festival',
  name: 'Psy-Fi Festival',
  status: 'annual',
  category: 'psy',
  region: 'EU',
  country: 'NL',

  dates: {
    typicalMonth: 'August',
    cadence: 'annual',
    note: 'Five-day festival, mid-to-late August',
  },

  venue: {
    name: 'De Groene Ster',
    address: 'Groene Ster 14, 8926 XE Leeuwarden',
    country: 'NL',
    lat: 53.2168,
    lng: 5.8520,
    capacity: 18000,
  },

  genres: ['psytrance', 'progressive-trance', 'goa-trance'],
  headliners: [
    'astrix',
    'captain-hook',
    'ace-ventura',
    'liquid-soul',
    'ranji',
    'infected-mushroom',
    'symbolic',
  ],
  labels: ['Iboga Records', 'HOMmega Productions', 'Nano Records'],

  editions: [
    { year: 2024, dates: 'August 14–18' },
    { year: 2023, dates: 'August 16–20' },
    { year: 2022, dates: 'August 17–21' },
    { year: 2019, dates: 'August 21–25' },
    { year: 2013, note: 'Inaugural edition' },
  ],

  official_url: 'https://www.psy-fi.nl',
  ticket_url: 'https://www.psy-fi.nl/tickets',
  og_image: '/og/events/psy-fi-festival.png',

  en: {
    description:
      "Psy-Fi Festival is the Dutch psytrance festival held annually in mid-to-late August at the De Groene Ster outdoor recreation area near Leeuwarden in the northern Netherlands. Running since 2013, Psy-Fi serves as the Benelux centre of gravity for psytrance scene gathering, with its lakeside Mainstage, Sacred Circle ceremonial space, and dedicated progressive-psy and dark-psy stages. Astrix, Captain Hook, Ace Ventura, Liquid Soul, and Ranji have all played multiple editions; the festival is widely attended by the Dutch and German trance / psy crossover audience.",
  },
  ja: {
    description:
      'Psy-Fi Festivalはオランダのサイトランス・フェスティバルで、毎年8月中旬から下旬にかけて、オランダ北部レーワルデン近郊の屋外レクリエーション・エリアDe Groene Sterで開催される。2013年から運営されているPsy-Fiは、サイトランス・シーン・ギャザリングのベネルクスの重心として機能し、湖畔のMainstage、Sacred Circle儀式空間、専用のプログレッシブ・サイとダーク・サイ・ステージを擁する。Astrix、Captain Hook、Ace Ventura、Liquid Soul、Ranjiがすべて複数のエディションでプレイしてきた。フェスティバルはオランダとドイツのトランス／サイ・クロスオーバー観客に広く出席されている。',
  },
};

export default psyFiFestival;
