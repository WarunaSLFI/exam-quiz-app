'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import htmlQuestions from '../../../data/html.js';

const questionMap = {
  html: htmlQuestions,
};

const subjectLabels = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
};

export default function QuizPage({ params }) {
  const subject = params.subject;
  const questions = questionMap[subject];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const router = useRouter();

  // Fallback for subjects not yet wired up
  if (!questions) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center max-w-md w-full">
          <span className="text-5xl mb-4 block">🚧</span>
          <h1 className="text-2xl font-bold mb-2">
            {subjectLabels[subject] ?? subject} Quiz
          </h1>
          <p className="text-gray-400 mb-6">This subject is coming soon. Check back later!</p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isAnswered = selectedAnswer !== null;
  const progress = (currentIndex / questions.length) * 100;

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    if (index === question.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      // Score state may not yet reflect last answer if it was correct —
      // compute final score directly to avoid async stale closure.
      const finalScore =
        selectedAnswer === question.correct ? score + 1 : score;
      router.push(
        `/results?score=${finalScore}&total=${questions.length}&subject=${subject}`
      );
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    }
  };

  const getOptionClass = (index) => {
    const base =
      'w-full text-left border rounded-xl px-5 py-4 text-sm font-medium transition-all duration-150';
    if (!isAnswered) {
      return `${base} border-gray-700 bg-gray-800 hover:border-indigo-500 hover:bg-gray-700 cursor-pointer`;
    }
    if (index === question.correct) {
      return `${base} border-green-500 bg-green-900/40 text-green-300 cursor-default`;
    }
    if (index === selectedAnswer) {
      return `${base} border-red-500 bg-red-900/40 text-red-300 cursor-default`;
    }
    return `${base} border-gray-700 bg-gray-800 opacity-40 cursor-default`;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-12">
      {/* Header */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">
            {subjectLabels[subject]} Quiz
          </h1>
          <span className="text-sm text-gray-400">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-8">
        {/* Question text */}
        <p className="text-lg font-medium mb-6 leading-relaxed">
          {question.question}
        </p>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={getOptionClass(index)}
            >
              <span className="text-gray-500 mr-3 font-mono text-xs">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>

        {/* Explanation & Next — shown after answering */}
        {isAnswered && (
          <div className="mt-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-indigo-400 mr-2">Explanation:</span>
              {question.explanation}
            </div>

            <button
              onClick={handleNext}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {isLast ? 'See Results →' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>

      {/* Back link */}
      <Link
        href="/"
        className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
