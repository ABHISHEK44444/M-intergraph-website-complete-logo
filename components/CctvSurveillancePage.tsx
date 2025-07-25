
import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    CpuChipIcon,
    VideoCameraIcon,
    ShieldCheckIcon,
    CloudIcon,
    ArrowPathIcon,
    ComputerDesktopIcon,
    LockClosedIcon,
    EnvelopeIcon,
    ServerStackIcon,
    CreditCardIcon,
    DevicePhoneMobileIcon
} from './IconComponents';

interface CctvSurveillancePageProps {
    onNavigate: (path: string) => void;
}

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg text-center flex flex-col items-center justify-center">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-4 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
);

const OfferingCard: React.FC<{ icon: React.ReactNode; title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="text-blue-600 w-12 h-12 mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">{description}</p>
    </div>
);

const TechItem: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-slate-200 py-2 px-4 rounded-full text-center">
        <p className="font-semibold text-sm text-slate-700">{name}</p>
    </div>
);

export const CctvSurveillancePage: React.FC<CctvSurveillancePageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1617103997321-229263f94025?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Empowering Smart Surveillance
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Leverage next-generation CCTV & AI-powered monitoring systems to protect, automate, and scale your operations.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <button onClick={handleEnquireClick} className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                                Request a Demo
                            </button>
                             <button onClick={handleEnquireClick} className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-105 transform">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 1: Why Digital Surveillance Matters */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Why Digital Surveillance Matters</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           As part of our commitment to digital transformation, we offer cutting-edge CCTV and AI-powered monitoring systems that go far beyond traditional surveillance. Today’s smart businesses require real-time insights, predictive alerts, and 24x7 intelligent monitoring — all integrated seamlessly into your infrastructure.
                        </p>
                    </div>
                     <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
                        <BenefitCard icon={<VideoCameraIcon className="w-8 h-8"/>} title="24/7 Remote Surveillance"/>
                        <BenefitCard icon={<ShieldCheckIcon className="w-8 h-8"/>} title="Intrusion Alerts"/>
                        <BenefitCard icon={<UsersIcon className="w-8 h-8"/>} title="Face & Object Recognition"/>
                        <BenefitCard icon={<CloudIcon className="w-8 h-8"/>} title="Centralized Monitoring"/>
                        <BenefitCard icon={<EnvelopeIcon className="w-8 h-8"/>} title="Auto Reports"/>
                        <BenefitCard icon={<ServerStackIcon className="w-8 h-8"/>} title="Highly Scalable"/>
                    </div>
                </div>
            </section>

            {/* Section 2: Core Offerings */}
            <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-200">
                 <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Core Offerings</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <OfferingCard icon={<VideoCameraIcon className="w-10 h-10"/>} title="CCTV Camera Installation" description="High-resolution IP and analog cameras for indoor & outdoor security."/>
                        <OfferingCard icon={<CpuChipIcon className="w-10 h-10"/>} title="AI-Based Monitoring" description="Real-time detection of suspicious activity using machine learning."/>
                        <OfferingCard icon={<UsersIcon className="w-10 h-10"/>} title="Facial Recognition" description="Identify and track individuals across multiple feeds securely."/>
                        <OfferingCard icon={<CreditCardIcon className="w-10 h-10"/>} title="License Plate Recognition (ANPR)" description="Capture and process vehicle plates with AI precision."/>
                        <OfferingCard icon={<ShieldCheckIcon className="w-10 h-10"/>} title="Smart Alerts & Notifications" description="Get instant mobile alerts on predefined events."/>
                        <OfferingCard icon={<CloudIcon className="w-10 h-10"/>} title="Cloud Storage & Backup" description="Secure video archiving with encrypted access."/>
                        <OfferingCard icon={<ComputerDesktopIcon className="w-10 h-10"/>} title="Control Room Setup" description="End-to-end control room design, hardware, and software integration."/>
                        <OfferingCard icon={<DevicePhoneMobileIcon className="w-10 h-10"/>} title="Mobile App Access" description="Monitor live feeds and alerts on the go."/>
                    </div>
                </div>
            </section>
            
            {/* Section 5: Tech Stack */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Technology Stack & Integration</h2>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-center text-slate-700 mb-4">Hardware</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <TechItem name="Hikvision"/> <TechItem name="CP Plus"/> <TechItem name="Dahua"/> <TechItem name="Bosch"/> <TechItem name="Axis"/>
                            </div>
                        </div>
                         <div>
                            <h3 className="text-xl font-bold text-center text-slate-700 mb-4">AI Engines & Cloud</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                               <TechItem name="TensorFlow"/> <TechItem name="OpenCV"/> <TechItem name="AWS Rekognition"/> <TechItem name="Azure"/> <TechItem name="Google Cloud"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Security */}
            <section className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="relative animate-on-scroll">
                             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2134&auto=format&fit=crop" alt="Secure data center" className="rounded-2xl shadow-xl" loading="lazy" decoding="async" />
                        </div>
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Data Security & Compliance</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                              Your surveillance data is encrypted and stored in compliance with leading standards such as ISO/IEC 27001, GDPR, and the IT Act 2000 (India). Our systems are designed to maintain privacy while ensuring maximum protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Section 7: Final CTA */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Let’s Secure Your Premises – Together</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                      Ready to future-proof your infrastructure with AI-enabled surveillance?
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button onClick={handleEnquireClick} className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                            Schedule Free Site Survey
                        </button>
                         <button onClick={handleEnquireClick} className="inline-block bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-600 hover:shadow-xl hover:scale-105 transform">
                            Contact Sales Team
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};