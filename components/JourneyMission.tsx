
import React from 'react';
import { RocketIcon, TargetIcon } from './IconComponents';

export const JourneyMission: React.FC = () => {
    return (
        <section id="journey" className="py-20 sm:py-28 lg:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Our Foundation</h2>
                    <p className="mt-4 text-xl text-slate-600">
                        Two decades of growth, driven by an unwavering mission to deliver excellence.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
                    
                    {/* Our Journey Card */}
                    <div className="animate-on-scroll">
                        <div className="bg-white p-10 rounded-3xl flex flex-col h-full border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center space-x-6">
                               <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                                 <RocketIcon className="h-9 w-9 text-white" />
                               </div>
                               <h3 className="text-3xl font-bold text-slate-900">Our Journey</h3>
                            </div>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed flex-grow">
                                With over two decades of stable growth and profitability, M Intergraph has become a trusted partner for businesses worldwide. Our presence extends across India, with 70+ support locations.
                            </p>
                        </div>
                    </div>

                    {/* Our Mission Card */}
                    <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                        <div className="bg-slate-900 text-white p-10 rounded-3xl flex flex-col h-full relative overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/30 rounded-full blur-3xl opacity-70"></div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center space-x-6">
                                   <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                                    <TargetIcon className="h-9 w-9 text-white" />
                                   </div>
                                   <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                                </div>
                                <p className="mt-6 text-lg text-slate-300 leading-relaxed flex-grow">
                                    To provide quality support services and offer end-to-end IT solutions using best-in-class products, tailored to meet our customers' unique requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};