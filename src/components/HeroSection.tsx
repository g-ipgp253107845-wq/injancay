import { ArrowDown, ShieldCheck } from 'lucide-react';
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
      className="relative overflow-hidden bg-[#0B193C] text-white cyber-grid-bg"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Core Editorial & Actions */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-sky-300">
              CyberSmart Kids · Bijak Digital, Selamat Siber
            </p>

            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl">
              NETIKET DAN KESELAMATAN SIBER
            </h1>

            <p className="mt-3 font-display text-xl font-bold text-[#FACC15] sm:text-2xl">
              Selamat Datang ke Dunia Digital — Jadilah Wira Digital!
            </p>

            <p className="mt-5 text-base font-semibold leading-relaxed text-sky-200 sm:text-lg">
              “Klik Dengan Bijak, Berfikir Sebelum Bertindak, Lindungi Diri Setiap Masa!”
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
              Internet memberikan kita peluang untuk belajar, berkomunikasi dan meneroka dunia. Namun
              begitu, kita perlu mengetahui cara menggunakan teknologi dengan selamat, beretika dan
              bertanggungjawab. Mari menjadi wira digital yang bijak!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleSelectAndScroll('netiket')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-bold text-[#0B193C] transition-transform duration-150 hover:-translate-y-0.5 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
              >
                <span>Kenali Netiket</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => handleSelectAndScroll('keselamatan')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-sky-400/50 bg-[#132656] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-sky-300 hover:bg-[#1b3473] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                <ShieldCheck className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
                <span>Terokai Keselamatan Siber</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Cartoon Illustration */}
          <div className="flex lg:col-span-6">
            <div className="relative w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-[#132656] shadow-xl">
              <SafeImage
                src={HERO_IMAGE_PATH}
                alt="Ilustrasi kartun murid sekolah rendah bersama komputer riba, telefon pintar, perisai keselamatan dan kunci digital."
                fallbackTitle="Wira Digital Sekolah Rendah"
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
