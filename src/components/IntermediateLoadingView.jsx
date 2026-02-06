import React, { useEffect, useState } from 'react';

const IntermediateLoadingView = ({ onComplete }) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
        }, 500);

        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div className="text-center animate-fade-in py-12">
            <div className="mb-8 relative inline-block">
                <div className="w-16 h-16 border-4 border-blue-100 border-t-premium-accent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-premium-dark mb-4">
                Preparing personalized questions to narrow down your side hustles{dots}
            </h2>
            <p className="text-premium-secondary max-w-sm mx-auto">
                Almost there! We're tailoring the final section based on your previous answers to ensure maximum accuracy.
            </p>
        </div>
    );
};

export default IntermediateLoadingView;
