// Ozora Festival — the Hungarian psytrance festival held annually
// at Dádpuszta, near the village of Ozora in central Hungary. The
// festival traces its lineage to the 1999 Solipse total-eclipse
// gathering at the same site, with the modern festival running
// continuously since 2004.

const ozoraFestival = {
  slug: 'ozora-festival',
  name: 'Ozora Festival',
  status: 'annual',
  category: 'psy',
  region: 'EU',
  country: 'HU',

  dates: {
    typicalMonth: 'July–August',
    cadence: 'annual',
    note: 'Week-long festival, last week of July into early August',
  },

  venue: {
    name: 'Dádpuszta',
    address: 'Dádpuszta, near Ozora, Tolna County',
    country: 'HU',
    lat: 46.7700,
    lng: 18.4700,
    capacity: 60000,
  },

  genres: ['psytrance', 'goa-trance', 'progressive-trance'],
  headliners: [
    'astrix',
    'captain-hook',
    'ace-ventura',
    'liquid-soul',
    'ranji',
    'symbolic',
    'atmos',
  ],
  labels: ['Iboga Records', 'HOMmega Productions', 'Nano Records', 'Solstice Music'],

  editions: [
    { year: 2024, dates: 'July 29 – August 4' },
    { year: 2023, dates: 'July 31 – August 6' },
    { year: 2022, dates: 'August 1–7' },
    { year: 2019, dates: 'July 29 – August 4' },
    { year: 2004, note: 'Inaugural Ozora Festival edition (succeeding Solipse 1999)' },
  ],

  official_url: 'https://ozorafestival.eu',
  ticket_url: 'https://ozorafestival.eu/tickets',
  og_image: '/og/events/ozora-festival.png',

  en: {
    description:
      "Ozora Festival is the Hungarian psytrance festival held annually at Dádpuszta in central Hungary. The site's psytrance lineage traces to the 1999 Solipse total-eclipse gathering, with the modern festival running continuously each late July into early August since 2004. Ozora is renowned for its multi-stage architecture — the Main Stage (Dome), the Pumpui ambient stage, the Dragon Nest darkpsy area, and the Chambok House live electronic stage — and for the visual installations and ceremonial sunrise sets that define the festival's identity. Astrix, Captain Hook, Ace Ventura, and Liquid Soul are recurring headliners.",
  },
  ja: {
    description:
      'Ozora Festivalはハンガリーのサイトランス・フェスティバルで、毎年ハンガリー中部のDádpusztaで開催される。サイトの系譜は1999年のSolipse皆既日食ギャザリングに遡り、現代のフェスティバルは2004年以来毎年7月下旬から8月上旬にかけて継続して運営されている。Ozoraはマルチステージ建築——Main Stage（Dome）、Pumpuiアンビエント・ステージ、Dragon Nestダークサイ・エリア、Chambok Houseライヴ・エレクトロニック・ステージ——と、フェスティバルのアイデンティティを定義するビジュアル・インスタレーションおよび儀式的日の出セットで知られる。Astrix、Captain Hook、Ace Ventura、Liquid Soulが反復のヘッドライナーだ。',
  },
};

export default ozoraFestival;
