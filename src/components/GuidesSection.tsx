import { useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copyright,
  KeyRound,
  MessageCircle,
  Monitor,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  XCircle,
} from 'lucide-react';
import { GuideItem, SIX_GUIDES } from '../data/cyberContent';

function GuideIconPair({ iconKey }: { iconKey: GuideItem['iconKey'] }) {
  switch (iconKey) {
    case 'smartphone-alert':
      return (
        <div className="flex items-center gap-1.5 text-cyan-300" aria-hidden="true">
          <Smartphone className="h-6 w-6" />
          <AlertTriangle className="h-5 w-5 text-[#FACC15]" />
        </div>
      );
    case 'book-copyright':
      return (
        <div className="flex items-center gap-1.5 text-cyan-300" aria-hidden="true">
          <BookOpen className="h-6 w-6" />
          <Copyright className="h-5 w-5 text-[#4ADE80]" />
        </div>
      );
    case 'robot-ai':
      return (
        <div className="flex items-center gap-1.5 text-cyan-300" aria-hidden="true">
          <Bot className="h-6 w-6" />
          <Sparkles className="h-4 w-4 text-[#FACC15]" />
        </div>
      );
    case 'shield-key':
      return (
        <div className="flex items-center gap-1.5 text-[#4ADE80]" aria-hidden="true">
          <ShieldCheck className="h-6 w-6" />
          <KeyRound className="h-5 w-5 text-[#FACC15]" />
        </div>
      );
    case 'chat-bubble':
      return (
        <div className="flex items-center gap-1.5 text-cyan-300" aria-hidden="true">
          <MessageCircle className="h-6 w-6" />
        </div>
      );
    case 'computer-alert':
      return (
        <div className="flex items-center gap-1.5 text-cyan-300" aria-hidden="true">
          <Monitor className="h-6 w-6" />
          <ShieldAlert className="h-5 w-5 text-[#FACC15]" />
        </div>
      );
  }
}

export function GuidesSection() {
  const [openSituationId, setOpenSituationId] = useState<string | null>('fikir-sebelum-kongsi');

  const toggleSituation = (id: string) => {
    setOpenSituationId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="panduan"
      className="border-t border-indigo-400/15 bg-[#060916] py-16 text-slate-100 orbital-grid-bg sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-cyan-300">
            Bahagian 02 · Amalan Terbaik Pengembara Bintang
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            6 Panduan Utama Wira Digital
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Klik setiap kad untuk meneroka contoh situasi sebenar di sekolah dan cara bertindak dengan bijak.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SIX_GUIDES.map((guide) => {
            const isOpen = openSituationId === guide.id;

            return (
              <article
                key={guide.id}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 ${
                  isOpen
                    ? 'border-2 border-cyan-400 bg-[#141E42] shadow-lg'
                    : 'border border-indigo-300/15 bg-[#101733] hover:border-cyan-400/45 hover:bg-[#131C3D]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#080D21]">
                      <GuideIconPair iconKey={guide.iconKey} />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#FACC15] tabular-nums">
                      Panduan {guide.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-white">
                    {guide.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300">
                    {guide.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="mt-0.5 font-mono text-xs text-cyan-400" aria-hidden="true">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-indigo-300/15 pt-4">
                  <button
                    type="button"
                    onClick={() => toggleSituation(guide.id)}
                    aria-expanded={isOpen}
                    className="flex min-h-[40px] w-full items-center justify-between gap-2 text-left text-sm font-semibold text-cyan-300 transition-colors hover:text-[#FACC15] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <span>{isOpen ? 'Tutup Contoh Situasi' : 'Lihat Contoh Situasi'}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-4 space-y-3 border-t border-indigo-300/15 pt-4 text-sm">
                      <div>
                        <p className="font-semibold text-[#FACC15]">
                          Situasi: {guide.situationTitle}
                        </p>
                        <p className="mt-1 leading-relaxed text-slate-300">
                          {guide.situationDesc}
                        </p>
                      </div>

                      <div className="space-y-2 pt-1">
                        <p className="flex items-start gap-2 text-emerald-300">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#4ADE80]"
                            aria-hidden="true"
                          />
                          <span>
                            <strong className="font-semibold text-emerald-200">Tindakan Bijak:</strong>{' '}
                            {guide.safeAction}
                          </span>
                        </p>
                        <p className="flex items-start gap-2 text-rose-300">
                          <XCircle
                            className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                            aria-hidden="true"
                          />
                          <span>
                            <strong className="font-semibold text-rose-200">Elakkan:</strong>{' '}
                            {guide.unsafeAction}
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
