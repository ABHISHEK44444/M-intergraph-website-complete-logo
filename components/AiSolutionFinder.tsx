import React, { useState, useCallback } from 'react';
import { findSolutions } from '../services/geminiService';
import type { AiSolution } from '../types';
import { WandIcon, CheckCircleIcon } from './IconComponents';
import MicIcon from './MicIcon';

const LoadingIndicator: React.FC = () => (
    <div className="flex flex-col items-center justify-center space-y-4" aria-label="Analyzing your needs">
        <div className="relative w-24 h-24">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-50"
                    style={{
                        animation: `sonar-wave 2s cubic-bezier(0, 0, 0.2, 1) infinite`,
                        animationDelay: `${i * 0.4}s`,
                    }}
                ></div>
            ))}
            <WandIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-blue-300" />
        </div>
        <span className="text-xl text-slate-300 tracking-wide">AI is thinking...</span>
        <style>{`
            @keyframes sonar-wave {
                from { transform: scale(0); opacity: 1; }
                to { transform: scale(1.5); opacity: 0; }
            }
        `}</style>
    </div>
);

export const AiSolutionFinder: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [solutions, setSolutions] = useState<AiSolution[] | null>(null);
    const [listening, setListening] = useState(false);

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = SpeechRecognition ? new SpeechRecognition() : null;

    const handleVoiceInput = () => {
        if (!recognition) {
            setError("Voice recognition is not supported in this browser.");
            return;
        }

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.start();

        recognition.onstart = () => setListening(true);
        recognition.onend = () => setListening(false);

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const speechResult = event.results[0][0].transcript;
            setQuery(prev => `${prev ? prev + ' ' : ''}${speechResult}`);
        };

        recognition.onerror = (event: any) => {
            setError(`Voice input error: ${event.error}`);
        };
    };

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            setError('Please describe your business problem.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setSolutions(null);

        const apiKey = process.env.REACT_APP_GEMINI_API_KEY || '';

        try {
            const result = await findSolutions(query, apiKey);
            if (result.length === 0) {
                setError("Our AI couldn't find a specific match for your request. Please try rephrasing your problem.");
            } else {
                setSolutions(result);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [query]);

    return (
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-600/20 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10">
                <div className="text-center">
                    <div className="inline-block p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                        <WandIcon className="mx-auto h-12 w-12 text-blue-400" />
                    </div>
                    <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">AI-Powered Solution Finder</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
                        Describe your business challenge or goal, and our AI consultant will recommend the perfect M Intergraph Systems product for you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto">
                    <textarea
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., 'We need to automate our sales reporting and connect our CRM to our marketing platform.'"
                        className="w-full h-40 p-5 bg-slate-800/70 border-2 border-slate-700 rounded-xl text-white text-lg placeholder-slate-400 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                        disabled={isLoading}
                        aria-label="Describe your business challenge"
                    />

                    <div className="flex items-center gap-4 mt-3">
                        <button
                            type="button"
                            onClick={handleVoiceInput}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition text-white ${listening ? 'bg-red-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                        >
                            <MicIcon />
                            {listening ? 'Listening...' : 'Speak'}
                        </button>

                        <button
                            type="submit"
                            className="flex-1 w-full flex items-center justify-center rounded-xl px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg hover:shadow-xl hover:shadow-blue-600/20 hover:scale-105 transform transition-all duration-300 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-lg disabled:scale-100 disabled:cursor-not-allowed animate-pulse-glow"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Analyzing...' : 'Find My Solution'}
                        </button>
                    </div>
                </form>

                <div className="mt-12 max-w-3xl mx-auto min-h-[150px] flex items-center justify-center">
                    {isLoading && <LoadingIndicator />}
                    {error && <p className="text-center text-red-300 bg-red-900/40 p-4 rounded-xl text-lg">{error}</p>}
                    {solutions && (
                        <div className="space-y-6 w-full">
                            <h3 className="text-2xl font-bold text-center text-white">Here are your recommended solutions:</h3>
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 animate-on-scroll is-visible backdrop-blur-sm"
                                    style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}
                                >
                                    <h4 className="flex items-center text-xl font-bold text-blue-400">
                                        <CheckCircleIcon className="h-7 w-7 mr-3" />
                                        {solution.productName}
                                    </h4>
                                    <p className="mt-3 pl-10 text-slate-300 text-base leading-relaxed">{solution.reasoning}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
