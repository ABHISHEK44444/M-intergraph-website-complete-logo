
import React from 'react';
import {
    CloudIcon,
    UsersIcon,
    BriefcaseIcon,
    CpuChipIcon,
    ScaleIcon,
    RectangleGroupIcon,
} from './IconComponents';

interface CloudModernizationPageProps {
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

export const CloudModernizationPage: React.FC<CloudModernizationPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const services = [
        { icon: <BriefcaseIcon className="w-9 h-9" />, title: "Consulting Overview", path: '#/consulting-overview', description: "Get a high-level view of our strategic IT consulting and advisory services that drive business performance." },
        { icon: <CloudIcon className="w-9 h-9" />, title: "Cloud Advisory", path: '#/cloud-advisory', description: "Develop robust cloud strategies for private, public, or hybrid models to unlock business value." },
        { icon: <CpuChipIcon className="w-9 h-9" />, title: "Core Infra Optimization", path: '#/core-infra-optimization', description: "Enhance security, reduce TCO, and maximize the business value of your IT investments with our proven model." },
        { icon: <ScaleIcon className="w-9 h-9" />, title: "Capacity Planning & Advisory", path: '#/capacity-planning', description: "Ensure your infrastructure can meet changing demands, optimizing resource utilization for future growth." },
        { icon: <CloudIcon className="w-9 h-9" />, title: "Cloud Computing Solutions (CCS)", path: '#/ccs', description: "Unlock agility, efficiency, and innovation by leveraging the power of our cloud computing solutions." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Cloud & Platform Modernization
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                            Navigate your cloud journey with confidence. We provide the strategy, services, and solutions to modernize your infrastructure and accelerate innovation.
                        </p>
                    </div>
                </div>
            </section>
            
             <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Modernize, Innovate, and Scale</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                             Embracing the cloud is essential for modern businesses seeking agility, scalability, and a competitive edge. We provide expert guidance and hands-on support to help you modernize legacy systems, migrate to the cloud, and build a resilient, future-proof platform for growth.
                            </p>
                            <div className="mt-10">
                                <a href="#" onClick={handleEnquireClick} className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform">
                                    Start Your Cloud Journey
                                </a>
                            </div>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop"
                                alt="Abstract representation of cloud computing and data flow"
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
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Cloud & Modernization Services</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           From strategic planning to implementation, our services cover every aspect of your cloud and platform modernization needs.
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
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Modernize Your Platform?</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Let's build a cloud strategy that drives efficiency, agility, and growth for your business.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Schedule a Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};
