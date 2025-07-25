
import React from 'react';
import {
    ShieldCheckIcon,
    UsersIcon,
    KeyIcon,
    EnvelopeIcon,
    LockClosedIcon,
    ServerStackIcon
} from './IconComponents';

interface CybersecurityPageProps {
    onNavigate: (path: string) => void;
}

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; path: string; onNavigate: (path: string) => void; }> = ({ icon, title, description, path, onNavigate }) => (
    <div 
        className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col cursor-pointer"
        onClick={() => onNavigate(path)}
    >
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 text-base leading-relaxed flex-grow">{description}</p>
        <span className="mt-4 text-blue-600 font-bold self-start">Learn More &rarr;</span>
    </div>
);

export const CybersecurityPage: React.FC<CybersecurityPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const services = [
        { icon: <ShieldCheckIcon className="w-9 h-9" />, title: "Unified Threat Management (UTMS)", path: '#/utms', description: "Consolidate multiple critical security features into a single, efficient, and cost-effective solution." },
        { icon: <KeyIcon className="w-9 h-9" />, title: "Identity Access Management (IAMS)", path: '#/iams', description: "Empower secure, compliant, and efficient access to your critical system resources across the enterprise." },
        { icon: <EnvelopeIcon className="w-9 h-9" />, title: "Mail Security Solution", path: '#/mail-security', description: "Safeguard your most critical communication channel against spam, phishing, and advanced malware." },
        { icon: <LockClosedIcon className="w-9 h-9" />, title: "Data Leakage Prevention (DLPS)", path: '#/dlps', description: "Protect your critical information by controlling data usage, transfer, and removal to mitigate risks." },
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Database Security Solution (DSS)", path: '#/dss', description: "Safeguard your most valuable assets with comprehensive protection against internal and external threats." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Cybersecurity & Compliance
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Protecting your digital assets with a multi-layered, proactive security posture. We help you build a resilient and compliant enterprise.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">A Proactive Approach to Digital Defense</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                               In today's threat landscape, a reactive security strategy is not enough. We partner with you to build a comprehensive security framework that anticipates threats, protects critical data, and ensures regulatory compliance, giving you the confidence to innovate and grow.
                            </p>
                            <div className="mt-10">
                                <a href="#" onClick={handleEnquireClick} className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform">
                                    Talk to an Expert
                                </a>
                            </div>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop"
                                alt="Secure data center with glowing servers"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                                loading="lazy" decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Consulting Services Section */}
            <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Security Services Catalog</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           From the perimeter to the core, we offer a complete suite of security solutions to protect your organization from evolving threats.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                           <div key={index} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <ServiceCard icon={service.icon} title={service.title} description={service.description} path={service.path} onNavigate={onNavigate} />
                           </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Strengthen Your Defenses?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Let's discuss how our cybersecurity and compliance services can protect your business and build trust with your customers.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Schedule a Security Briefing
                    </a>
                </div>
            </section>
        </main>
    );
};