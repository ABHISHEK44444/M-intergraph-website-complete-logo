

import React from 'react';
import {
    PhoneArrowUpRightIcon,
    ServerStackIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    ArrowPathIcon,
    ShieldCheckIcon,
    CpuChipIcon
} from './IconComponents';

interface Dial112CctnsPageProps {
    onNavigate: (path: string) => void;
}

const WorkflowStep: React.FC<{ number: number; title: string; children: React.ReactNode; }> = ({ number, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 flex flex-col items-center mr-6">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">{number}</div>
            <div className="w-1 h-24 bg-blue-200 mt-2"></div>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-lg text-slate-600 leading-relaxed">{children}</p>
        </div>
    </div>
);


export const Dial112CctnsPage: React.FC<Dial112CctnsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: System Integration</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Dial 112 & CCTNS Integration
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           Creating a unified ecosystem for faster, more informed emergency response by bridging the gap between citizen-facing services and core police record systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Challenge of Siloed Systems</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                               Emergency response systems (like Dial 112) and police record systems (like CCTNS) often operate in isolation. This disconnect leads to manual data entry, delayed information access, and slower response times. Our integration platform eliminates these silos, creating a seamless flow of information.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2060&auto=format&fit=crop"
                                alt="Emergency dispatch operator working at a console"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                                loading="lazy" decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Workflow Section */}
            <section className="py-20 sm:py-28 bg-slate-100">
                <div className="container mx-auto px-4">
                     <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">A Connected Response Workflow</h2>
                    </div>
                    <div className="mt-16 max-w-3xl mx-auto">
                        <div className="animate-on-scroll">
                            <WorkflowStep number={1} title="Emergency Call Received">
                                A citizen's call to Dial 112 is received at the Public Safety Answering Point (PSAP). Our platform is instantly triggered.
                            </WorkflowStep>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <WorkflowStep number={2} title="Instant Context from CCTNS">
                                Our integration engine queries CCTNS in real-time for relevant data based on the caller's number or location (e.g., prior incidents, known persons).
                            </WorkflowStep>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <WorkflowStep number={3} title="Automated Incident Creation">
                                As the call is dispatched, an initial event or FIR is automatically created in CCTNS with all available data, eliminating manual entry and potential errors.
                            </WorkflowStep>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.3s'} as React.CSSProperties}>
                             <div className="flex items-start">
                                <div className="flex-shrink-0 flex flex-col items-center mr-6">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Informed Field Response</h3>
                                    <p className="mt-2 text-lg text-slate-600 leading-relaxed">Dispatched officers receive the CCTNS incident details on their mobile terminals instantly, providing them with critical context before they arrive on scene.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2134&auto=format&fit=crop" alt="Control room with multiple data screens" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover" loading="lazy" decoding="async" />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <ShieldCheckIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Benefits of a Unified System</h3>
                             <ul className="mt-8 space-y-5 text-lg text-slate-700 font-medium">
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/><strong>Faster Response Times:</strong> Eliminates delays caused by manual information relay and data entry.</li>
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/><strong>Improved Officer Safety:</strong> Provides officers with crucial historical context and situational awareness.</li>
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/><strong>Enhanced Data Accuracy:</strong> Reduces human error by automating data transfer between systems.</li>
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/><strong>Streamlined Operations:</strong> Creates a single source of truth for incidents, simplifying reporting and analysis.</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-slate-800 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Create Your Connected Command Center</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
                       Our expertise in public safety systems and API integration makes us the ideal partner to connect your critical infrastructure. Let's build a safer, more efficient response system together.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                        Discuss Your Integration Needs
                    </a>
                </div>
            </section>
        </main>
    );
};