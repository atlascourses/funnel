import React, { useEffect, useState } from 'react';

const CalculatingView = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="text-center animate-fade-in">
            <div className="mb-8 relative inline-block">
                <div className="w-24 h-24 border-4 border-blue-100 border-t-premium-accent rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-premium-accent">
                    {progress}%
                </div>
            </div>
            <h2 className="text-3xl font-bold text-premium-dark mb-4">Analyzing Your Profile</h2>
            <p className="text-premium-secondary max-w-md mx-auto">
                We're matching your skills, time, and goals with thousands of potential opportunities...
            </p>

            <div className="mt-12 space-y-3 max-w-sm mx-auto">
                <div className={`flex items-center space-x-3 transition-opacity duration-500 ${progress > 20 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-2 h-2 rounded-full ${progress > 20 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <p className="text-sm">Evaluating time constraints</p>
                </div>
                <div className={`flex items-center space-x-3 transition-opacity duration-500 ${progress > 50 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-2 h-2 rounded-full ${progress > 50 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <p className="text-sm">Assessing risk tolerance</p>
                </div>
                <div className={`flex items-center space-x-3 transition-opacity duration-500 ${progress > 80 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-2 h-2 rounded-full ${progress > 80 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <p className="text-sm">Identifying priority business models</p>
                </div>
            </div>
        </div>
    );
};

export default CalculatingView;
