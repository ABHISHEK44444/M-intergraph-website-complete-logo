
import React from 'react';
import {
    UsersIcon,
    CheckCircleIcon,
    BriefcaseIcon,
    LightBulbIcon,
    ServerStackIcon,
    GlobeAltIcon,
    ClipboardDocumentCheckIcon
} from './IconComponents';

interface RetailItPageProps {
    onNavigate: (path: string) => void;
}

const SectionTitle: React.FC<{ title: string; subtitle?: string; }> = ({ title, subtitle }) => (
    <div className="text-center max-w-4xl mx-auto animate-on-scroll">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-6 text-xl text-slate-600">{subtitle}</p>}
    </div>
);

const DetailCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 mb-6 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <div className="mt-4 text-slate-600 text-lg leading-relaxed space-y-4">{children}</div>
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-lg text-slate-700">{children}</span>
    </li>
);

export const RetailItPage: React.FC<RetailItPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    const highlights = [
        { icon: <GlobeAltIcon className="w-9 h-9" />, title: "365-Day Network Operations Center (NOC)", description: "Proactive preventive maintenance services. No holidays, no sick leaves—we're always available. Your business doesn't stop, and neither do we." },
        { icon: <ServerStackIcon className="w-9 h-9" />, title: "Enterprise Monitoring System", description: "No need for expensive enterprise monitoring tools. Our inclusive services come with monitoring and management tools." },
        { icon: <ClipboardDocumentCheckIcon className="w-9 h-9" />, title: "Ticketing & CIO Dashboard", description: "Our ITIL-based ticketing system and CIO Dashboard provide full visibility and control over service performance and SLAs, ensuring transparency and accountability." }
    ];

    return (
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-slate-800 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Service: Retail IT Management</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            360° Retail IT Solutions
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           Streamlining operations and enhancing customer experiences with specialized IT management for the dynamic retail sector.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Seamless Operations for Modern Retail</h2>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                              In the fast-paced retail industry, technology is the backbone of success. We provide end-to-end IT management to ensure your stores, warehouses, and online platforms run smoothly, from point-of-sale systems to supply chain logistics.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <img 
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2134&auto=format&fit=crop"
                                alt="Modern retail store with digital displays"
                                className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
                                loading="lazy" decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Highlights Section */}
            <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Our Retail IT Management Highlights" />
                    <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((service, index) => (
                             <div key={service.title} className="animate-on-scroll" style={{'--animation-delay': `${(index % 3) * 0.1}s`} as React.CSSProperties}>
                                <DetailCard icon={service.icon} title={service.title}>
                                    <p>{service.description}</p>
                                </DetailCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 sm:py-28 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
                        <div className="relative order-last lg:order-first animate-on-scroll">
                           <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop" alt="IT professionals collaborating" className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"/>
                        </div>
                        <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <LightBulbIcon className="h-16 w-16 mb-6 text-blue-500" />
                            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Why M Intergraph for Retail?</h3>
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                We understand the unique challenges of the retail sector. Our services are designed to:
                            </p>
                            <ul className="mt-6 space-y-4">
                                <ListItem>Maximize uptime for critical systems like POS and inventory management.</ListItem>
                                <ListItem>Secure transactions and customer data against modern threats.</ListItem>
                                <ListItem>Provide the data insights you need to stay competitive and agile.</ListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Elevate Your Retail Experience</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                       Let us handle your IT, so you can focus on what you do best: serving your customers.
                    </p>
                    <a href="#" onClick={handleEnquireClick} className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform">
                        Get a Retail IT Consultation
                    </a>
                </div>
            </section>
        </main>
    );
};
