// Coldharbour Day — Markus Schulz's annual flagship label event,
// celebrating the Coldharbour Recordings imprint. Editions have
// rotated between Avalon (Hollywood), Marquee (NYC), and other US
// venues, with select international editions in the EU and Asia.

const coldharbourDay = {
  slug: 'coldharbour-day',
  name: 'Coldharbour Day',
  status: 'annual',
  category: 'label',
  region: 'NA',
  country: 'US',

  dates: {
    typicalMonth: 'October–November',
    cadence: 'annual',
    note: 'Single all-night Markus Schulz open-to-close set + Coldharbour roster supports',
  },

  venue: {
    // Avalon Hollywood — long-running Coldharbour Day host
    name: 'Avalon Hollywood (recurring host venue)',
    address: '1735 Vine St, Los Angeles, CA 90028',
    country: 'US',
    lat: 34.1019,
    lng: -118.3267,
    capacity: 1500,
  },

  genres: ['uplifting-trance', 'progressive-trance', 'tech-trance', 'vocal-trance'],
  headliners: [
    'markus-schulz',
  ],
  labels: ['Coldharbour Recordings'],

  editions: [
    { year: 2024, note: 'Coldharbour Day NYC + LA double-header' },
    { year: 2023, note: 'Coldharbour Day 20-year-anniversary edition' },
    { year: 2019, note: 'Avalon Hollywood + Marquee NYC dual-city editions' },
    { year: 2003, note: 'Coldharbour Recordings founded; brand events followed' },
  ],

  official_url: 'https://www.markusschulz.com',
  ticket_url: 'https://www.coldharbourrecordings.com',
  og_image: '/og/events/coldharbour-day.png',

  en: {
    description:
      "Coldharbour Day is Markus Schulz's annual flagship label event, celebrating the Coldharbour Recordings imprint that he founded in 2003. Editions have rotated between Avalon Hollywood, Marquee New York, and other US venues, with select international editions in the EU and Asia. The format is typically a Markus Schulz open-to-close set (six to eight hours) supported by the Coldharbour roster — a deliberate counter to the festival mainstream that prizes the depth-of-field a long single-DJ set can produce. The events have run since the mid-2000s and remain a fixture of the US trance underground calendar.",
  },
  ja: {
    description:
      'Coldharbour DayはMarkus Schulzの年次旗艦レーベル・イベントで、彼が2003年に設立したColdharbour Recordingsインプリントを祝う。エディションはAvalon Hollywood、Marquee New York、その他米国ベニューの間でローテーションし、EUとアジアでの選択的な国際エディションも擁する。フォーマットは典型的にMarkus Schulzのオープン・トゥ・クローズ・セット（6〜8時間）をColdharbourロスターがサポートする——長尺の単独DJセットが生み出す視野の深さを尊重する、フェスティバル・メインストリームへの意図的な対抗だ。イベントは2000年代半ばから運営されており、米国トランス・アンダーグラウンド・カレンダーの定番として残っている。',
  },
};

export default coldharbourDay;
