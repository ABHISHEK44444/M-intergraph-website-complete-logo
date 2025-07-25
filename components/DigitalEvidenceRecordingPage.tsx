

import React from 'react';
import {
    ShieldCheckIcon,
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    VideoCameraIcon,
    FolderLockIcon,
    ShareIcon,
    ScissorsIcon,
    CpuChipIcon,
    ServerStackIcon,
    CloudIcon
} from './IconComponents';

interface DigitalEvidenceRecordingPageProps {
    onNavigate: (path: string) => void;
}

const DetailCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <div className="mt-4 text-slate-600 text-lg leading-relaxed space-y-3">{children}</div>
    </div>
);

const FeatureListItem: React.FC<{children: React.ReactNode}> = ({children}) => (
    <li className="flex items-center text-base">
        <span className="text-blue-500 mr-2">■</span>
        {children}
    </li>
);

export const DigitalEvidenceRecordingPage: React.FC<DigitalEvidenceRecordingPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const coreFeatures = [
        { 
            icon: <VideoCameraIcon className="w-9 h-9" />, 
            title: "Multi-Source Capture", 
            description: <>
                <p>Seamlessly ingest data from:</p>
                <ul className="list-none pl-0 mt-2 space-y-1">
                    <FeatureListItem>Body-worn cameras</FeatureListItem>
                    <FeatureListItem>In-car video systems</FeatureListItem>
                    <FeatureListItem>Interview room devices</FeatureListItem>
                    <FeatureListItem>Mobile uploads and public submissions</FeatureListItem>
                </ul>
            </>
        },
        { 
            icon: <FolderLockIcon className="w-9 h-9" />, 
            title: "Immutable Chain of Custody", 
            description: <p>Every action—upload, access, edit, delete—is tracked in a tamper-proof audit log, ensuring admissibility and transparency.</p> 
        },
        { 
            icon: <CloudIcon className="w-9 h-9" />, 
            title: "Secure & Scalable Storage", 
            description: <>
                <p>Choose from:</p>
                <ul className="list-none pl-0 mt-2 space-y-1">
                    <FeatureListItem>Cloud-based</FeatureListItem>
                    <FeatureListItem>On-premise</FeatureListItem>
                    <FeatureListItem>Hybrid storage options</FeatureListItem>
                </ul>
                <p className="mt-2 text-base">All with end-to-end encryption and compliance with industry standards.</p>
            </>
        },
        { 
            icon: <CpuChipIcon className="w-9 h-9" />, 
            title: "AI-Powered Transcription & Analysis", 
            description: <>
                <ul className="list-none pl-0 space-y-1">
                    <FeatureListItem>Auto-transcribe interviews and recordings</FeatureListItem>
                    <FeatureListItem>Identify keywords, faces, objects</FeatureListItem>
                    <FeatureListItem>Speed up investigations using intelligent search</FeatureListItem>
                </ul>
            </>
        },
        { 
            icon: <ScissorsIcon className="w-9 h-9" />, 
            title: "Intelligent Redaction Tools", 
            description: <>
                <p>Effortlessly redact:</p>
                <ul className="list-none pl-0 mt-2 space-y-1">
                    <FeatureListItem>Faces</FeatureListItem>
                    <FeatureListItem>License plates</FeatureListItem>
                    <FeatureListItem>Personal identifiable information (PII)</FeatureListItem>
                </ul>
            </>
        },
        { 
            icon: <ShareIcon className="w-9 h-9" />, 
            title: "Secure Digital Sharing", 
            description: <>
                <p>Digitally share evidence with:</p>
                <ul className="list-none pl-0 mt-2 space-y-1">
                    <FeatureListItem>Prosecutors</FeatureListItem>
                    <FeatureListItem>External agencies</FeatureListItem>
                </ul>
                <p className="mt-2 text-base">Via controlled, trackable, and encrypted portals—no physical media required.</p>
            </>
        },
    ];

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1573210332308-589f2d842e05?q=80&w=1974&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Solution: Digital Evidence Management</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Digital Evidence Recording & Management
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           Securely record, store, and manage digital evidence—from the field to the courtroom—with unmatched integrity and reliability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 sm:py-24 bg-white">
                 <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The Digital Evidence Imperative</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                               In today’s law enforcement landscape, digital evidence plays a central role. From body-worn cameras, interview room footage, to CCTV recordings, agencies face an ever-growing challenge of managing vast volumes of sensitive video and audio content.
                            </p>
                            <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                               Ensuring the security, integrity, and accessibility of this data is not just a priority—it’s a necessity.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop"
                                alt="Secure data servers representing digital evidence storage"
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
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Integrated Digital Evidence Platform</h2>
                        <p className="mt-6 text-xl text-slate-600">A unified, end-to-end platform designed for the entire digital evidence lifecycle, supporting justice delivery and public accountability.</p>
                    </div>
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreFeatures.map((item, index) => (
                             <div key={item.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <DetailCard icon={item.icon} title={item.title}>
                                    {item.description}
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop" alt="A police officer reviewing data on a tablet" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover" loading="lazy" decoding="async" />
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <ShieldCheckIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Key Benefits for Law Enforcement Agencies</h3>
                             <ul className="mt-8 space-y-4 text-lg text-slate-700 font-medium">
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0"/> Builds Public Trust with increased transparency</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0"/> Strengthens Prosecution Cases with reliable, accessible evidence</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0"/> Saves Time by reducing administrative overhead</li>
                                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0"/> Ensures Compliance with data retention and privacy policies</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-slate-800 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Empower your officers. Accelerate justice. Strengthen community trust.</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
                       Let’s transform digital evidence management—securely and smartly.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                        Request a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};
