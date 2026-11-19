import { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/cyberContent';

export function InteractiveQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const selectedLabel = selectedAnswers[currentQuestion.id];
  const hasAnswered = selectedLabel !== undefined;
  const isCorrect = selectedLabel === currentQuestion.correctLabel;

  const totalQuestions = QUIZ_QUESTIONS.length;
  const totalScore = QUIZ_QUESTIONS.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctLabel ? 1 : 0);
  }, 0);

  const handleSelectOption = (label: 'A' | 'B' | 'C') => {
    if (hasAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: label,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const getMotivationMessage = (score: number) => {
    if (score === 5) {
      return {
        title: 'Tahniah! Anda Wira Galaksi Digital!',
        subtitle:
          'Cemerlang! Anda menjawab semua soalan dengan betul dan bersedia meneroka galaksi internet dengan selamat serta beretika.',
      };
    }
    if (score >= 3) {
      return {
        title: 'Syabas! Anda Bakal Wira Digital!',
        subtitle:
          'Usaha yang baik! Anda sudah memahami kebanyakan panduan keselamatan siber. Cuba lagi untuk mendapat markah penuh!',
      };
    }
    return {
      title: 'Teruskan Belajar, Pengembara Muda!',
      subtitle:
        'Jangan putus asa. Baca semula 6 Panduan Utama di atas dan cuba jawab kuiz ini sekali lagi.',
    };
  };

  return (
    <section
      id="kuiz"
      className="border-t border-indigo-400/15 bg-[#0B1026] py-16 text-slate-100 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-cyan-300">
            Bahagian 05 · Aktiviti Penilaian Kendiri
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            Uji Minda Anda! – Kuiz Interaktif
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-300">
            Jawab lima soalan di bawah dan lihat sejauh mana kecekapan anda sebagai Wira Digital.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-indigo-300/20 bg-[#121A3A] p-6 shadow-xl sm:p-10">
          {!isFinished ? (
            <div>
              {/* Progress Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-300/15 pb-5">
                <span className="font-display text-sm font-bold text-white tabular-nums">
                  Soalan {currentIndex + 1} daripada {totalQuestions}
                </span>
                <span className="font-mono text-sm font-semibold text-[#FACC15] tabular-nums">
                  Markah Semasa: {totalScore} / {totalQuestions}
                </span>
              </div>

              {/* Clean Progress Bar */}
              <div
                className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#070B19]"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-[#FACC15] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="mt-7 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                {currentQuestion.id}. {currentQuestion.question}
              </h3>

              {/* 3 Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isThisSelected = selectedLabel === opt.label;
                  const isThisCorrect = opt.label === currentQuestion.correctLabel;

                  let buttonClasses =
                    'border border-indigo-300/20 bg-[#0B1128] text-slate-100 hover:border-cyan-400 hover:bg-[#152046]';
                  let badgeClasses = 'bg-[#17234C] text-cyan-300';

                  if (hasAnswered) {
                    if (isThisCorrect) {
                      buttonClasses = 'border-2 border-[#4ADE80] bg-emerald-950/60 text-emerald-100';
                      badgeClasses = 'bg-[#4ADE80] text-[#060916]';
                    } else if (isThisSelected && !isThisCorrect) {
                      buttonClasses = 'border-2 border-rose-400 bg-rose-950/60 text-rose-100';
                      badgeClasses = 'bg-rose-400 text-[#060916]';
                    } else {
                      buttonClasses = 'border border-indigo-300/10 bg-[#080D20]/60 text-slate-400';
                      badgeClasses = 'bg-[#101835] text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(opt.label)}
                      className={`flex min-h-[56px] w-full items-center justify-between gap-4 rounded-xl px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                        hasAnswered ? 'cursor-default' : 'cursor-pointer'
                      } ${buttonClasses}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold ${badgeClasses}`}
                        >
                          {opt.label}
                        </span>
                        <span className="text-base font-medium leading-snug">{opt.text}</span>
                      </div>

                      {hasAnswered && isThisCorrect && (
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 text-[#4ADE80]"
                          aria-label="Jawapan Betul"
                        />
                      )}
                      {hasAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle
                          className="h-5 w-5 shrink-0 text-rose-400"
                          aria-label="Jawapan Salah"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback & Next Button */}
              {hasAnswered && (
                <div className="mt-6 border-t border-indigo-300/15 pt-6">
                  <div
                    role="status"
                    className={`rounded-xl p-5 ${
                      isCorrect
                        ? 'border border-emerald-400/40 bg-emerald-950/60 text-emerald-100'
                        : 'border border-rose-400/40 bg-rose-950/60 text-rose-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display text-base font-bold">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-[#4ADE80]" aria-hidden="true" />
                          <span>Jawapan Betul!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 text-rose-400" aria-hidden="true" />
                          <span>
                            Kurang Tepat — Jawapan Sebenar: {currentQuestion.correctLabel}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">{currentQuestion.explanation}</p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-6 py-2.5 text-sm font-bold text-[#060916] transition-colors duration-150 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
                    >
                      <span>
                        {currentIndex < totalQuestions - 1
                          ? 'Soalan Seterusnya'
                          : 'Lihat Keputusan Kuiz'}
                      </span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Final Result View */
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FACC15]/40 bg-[#080D21] text-[#FACC15]">
                <Award className="h-9 w-9" aria-hidden="true" />
              </div>

              <p className="mt-5 font-mono text-sm font-bold text-cyan-300 tabular-nums">
                Markah Keseluruhan: {totalScore} / {totalQuestions}
              </p>

              <h3 className="mt-2 font-display text-3xl font-extrabold text-white">
                {getMotivationMessage(totalScore).title}
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-slate-300">
                {getMotivationMessage(totalScore).subtitle}
              </p>

              {/* Compact Review Summary */}
              <div className="mt-8 space-y-3 border-t border-indigo-300/15 pt-6 text-left">
                {QUIZ_QUESTIONS.map((q) => {
                  const userAns = selectedAnswers[q.id];
                  const ok = userAns === q.correctLabel;
                  return (
                    <div
                      key={q.id}
                      className="flex items-start justify-between gap-4 border-b border-indigo-300/10 pb-3 last:border-b-0"
                    >
                      <div className="text-sm">
                        <p className="font-semibold text-white">
                          {q.id}. {q.question}
                        </p>
                        <p className="mt-1 text-slate-300">
                          Jawapan anda: <strong className="text-white">{userAns}</strong> · Jawapan betul:{' '}
                          <strong className="text-[#4ADE80]">{q.correctLabel}</strong>
                        </p>
                      </div>
                      {ok ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#4ADE80] whitespace-nowrap shrink-0">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          Betul
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 whitespace-nowrap shrink-0">
                          <XCircle className="h-4 w-4" aria-hidden="true" />
                          Salah
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-6 py-2.5 text-sm font-bold text-[#060916] transition-colors duration-150 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15]"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  <span>Cuba Semula</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
