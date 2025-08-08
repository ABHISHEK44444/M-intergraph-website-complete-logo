import React from 'react';
import {
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    WifiIcon,
    PrinterIcon,
    QrCodeIcon,
    TagIcon,
    TicketIcon,
    SignalIcon,
    CpuChipIcon,
    MapPinIcon,
    ClockIcon,
    ServerStackIcon,
    UsersIcon,
    CheckCircleIcon
} from './IconComponents';

interface IotMonitoringPageProps {
    onNavigate: (path: string) => void;
}

const ProductGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b-2 border-blue-200">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {children}
        </div>
    </div>
);

const HardwareItem: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="text-blue-600 w-10 h-10">{icon}</div>
        <p className="text-lg font-semibold text-slate-700">{name}</p>
    </div>
);

const SolutionListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
        <span className="text-slate-700 font-medium">{children}</span>
    </li>
);

export const IotMonitoringPage: React.FC<IotMonitoringPageProps> = ({ onNavigate }) => {

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
                    backgroundImage: "url('https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto-format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-blue-900/80"></div>
                <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
                    <div className="text-white z-10 max-w-4xl animate-on-scroll">
                        <p className="font-semibold text-blue-300 uppercase tracking-wider text-base">Digital Transformation</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-4">
                           IoT & Infrastructure Monitoring
                        </h1>
                        <p className="mt-8 text-xl lg:text-2xl text-blue-100 leading-relaxed">
                          Connecting the physical and digital worlds through reliable hardware, sensors, and intelligent infrastructure solutions.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Intro Section */}
            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
                 <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <CpuChipIcon className="h-16 w-16 mx-auto mb-6 text-blue-500" />
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Enabling the Internet of Things (IoT)</h2>
                         <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                           We deliver future-ready solutions by combining rugged, industrial-grade IoT hardware with real-time monitoring platforms. Our infrastructure empowers businesses and government agencies to gain insights, automate operations, and ensure uninterrupted visibility into mission-critical environments.
                         </p>
                         <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                           From smart cities to logistics, healthcare, retail, and law enforcement, we help organizations embrace data-driven decision-making through connected systems.
                         </p>
                    </div>
                </div>
            </section>

           {/* Two Full Cards Before Main List */}
<section className="py-16 bg-white border-t border-gray-200">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Full Card 1 */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <img 
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"

        alt="IoT Smart City" 
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-800">Smart City IoT Integration</h3>
        <p className="mt-4 text-lg text-gray-600">
          Connecting transportation, utilities, and public safety through unified IoT platforms for real-time urban intelligence.
        </p>
      </div>
    </div>

    {/* Full Card 2 */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <img 
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1920&auto=format&fit=crop" 
        alt="Industrial IoT" 
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-800">Industrial IoT Automation</h3>
        <p className="mt-4 text-lg text-gray-600">
          Enhancing manufacturing efficiency with sensor-driven automation, predictive maintenance, and AI-powered analytics.
        </p>
      </div>
    </div>

    {/* Full Card 3 - Smart School Integration */}
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <img 
        src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1920&auto=format&fit=crop" 
        alt="Smart School Integration" 
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-800">Smart School Integration</h3>
        <p className="mt-4 text-lg text-gray-600">
          IoT-enabled smart classrooms with connected devices for security, attendance tracking, and enhanced learning experiences.
        </p>
      </div>
    </div>
  </div>
</section>


            {/* Main Cards Section */}
            <section className="py-20 sm:py-28 lg:py-32 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Custom IoT Solutions Include
                        </h2>
                    </div>

                    {/* Cards container */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            { title: "Smart Infrastructure Monitoring", desc: "CCTV, power usage, temperature, and environmental conditions — all monitored in real-time." },
                            { title: "Fleet & Asset Tracking", desc: "GPS-enabled tracking for assets and vehicles, improving logistics and reducing losses." },
                            { title: "Remote Equipment Diagnostics", desc: "IoT-powered monitoring to detect issues early and enable predictive maintenance." },
                            { title: "AI-Driven Data Analytics & Alerts", desc: "Turn IoT data into insights with automated alerts for proactive decision-making." },
                            { title: "Secure Edge Computing for Field Operations", desc: "Process data locally for faster responses and enhanced security in remote locations." },
                            { title: "The Hybrid Work Imperative", desc: "Solutions to support flexible work environments with secure, seamless connectivity." },
                            { title: "Agile Space Utilization Strategies", desc: "Optimize workspace layouts and usage with real-time occupancy and usage analytics." },
                            { title: "Prioritizing Air Quality and Wellness", desc: "Monitor air quality, humidity, and temperature to maintain healthy environments." },
                            { title: "Leveraging Data for Decision Intelligence", desc: "Centralized dashboards turn raw data into actionable intelligence for leaders." },
                            { title: "Sustainability as a Core Tenet", desc: "IoT-driven energy optimization for reducing environmental impact and costs." },
                        ].map((card, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow"
                            >
                                <h3 className="text-2xl font-semibold text-slate-800">{card.title}</h3>
                                <p className="mt-4 text-lg text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-700 text-white">
                <div className="container mx-auto px-4 py-20 text-center">
                    <UsersIcon className="h-16 w-16 mx-auto mb-6 opacity-70" />
                    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Transform?</h2>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
                       Whether you're digitizing public infrastructure, securing logistics chains, or automating workflows—our end-to-end IoT ecosystem is designed to scale, adapt, and perform.
                    </p>
                    <a 
                        href="#" 
                        onClick={handleEnquireClick} 
                        className="mt-10 inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transform"
                    >
                        Enquire About IoT Solutions
                    </a>
                </div>
            </section>
        </main>
    );
};
