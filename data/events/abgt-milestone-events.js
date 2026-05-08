// ABGT — Above & Beyond Group Therapy milestone events. Not a single
// venue or annual festival but a recurring series of one-off arena
// shows tied to milestone numbers of the Group Therapy radio show.
// Each ABGT episode that ends in a round number (100, 150, 200, 250,
// 300, 350, 400, 450, 500, 550) has been broadcast live from a major
// venue.
//
// `venue` here points to the most-cited modern milestone — ABGT500 at
// The Gorge Amphitheatre, Washington (2022) — but the event by its
// nature has no fixed venue, and `editions` lists the actual host
// cities and venues for the milestone episodes.

const abgtMilestoneEvents = {
  slug: 'abgt-milestone-events',
  name: 'ABGT — Above & Beyond Group Therapy Milestones',
  status: 'annual',
  category: 'specialty',
  region: 'global',
  country: 'multi',

  dates: {
    typicalMonth: 'varies',
    cadence: 'milestone',
    note: 'One-off arena shows tied to round-number ABGT episodes',
  },

  venue: {
    // The Gorge — emblematic ABGT500 site, used as the geographical
    // anchor for the map even though the event series does not have a
    // permanent home venue.
    name: 'The Gorge Amphitheatre (ABGT500 site)',
    address: '754 Silica Rd NW, George, WA 98848',
    country: 'US',
    lat: 47.0992,
    lng: -119.9803,
    capacity: 27500,
  },

  genres: ['progressive-trance', 'vocal-trance', 'trance'],
  headliners: [
    'above-and-beyond',
    'andrew-bayer',
    'ilan-bluestone',
    'yotto',
    'genix',
    'tinlicker',
  ],
  labels: ['Anjunabeats', 'Anjunadeep'],

  editions: [
    { year: 2024, note: 'ABGT600 — venue announced via Anjuna social' },
    { year: 2023, note: 'ABGT550 — Madison Square Garden, New York City' },
    { year: 2022, dates: 'September 17', note: 'ABGT500 — The Gorge Amphitheatre, Washington' },
    { year: 2020, note: 'ABGT400 — Banc of California Stadium / online (covid-shifted)' },
    { year: 2018, note: 'ABGT300 — AsiaWorld-Expo, Hong Kong' },
    { year: 2017, note: 'ABGT250 — O2 Arena, Prague' },
    { year: 2016, note: 'ABGT200 — Ahoy, Rotterdam' },
    { year: 2014, note: 'ABGT100 — Madison Square Garden, New York City' },
  ],

  official_url: 'https://anjuna.com',
  ticket_url: 'https://anjuna.com/events',
  og_image: '/og/events/abgt-milestone-events.png',

  en: {
    description:
      "Above & Beyond's Group Therapy milestone shows are not an annual festival but a recurring series of one-off arena productions tied to round-number ABGT radio episodes. Each major milestone — ABGT100 (Madison Square Garden, 2014), ABGT200 (Rotterdam, 2016), ABGT250 (Prague, 2017), ABGT300 (Hong Kong, 2018), ABGT400 (LA, covid-shifted 2020), ABGT500 (The Gorge, 2022), ABGT550 (MSG, 2023) — is a destination event for the global Anjunabeats / Anjunadeep audience, with full live-band productions, bespoke visuals, and the trio's full-length set as the closing act.",
  },
  ja: {
    description:
      'Above & BeyondのGroup Therapyマイルストーン・ショーは年次フェスティバルではなく、ABGTラジオの記念エピソード番号に紐づく一夜限りのアリーナ・プロダクションの反復シリーズだ。主要なマイルストーン——ABGT100（Madison Square Garden、2014）、ABGT200（ロッテルダム、2016）、ABGT250（プラハ、2017）、ABGT300（香港、2018）、ABGT400（LA、コロナ延期で2020）、ABGT500（The Gorge、2022）、ABGT550（MSG、2023）——は、世界中のAnjunabeats／Anjunadeepオーディエンスにとっての聖地イベントで、フル・ライヴバンド・プロダクション、特注のビジュアル、トリオのフルレングス・セットがクロージングを務める。',
  },
};

export default abgtMilestoneEvents;
