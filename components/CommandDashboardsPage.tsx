

import React from 'react';
import {
    CpuChipIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    MapIcon,
    ChartPieIcon,
    ShieldCheckIcon,
    ServerStackIcon
} from './IconComponents';

interface CommandDashboardsPageProps {
    onNavigate: (path: string) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-4 text-slate-600 text-lg leading-relaxed">{children}</p>
    </div>
);


export const CommandDashboardsPage: React.FC<CommandDashboardsPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const coreFeatures = [
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Real-time Data Aggregation", description: "Integrates data from CCTNS, Dial 112, GPS trackers, surveillance feeds, and more into one unified view." },
        { icon: <MapIcon className="w-9 h-9" />, title: "Geospatial Intelligence", description: "Visualize live incidents, officer locations, crime trends, and predictive hotspots on an interactive map." },
        { icon: <ChartPieIcon className="w-9 h-9" />, title: "Customizable Role-Based Dashboards", description: "Tailor dashboards for command staff, analysts, and dispatchers to provide the most relevant information for their roles." },
        { icon: <LightBulbIcon className="w-9 h-9" />, title: "Predictive Analytics Engine", description: "Leverage AI and machine learning to forecast where and when crimes are likely to occur, enabling proactive resource allocation." },
        { icon: <ShieldCheckIcon className="w-9 h-9" />, title: "Live Resource Management", description: "Monitor the status and location of all on-duty personnel and vehicles for efficient and effective dispatch." },
        { icon: <CpuChipIcon className="w-9 h-9" />, title: "AI-Powered Anomaly Detection", description: "Automatically get alerted to unusual patterns or sudden spikes in activity that may require immediate attention." },
    ];

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1617957689187-99d0121115e3?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-slate-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: Command & Control</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Command Dashboards & Predictive Analytics
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           Transforming data into actionable intelligence. Our platform provides a unified command view for real-time situational awareness and proactive policing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">From Reactive to Proactive Policing</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                               Modern law enforcement agencies are inundated with data from countless sources. The challenge isn't the lack of information, but the ability to synthesize it into a clear, actionable picture. Our Unified Command Platform solves this by breaking down data silos and using AI to uncover insights that drive intelligent action.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                                alt="A modern command center with multiple data dashboards"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                                loading="lazy" decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 sm:py-28 bg-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Platform Features</h2>
                    </div>
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <FeatureCard icon={item.icon} title={item.title}>
                                    <p>{item.description}</p>
                                </FeatureCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Predictive Policing Section */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Advanced analytics dashboard" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover" loading="lazy" decoding="async" />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">The Power of Predictive Analytics</h3>
                             <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                Our platform moves beyond historical reporting to actively forecast future events. By analyzing historical crime data, environmental factors, and real-time inputs, our AI models can:
                            </p>
                             <ul className="mt-6 space-y-4 text-lg text-slate-700 font-medium">
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/>Identify and rank high-risk areas for patrols.</li>
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/>Suggest optimal resource allocation to deter crime.</li>
                                <li className="flex items-start"><CheckCircleIcon className="h-7 w-7 mr-4 text-blue-500 flex-shrink-0"/>Uncover non-obvious patterns and criminal networks.</li>
                             </ul>
                             <p className="mt-4 text-base text-slate-500 italic">We are committed to ethical AI, employing rigorous testing to mitigate bias and ensure our tools are used to build fairer, safer communities.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-slate-800 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Achieve True Situational Awareness</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
                       Empower your command staff with the tools they need to make smarter, faster, and more effective decisions. Contact us for a live demonstration of our Unified Command Platform.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                        Request a Platform Demo
                    </a>
                </div>
            </section>
        </main>
    );
};