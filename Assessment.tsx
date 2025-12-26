import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { ConformanceLevel } from '../types';

const Assessment: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>('q1');
  const [result, setResult] = useState<ConformanceLevel | null>(null);

  const currentQuestion = QUESTIONS.find(q => q.id === currentQuestionId);

  const handleOptionClick = (option: typeof QUESTIONS[0]['options'][0]) => {
    if (option.result) {
      setResult(option.result);
      setCurrentQuestionId(null);
    } else if (option.nextId) {
      setCurrentQuestionId(option.nextId);
    }
  };

  const reset = () => {
    setCurrentQuestionId('q1');
    setResult(null);
  };

  const renderResult = () => {
    const levelColors = {
      [ConformanceLevel.HUMAN]: "bg-emerald-50 border-emerald-500 text-emerald-900",
      [ConformanceLevel.HUMAN_LED]: "bg-sky-50 border-sky-500 text-sky-900",
      [ConformanceLevel.DISCLOSED]: "bg-amber-50 border-amber-500 text-amber-900",
      [ConformanceLevel.NON_CONFORMANT]: "bg-stone-50 border-stone-500 text-stone-900",
    };

    const levelDescriptions = {
      [ConformanceLevel.HUMAN]: "Your work appears to qualify for the ∴IA / ORIGIN — HUMAN mark. It is entirely of human origin.",
      [ConformanceLevel.HUMAN_LED]: "Your work appears to qualify for the ∴IA / ORIGIN — HUMAN-LED mark. AI was used as a tool, but you provided the creative substance.",
      [ConformanceLevel.DISCLOSED]: "Your work qualifies for the ∴IA / ORIGIN — DISCLOSED mark. Generative AI was used, and disclosure is required.",
      [ConformanceLevel.NON_CONFORMANT]: "Based on your answers, this work may not conform to the ∴IA / ORIGIN standard in its current state.",
    };

    return (
      <div className={`p-6 md:p-8 border-l-4 rounded-r-lg ${result ? levelColors[result] : ''} transition-all duration-500 animate-in fade-in slide-in-from-bottom-4`}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
          {result === ConformanceLevel.NON_CONFORMANT ? (
            <i className="fas fa-circle-exclamation mr-3 text-lg"></i>
          ) : (
            <i className="fas fa-certificate mr-3 text-lg"></i>
          )}
          Result: {result?.replace('_', '-')}
        </h3>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          {result && levelDescriptions[result]}
        </p>
        <button
          onClick={reset}
          className="w-full sm:w-auto px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-800 transition-colors uppercase tracking-widest text-xs font-bold"
        >
          Start Over
        </button>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8 md:py-12 px-2 md:px-4">
      <div className="text-center mb-8 md:mb-12">
        <span className="text-3xl md:text-4xl block mb-2">∴IA</span>
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter serif">Self-Assessment</h2>
        <p className="text-stone-500 mt-2 text-sm md:text-base">Find out which ∴IA / ORIGIN mark applies to your creative work.</p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-stone-200">
        {currentQuestion ? (
          <div className="p-6 md:p-10 animate-in fade-in zoom-in-95 duration-300">
            <h4 className="text-lg md:text-xl font-medium mb-6 md:mb-8 text-stone-800 leading-snug">
              {currentQuestion.text}
            </h4>
            <div className="space-y-3 md:space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left p-4 rounded-xl border-2 border-stone-100 hover:border-stone-900 hover:bg-stone-50 transition-all duration-200 group flex justify-between items-center gap-3"
                >
                  <span className="font-medium text-sm md:text-base">{option.label}</span>
                  <i className="fas fa-chevron-right text-stone-300 group-hover:text-stone-900 transition-colors text-xs md:text-sm flex-shrink-0"></i>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-0">
            {renderResult()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
