

import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    LightBulbIcon,
    CpuChipIcon,
    CodeBracketIcon,
    RocketIcon,
    ArrowTrendingUpIcon,
    ShieldCheckIcon,
    RectangleGroupIcon
} from './IconComponents';

interface MintAppPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle?: string; className?: string; }> = ({ title, subtitle, className }) => (
    <div className={`text-center max-w-4xl mx-auto animate-on-scroll ${className}`}>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-6 text-xl text-slate-600">{subtitle}</p>}
    </div>
);

const ProcessCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-4 text-slate-600 text-lg leading-relaxed">{children}</p>
    </div>
);

const TechItem: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-slate-100 py-3 px-5 rounded-lg text-center">
        <p className="font-semibold text-slate-700">{name}</p>
    </div>
);

export const MintAppPage: React.FC<MintAppPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-900 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131c5a9?q=80&w=2020&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-slate-900/70"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">MINT = M Intergraph Intelligent Nimble Technology</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           AI-Augmented Custom Software
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           MINT is our revolutionary approach to software development, blending human expertise with artificial intelligence to deliver smart, custom digital transformation solutions faster than ever before.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Philosophy Section */}
            <section className="py-20 sm:py-24 bg-white">
                 <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">The MINT Philosophy: Intelligent by Design</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                               We believe AI should empower, not replace, human creativity. Our MINT framework pairs seasoned developers with intelligent tools to accelerate every stage of the development lifecycle. This synergy allows us to build higher-quality, more reliable software while significantly reducing time-to-market for our clients.
                            </p>
                            <div className="mt-10">
                                <button onClick={handleEnquireClick} className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform">
                                    Build with MINT
                                </button>
                            </div>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop"
                                alt="A metallic robot hand and a human hand reaching towards each other, symbolizing the collaboration between AI and humanity."
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                                loading="lazy" decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How MINT Works Section */}
            <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our AI-Powered Development Lifecycle" />
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="animate-on-scroll" style={{'--animation-delay': '0s'} as React.CSSProperties}><ProcessCard icon={<LightBulbIcon className="w-9 h-9" />} title="1. Strategy & Design">AI helps analyze requirements and suggest system architectures, ensuring a solid foundation.</ProcessCard></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}><ProcessCard icon={<CodeBracketIcon className="w-9 h-9" />} title="2. Accelerated Development">AI generates boilerplate code and automates unit tests, letting our developers focus on your core business logic.</ProcessCard></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}><ProcessCard icon={<ShieldCheckIcon className="w-9 h-9" />} title="3. Intelligent Testing">AI-driven tools identify edge cases and predict potential bugs, ensuring robust, high-quality software.</ProcessCard></div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.3s'} as React.CSSProperties}><ProcessCard icon={<RocketIcon className="w-9 h-9" />} title="4. Deployment & Optimization">Automated CI/CD pipelines ensure rapid deployment, while AI monitors performance for continuous optimization.</ProcessCard></div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-20 sm:py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Core Capabilities" subtitle="Leverage MINT to build powerful solutions tailored to your needs."/>
                     <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <div className="animate-on-scroll" style={{'--animation-delay': '0s'} as React.CSSProperties}>
                            <ProcessCard icon={<CpuChipIcon className="w-9 h-9" />} title="Custom Application Development">
                                From web to mobile, we build scalable, secure, and high-performance applications that perfectly match your unique business workflows.
                            </ProcessCard>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <ProcessCard icon={<ArrowTrendingUpIcon className="w-9 h-9" />} title="Legacy System Modernization">
                                Breathe new life into your existing systems. We refactor, re-platform, or rebuild legacy applications using modern architectures and technologies.
                            </ProcessCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.2s'} as React.CSSProperties}>
                            <ProcessCard icon={<RectangleGroupIcon className="w-9 h-9" />} title="API & Third-Party Integrations">
                                Seamlessly connect your software with other systems. We design and build robust APIs and integrate with third-party services to create a unified digital ecosystem.
                            </ProcessCard>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Case Study Section */}
            <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8">
                        <div className="animate-on-scroll lg:order-last">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data dashboard and analytics" className="rounded-2xl shadow-lg" loading="lazy" decoding="async" />
                        </div>
                        <div className="animate-on-scroll">
                             <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">Case Study</h3>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Funnel + Tender Management System</h2>
                             <div className="mt-6 text-lg text-slate-600 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-800">The Challenge:</h4>
                                    <p>A complex, manual tender process led to inefficiencies, missed opportunities, and a lack of data-driven insights for bidding strategies.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">The MINT Solution:</h4>
                                    <p>We built a comprehensive system using MINT. AI analyzed tender documents to extract key requirements, automated checklist generation, and provided predictive insights on win probability.</p>
                                </div>
                                 <div>
                                    <h4 className="font-semibold text-slate-800">The Results:</h4>
                                    <p>Achieved 30% faster submission times, improved bid accuracy, and provided the management with a dashboard to analyze win/loss ratios effectively.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Technology Section */}
             <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Technology We Master" />
                     <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-on-scroll">
                        <TechItem name="React" />
                        <TechItem name="Node.js" />
                        <TechItem name="Python" />
                        <TechItem name="Java" />
                        <TechItem name="PostgreSQL" />
                        <TechItem name="MongoDB" />
                        <TechItem name="Docker" />
                        <TechItem name="Kubernetes" />
                        <TechItem name="AWS" />
                        <TechItem name="Azure" />
                        <TechItem name="GCP" />
                        <TechItem name="Flutter" />
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-slate-900">
                <div className="container mx-auto px-4 py-20 text-center text-white">
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Build Your Intelligent Solution?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
                       Let's discuss how our MINT development framework can accelerate your digital transformation and deliver tangible business value.
                    </p>
                    <button onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                        Start Your MINT Project
                    </button>
                </div>
            </section>
        </main>
    );
};