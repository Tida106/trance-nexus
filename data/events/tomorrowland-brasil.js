// Tomorrowland Brasil — the South American edition of the Belgian
// flagship festival, staged at Parque Maeda in Itu, São Paulo state.
// Two editions ran in 2015 and 2016 before the festival went on
// hiatus. The brand has been periodically discussed for return.
//
// Marked status='past' rather than 'annual' because the festival is
// not currently confirmed for an active recurring slot. Editions
// list documents the historical run.

const tomorrowlandBrasil = {
  slug: 'tomorrowland-brasil',
  name: 'Tomorrowland Brasil',
  status: 'past',
  category: 'regional',
  region: 'LATAM',
  country: 'BR',

  dates: {
    typicalMonth: 'April–May',
    cadence: 'series',
    note: 'Two editions in 2015 and 2016; currently on hiatus',
  },

  venue: {
    name: 'Parque Maeda',
    address: 'Estrada do Cubatão, Itu, São Paulo State',
    country: 'BR',
    lat: -23.2640,
    lng: -47.2997,
    capacity: 180000, // approximate three-day aggregate over the historical editions
  },

  genres: ['trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'armin-van-buuren',
    'tiesto',
    'above-and-beyond',
    'paul-van-dyk',
    'vini-vici',
  ],
  labels: ['Armada Music', 'Anjunabeats'],

  editions: [
    { year: 2016, dates: 'April 21–24', note: 'Second and most recent Tomorrowland Brasil edition' },
    { year: 2015, dates: 'May 1–3', note: 'Inaugural Tomorrowland Brasil edition' },
  ],

  official_url: 'https://www.tomorrowland.com',
  ticket_url: 'https://www.tomorrowland.com',
  og_image: '/og/events/tomorrowland-brasil.png',

  en: {
    description:
      "Tomorrowland Brasil was the South American edition of the Belgian flagship festival, staged at Parque Maeda in Itu, São Paulo state. Two editions ran in 2015 (May 1–3) and 2016 (April 21–24), each drawing roughly 180,000 attendees across the three-day weekend. The festival reproduced the elaborate stage productions and ASOT / Resistance trance stages of the Belgian edition. Tomorrowland Brasil went on hiatus after the 2016 edition; the brand has been periodically discussed for a return but has not run since. The entry is preserved here as historical record.",
  },
  ja: {
    description:
      'Tomorrowland Brasilはベルギーの旗艦フェスティバルの南米版で、サンパウロ州イトゥのParque Maedaで開催された。2つのエディションが2015年（5月1〜3日）と2016年（4月21〜24日）に運営され、それぞれ3日間の週末を通して約18万人の来場者を集めた。フェスティバルはベルギー版の手の込んだステージ・プロダクションとASOT／Resistanceトランス・ステージを再現した。Tomorrowland Brasilは2016年エディション後に休止に入った。ブランドは復活について定期的に議論されているが、それ以来運営されていない。このエントリーは歴史的記録として保存されている。',
  },
};

export default tomorrowlandBrasil;
