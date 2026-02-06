import React, { useState } from 'react';

const PaymentView = ({ isTease, onUnlock, onPaymentSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            onPaymentSuccess();
        }, 2000);
    };

    if (isTease) {
        return (
            <div className="text-center animate-fade-in">
                <h2 className="text-3xl font-bold text-premium-dark mb-4">Your Personalized Results Are Ready</h2>
                <p className="text-premium-secondary mb-10">
                    We’ve narrowed down the best fit for your time, skills & goals.
                </p>

                <div className="premium-card relative mb-10 overflow-hidden">
                    <h3 className="text-xl font-bold text-left mb-6 uppercase tracking-wider text-premium-secondary">Your Top 3 Opportunities:</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <span className="font-bold text-premium-accent">#1 →</span>
                            <span className="filter blur-sm select-none">High Ticket Service Agency</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <span className="font-bold text-premium-accent">#2 →</span>
                            <span className="filter blur-sm select-none">Specialized Asset Store</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <span className="font-bold text-premium-accent">#3 →</span>
                            <span className="filter blur-sm select-none">Educational Micro Content</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
                </div>

                <button
                    onClick={onUnlock}
                    className="premium-button w-full mb-4 animate-pulse-soft"
                >
                    Unlock Your Results — €6.97
                </button>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure stripe checkout</span>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-slide-up">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-premium-dark mb-2">Unlock Your 3 Personalized Ideas</h2>
                <p className="text-premium-secondary">Only €6.97 for detailed results, steps & guidance.</p>
            </div>

            <div className="premium-card">
                <form onSubmit={handlePayment} className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-xl mb-6">
                        <div className="flex justify-between items-center font-bold text-premium-dark">
                            <span>Order Summary:</span>
                            <span>€6.97</span>
                        </div>
                        <p className="text-xs text-premium-secondary mt-1">Personalized Entrepreneurial Blueprint</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                            <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-premium-accent focus:border-transparent outline-none" placeholder="you@example.com" />
                        </div>

                        <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                            <p className="text-sm font-semibold text-gray-400 mb-4">Payment Method (Mock Stripe)</p>
                            <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                    <span className="text-sm text-gray-600">•••• •••• •••• 4242</span>
                                </div>
                                <span className="text-xs font-bold text-premium-accent font-mono">VISA</span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="premium-button w-full flex items-center justify-center space-x-2"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <span>Confirm & Pay €6.97</span>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100">
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-3 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span>Clear matchup explanation</span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span>Realistic first steps</span>
                        </li>
                        <li className="flex items-center space-x-3 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span>Direction on what to do</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-center text-xs text-premium-secondary italic">
                        "If you feel this isn’t useful, email us within 24 hrs for a refund."
                    </p>
                </div>
            </div>

            <p className="text-center mt-6 text-xs text-gray-400">Questions? support@yourquizsite.com</p>
        </div>
    );
};

export default PaymentView;
