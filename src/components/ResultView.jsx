import React, { useState } from 'react';

const IdeaSection = ({ title, description, steps, isPrimary }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`premium-card p-6 mb-6 ${isPrimary ? 'border-2 border-premium-accent ring-4 ring-blue-50 ring-opacity-50' : ''}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-xs font-bold text-premium-accent uppercase tracking-widest mb-1">
                        {isPrimary ? 'Primary Business Idea' : 'Alternative Opportunity'}
                    </p>
                    <h3 className="text-2xl font-bold text-premium-dark">{title}</h3>
                </div>
                {isPrimary && (
                    <span className="bg-blue-100 text-premium-accent text-xs font-black px-3 py-1 rounded-full">MATCH</span>
                )}
            </div>

            <p className="text-premium-secondary mb-6 leading-relaxed">
                {description}
            </p>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors font-semibold text-premium-dark group"
            >
                <span>View starter steps</span>
                <svg className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-4 animate-fade-in">
                    <div className="space-y-4 pt-2">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex space-x-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-premium-accent text-white flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                </div>
                                <p className="text-premium-secondary pt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const ResultView = ({ profile }) => {
    if (!profile) return null;

    return (
        <div className="animate-fade-in pb-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-premium-dark mb-4 leading-tight">Your Best Matches Based on Your Answers</h1>
                <p className="text-xl text-premium-secondary">Crafted just for you — here’s why they fit.</p>
            </div>

            <IdeaSection
                title={profile.businessId}
                description={profile.whyItFits}
                steps={profile.steps}
                isPrimary={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                <h3 className="md:col-span-2 text-lg font-bold text-premium-secondary uppercase tracking-widest mb-2 pl-2">Side hustles to supplement:</h3>

                <IdeaSection
                    title={profile.hustle1}
                    description="A direct way to leverage your strengths for quick cash injection while building your main asset."
                    steps={["Research top performers in this category.", "Set up your profile with clear value props.", "Complete 3 test projects to build initial social proof."]}
                    isPrimary={false}
                />

                <IdeaSection
                    title={profile.hustle2}
                    description="Low-maintenance revenue stream that supports your long-term vision with minimal extra overhead."
                    steps={["List existing assets or knowledge points.", "Package them into a consumable format.", "Share on social channels once per week."]}
                    isPrimary={false}
                />
            </div>

            <div className="mt-12 p-8 bg-premium-dark rounded-3xl text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="opacity-80 mb-8">Screenshot this page to keep your personalized action plan forever.</p>
                <button
                    onClick={() => window.print()}
                    className="px-8 py-4 bg-white text-premium-dark font-bold rounded-xl hover:bg-gray-100 transition-colors"
                >
                    Save Action Plan
                </button>
            </div>

            <p className="text-center mt-8 text-sm text-gray-400">© 2026 YourQuizSite. All results are personalized to your profile.</p>
        </div>
    );
};

export default ResultView;
