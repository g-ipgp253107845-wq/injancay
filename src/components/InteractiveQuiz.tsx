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
        title: 'Tahniah! Anda Wira Digital!',
        subtitle:
          'Cemerlang! Anda menjawab semua soalan dengan betul dan bersedia melayari internet dengan selamat serta beretika.',
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
      title: 'Teruskan Belajar, Wira Muda!',
      subtitle:
        'Jangan putus asa. Baca semula 6 Panduan Utama di atas dan cuba jawab kuiz ini sekali lagi.',
    };
  };

  return (
    <section id="kuiz" className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#0066FF]">
            Bahagian 05 · Aktiviti Penilaian Kendiri
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B193C] text-balance sm:text-4xl">
            Uji Minda Anda! – Kuiz Interaktif
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
            Jawab lima soalan di bawah dan lihat sejauh mana kecekapan anda sebagai Wira Digital.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10">
          {!isFinished ? (
            <div>
              {/* Progress Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <span className="font-display text-sm font-bold text-[#0B193C] tabular-nums">
                  Soalan {currentIndex + 1} daripada {totalQuestions}
                </span>
                <span className="text-sm font-semibold text-[#0066FF] tabular-nums">
                  Markah Semasa: {totalScore} / {totalQuestions}
                </span>
              </div>

              {/* Clean Progress Bar */}
              <div
                className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-[#0066FF] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="mt-7 font-display text-xl font-bold leading-snug text-[#0B193C] sm:text-2xl">
                {currentQuestion.id}. {currentQuestion.question}
              </h3>

              {/* 3 Options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isThisSelected = selectedLabel === opt.label;
                  const isThisCorrect = opt.label === currentQuestion.correctLabel;

                  let buttonClasses =
                    'border border-slate-200 bg-white text-[#0B193C] hover:border-[#0066FF] hover:bg-sky-50/60';
                  let badgeClasses = 'bg-slate-100 text-[#0B193C]';

                  if (hasAnswered) {
                    if (isThisCorrect) {
                      buttonClasses = 'border-2 border-emerald-600 bg-emerald-50 text-emerald-950';
                      badgeClasses = 'bg-emerald-600 text-white';
                    } else if (isThisSelected && !isThisCorrect) {
                      buttonClasses = 'border-2 border-rose-600 bg-rose-50 text-rose-950';
                      badgeClasses = 'bg-rose-600 text-white';
                    } else {
                      buttonClasses = 'border border-slate-200 bg-white/70 text-slate-500';
                      badgeClasses = 'bg-slate-100 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      type="button"
                      disabled={hasAnswered}
                      onClick={() => handleSelectOption(opt.label)}
                      className={`flex min-h-[56px] w-full items-center justify-between gap-4 rounded-xl px-4 py-3.5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] ${
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
                          className="h-5 w-5 shrink-0 text-emerald-600"
                          aria-label="Jawapan Betul"
                        />
                      )}
                      {hasAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle
                          className="h-5 w-5 shrink-0 text-rose-600"
                          aria-label="Jawapan Salah"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback & Next Button */}
              {hasAnswered && (
                <div className="mt-6 border-t border-slate-200 pt-6">
                  <div
                    role="status"
                    className={`rounded-xl p-5 ${
                      isCorrect
                        ? 'border border-emerald-300 bg-emerald-50 text-emerald-950'
                        : 'border border-rose-300 bg-rose-50 text-rose-950'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display text-base font-bold">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                          <span>Jawapan Betul!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 text-rose-600" aria-hidden="true" />
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
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0066FF] px-6 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#0052CC] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
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
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B193C] text-[#FACC15]">
                <Award className="h-9 w-9" aria-hidden="true" />
              </div>

              <p className="mt-5 font-display text-sm font-bold text-[#0066FF] tabular-nums">
                Markah Keseluruhan: {totalScore} / {totalQuestions}
              </p>

              <h3 className="mt-2 font-display text-3xl font-extrabold text-[#0B193C]">
                {getMotivationMessage(totalScore).title}
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-slate-600">
                {getMotivationMessage(totalScore).subtitle}
              </p>

              {/* Compact Review Summary */}
              <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-left">
                {QUIZ_QUESTIONS.map((q) => {
                  const userAns = selectedAnswers[q.id];
                  const ok = userAns === q.correctLabel;
                  return (
                    <div
                      key={q.id}
                      className="flex items-start justify-between gap-4 border-b border-slate-200/80 pb-3 last:border-b-0"
                    >
                      <div className="text-sm">
                        <p className="font-semibold text-[#0B193C]">
                          {q.id}. {q.question}
                        </p>
                        <p className="mt-1 text-slate-600">
                          Jawapan anda: <strong>{userAns}</strong> · Jawapan betul:{' '}
                          <strong>{q.correctLabel}</strong>
                        </p>
                      </div>
                      {ok ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 whitespace-nowrap shrink-0">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          Betul
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 whitespace-nowrap shrink-0">
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
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FACC15] px-6 py-2.5 text-sm font-bold text-[#0B193C] transition-colors duration-150 hover:bg-yellow-300 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B193C]"
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
