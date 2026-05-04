'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-black/96 backdrop-blur-xl border-b-2 border-accent-orange flex items-center justify-between px-12">
      <div className="font-bebas text-2xl tracking-widest text-accent-orange drop-shadow-lg">
        TRANCE<span className="text-accent-red">NEXUS</span>
      </div>
      <div className="flex gap-0 items-center">
        {['TOP', 'ARTIST', 'RADIO', 'SETLIST', 'EVENTS'].map((link, i) => (
          <a
            key={i}
            href={`#${link.toLowerCase()}`}
            className="font-bebas text-sm tracking-widest text-text-muted px-5 h-[60px] leading-[60px] block border-l border-orange-900/20 hover:text-accent-orange hover:bg-orange-900/10 transition-all relative group"
          >
            {link}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        ))}
      </div>
    </nav>
  );
}
