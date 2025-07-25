

import React from 'react';
import {
    ServerStackIcon,
    UsersIcon,
    GlobeAltIcon,
    ComputerDesktopIcon,
    LeafIcon,
    ChartBarIcon,
} from './IconComponents';

interface ManagedITPageProps {
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

export const ManagedITPage: React.FC<ManagedITPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const services = [
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Server Management", path: '#/server-management', description: "Holistic 360° services to enhance your IT infrastructure, from proactive monitoring to patch management." },
        { icon: <ComputerDesktopIcon className="w-9 h-9" />, title: "Desktop Management", path: '#/desktop-management', description: "Comprehensive services to manage security, applications, and performance for your entire desktop fleet." },
        { icon: <ChartBarIcon className="w-9 h-9" />, title: "Retail IT Management", path: '#/retail-it-management', description: "Specialized IT management for the retail sector to enhance customer experience and operational efficiency." },
        { icon: <UsersIcon className="w-9 h-9" />, title: "Outsourcing", path: '#/outsourcing', description: "Comprehensive outsourcing solutions including flexible staffing and payroll services to streamline your operations." },
        { icon: <LeafIcon className="w-9 h-9" />, title: "GoGreen IT", path: '#/gogreen', description: "Sustainable IT solutions to reduce your environmental footprint and energy costs through power management." },
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           Managed IT & NOC Services
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Entrust your IT infrastructure to us. Our managed services ensure your systems are running at peak performance, security, and reliability, so you can focus on your core business.
                        </p>
                    </div>
                </div>
            </section>
            
             <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Your Partner in Proactive IT Management</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                              Focus on your strategic goals while we handle the complexities of your IT infrastructure. Our 24/7 Network Operations Center (NOC) and team of experts provide continuous monitoring, proactive maintenance, and rapid support to ensure your business runs smoothly and securely.
                            </p>
                            <div className="mt-10">
                                <a href="#" onClick={handleEnquireClick} className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform">
                                    Get a Managed Services Quote
                                </a>
                            </div>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                                alt="Team of IT professionals managing networks"
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
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Managed Services Catalog</h2>
                        <p className="mt-6 text-xl text-slate-600">
                           We provide end-to-end management of your IT environment, backed by our 24/7 Network Operations Center (NOC).
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
                    <h2 className="text-4xl font-extrabold tracking-tight">Let Us Manage Your IT, So You Can Manage Your Business</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                        Discover the peace of mind that comes with proactive, expert IT management. Contact us to learn more.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Enquire Now
                    </a>
                </div>
            </section>
        </main>
    );
};