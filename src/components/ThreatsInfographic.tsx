import { useState } from 'react';
import {
  AlertTriangle,
  CopyX,
  FishSymbol,
  MessageSquareOff,
  Newspaper,
  ShieldCheck,
  Unlock,
} from 'lucide-react';
import { FIVE_THREATS, ThreatItem } from '../data/cyberContent';

function ThreatIcon({ iconKey, className }: { iconKey: ThreatItem['iconKey']; className?: string }) {
  switch (iconKey) {
    case 'copy-x':
      return <CopyX className={className} aria-hidden="true" />;
    case 'newspaper-alert':
      return <Newspaper className={className} aria-hidden="true" />;
    case 'message-off':
      return <MessageSquareOff className={className} aria-hidden="true" />;
    case 'fish-hook':
      return <FishSymbol className={className} aria-hidden="true" />;
    case 'unlock-alert':
      return <Unlock className={className} aria-hidden="true" />;
  }
}

export function ThreatsInfographic() {
  const [activeId, setActiveId] = useState<string>(FIVE_THREATS[0].id);
  const activeThreat = FIVE_THREATS.find((t) => t.id === activeId) ?? FIVE_THREATS[0];

  return (
    <section id="ancaman" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0066FF]">
            Bahagian 03 · Infografik Interaktif
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B193C] text-balance sm:text-4xl">
            Kenali Ancaman Siber
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Pilih salah satu daripada lima ancaman digital di bawah untuk melihat contoh situasi dan langkah pencegahannya.
          </p>
        </div>

        {/* Two-Zone Educational Layout: Selector List + Interactive Threat Inspector */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Zone: 5 Threat Selector Tabs */}
          <div
            role="tablist"
            aria-label="Senarai 5 ancaman siber"
            className="flex flex-col gap-3 lg:col-span-5"
          >
            {FIVE_THREATS.map((threat) => {
              const isSelected = threat.id === activeThreat.id;
              return (
                <button
                  key={threat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(threat.id)}
                  className={`flex min-h-[64px] w-full items-start gap-4 rounded-xl p-4 text-left transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] ${
                    isSelected
                      ? 'border-2 border-[#0066FF] bg-[#0B193C] text-white shadow-md'
                      : 'border border-slate-200 bg-white text-[#0B193C] hover:border-sky-300 hover:bg-sky-50/50'
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      isSelected ? 'bg-[#0066FF] text-white' : 'bg-sky-100 text-[#0066FF]'
                    }`}
                  >
                    <ThreatIcon iconKey={threat.iconKey} className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-base font-bold">{threat.title}</span>
                      <span
                        className={`text-xs font-semibold tabular-nums ${
                          isSelected ? 'text-[#FACC15]' : 'text-slate-400'
                        }`}
                      >
                        {threat.number}
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-sm leading-snug ${
                        isSelected ? 'text-slate-200' : 'text-slate-600'
                      }`}
                    >
                      {threat.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Zone: Active Threat Infographic Stage */}
          <div
            role="tabpanel"
            aria-label={activeThreat.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B193C] text-[#FACC15]">
                    <ThreatIcon iconKey={activeThreat.iconKey} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0066FF]">
                      Ancaman {activeThreat.number} daripada 05
                    </p>
                    <h3 className="font-display text-2xl font-bold text-[#0B193C]">
                      {activeThreat.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Definition & Example Scenario */}
              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500">Maksud Ancaman</h4>
                  <p className="mt-1.5 text-base font-medium leading-relaxed text-[#0B193C]">
                    {activeThreat.shortDesc}
                  </p>
                </div>

                {/* Visual Simulation Callout (clean dark slate surface, no nested card clutter) */}
                <div className="rounded-xl bg-[#0B193C] p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FACC15]">
                    <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Simulasi Petunjuk Amaran · {activeThreat.previewSender}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-100">
                    “{activeThreat.previewMessage}”
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-500">
                    {activeThreat.exampleTitle}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {activeThreat.exampleScenario}
                  </p>
                </div>
              </div>
            </div>

            {/* Prevention Checklist */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h4 className="flex items-center gap-2 font-display text-base font-bold text-[#0B193C]">
                <ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <span>Cara Mengelakkan {activeThreat.title}</span>
              </h4>
              <ul className="mt-4 space-y-3">
                {activeThreat.preventionSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-xs font-bold text-emerald-800 tabular-nums">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
