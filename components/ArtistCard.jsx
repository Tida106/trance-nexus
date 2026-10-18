'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

// Flag emoji → country gradient (flag stripe colors, left to right)
const FLAG_GRADIENTS = {
  // 横縞（to bottom）
  '🇳🇱': 'linear-gradient(to bottom,#AE1C28 0%,#AE1C28 33%,#FFFFFF 33%,#FFFFFF 66%,#21468B 66%,#21468B 100%)', // Netherlands
  '🇩🇪': 'linear-gradient(to bottom,#000000 0%,#000000 33%,#DD0000 33%,#DD0000 66%,#FFCE00 66%,#FFCE00 100%)', // Germany
  '🇪🇬': 'linear-gradient(to bottom,#CE1126 0%,#CE1126 33%,#FFFFFF 33%,#FFFFFF 66%,#000000 66%,#000000 100%)', // Egypt
  '🇮🇱': 'linear-gradient(to bottom,#0038B8 0%,#0038B8 18%,#FFFFFF 18%,#FFFFFF 40%,#0038B8 40%,#0038B8 60%,#FFFFFF 60%,#FFFFFF 82%,#0038B8 82%,#0038B8 100%)', // Israel
  '🇸🇰': 'linear-gradient(to bottom,#FFFFFF 0%,#FFFFFF 33%,#0B4FD5 33%,#0B4FD5 66%,#EE1C25 66%,#EE1C25 100%)', // Slovakia
  '🇳🇴': 'linear-gradient(to bottom,#EF2B2D 0%,#EF2B2D 35%,#FFFFFF 35%,#FFFFFF 45%,#002868 45%,#002868 55%,#FFFFFF 55%,#FFFFFF 65%,#EF2B2D 65%,#EF2B2D 100%)', // Norway
  '🇸🇪': 'linear-gradient(to bottom,#006AA7 0%,#006AA7 38%,#FECC02 38%,#FECC02 52%,#006AA7 52%,#006AA7 100%)', // Sweden
  '🇫🇮': 'linear-gradient(to bottom,#FFFFFF 0%,#FFFFFF 38%,#003580 38%,#003580 52%,#FFFFFF 52%,#FFFFFF 100%)', // Finland
  '🇷🇺': 'linear-gradient(to bottom,#FFFFFF 0%,#FFFFFF 33%,#0039A6 33%,#0039A6 66%,#D52B1E 66%,#D52B1E 100%)', // Russia
  '🇺🇦': 'linear-gradient(to bottom,#005BBB 0%,#005BBB 50%,#FFD500 50%,#FFD500 100%)', // Ukraine 青黄
  '🇵🇱': 'linear-gradient(to bottom,#FFFFFF 0%,#FFFFFF 50%,#DC143C 50%,#DC143C 100%)', // Poland
  '🇩🇰': 'linear-gradient(to bottom,#C60C30 0%,#C60C30 38%,#FFFFFF 38%,#FFFFFF 52%,#C60C30 52%,#C60C30 100%)', // Denmark
  '🇦🇺': 'linear-gradient(135deg,#00008B 0%,#00008B 45%,#C8102E 45%,#C8102E 55%,#FFFFFF 55%,#FFFFFF 60%,#00008B 60%,#00008B 100%)', // Australia: navy + Union Jack cross
  '🇭🇺': 'linear-gradient(to bottom,#CE2939 0%,#CE2939 33%,#FFFFFF 33%,#FFFFFF 66%,#477050 66%,#477050 100%)', // Hungary
  '🇷🇴': 'linear-gradient(to bottom,#002B7F 0%,#002B7F 33%,#FCD116 33%,#FCD116 66%,#CE1126 66%,#CE1126 100%)', // Romania (vertical by design but mapped horizontal for consistency)
  // 縦縞（to right）
  '🇮🇹': 'linear-gradient(to right,#009246 0%,#009246 33%,#FFFFFF 33%,#FFFFFF 66%,#CE2B37 66%,#CE2B37 100%)', // Italy
  '🇫🇷': 'linear-gradient(to right,#002395 0%,#002395 33%,#FFFFFF 33%,#FFFFFF 66%,#ED2939 66%,#ED2939 100%)', // France
  '🇲🇩': 'linear-gradient(to right,#003DA5 0%,#003DA5 33%,#FFD200 33%,#FFD200 66%,#CC0001 66%,#CC0001 100%)', // Moldova
  '🇮🇪': 'linear-gradient(to right,#169B62 0%,#169B62 33%,#FFFFFF 33%,#FFFFFF 66%,#FF883E 66%,#FF883E 100%)', // Ireland 緑白橙
  '🇧🇪': 'linear-gradient(to right,#000000 0%,#000000 33%,#FAE042 33%,#FAE042 66%,#EF3340 66%,#EF3340 100%)', // Belgium
  '🇪🇸': 'linear-gradient(to right,#AA151B 0%,#AA151B 25%,#F1BF00 25%,#F1BF00 75%,#AA151B 75%,#AA151B 100%)', // Spain
  '🇵🇹': 'linear-gradient(to right,#006600 0%,#006600 40%,#FF0000 40%,#FF0000 100%)', // Portugal
  '🇨🇴': 'linear-gradient(to bottom,#FCD116 0%,#FCD116 40%,#003087 40%,#003087 70%,#CE1126 70%,#CE1126 100%)', // Colombia
  '🇦🇷': 'linear-gradient(to bottom,#74ACDF 0%,#74ACDF 33%,#FFFFFF 33%,#FFFFFF 66%,#74ACDF 66%,#74ACDF 100%)', // Argentina
  '🇨🇭': 'linear-gradient(135deg,#FF0000 0%,#FF0000 40%,#FFFFFF 40%,#FFFFFF 60%,#FF0000 60%,#FF0000 100%)', // Switzerland
  '🇯🇵': 'linear-gradient(135deg,#FFFFFF 0%,#FFFFFF 40%,#BC002D 40%,#BC002D 60%,#FFFFFF 60%,#FFFFFF 100%)', // Japan
  '🇮🇳': 'linear-gradient(to bottom,#FF9933 0%,#FF9933 33%,#FFFFFF 33%,#FFFFFF 66%,#138808 66%,#138808 100%)', // India
  '🇨🇦': 'linear-gradient(to right,#FF0000 0%,#FF0000 25%,#FFFFFF 25%,#FFFFFF 75%,#FF0000 75%,#FF0000 100%)', // Canada
  '🇧🇷': 'linear-gradient(135deg,#009C3B 0%,#009C3B 35%,#FFDF00 35%,#FFDF00 65%,#002776 65%,#002776 100%)', // Brazil
  '🇹🇭': 'linear-gradient(to bottom,#A51931 0%,#A51931 17%,#FFFFFF 17%,#FFFFFF 33%,#2D2A4A 33%,#2D2A4A 67%,#FFFFFF 67%,#FFFFFF 83%,#A51931 83%,#A51931 100%)', // Thailand
  '🇭🇷': 'linear-gradient(to bottom,#FF0000 0%,#FF0000 33%,#FFFFFF 33%,#FFFFFF 66%,#0000CC 66%,#0000CC 100%)', // Croatia
  // 複合・スコットランド・ウェールズ
  '🇬🇧': 'linear-gradient(to bottom,#012169 0%,#012169 38%,#C8102E 38%,#C8102E 62%,#012169 62%,#012169 100%)', // UK
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿': 'linear-gradient(135deg,#003399 0%,#FFFFFF 50%,#003399 100%)', // Scotland
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿': 'linear-gradient(to bottom,#FFFFFF 0%,#FFFFFF 50%,#00AB39 50%,#00AB39 100%)', // Wales
  '🇺🇸': 'linear-gradient(to bottom,#B22234 0%,#B22234 14%,#FFFFFF 14%,#FFFFFF 28%,#B22234 28%,#B22234 42%,#FFFFFF 42%,#FFFFFF 56%,#B22234 56%,#B22234 70%,#FFFFFF 70%,#FFFFFF 84%,#B22234 84%,#B22234 100%)', // USA
  // 文字列コード（旧データ用フォールバック）
  'NL': 'linear-gradient(to bottom,#AE1C28 0%,#AE1C28 33%,#FFFFFF 33%,#FFFFFF 66%,#21468B 66%,#21468B 100%)',
  'GB': 'linear-gradient(to bottom,#012169 0%,#012169 38%,#C8102E 38%,#C8102E 62%,#012169 62%,#012169 100%)',
  'DE': 'linear-gradient(to bottom,#000000 0%,#000000 33%,#DD0000 33%,#DD0000 66%,#FFCE00 66%,#FFCE00 100%)',
  'US': 'linear-gradient(to bottom,#B22234 0%,#B22234 20%,#FFFFFF 20%,#FFFFFF 40%,#B22234 40%,#B22234 60%,#FFFFFF 60%,#FFFFFF 80%,#B22234 80%,#B22234 100%)',
  'FR': 'linear-gradient(to right,#002395 0%,#002395 33%,#FFFFFF 33%,#FFFFFF 66%,#ED2939 66%,#ED2939 100%)',
  'IT': 'linear-gradient(to right,#009246 0%,#009246 33%,#FFFFFF 33%,#FFFFFF 66%,#CE2B37 66%,#CE2B37 100%)',
  'BE': 'linear-gradient(to right,#000000 0%,#000000 33%,#FAE042 33%,#FAE042 66%,#EF3340 66%,#EF3340 100%)',
  'PT': 'linear-gradient(to right,#006600 0%,#006600 40%,#FF0000 40%,#FF0000 100%)',
  'IN': 'linear-gradient(to bottom,#FF9933 0%,#FF9933 33%,#FFFFFF 33%,#FFFFFF 66%,#138808 66%,#138808 100%)',
  'HU': 'linear-gradient(to bottom,#CE2939 0%,#CE2939 33%,#FFFFFF 33%,#FFFFFF 66%,#477050 66%,#477050 100%)',
  'HR': 'linear-gradient(to bottom,#FF0000 0%,#FF0000 33%,#FFFFFF 33%,#FFFFFF 66%,#0000CC 66%,#0000CC 100%)',
  'BR': 'linear-gradient(135deg,#009C3B 0%,#009C3B 35%,#FFDF00 35%,#FFDF00 65%,#002776 65%,#002776 100%)',
  'TH': 'linear-gradient(to bottom,#A51931 0%,#A51931 17%,#FFFFFF 17%,#FFFFFF 33%,#2D2A4A 33%,#2D2A4A 67%,#FFFFFF 67%,#FFFFFF 83%,#A51931 83%,#A51931 100%)',
  'RO': 'linear-gradient(to right,#002B7F 0%,#002B7F 33%,#FCD116 33%,#FCD116 66%,#CE1126 66%,#CE1126 100%)',
};
const DEFAULT_GRADIENT = 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)';

export default function ArtistCard({ artist }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const sub = artist.sub?.[language] || artist.sub?.en || '';
  const short = artist.short?.[language] || artist.short?.en || '';

  return (
    // The whole card has been a <Link> all along — clicking anywhere
    // navigates to /artists/<slug>. The hover styling is intentionally
    // strong (lift + warm-orange shadow + full-opacity border) so the
    // card reads as obviously interactive rather than the user having
    // to find the "View profile →" CTA. cursor-pointer is added
    // explicitly because some browsers don't apply the default <a>
    // pointer cursor when display:block is set on the link.
    <Link
      href={`/artists/${artist.slug}`}
      aria-label={`${artist.name} — ${isJA ? 'プロフィールを見る' : 'View profile'}`}
      className="group block cursor-pointer bg-white/[0.05] border border-[rgba(212,175,55,0.3)] rounded-sm overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/20 focus-visible:-translate-y-1.5 focus-visible:border-accent-orange focus-visible:shadow-2xl focus-visible:shadow-accent-orange/20"
    >
      <div className="h-24 relative overflow-hidden" style={{ background: '#B8E4F9' }}>
        {/* Right side: pastel sky blue (base background) */}
        {/* Left 50%: flag gradient with metallic sheen overlay */}
        <div
          className="absolute top-0 left-0 bottom-0 transition-transform duration-300 group-hover:scale-105"
          style={{ width: '50%', background: FLAG_GRADIENTS[artist.flag] || DEFAULT_GRADIENT }}
        />
        {/* Metallic sheen over flag area */}
        <div
          className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: '50%',
            background: 'linear-gradient(160deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.15) 100%)',
          }}
        />
        {/* Hard edge divider */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30 z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber z-30" />
        <div className="absolute bottom-3 right-3 text-2xl z-20">{artist.flag}</div>
      </div>

      <div className="p-4 relative">
        {/* Icon container: relative + z-20 so the circle always paints
            on top of the banner — it sits with -mt-10 negative margin
            so the top half overlaps the banner gradient by design,
            but never gets clipped or hidden behind it. The circle's
            border picks up the orange accent on card hover so the
            interactive state is visually consistent. */}
        <div className="flex items-end mb-4 relative z-20">
          <div className="w-14 h-14 rounded-full border-2 border-accent-orange bg-white/[0.05] flex items-center justify-center text-2xl shadow-lg -mt-10 -mb-2 transition-shadow group-hover:shadow-accent-orange/40 group-hover:shadow-xl">
            {artist.emoji}
          </div>
        </div>

        <h3 className="font-bebas text-xl tracking-widest text-[#C89020] mb-1 group-hover:text-accent-orange transition-colors">
          {artist.name}
        </h3>
        <div className="text-sm tracking-widest text-accent-peach mb-2">{sub}</div>
        <p className="text-lg text-text-light leading-relaxed mb-3 line-clamp-3">{short}</p>

        <div className="flex gap-2 flex-wrap mb-3">
          {artist.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-sm tracking-widest px-2 py-1 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-peach"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA: the whole card is the click target, so this is purely
            decorative — a visual "where this card goes" hint that
            slides on hover to mirror the card's lift animation. */}
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1 font-bebas text-sm tracking-widest text-accent-peach group-hover:text-accent-peach transition-all"
        >
          <span>{isJA ? 'プロフィールを見る' : 'View profile'}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
