// Luminosity Beach Festival — the canonical Dutch outdoor uplifting-
// and-tech-trance festival, run by Luminosity Events. Founded in 2006
// by a group of friends, the first edition took place in 2007 on the
// Dutch coast. The festival has cycled through nearby beachclubs:
// Beachclub Fuel in Bloemendaal aan Zee (2019–2020 era) and Beachclub
// Bernie's in Zandvoort (2024 onwards). It was cancelled in 2020 due
// to the covid pandemic.

const luminosityBeachFestival = {
  slug: 'luminosity-beach-festival',
  name: 'Luminosity Beach Festival',
  status: 'annual',
  category: 'specialty',
  region: 'EU',
  country: 'NL',

  dates: {
    next: { start: '2026-06-25', end: '2026-06-28' },
    typicalMonth: 'June',
    cadence: 'annual',
    note: 'Four-day beach festival in late June',
  },

  venue: {
    name: "Beachclub Bernie's",
    address: 'Boulevard Barnaart 65, 2041 JA Zandvoort',
    country: 'NL',
    lat: 52.3927,
    lng: 4.5374,
    capacity: 7500,
  },

  genres: ['uplifting-trance', 'tech-trance', 'vocal-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'aly-and-fila',
    'john-ocallaghan',
    'bryan-kearney',
    'simon-patterson',
    'allen-watts',
    'paul-van-dyk',
    'markus-schulz',
    'ferry-corsten',
    'giuseppe-ottaviani',
    'will-atkinson',
    'mauro-picotto',
  ],
  labels: ['FSOE Recordings', 'Subculture', 'Pure Trance Recordings', 'VII Records'],

  editions: [
    { year: 2026, dates: 'June 25–28', note: "Beachclub Bernie's, Zandvoort — 120+ artists across the bill" },
    { year: 2025, dates: 'June 26–29' },
    { year: 2024, dates: 'June 27–30', note: "Beachclub Bernie's, Zandvoort" },
    { year: 2020, note: 'Cancelled (Covid-19)' },
    { year: 2007, note: 'First edition (Dutch coast)' },
  ],

  official_url: 'https://luminosity-events.nl',
  ticket_url: 'https://luminosity-events.nl/cevent/luminosity-beach-festival-2026/',
  og_image: '/og/events/luminosity-beach-festival.png',

  en: {
    description:
      "Luminosity Beach Festival is the canonical Dutch outdoor trance festival, run by Luminosity Events. The organisation was founded in 2006 and the first edition followed in 2007 on the Dutch coast; the festival has been held annually since, except for 2020 when it was cancelled due to Covid-19. It has cycled through nearby beachclubs (Beachclub Fuel in Bloemendaal aan Zee earlier, Beachclub Bernie's in Zandvoort from 2024 onwards) and runs as a four-day late-June event.\n\nIt is widely regarded as the spiritual home of contemporary uplifting and tech-trance, with FSOE, Subculture, Pure Trance, and VII Records all hosting stages. The 2026 edition (25&ndash;28 June at Beachclub Bernie's, Zandvoort) features over 120 artists across the bill &mdash; headliners include Aly &amp; Fila, John O'Callaghan, Bryan Kearney, Ferry Corsten, Markus Schulz, Paul van Dyk, Giuseppe Ottaviani, Mauro Picotto, and Will Atkinson.",
  },
  ja: {
    description:
      'Luminosity Beach Festivalはオランダのカノニカルな野外トランス・フェスティバルで、Luminosity Eventsが運営する。同団体は2006年に設立され、初回エディションは2007年にオランダの海岸で開催された。以降毎年開催されているが、2020年はコロナ禍で中止となった。近郊のビーチクラブを巡回しており（初期はブルメンダール・アン・ゼーのBeachclub Fuel、2024年以降はザントフォールトのBeachclub Bernie\'s）、6月下旬の4日間イベントとして運営される。\n\n現代アップリフティング＆テック・トランスの精神的故郷と広く見なされており、FSOE、Subculture、Pure Trance、VII Recordsがそれぞれステージを運営する。2026年エディション（6月25〜28日／Beachclub Bernie\'s, Zandvoort）には120名超のアーティストが出演し、ヘッドライナーにはAly &amp; Fila、John O\'Callaghan、Bryan Kearney、Ferry Corsten、Markus Schulz、Paul van Dyk、Giuseppe Ottaviani、Mauro Picotto、Will Atkinsonが含まれる。',
  },
};

export default luminosityBeachFestival;
