import React from 'react';

const QuestionView = ({ question, currentIndex, totalQuestions, onAnswer, isLanding, onStart }) => {
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    if (isLanding && currentIndex === 0) {
        return (
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4 leading-tight">
                    Discover Your Best Side Hustle or Business in 5 Minutes
                </h1>
                <p className="text-xl text-premium-secondary mb-12">
                    Answer {totalQuestions} simple questions and get personalized direction.
                </p>

                <div className="premium-card text-left mb-8">
                    <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>
                    <div className="space-y-4">
                        {question.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    onStart();
                                    onAnswer(option.profile);
                                }}
                                className="option-button group"
                            >
                                <span className="flex items-center justify-between">
                                    <span className="text-lg font-medium">{option.text}</span>
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                        →
                                    </span>
                                </span>
                                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-premium-accent h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-500">Question 1 of {totalQuestions}</p>
            </div>
        );
    }

    return (
        <div className="animate-slide-up">
            <div className="premium-card">
                <h2 className="text-2xl font-semibold text-premium-dark mb-8">{question.text}</h2>
                <div className="space-y-4">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => onAnswer(option.profile)}
                            className="option-button group"
                        >
                            <span className="flex items-center justify-between">
                                <span className="text-lg font-medium">{option.text}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 text-premium-accent">
                                    →
                                </span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-premium-accent h-2 rounded-full transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex justify-between items-center px-1">
                    <p className="text-xs font-medium text-premium-secondary uppercase tracking-wider">Progress</p>
                    <p className="text-xs font-semibold text-premium-accent">Question {currentIndex + 1} of {totalQuestions}</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionView;
