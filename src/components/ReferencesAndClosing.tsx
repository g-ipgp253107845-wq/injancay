import { ArrowUp, ExternalLink } from 'lucide-react';
import { CLOSING_IMAGE_PATH, REFERENCES } from '../data/cyberContent';
import { SafeImage } from './SafeImage';

export function ReferencesAndClosing() {
  const scrollToTop = () => {
    const topEl = document.querySelector('#utama');
    if (topEl) {
      topEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* G. Sumber Rujukan */}
      <section
        id="rujukan"
        className="border-t border-indigo-400/15 bg-[#060916] py-16 text-slate-100 orbital-grid-bg sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-cyan-300">
              Bahagian 06 · Pautan Selamat & Sahih
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Sumber Rujukan Rasmi
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Terokai laman web rasmi di bawah bersama ibu bapa dan guru untuk maklumat keselamatan siber yang lebih mendalam.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REFERENCES.map((ref) => (
              <a
                key={ref.id}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-indigo-300/15 bg-[#121A3A] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:bg-[#162048] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <div>
                  <p className="text-xs font-semibold text-[#FACC15]">{ref.role}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white group-hover:text-cyan-300">
                    {ref.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{ref.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-indigo-300/15 pt-4 text-sm font-semibold text-cyan-300">
                  <span>Layari Laman</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* H. Penutup – Jadilah Wira Digital! */}
      <section
        id="penutup"
        className="border-t border-indigo-400/15 bg-[#0B1026] py-16 text-white galaxy-starfield sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#121A3A] shadow-2xl lg:grid-cols-12">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-6 lg:p-12">
              <p className="text-sm font-semibold tracking-wide text-[#FACC15]">
                CyberSmart Kids · Misi Wira Galaksi Digital
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
                Jadilah Wira Digital!
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                “Galaksi digital menjadi lebih selamat apabila kita semua bertanggungjawab. Jadilah
                pengembara teknologi yang bijak, beretika dan sentiasa berhati-hati!”
              </p>

              <p className="mt-6 font-display text-xl font-extrabold tracking-wide text-[#4ADE80]">
                “BE SMART, BE SAFE, BE KIND ONLINE!”
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-5 py-2.5 text-sm font-bold text-[#060916] transition-colors duration-150 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
                >
                  <ArrowUp className="h-4 w-4" aria-hidden="true" />
                  <span>Kembali ke Atas</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={CLOSING_IMAGE_PATH}
                alt="Ilustrasi pengembara angkasa muda dan rakan alien mesra meraikan keselamatan digital di bawah taburan bintang galaksi."
                fallbackTitle="Jadilah Wira Galaksi Digital!"
                darkFallback
                className="h-full min-h-[260px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="border-t border-indigo-400/15 bg-[#040712] py-8 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p className="font-display font-semibold text-white">
            CyberSmart Kids · Netiket dan Keselamatan Siber Sekolah Rendah
          </p>
          <p className="text-slate-400">
            Bijak Digital · Selamat Siber · Beretika Setiap Masa
          </p>
        </div>
      </footer>
    </>
  );
}
