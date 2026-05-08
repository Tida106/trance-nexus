// Ultra Music Festival Miami — the original Ultra brand event, held
// annually at Bayfront Park in downtown Miami each late March in
// conjunction with Miami Music Week. Trance reaches the festival via
// the A State of Trance stage (annual since 2013) and via the
// Resistance stage in years it has been programmed.

const ultraMusicFestivalMiami = {
  slug: 'ultra-music-festival-miami',
  name: 'Ultra Music Festival Miami',
  status: 'annual',
  category: 'mega',
  region: 'NA',
  country: 'US',

  dates: {
    typicalMonth: 'March',
    cadence: 'annual',
    note: 'Three-day festival in conjunction with Miami Music Week',
  },

  venue: {
    name: 'Bayfront Park',
    address: '301 Biscayne Blvd, Miami, FL 33132',
    country: 'US',
    lat: 25.7740,
    lng: -80.1844,
    capacity: 165000, // approximate three-day aggregate
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance'],
  headliners: [
    'armin-van-buuren',
    'tiesto',
    'above-and-beyond',
    'paul-van-dyk',
    'andrew-rayel',
    'ferry-corsten',
  ],
  labels: ['Armada Music', 'Anjunabeats', 'A State of Trance'],

  editions: [
    { year: 2024, dates: 'March 22–24' },
    { year: 2023, dates: 'March 24–26' },
    { year: 2022, dates: 'March 25–27' },
    { year: 2019, dates: 'March 29–31' },
    { year: 2013, note: 'First A State of Trance Stage (ASOT 600 broadcast)' },
  ],

  official_url: 'https://ultramusicfestival.com',
  ticket_url: 'https://ultramusicfestival.com/tickets',
  og_image: '/og/events/ultra-music-festival-miami.png',

  en: {
    description:
      "Ultra Music Festival Miami is the original Ultra brand event, held annually at Bayfront Park in downtown Miami each late March in conjunction with Miami Music Week. Trance has been a fixture since 2013, when ASOT 600 was broadcast live from the festival's first dedicated A State of Trance stage; the ASOT stage has run almost every year since, with Armin van Buuren, Above & Beyond, Paul van Dyk, and Andrew Rayel as recurring closers. The Resistance stage carries adjacent progressive / melodic-techno material.",
  },
  ja: {
    description:
      'Ultra Music Festival MiamiはオリジナルのUltraブランド・イベントで、毎年3月下旬にMiami Music Weekと連動してマイアミ中心部のBayfront Parkで開催される。2013年にフェスティバルの最初の専用A State of TranceステージからASOT 600がライブ放送されて以来、トランスが定番となっている。ASOTステージはほぼ毎年運営されており、Armin van Buuren、Above & Beyond、Paul van Dyk、Andrew Rayelが反復のクローザーだ。Resistanceステージは隣接するプログレッシブ／メロディック・テクノ素材を運ぶ。',
  },
};

export default ultraMusicFestivalMiami;
