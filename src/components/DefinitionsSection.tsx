import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, MessageCircle, ShieldCheck } from 'lucide-react';
import { DEFINITIONS } from '../data/cyberContent';
import { SafeImage } from './SafeImage';

interface DefinitionsSectionProps {
  highlightedTab: 'netiket' | 'keselamatan' | null;
  onSelectTab: (tab: 'netiket' | 'keselamatan') => void;
}

export function DefinitionsSection({
  highlightedTab,
  onSelectTab,
}: DefinitionsSectionProps) {
  const [expandedId, setExpandedId] = useState<'netiket' | 'keselamatan' | null>('netiket');

  const toggleExamples = (id: 'netiket' | 'keselamatan') => {
    onSelectTab(id);
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="pengenalan"
      className="border-t border-indigo-400/15 bg-[#0B1026] py-16 text-slate-100 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-cyan-300">
            Bahagian 01 · Konsep Asas Galaksi Digital
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            Apakah Itu Netiket dan Keselamatan Siber?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Dua kemahiran penting yang perlu dikuasai oleh setiap pengembara muda sebelum meneroka alam maya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {DEFINITIONS.map((item) => {
            const isHighlighted = highlightedTab === item.id;
            const isExpanded = expandedId === item.id;

            return (
              <article
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`group flex flex-col overflow-hidden rounded-2xl bg-[#121A3A] transition-all duration-200 hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-2 border-cyan-400 shadow-lg'
                    : 'border border-indigo-300/15 hover:border-cyan-400/50'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-indigo-300/15 bg-[#090E23]">
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.title}
                    darkFallback
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold tracking-wide text-[#FACC15]">
                      {item.number}. {item.kicker}
                    </span>
                    {item.id === 'netiket' ? (
                      <MessageCircle className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-[#4ADE80]" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-300">{item.summary}</p>

                  <div className="mt-6 border-t border-indigo-300/15 pt-5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExamples(item.id);
                      }}
                      aria-expanded={isExpanded}
                      className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-[#FACC15] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      <span>{isExpanded ? 'Tutup Contoh Amalan' : 'Lihat Contoh Amalan Harian'}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-200">
                        {item.dailyExamples.map((ex, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#4ADE80]"
                              aria-hidden="true"
                            />
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
