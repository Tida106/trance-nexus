// EDC Las Vegas — Insomniac's flagship US festival, held annually
// at the Las Vegas Motor Speedway each May. Trance reaches the
// festival via the Quantum Valley stage (the dedicated trance area
// programmed in the same lineage as Dreamstate).

const edcLasVegas = {
  slug: 'edc-las-vegas',
  name: 'EDC Las Vegas',
  status: 'annual',
  category: 'mega',
  region: 'NA',
  country: 'US',

  dates: {
    typicalMonth: 'May',
    cadence: 'annual',
    note: 'Three-night festival, third weekend of May',
  },

  venue: {
    name: 'Las Vegas Motor Speedway',
    address: '7000 N Las Vegas Blvd, Las Vegas, NV 89115',
    country: 'US',
    lat: 36.2727,
    lng: -115.0098,
    capacity: 525000, // approximate three-night aggregate attendance
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'tiesto',
    'andrew-rayel',
    'aly-and-fila',
    'vini-vici',
  ],
  labels: ['Armada Music', 'Anjunabeats', 'FSOE Recordings'],

  editions: [
    { year: 2024, dates: 'May 17–19' },
    { year: 2023, dates: 'May 19–21' },
    { year: 2022, dates: 'May 20–22' },
    { year: 2019, dates: 'May 17–19' },
    { year: 2011, note: 'First Las Vegas edition (relocated from LA Coliseum)' },
  ],

  official_url: 'https://lasvegas.electricdaisycarnival.com',
  ticket_url: 'https://lasvegas.electricdaisycarnival.com/passes',
  og_image: '/og/events/edc-las-vegas.png',

  en: {
    description:
      "EDC Las Vegas is Insomniac's flagship US festival — three nights at the Las Vegas Motor Speedway each May, drawing more than half a million attendees over the weekend. Trance has been part of the festival since the Las Vegas relocation in 2011 via the Quantum Valley stage, programmed in the same Insomniac lineage as Dreamstate, with Armin van Buuren, Above & Beyond, Tiësto, Andrew Rayel, and Aly & Fila as recurring headliners. The festival also runs Asia and Mexico editions under the same brand.",
  },
  ja: {
    description:
      'EDC Las VegasはInsomniacの旗艦米国フェスティバルで、毎年5月にLas Vegas Motor Speedwayで3夜開催され、週末を通して50万人を超える来場者を集める。2011年のラスベガス移転以来、Insomniacと同じ系譜（Dreamstateと同じ）でプログラムされるQuantum Valleyステージを通じてトランスがフェスティバルの一部となっており、Armin van Buuren、Above & Beyond、Tiësto、Andrew Rayel、Aly & Filaが反復のヘッドライナーだ。同ブランドでアジア版とメキシコ版も運営される。',
  },
};

export default edcLasVegas;
