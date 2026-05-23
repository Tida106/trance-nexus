// Ultra Music Festival — canonical brand page covering both the
// original Miami festival (since 1999) and Ultra Europe (since 2013).
// Held annually at Bayfront Park in downtown Miami each late March in
// conjunction with Miami Music Week. Trance reaches the festival via
// the A State of Trance stage (annual since 2011) and via the
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
    { year: 2013, note: 'ASOT 600 broadcast from A State of Trance Stage' },
    { year: 2011, note: 'First A State of Trance Stage (ASOT 500 celebration, March 27)' },
  ],

  official_url: 'https://ultramusicfestival.com',
  ticket_url: 'https://ultramusicfestival.com/tickets',
  og_image: '/og/events/ultra-music-festival-miami.png',

  en: {
    description:
      "Ultra Music Festival is the flagship Ultra brand event, founded in Miami in 1999 by Russell Faibisch and Alex Omes as a one-day beach show at Collins Park, Miami Beach, on March 13, 1999. The festival relocated to Bayfront Park in downtown Miami in 2001 and has run there every late March since, now staged as a three-day event in conjunction with Miami Music Week.\n\nTrance has been a fixture of the Miami event since 2011, when the festival's first dedicated A State of Trance stage hosted the ASOT 500 celebration on March 27, 2011. The ASOT stage has run almost every year since, with Armin van Buuren, Above & Beyond, Paul van Dyk, and Andrew Rayel as recurring closers. Carl Cox first appeared at Ultra Miami in 2001, and the Carl Cox & Friends arena (launched in 2005) evolved into the Resistance stage and Megastructure concept that now anchors the festival's house and techno programming.\n\nUltra expanded to Europe in 2013 with the inaugural Ultra Europe in Split, Croatia, originally at the Poljud Stadium (2013-2018) before relocating in 2019 to the adjacent Park Mladeži, where the festival has remained. Ultra Europe runs each mid-July as a three-night main festival, followed by the Destination Ultra island events that extend the run across Brač, Hvar, and Vis using Split as a base — Ultra Beach on Hvar, the Regatta Party and Resistance sessions on Brač, and closing parties traditionally inside Fort George on Vis.",
  },
  ja: {
    description:
      "Ultra Music FestivalはUltraブランドの旗艦イベントで、1999年3月13日にRussell FaibischとAlex OmesがマイアミビーチのCollins Parkで開催した1日のビーチ・ショーとして創設された。2001年にダウンタウン・マイアミのBayfront Parkへ移転し、以来毎年3月下旬にMiami Music Weekと連動して3日間開催されている。\n\nマイアミ本体ではトランスが2011年から定番となっており、2011年3月27日にフェスティバル初の専用A State of TranceステージでASOT 500記念公演が開催された。ASOTステージはほぼ毎年運営されており、Armin van Buuren、Above & Beyond、Paul van Dyk、Andrew Rayelが反復のクローザーを務める。Carl Coxは2001年にUltra Miamiに初登場し、2005年スタートのCarl Cox & Friendsアリーナが、現在のフェスティバルのハウス／テクノ・プログラムを支えるResistanceステージとMegastructureコンセプトへと発展した。\n\n2013年にはUltraがヨーロッパへ拡大し、クロアチアのスプリトでUltra Europeが創設された。当初はPoljud Stadium（2013-2018）で開催され、2019年に隣接するPark Mladežiへ移転し、現在もそこで続いている。Ultra Europeは毎年7月中旬に3夜のメイン・フェスティバルを開催し、その後にDestination Ultra島イベントが続く。スプリトを拠点にBrač、Hvar、Visを巡る形で、HvarのUltra Beach、BračのRegatta PartyとResistanceセッション、そして伝統的にVisのFort George内で行われるクロージング・パーティーが展開される。",
  },
};

export default ultraMusicFestivalMiami;
