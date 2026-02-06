import React, { useState, useMemo } from 'react';
import { QUESTIONS, PROFILES } from '../data/quizData';
import { calculateResult } from '../utils/scoringEngine';
import QuestionView from './QuestionView';
import CalculatingView from './CalculatingView';
import PaymentView from './PaymentView';
import ResultView from './ResultView';

import IntermediateLoadingView from './IntermediateLoadingView';

const DISABLE_PAYWALL = true; // Set to false to enable the paywall back

const QuizContainer = () => {
    const [currentStep, setCurrentStep] = useState('landing'); // 'landing', 'quiz', 'intermediate-loading', 'calculating', 'tease', 'payment', 'results'
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [resultProfileId, setResultProfileId] = useState(null);

    const handleStart = () => {
        setCurrentStep('quiz');
    };

    const handleAnswer = (profileId) => {
        const newAnswers = [...answers, profileId];
        setAnswers(newAnswers);

        if (currentQuestionIndex === 6) {
            setCurrentStep('intermediate-loading');
        } else if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Finished all 13 questions
            const finalResult = calculateResult(newAnswers);
            setResultProfileId(finalResult);
            setCurrentStep('calculating');
        }
    };

    const handleIntermediateComplete = () => {
        setCurrentStep('quiz');
        setCurrentQuestionIndex(7);
    };

    const handleCalculationComplete = () => {
        if (DISABLE_PAYWALL) {
            setCurrentStep('results');
        } else {
            setCurrentStep('tease');
        }
    };

    const handleUnlock = () => {
        setCurrentStep('payment');
    };

    const handlePaymentSuccess = () => {
        setCurrentStep('results');
    };

    const renderContent = () => {
        switch (currentStep) {
            case 'landing':
            case 'quiz':
                return (
                    <QuestionView
                        question={QUESTIONS[currentQuestionIndex]}
                        currentIndex={currentQuestionIndex}
                        totalQuestions={QUESTIONS.length}
                        onAnswer={handleAnswer}
                        isLanding={currentStep === 'landing'}
                        onStart={handleStart}
                    />
                );
            case 'intermediate-loading':
                return <IntermediateLoadingView onComplete={handleIntermediateComplete} />;
            case 'calculating':
                return <CalculatingView onComplete={handleCalculationComplete} />;
            case 'tease':
                return <PaymentView isTease={true} onUnlock={handleUnlock} />;
            case 'payment':
                return <PaymentView isTease={false} onPaymentSuccess={handlePaymentSuccess} />;
            case 'results':
                return <ResultView profile={PROFILES[resultProfileId]} />;
            default:
                return <div>Error loading step</div>;
        }
    };

    return (
        <div className="min-h-screen bg-premium-light flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl animate-fade-in">
                {renderContent()}
            </div>
        </div>
    );
};

export default QuizContainer;
