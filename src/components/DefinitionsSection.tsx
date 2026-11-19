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
    <section id="pengenalan" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0066FF]">
            Bahagian 01 · Konsep Asas Dunia Digital
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B193C] text-balance sm:text-4xl">
            Apakah Itu Netiket dan Keselamatan Siber?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Dua kemahiran penting yang perlu dikuasai oleh setiap murid sebelum melayari internet.
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
                className={`group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-200 hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-2 border-[#0066FF] shadow-md'
                    : 'border border-slate-200 shadow-sm hover:border-sky-300'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden border-b border-slate-100 bg-sky-50">
                  <SafeImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-[#0066FF]">
                      {item.number}. {item.kicker}
                    </span>
                    {item.id === 'netiket' ? (
                      <MessageCircle className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-2xl font-bold text-[#0B193C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-slate-700">{item.summary}</p>

                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExamples(item.id);
                      }}
                      aria-expanded={isExpanded}
                      className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#0066FF] transition-colors hover:text-[#0052CC] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
                    >
                      <span>{isExpanded ? 'Tutup Contoh Amalan' : 'Lihat Contoh Amalan Harian'}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-700">
                        {item.dailyExamples.map((ex, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#0066FF]"
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
