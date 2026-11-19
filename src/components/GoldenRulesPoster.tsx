import { useState } from 'react';
import { Award, CheckCircle2, Circle } from 'lucide-react';
import { GOLDEN_RULES } from '../data/cyberContent';

export function GoldenRulesPoster() {
  const [pledgedIds, setPledgedIds] = useState<string[]>([]);

  const toggleRule = (id: string) => {
    setPledgedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handlePledgeAll = () => {
    if (pledgedIds.length === GOLDEN_RULES.length) {
      setPledgedIds([]);
    } else {
      setPledgedIds(GOLDEN_RULES.map((rule) => rule.id));
    }
  };

  const allPledged = pledgedIds.length === GOLDEN_RULES.length;

  return (
    <section
      id="peraturan-emas"
      className="border-t border-indigo-400/15 bg-[#060916] py-16 text-white galaxy-starfield sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/25 bg-[#0E1633]/95 p-6 shadow-2xl sm:p-10 lg:p-12">
          {/* Poster Header */}
          <div className="flex flex-col justify-between gap-6 border-b border-indigo-300/15 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#FACC15]">
                Bahagian 04 · Piagam Pengembara Galaksi
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
                5 Peraturan Emas Wira Digital
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Tandakan setiap peraturan di bawah untuk melengkapkan Ikrar Wira Digital anda hari ini.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <span className="font-mono text-sm font-semibold text-cyan-200 tabular-nums">
                Ikrar Disahkan: {pledgedIds.length} / {GOLDEN_RULES.length}
              </span>
              <button
                type="button"
                onClick={handlePledgeAll}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15] ${
                  allPledged
                    ? 'bg-[#4ADE80] text-[#060916] hover:bg-emerald-300'
                    : 'bg-[#FACC15] text-[#060916] hover:bg-yellow-300'
                }`}
              >
                <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{allPledged ? 'Ikrar Lengkap! (Reset)' : 'Sahkan Semua Ikrar'}</span>
              </button>
            </div>
          </div>

          {/* 5 Golden Rules List */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {GOLDEN_RULES.map((rule) => {
              const isChecked = pledgedIds.includes(rule.id);

              return (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => toggleRule(rule.id)}
                  aria-pressed={isChecked}
                  className={`flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-150 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15] ${
                    isChecked
                      ? 'border-2 border-[#FACC15] bg-[#141F47]'
                      : 'border border-indigo-300/20 bg-[#080D21]/85 hover:border-cyan-400/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-2xl font-bold text-[#FACC15] tabular-nums">
                        {rule.number}
                      </span>
                      {isChecked ? (
                        <CheckCircle2
                          className="h-6 w-6 text-[#4ADE80]"
                          aria-label="Disahkan"
                        />
                      ) : (
                        <Circle
                          className="h-6 w-6 text-indigo-300/45"
                          aria-label="Belum disahkan"
                        />
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white">
                      {rule.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {rule.subtitle}
                    </p>
                  </div>

                  <p
                    className={`mt-5 text-xs font-semibold ${
                      isChecked ? 'text-[#4ADE80]' : 'text-cyan-300'
                    }`}
                  >
                    {isChecked ? 'Disahkan sebagai amalan' : 'Klik untuk ikrar'}
                  </p>
                </button>
              );
            })}
          </div>

          {allPledged && (
            <div
              role="status"
              className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-emerald-400/40 bg-emerald-950/60 px-5 py-4 text-center text-sm font-semibold text-emerald-200"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4ADE80]" aria-hidden="true" />
              <span>
                Hebat! Anda telah mengesahkan kesemua 5 Peraturan Emas Wira Digital. Teruskan menguji minda anda dalam kuiz di bawah!
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
