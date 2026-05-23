// Ultra Europe — European branch of the Ultra Music Festival brand,
// held annually in mid-July in Split, Croatia. This page is a
// short stub; comprehensive Ultra coverage lives on the main Ultra
// Music Festival page (slug: ultra-music-festival-miami).

const ultraEurope = {
  slug: 'ultra-europe',
  name: 'Ultra Europe',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'HR',
  mergedInto: 'ultra-music-festival-miami',

  dates: {
    next: { start: '2026-07-10', end: '2026-07-12' },
    typicalMonth: 'July',
    cadence: 'annual',
    note: 'Three-night festival followed by Destination Ultra island events',
  },

  venue: {
    name: 'Park Mladeži',
    address: 'Ul. Hrvatske Mornarice 10, 21000 Split',
    country: 'HR',
    lat: 43.5108,
    lng: 16.4574,
    capacity: 150000, // approximate three-night aggregate
  },

  genres: ['trance', 'progressive-trance', 'uplifting-trance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'paul-van-dyk',
    'andrew-rayel',
    'aly-and-fila',
  ],
  labels: ['Armada Music', 'A State of Trance', 'Anjunabeats'],

  editions: [
    { year: 2026, dates: 'July 10–12' },
    { year: 2024, dates: 'July 12–14', note: 'Park Mladeži' },
    { year: 2023, dates: 'July 7–9', note: 'Park Mladeži' },
    { year: 2022, dates: 'July 8–10', note: 'Park Mladeži' },
    { year: 2019, dates: 'July 12–14', note: 'First edition at Park Mladeži (relocated from Poljud Stadium)' },
    { year: 2013, note: 'Inaugural edition (first European Ultra), Poljud Stadium' },
  ],

  official_url: 'https://ultraeurope.com',
  ticket_url: 'https://ultraeurope.com/tickets',
  og_image: '/og/events/ultra-europe.png',

  en: {
    description:
      "Ultra Europe is the European branch of the Ultra Music Festival brand. For comprehensive coverage of the Ultra series — including the original Miami festival since 1999 — see the main Ultra Music Festival page.\n\nUltra Europe debuted in Split, Croatia in 2013 at the Poljud Stadium and relocated in 2019 to the adjacent Park Mladeži, less than a kilometre away, after Hajduk Split's concerns about pitch damage. The three-night main festival is followed by the Destination Ultra island events on Brač, Hvar, and Vis, using Split as a base for a week-long Adriatic circuit.",
  },
  ja: {
    description:
      "Ultra EuropeはUltra Music Festivalブランドのヨーロッパ版である。Miami創設の1999年からの本家を含むUltraシリーズ全体の解説は、メインのUltra Music Festivalページを参照。\n\nUltra Europeは2013年にクロアチアのスプリトでPoljud Stadiumから始まり、Hajduk Splitのピッチ損傷への懸念を受けて、2019年に隣接するPark Mladeži（1km未満の距離）へ移転した。3夜のメイン・フェスティバルの後、Brač、Hvar、Visで展開されるDestination Ultra島イベントが続き、スプリトを拠点にした週単位のアドリア海サーキットを形成する。",
  },
};

export default ultraEurope;
