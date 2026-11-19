import { ArrowDown, Orbit, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE_PATH } from '../data/cyberContent';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onFocusDefinition: (tab: 'netiket' | 'keselamatan') => void;
}

export function HeroSection({ onFocusDefinition }: HeroSectionProps) {
  const handleSelectAndScroll = (tab: 'netiket' | 'keselamatan') => {
    onFocusDefinition(tab);
    const section = document.querySelector('#pengenalan');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="utama"
      className="relative overflow-hidden bg-[#060916] text-slate-100 galaxy-starfield"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Editorial & Actions */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-cyan-300">
              <Orbit className="h-4 w-4 shrink-0 text-[#4ADE80]" aria-hidden="true" />
              <span>CyberSmart Kids · Galaksi Digital Selamat</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl">
              NETIKET DAN KESELAMATAN SIBER
            </h1>

            <p className="mt-3 font-display text-xl font-bold text-[#FACC15] sm:text-2xl">
              Selamat Datang ke Galaksi Digital — Jadilah Wira Digital!
            </p>

            <p className="mt-5 text-base font-semibold leading-relaxed text-cyan-200 sm:text-lg">
              “Klik Dengan Bijak, Berfikir Sebelum Bertindak, Lindungi Diri Setiap Masa!”
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Seperti pengembara angkasa yang meneroka bintang dan planet bersama rakan alien,
              internet membuka ruang untuk kita belajar dan berkawan. Mari kita kuasai cara
              menggunakan teknologi dengan selamat, beretika dan bertanggungjawab!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleSelectAndScroll('netiket')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-bold text-[#060916] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
              >
                <span>Kenali Netiket</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => handleSelectAndScroll('keselamatan')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-cyan-400/40 bg-[#121A3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-cyan-300 hover:bg-[#192552] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <ShieldCheck className="h-4 w-4 text-[#4ADE80]" aria-hidden="true" />
                <span>Terokai Keselamatan Siber</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Galaxy & Alien Illustration */}
          <div className="flex lg:col-span-6">
            <div className="relative w-full overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#121A3A] shadow-2xl">
              <SafeImage
                src={HERO_IMAGE_PATH}
                alt="Ilustrasi pengembara angkasa muda dan rakan alien mesra di balai cerap galaksi bersama tablet holografik dan perisai bintang."
                fallbackTitle="Wira Galaksi Digital"
                darkFallback
                className="h-full w-full object-cover lg:min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
