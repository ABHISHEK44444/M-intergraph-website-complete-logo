
import React from 'react';
import {
    UsersIcon,
    ShieldCheckIcon,
    LockClosedIcon,
    ArchiveBoxIcon,
    PhoneIcon,
    CpuChipIcon
} from './IconComponents';

interface LawEnforcementPageProps {
    onNavigate: (path: string) => void;
}

// Custom SolutionCard for this page's theme
const SolutionCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; onClick?: () => void; isFeatured?: boolean; }> = ({ icon, title, children, onClick, isFeatured = false }) => {
    // Featured Card (dark theme)
    if (isFeatured) {
        return (
            <div 
                className="bg-slate-800 text-white p-8 rounded-2xl border border-slate-700 shadow-2xl h-full flex flex-col transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:border-blue-500"
                onClick={onClick}
                role="button"
                aria-label={title}
                onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick(); }}
                tabIndex={onClick ? 0 : undefined}
            >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">{icon}</div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <div className="mt-4 text-slate-300 text-lg leading-relaxed space-y-4 flex-grow">
                    {children}
                </div>
                {onClick && <span className="mt-4 text-blue-400 font-bold self-start">Learn More &rarr;</span>}
            </div>
        );
    }
    
    // Standard Card
    return (
        <div 
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl h-full flex flex-col transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
            onClick={onClick}
            role="button"
            aria-label={title}
            onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick(); }}
            tabIndex={onClick ? 0 : undefined}
        >
            <div className="flex-shrink-0 w-16 h-16 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6">{icon}</div>
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <div className="mt-4 text-slate-600 text-lg leading-relaxed space-y-4 flex-grow">
                {children}
            </div>
            {onClick && <span className="mt-4 text-blue-600 font-bold self-start">Learn More &rarr;</span>}
        </div>
    );
};


export const LawEnforcementPage: React.FC<LawEnforcementPageProps> = ({ onNavigate }) => {

    const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onNavigate('contact');
    };

    return (
        <main className="bg-slate-100">
            {/* Hero Section */}
            <section
                className="relative bg-slate-900 flex items-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1570872626485-d807a732c322?q=80&w=1974&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Industry Solutions</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                            Digital Police & Public Safety
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                           Modernizing law enforcement with intelligent, integrated, and secure IT solutions that enhance efficiency, transparency, and officer safety.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Core Solutions Section */}
            <section className="py-20 sm:py-24 bg-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Key Public Safety Solutions</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           We provide a suite of solutions designed to meet the unique challenges of modern policing and public safety organizations.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        <div className="animate-on-scroll">
                            <SolutionCard
                                icon={<ArchiveBoxIcon className="w-9 h-9" />}
                                title="Digital Malkhana (Evidence Tracking)"
                                onClick={() => onNavigate('#/malkhana-management')}
                                isFeatured={true}
                            >
                                <p>Our flagship RFID-based system transforms evidence management. Ensure a secure chain of custody, get state-wide visibility, and enable real-time monitoring of all seized items. Drastically reduce manual errors and save time.</p>
                            </SolutionCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <SolutionCard
                                icon={<LockClosedIcon className="w-9 h-9" />}
                                title="Digital Evidence Recording"
                                onClick={() => onNavigate('#/digital-evidence-recording')}
                            >
                                <p>Securely capture, store, and manage digital evidence from various sources, including body cams and interview rooms. Our NVR solutions and chain-of-custody protocols ensure evidence integrity from collection to courtroom.</p>
                            </SolutionCard>
                        </div>
                         <div className="animate-on-scroll">
                            <SolutionCard
                                icon={<PhoneIcon className="w-9 h-9" />}
                                title="Dial 112 & CCTNS Integration"
                                onClick={() => onNavigate('#/dial-112-cctns')}
                            >
                                <p>We specialize in integrating emergency response systems (like Dial 112) with the Crime and Criminal Tracking Network & Systems (CCTNS), such as RajCop, for seamless data flow and faster, more informed responses.</p>
                            </SolutionCard>
                        </div>
                         <div className="animate-on-scroll" style={{'--animation-delay': '0.1s'} as React.CSSProperties}>
                            <SolutionCard
                                icon={<CpuChipIcon className="w-9 h-9" />}
                                title="Command Dashboards & Predictive Analytics"
                                onClick={() => onNavigate('#/command-dashboards')}
                            >
                                <p>Aggregate data from multiple systems into a single command dashboard for real-time situational awareness. Leverage AI and predictive analytics to identify crime hotspots and optimize resource deployment.</p>
                            </SolutionCard>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 sm:py-24 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4">
                     <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Crime Record Digitization</h2>
                        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           Transition from paper-based records to a secure, searchable digital archive. Our digitization services help police forces to unlock historical data, improve investigation efficiency, and ensure long-term preservation of critical records.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="bg-slate-800 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 text-slate-400" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Partnering for a Safer Future</h2>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
                       We are committed to providing law enforcement agencies with the technology they need to operate more effectively and build safer communities.
                    </p>
                    <button onClick={handleEnquireClick} className="mt-10 inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transform">
                        Contact Public Safety Team
                    </button>
                </div>
            </section>
        </main>
    );
};
